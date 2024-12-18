/*
 * For information see https://github.com/ypid/opening_hours.js
 * and the doc directory which contains internal documentation and design.
 */
/* jshint laxbreak: true */
/* jshint boss: true */
/* jshint loopfunc: true */

(function (root, factory) {
    /* constants (holidays, error correction) {{{ */
    /* holidays {{{ */
    /*
     * The country code keys and the PH, SH keys are surrounded by '':
     * :%s/^\s\+\zs"\([^"]\+\)"\(: {\)/'\1'\2/
     * Fixed the indention with Vim Marco:
     * /'PH'<cr>f{jVk%k,a:
     * Fixed spacing in parenthesis:
     * :%s/\[\zs\([^ ]\)/ \1/e | %s/\([^ ]\)\]/\1 \]/e | %s/,\([^ ]\)/, \1/e
     */
    var holidays = {
        'gb': {
            'PH': {
                'New Year\'s Day'        : [ 1,  1 ],
                'Good Friday'            : [ 'easter', -2 ],
                'Easter Monday'          : [ 'easter', +1 ],
                'Early May bank holiday' : [ 'firstMayMonday', 0],
                'Spring bank holiday'    : [ 'lastMayMonday', 0],
                'Summer bank holiday'    : [ 'lastAugustMonday', 0],
                'Christmas Day'          : [ 12, 25 ],
                'Boxing Day'             : [ 12, 26 ]
            }
        }
    };
    // }}}

    // error correction {{{
    // Taken form http://www.netzwolf.info/j/osm/time_domain.js
    // Credits go to Netzwolf
    //
    // Key to word_error_correction is the token name except wrong_words
    var word_error_correction = {
        wrong_words: { /* {{{ */
            'Assuming "<ok>" for "<ko>". Please avoid using "workday": http://wiki.openstreetmap.org/wiki/Talk:Key:opening_hours#need_syntax_for_holidays_and_workingdays': {
                // Used around 260 times but the problem is, that work day might be different in other countries.
                'wd':           'Mo-Fr',
                'on work day':  'Mo-Fr',
                'on work days': 'Mo-Fr',
                'weekday':      'Mo-Fr',
                'weekdays':     'Mo-Fr',
                'vardagar':     'Mo-Fr'
            },
            'Please use something like "Mo off" instead "<ko>".': {
                'except': 'off'
            },
            'Please omit "<ko>" or use a colon instead: "12:00-14:00".': {
                'h': ''
            }, 'Please omit "<ko>".': {
                'season': '',
                'hs':     '',
                'hrs':    '',
                'hours':  '',
            }, 'Please omit "<ko>". The key must not be in the value.': {
                'opening_hours=': '',
                'opening_hours =': ''
            }, 'Please omit "<ko>". You might want to express open end which can be specified as "12:00+" for example.': {
                'from': ''
            }, 'You can use notation "<ok>" for "<ko>" in the case that you want to express open end times. Example: "12:00+".': {
                'til late': '+',
                'till late': '+',
                'bis open end': '+',
                '-late': '+',
                '-open end': '+',
                '-openend': '+'
            }, 'Please use notation "<ok>" for "<ko>". If the times are unsure or vary consider a comment e.g. 12:00-14:00 "only on sunshine".': {
                '~':  '-',
            }, 'Please use notation "<ok>" for "<ko>". Fallback rule: 12:00-14:00 || "call us"': {
                'otherwise':  '||'
            }, 'Please use notation "<ok>" for "<ko>".': {
                '=':               '-',
                'to':              '-',
                'a':               '-', // language unknown
                'as':              '-', // language unknown
                'ate':             '-', // language unknown
                'till':            '-',
                'til':             '-',
                'until':           '-',
                'through':         '-',
                'and':             ',',
                '&':               ',',
                'always':          '24/7',
                'nonstop':         '24/7',
                '24x7':            '24/7',
                'anytime':         '24/7',
                'all day':         '24/7',
                'daily':           'Mo-Su',
                'everyday':        'Mo-Su',
                'every day':       'Mo-Su',
                'all days':        'Mo-Su',
                '7j/7':            'Mo-Su', // I guess that it means that
                '7/7':             'Mo-Su', // I guess that it means that
                /* {{{
                 * Fixing this causes to ignore the following warning: "There should be no
                 * reason to differ more than 6 days from a constrained
                 * weekdays. If so tell us …".
                 * The following mistake is expected to occur more often.
                 */
                '7days':           'Mo-Su',
                '7 days':          'Mo-Su',
                // }}}
                '7 days a week':   'Mo-Su',
                '7 days/week':     'Mo-Su',
                '24 hours 7 days a week':   '24/7',
                '24 hours':        '00:00-24:00',
                'midday':          '12:00',
                'midnight':        '00:00',
                'holiday':         'PH',
                'holidays':        'PH',
                'public holidays': 'PH',
                'public holiday':  'PH',
                'day after public holiday':      'PH +1 day',
                'one day after public holiday':  'PH +1 day',
                'day before public holiday':     'PH -1 day',
                'one day before public holiday': 'PH -1 day',
                'school holiday':  'SH',
                'school holidays': 'SH',
                // summerholiday:  'SH',
                // summerholidays: 'SH',
                /* Not implemented {{{ */
                // 'day after school holiday':      'SH +1 day',
                // 'one day after school holiday':  'SH +1 day',
                // 'day before school holiday':     'SH -1 day',
                // 'one day before school holiday': 'SH -1 day',
                /* }}} */
                'weekend':         'Sa,Su',
                'weekends':        'Sa,Su',
                'daylight':        'sunrise-sunset'
            }, 'Please use time format in 24 hours notation ("<ko>"). If PM is used you might have to convert the hours to the 24 hours notation.': {
                'pm': '',
                'am': '',
            }, 'Please use notation "<ok>" for "<ko>". The used quote signs are not defined in the specification. See http://wiki.openstreetmap.org/wiki/Key:opening_hours/specification.': {
                "'": '"'
            }
        }, /* }}} */

        month: { /* {{{ */
            'default': {
                'jan':  0,
                'feb':  1,
                'mar':  2,
                'apr':  3,
                'may':  4,
                'jun':  5,
                'jul':  6,
                'aug':  7,
                'sep':  8,
                'oct':  9,
                'nov': 10,
                'dec': 11
            }
        }, /* }}} */

        calcday: {
            'default': {
                'day': 'day',
                'days': 'days'
            }
        },

        weekday: { // {{{ Good source: http://www.omniglot.com/language/time/days.htm */
            'default': {
                'su': 0,
                'mo': 1,
                'tu': 2,
                'we': 3,
                'th': 4,
                'fr': 5,
                'sa': 6
            }, 'Assuming "<ok>" for "<ko>"': {
                'm':          1,
                'w':          3,
                'f':          5
            }, 'Please use the abbreviation "<ok>" for "<ko>".': {
                'sun':        0,
                'sunday':     0,
                'sundays':    0,
                'mon':        1,
                'monday':     1,
                'mondays':    1,
                'tue':        2,
                'tues':       2, // Used here: http://www.westerhambeauty.co.uk/contact.php
                'tuesday':    2,
                'tuesdays':   2,
                'wed':        3,
                'weds':       3,
                'wednesday':  3,
                'wednesdays': 3,
                'thu':        4,
                'thur':       4,
                'thurs':      4,
                'thursday':   4,
                'thursdays':  4,
                'fri':        5,
                'friday':     5,
                'fridays':    5,
                'sat':        6,
                'saturday':   6,
                'saturdays':  6
            }
        }, /* }}} */

        timevar: { /* {{{ Special time variables which actual value depends on the date and the position of the facility. */
            'default': {
                'sunrise': 'sunrise',
                'sunset':  'sunset',
                'dawn':    'dawn',
                'dusk':    'dusk'
            }, 'Please use notation "<ok>" for "<ko>".': {
                'sundown':  'sunset'
            }
        }, /* }}} */

        'event': { // variable events
            'default': {
                'easter': 'easter'
            }
        }
    };
    // }}}
    // }}}

    // make the library accessible for the outside world {{{
    if (typeof exports === 'object') {
        // For nodejs
        var SunCalc = require('suncalc');
        module.exports = factory(SunCalc, holidays, word_error_correction);
    } else {
        // For browsers
        root.opening_hours = factory(root.SunCalc, holidays, word_error_correction);
    }
    /// }}}
}(this, function (SunCalc, holidays, word_error_correction) {
    return function(value, nominatiomJSON, optional_conf_parm) {
        // short constants {{{
        var word_value_replacement = { // If the correct values can not be calculated.
            dawn    : 60 * 5 + 30,
            sunrise : 60 * 6,
            sunset  : 60 * 18,
            dusk    : 60 * 18 + 30
        };
        var months   = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var weekdays = ['Su','Mo','Tu','We','Th','Fr','Sa'];
        var default_prettify_conf = {
            // Update README.md if changed.
            'zero_pad_hour': true,           // enforce ("%02d", hour)
            'one_zero_if_hour_zero': false,  // only one zero "0" if hour is zero "0"
            'leave_off_closed': true,        // leave keywords "off" and "closed" as is
            'keyword_for_off_closed': 'off', // use given keyword instead of "off" or "closed"
            'rule_sep_string': ' ',          // separate rules by string
            'print_semicolon': true,         // print token which separates normal rules
            'leave_weekday_sep_one_day_betw': true, // use the separator (either "," or "-" which is used to separate days which follow to each other like Sa,Su or Su-Mo
            'sep_one_day_between': ',',      // separator which should be used
            'zero_pad_month_and_week_numbers': false // Format week (e.g. `week 01`) and month day numbers (e.g. `Jan 01`) with "%02d".
        };

        var osm_tag_defaults = {
            'opening_hours'       :  { 'mode' :  0, 'warn_for_PH_missing' :  true },
            'collection_times'    :  { 'mode' :  2 },
            'opening_hours:.+'    :  { 'mode' :  0 },
            '.+:opening_hours'    :  { 'mode' :  0 },
            '.+:opening_hours:.+' :  { 'mode' :  0 },
            'smoking_hours'       :  { 'mode' :  0 },
            'service_times'       :  { 'mode' :  2 },
            'happy_hours'         :  { 'mode' :  0 },
            'lit'                 :  { 'mode' :  0,
                map: {
                    'yes'      : 'sunset-sunrise open "specified as yes: At night (unknown time schedule or daylight detection)"',
                    'automatic': 'unknown "specified as automatic: When someone enters the way the lights are turned on."',
                    'no'       : 'off "specified as no: There are no lights installed."',
                    'interval' : 'unknown "specified as interval"',
                    'limited'  : 'unknown "specified as limited"'
                }
            }
        };

        var minutes_in_day = 60 * 24;
        var msec_in_day    = 1000 * 60 * minutes_in_day;
        var msec_in_week   = msec_in_day * 7;

        var library_name   = 'opening_hours.js';
        var repository_url = 'https://github.com/ypid/' + library_name;
        var issues_url     = repository_url + '/issues?state=open';
        // }}}

        /* Optional constructor parameters {{{ */

        /* nominatiomJSON {{{
         *
         * required to reasonably calculate 'sunrise' and holidays.
         */
        var location_cc, location_state, lat, lon;
        if (typeof nominatiomJSON === 'object') {
            if (typeof nominatiomJSON.address !== 'undefined') {
                if (typeof nominatiomJSON.address.country_code !== 'undefined') {
                    location_cc    = nominatiomJSON.address.country_code;
                }
                if (typeof nominatiomJSON.address.state !== 'undefined') {
                    location_state = nominatiomJSON.address.state;
                } else if (typeof nominatiomJSON.address.county !== 'undefined') {
                    location_state = nominatiomJSON.address.county;
                }
            }

            if (typeof nominatiomJSON.lon !== 'undefined') { // lat will be tested later …
                lat = nominatiomJSON.lat;
                lon = nominatiomJSON.lon;
            }
        } else if (typeof nominatiomJSON !== 'undefined') {
            throw 'The nominatiomJSON parameter is of unknown type.'
                + ' Given ' + typeof(nominatiomJSON)
                + ', expected object.';
        }
        /* }}} */

        /* mode (and other things … ) {{{
         *
         * 0: time ranges (default), tags: opening_hours, lit, …
         * 1: points in time
         * 2: both (time ranges and points in time), tags: collection_times, service_times
         */

        var warnings_severity = 4;
        /* Default, currently the highest severity supported.
         * This number is expected to be >= 4. This is not explicitly checked.
         */

        var oh_mode;
        var oh_map_value = false;
        var oh_key, oh_regex_key;

        if (typeof optional_conf_parm === 'number') {
            oh_mode = optional_conf_parm;
        } else if (typeof optional_conf_parm === 'object') {
            if (checkOptionalConfParm('mode', 'number')) {
                oh_mode = optional_conf_parm['mode'];
            }
            if (checkOptionalConfParm('warnings_severity', 'number')) {
                warnings_severity = optional_conf_parm['warnings_severity'];
                if ([ 0, 1, 2, 3, 4, 5, 6, 7 ].indexOf(warnings_severity) === -1) {
                    throw 'The parameter optional_conf_parm["warnings_severity"] must be an integer number between 0 and 7 (inclusive).'
                        + ' Given ' + warnings_severity
                        + ', expected one of the following numbers: [ 0, 1, 2, 3, 4, 5, 6, 7 ].';
                }
            }
            if (checkOptionalConfParm('tag_key', 'string')) {
                oh_key = optional_conf_parm['tag_key'];
            }
            if (checkOptionalConfParm('map_value', 'boolean')) {
                oh_map_value = true;
            }
        } else if (typeof optional_conf_parm !== 'undefined') {
            throw 'The optional_conf_parm parameter is of unknown type.'
                + ' Given ' + typeof(optional_conf_parm);
        }

        if (typeof oh_key === 'string') {
            oh_regex_key = getRegexKeyForKeyFromOsmDefaults(oh_key)

            if (oh_map_value
                && typeof osm_tag_defaults[oh_regex_key]['map'] === 'object'
                && typeof osm_tag_defaults[oh_regex_key]['map'][value] === 'string'
                ) {

                value = osm_tag_defaults[oh_regex_key]['map'][value];
            }
        } else if (oh_map_value) {
            throw 'The optional_conf_parm["tag_key"] is missing, required by optional_conf_parm["map_value"].';
        }

        if (typeof oh_mode === 'undefined') {
            if (typeof oh_key === 'string') {
                if (typeof osm_tag_defaults[oh_regex_key]['mode'] === 'number') {
                    oh_mode = osm_tag_defaults[oh_regex_key]['mode'];
                } else {
                    oh_mode = 0;
                }
            } else {
                oh_mode = 0;
            }
        } else if (oh_mode !== 0 && oh_mode !== 1 && oh_mode !== 2) {
            throw 'The optional_conf_parm["mode"] parameter is a invalid number.'
                + ' Gave ' + oh_mode
                + ', expected one of the following numbers: [ 0, 1, 2 ].';
        }

        /* }}} */
        /* }}} */

        // Tokenize value and generate selector functions. {{{
        if (typeof value !== 'string') {
            throw 'The value (first parameter) is not a string.';
        }
        if (value.match(/^(?:\s*;?\s*)+$/)) {
            throw 'The value contains nothing meaningful which can be parsed.';
        }

        var parsing_warnings = []; // Elements are fed into function formatWarnErrorMessage(nrule, at, message)
        var done_with_warnings = false; // The functions which throw warnings can be called multiple times.
        var done_with_selector_reordering = false;
        var done_with_selector_reordering_warnings = false;
        var tokens = tokenize(value);
        // console.log(JSON.stringify(tokens, null, '    '));
        var prettified_value = '';
        var week_stable = true;

        var rules = [];
        var new_tokens = [];

        for (var nrule = 0; nrule < tokens.length; nrule++) {
            if (tokens[nrule][0].length === 0) {
                // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.
                parsing_warnings.push([nrule, -1,
                    'This rule does not contain anything useful. Please remove this empty rule.'
                    + (nrule === tokens.length - 1 && nrule > 0 && !tokens[nrule][1] ?
                        ' Might it be possible that you are a programmer and adding a semicolon after each statement is hardwired in your muscle memory ;) ?'
                        + ' The thing is that the semicolon in the opening_hours syntax is defined as rule separator.'
                        + ' So for compatibility reasons you should omit this last semicolon.': '')
                    ]);
                continue;
            }

            var continue_at = 0;
            var next_rule_is_additional = false;
            do {
                if (continue_at === tokens[nrule][0].length) break;
                // Additional rule does contain nothing useful e.g. second rule of '10:00-12:00,' (empty) which needs to be handled.

                var selectors = {
                    // Time selectors
                    time: [],

                    // Temporary array of selectors from time wrapped to the next day
                    wraptime: [],

                    // Date selectors
                    weekday: [],
                    holiday: [],
                    week: [],
                    month: [],
                    monthday: [],
                    year: [],

                    // Array with non-empty date selector types, with most optimal ordering
                    date: [],

                    fallback: tokens[nrule][1],
                    additional: continue_at ? true : false,
                    meaning: true,
                    unknown: false,
                    comment: undefined,
                    build_from_token_rule: undefined
                };

                selectors.build_from_token_rule = [ nrule, continue_at, new_tokens.length ];
                continue_at = parseGroup(tokens[nrule][0], continue_at, selectors, nrule);
                if (typeof continue_at === 'object') {
                    continue_at = continue_at[0];
                } else {
                    continue_at = 0;
                }

                // console.log('Current tokens: ' + JSON.stringify(tokens[nrule], null, '    '));

                new_tokens.push(
                    [
                        tokens[nrule][0].slice(
                            selectors.build_from_token_rule[1],
                            continue_at === 0
                                ? tokens[nrule][0].length
                                : continue_at
                        ),
                        tokens[nrule][1],
                        tokens[nrule][2],
                    ]
                );

                if (next_rule_is_additional && new_tokens.length > 1) {
                    // Move 'rule separator' from last token of last rule to first token of this rule.
                    new_tokens[new_tokens.length - 1][0].unshift(new_tokens[new_tokens.length - 2][0].pop());
                }

                next_rule_is_additional = continue_at === 0 ? false : true;

                if (selectors.year.length > 0)
                    selectors.date.push(selectors.year);
                if (selectors.holiday.length > 0)
                    selectors.date.push(selectors.holiday);
                if (selectors.month.length > 0)
                    selectors.date.push(selectors.month);
                if (selectors.monthday.length > 0)
                    selectors.date.push(selectors.monthday);
                if (selectors.week.length > 0)
                    selectors.date.push(selectors.week);
                if (selectors.weekday.length > 0)
                    selectors.date.push(selectors.weekday);

                // console.log('weekday: ' + JSON.stringify(selectors.weekday, null, '\t'));
                rules.push(selectors);

                // This handles selectors with time ranges wrapping over midnight (e.g. 10:00-02:00)
                // it generates wrappers for all selectors and creates a new rule.
                if (selectors.wraptime.length > 0) {
                    var wrapselectors = {
                        time: selectors.wraptime,
                        date: [],

                        meaning: selectors.meaning,
                        unknown: selectors.unknown,
                        comment: selectors.comment,

                        wrapped: true,
                        build_from_token_rule: selectors.build_from_token_rule
                    };

                    for (var dselg = 0; dselg < selectors.date.length; dselg++) {
                        wrapselectors.date.push([]);
                        for (var dsel = 0; dsel < selectors.date[dselg].length; dsel++) {
                            wrapselectors.date[wrapselectors.date.length-1].push(
                                    generateDateShifter(selectors.date[dselg][dsel], -msec_in_day)
                                );
                        }
                    }

                    rules.push(wrapselectors);
                }
            } while (continue_at);
        }
        // console.log(JSON.stringify(tokens, null, '    '));
        // console.log(JSON.stringify(new_tokens, null, '    '));
        /* }}} */

        /* Helper functions {{{ */
        /* Get regex string key from key osm_tag_defaults. {{{
         *
         * :param key: Tag key e.g. opening_hours:kitchen.
         * :returns: Regex key from osm_tag_defaults e.g. opening_hours:.*
         */
        function getRegexKeyForKeyFromOsmDefaults(key) {
            var regex_key;

            for (var osm_key in osm_tag_defaults) {
                if (key === osm_key) { // Exact match.
                    regex_key = osm_key;
                    break;
                } else if (key.match(osm_key)) {
                    regex_key = osm_key;
                }
            }
            return regex_key;
        }
        /* }}} */

        /* Check given element in optional_conf_parm. {{{
         *
         * :param key: Key of optional_conf_parm.
         * :param expected_type: Expected `typeof()` the parameter.
         * :returns: True if the expected type matches the given type.
         */
        function checkOptionalConfParm(key, expected_type) {
            if (typeof optional_conf_parm[key] === expected_type) {
                return true;
            } else if (typeof optional_conf_parm[key] !== 'undefined') {
                throw 'The optional_conf_parm["' + key + '"] parameter is of unknown type.'
                    + ' Given ' + typeof(optional_conf_parm[key])
                    + ', expected ' + expected_type + '.';
            }
            return false;
        }
        /* }}} */
        /* }}} */

        /* Format warning or error message for the user. {{{
         *
         * :param nrule: Rule number starting with zero.
         * :param at: Token position at which the issue occurred.
         * :param message: Human readable string with the message.
         * :returns: String with position of the warning or error marked for the user.
         */
        function formatWarnErrorMessage(nrule, at, message) {
            // FIXME: Change to new_tokens.
            if (typeof nrule === 'number') {
                var pos = 0;
                if (nrule === -1) { // Usage of rule index not required because we do have access to value.length.
                    pos = value.length - at;
                } else { // Issue accrued at a later time, position in string needs to be reconstructed.
                    if (typeof tokens[nrule][0][at] === 'undefined') {
                        if (typeof tokens[nrule][0] && at === -1) {
                            pos = value.length;
                            if (typeof tokens[nrule+1] === 'object' && typeof tokens[nrule+1][2] === 'number') {
                                pos -= tokens[nrule+1][2];
                            } else if (typeof tokens[nrule][2] === 'number') {
                                pos -= tokens[nrule][2];
                            }
                        } else {
                            // Given position is invalid.
                            //
                            formatLibraryBugMessage('Bug in warning generation code which could not determine the exact position of the warning or error in value.');
                            pos = value.length;
                            if (typeof tokens[nrule][2] !== 'undefined') {
                                // Fallback: Point to last token in the rule which caused the problem.
                                // Run real_test regularly to fix the problem before a user is confronted with it.
                                pos -= tokens[nrule][2];
                                console.warn('Last token for rule: ' + tokens[nrule]);
                                console.log(value.substring(0, pos) + ' <--- (' + message + ')');
                                console.log('\n');
                            } {
                                console.warn('tokens[nrule][2] is undefined. This is ok if nrule is the last rule.');
                            }
                        }
                    } else {
                        pos = value.length;
                        if (typeof tokens[nrule][0][at+1] !== 'undefined') {
                            pos -= tokens[nrule][0][at+1][2];
                        } else if (typeof tokens[nrule][2] !== 'undefined') {
                            pos -= tokens[nrule][2];
                        }
                    }
                }
                return value.substring(0, pos) + ' <--- (' + message + ')';
            } else if (typeof nrule === 'string') {
                return nrule.substring(0, at) + ' <--- (' + message + ')';
            }
        }
        // }}}

        /* Format internal library error message. {{{
         *
         * :param message: Human readable string with the error message.
         * :returns: Error message for the user.
         */
        function formatLibraryBugMessage(message) {
            if (typeof message === 'undefined')
                message = '';
            else
                message = ' ' + message;

            message = 'An error occurred during evaluation of the value "' + value + '".'
                + ' Please file a bug report here: ' + issues_url + '.'
                + message;
            console.log(message);
            return message;
        }
        // }}}

        /* Tokenize input stream. {{{
         *
         * :param value: Raw opening_hours value.
         * :returns: Tokenized list object. Complex structure. Check the
         *      internal documentation in the doc directory for details.
         */
        function tokenize(value) {
            var all_tokens       = [];
            var curr_rule_tokens = [];

            var last_rule_fallback_terminated = false;

            while (value !== '') {
                // console.log("Parsing value: " + value);
                var tmp;
                if (tmp = value.match(/^week\b/i)) {
                    // Reserved keywords.
                    curr_rule_tokens.push([tmp[0].toLowerCase(), tmp[0].toLowerCase(), value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^(?:off\b|closed\b|open\b|unknown\b)/i)) {
                    // Reserved keywords.
                    curr_rule_tokens.push([tmp[0].toLowerCase(), 'state', value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^24\/7/i)) {
                    // Reserved keyword.
                    curr_rule_tokens.push([tmp[0], tmp[0], value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^(?:PH|SH)/i)) {
                    // special day name (holidays)
                    curr_rule_tokens.push([tmp[0].toUpperCase(), 'holiday', value.length ]);
                    value = value.substr(2);
                } else if (tmp = value.match(/^(&|_|=|opening_hours\s*=|\?|~|24x7|24 hours 7 days a week|24 hours|7 ?days(?:(?: a |\/)week)?|7j?\/7|all days?|every day|(?:|-|till? |bis )?(?:late|open[ ]?end)|(?:(?:one )?day (?:before|after) )?(?:school|public) holidays?|days?\b|on work days?|sonntags?|(?:nur |an )?sonn-?(?:(?: und |\/)feiertag(?:s|en?)?)?|[a-z]+\b|mo|tu|we|th|fr|sa|su|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\.?/i)) {
                    /* Handle all remaining words and specific other characters with error tolerance.
                     *
                     * à|á: Word boundary does not work with unicode chars: 'test à test'.match(/\bà\b/i)
                     * https://stackoverflow.com/questions/10590098/javascript-regexp-word-boundaries-unicode-characters
                     * Order in the regular expression capturing group is important in some cases.
                     *
                     * mo|tu|we|th|fr|sa|su|jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec: Prefer defended keywords
                     * if used in cases like 'mo12:00-14:00' (when keyword is followed by number).
                     */
                    var correct_val = returnCorrectWordOrToken(tmp[1].toLowerCase(), value.length);
                    // console.log('Error tolerance for string "' + tmp[1] + '" returned "' + correct_val + '".');
                    if (typeof correct_val === 'object') {
                        curr_rule_tokens.push([ correct_val[0], correct_val[1], value.length ]);
                        value = value.substr(tmp[0].length);
                    } else if (typeof correct_val === 'string') {
                        if (tmp[1].toLowerCase() === 'pm') {
                            var hours_token_at = curr_rule_tokens.length - 1;
                            var hours_token;
                            if (hours_token_at >= 0) {
                                if (hours_token_at -2 >= 0 &&
                                        matchTokens(
                                            curr_rule_tokens, hours_token_at - 2,
                                            'number', 'timesep', 'number'
                                        )
                                    ) {
                                    hours_token_at -= 2;
                                    hours_token = curr_rule_tokens[hours_token_at];
                                } else if (matchTokens(curr_rule_tokens, hours_token_at, 'number')) {
                                    hours_token = curr_rule_tokens[hours_token_at];
                                }

                                if (typeof hours_token === 'object' && hours_token[0] <= 12) {
                                    hours_token[0] += 12;
                                    curr_rule_tokens[hours_token_at] = hours_token;
                                }
                            }
                        }
                        var correct_tokens = tokenize(correct_val)[0];
                        if (correct_tokens[1] === true) { // last_rule_fallback_terminated
                            throw formatLibraryBugMessage();
                        }
                        for (var i = 0; i < correct_tokens[0].length; i++) {
                            curr_rule_tokens.push([correct_tokens[0][i][0], correct_tokens[0][i][1], value.length]);
                            // value.length - tmp[0].length does not have the desired effect for all test cases.
                        }

                        value = value.substr(tmp[0].length);
                        // value = correct_val + value.substr(tmp[0].length);
                        // Does not work because it would generate the wrong length for formatWarnErrorMessage.
                    } else {
                        // other single-character tokens
                        curr_rule_tokens.push([value[0].toLowerCase(), value[0].toLowerCase(), value.length - 1 ]);
                        value = value.substr(1);
                    }
                } else if (tmp = value.match(/^\d+/)) {
                    // number
                    if (Number(tmp[0]) > 1900) { // Assumed to be a year number.
                        curr_rule_tokens.push([Number(tmp[0]), 'year', value.length ]);
                        if (Number(tmp[0]) >= 2100) // Probably an error
                            parsing_warnings.push([ -1, value.length - 1,
                                'The number ' + Number(tmp[0]) + ' will be interpreted as year.'
                                + ' This is probably not intended. Times can be specified as "12:00".'
                            ]);
                    } else {
                        curr_rule_tokens.push([Number(tmp[0]), 'number', value.length ]);
                    }

                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^"([^"]+)"/)) {
                    // Comment following the specification.
                    // Any character is allowed inside the comment except " itself.
                    curr_rule_tokens.push([tmp[1], 'comment', value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (tmp = value.match(/^(["'„“‚‘’«「『])([^"'“”‘’»」』;|]*)(["'”“‘’»」』])/)) {
                    // Comments with error tolerance.
                    // The comments still have to be somewhat correct meaning
                    // the start and end quote signs used have to be
                    // appropriate. So “testing„ will not match as it is not a
                    // quote but rather something unknown which the user should
                    // fix first.
                    // console.log('Matched: ' + JSON.stringify(tmp));
                    for (var pos = 1; pos <= 3; pos += 2) {
                        // console.log('Pos: ' + pos + ', substring: ' + tmp[pos]);
                        var correct_val = returnCorrectWordOrToken(tmp[pos],
                            value.length - (pos === 3 ? tmp[1].length + tmp[2].length : 0)
                        );
                        if (typeof correct_val !== 'string' && tmp[pos] !== '"') {
                            throw formatLibraryBugMessage(
                                'A character for error tolerance was allowed in the regular expression'
                                + ' but is not covered by word_error_correction'
                                + ' which is needed to format a proper message for the user.'
                            );
                        }
                    }
                    curr_rule_tokens.push([tmp[2], 'comment', value.length ]);
                    value = value.substr(tmp[0].length);
                } else if (value.match(/^;/)) {
                    // semicolon terminates rule
                    // next tokens belong to a new rule
                    all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated, value.length ]);
                    value = value.substr(1);

                    curr_rule_tokens = [];
                    last_rule_fallback_terminated = false;
                } else if (value.match(/^\|\|/)) {
                    // || terminates rule
                    // Next tokens belong to a fallback rule.
                    if (curr_rule_tokens.length === 0)
                        throw formatWarnErrorMessage(-1, value.length - 2, 'Rule before fallback rule does not contain anything useful');

                    all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated, value.length ]);
                    curr_rule_tokens = [];
                    // curr_rule_tokens = [ [ '||', 'rule separator', value.length  ] ];
                    // FIXME: Use this. Unknown bug needs to be solved in the process.
                    value = value.substr(2);

                    last_rule_fallback_terminated = true;
                } else if (tmp = value.match(/^\s+/)) {
                    // whitespace is ignored
                    value = value.substr(tmp[0].length);
                } else if (value.match(/^[:.]/)) {
                    // time separator
                    if (value[0] === '.' && !done_with_warnings)
                        parsing_warnings.push([ -1, value.length - 1, 'Please use ":" as hour/minute-separator' ]);
                    curr_rule_tokens.push([ ':', 'timesep', value.length ]);
                    value = value.substr(1);
                } else {
                    // other single-character tokens
                    curr_rule_tokens.push([value.charAt(0).toLowerCase(), value.charAt(0).toLowerCase(), value.length ]);
                    value = value.substr(1);
                }
            }

            all_tokens.push([ curr_rule_tokens, last_rule_fallback_terminated ]);

            return all_tokens;
        }
        // }}}

        /* error correction/tolerance function {{{
         * Go through word_error_correction hash and get correct value back.
         *
         * :param word: Wrong Word or character.
         * :param value_length: Current value_length (used for warnings).
         * :returns:
         *      * (valid) opening_hours sub string.
         *      * object with [ internal_value, token_name ] if value is correct.
         *      * undefined if word could not be found (and thus is not be corrected).
         */
        function returnCorrectWordOrToken(word, value_length) {
            for (var token_name in word_error_correction) {
                for (var comment in word_error_correction[token_name]) {
                    for (var old_val in word_error_correction[token_name][comment]) {
                        if (old_val === word) {
                            var val = word_error_correction[token_name][comment][old_val];
                            if (comment === 'default') {
                                // Return internal representation of word.
                                return [ val, token_name ];
                            } else if (token_name === 'wrong_words' && !done_with_warnings) {
                                // Replace wrong words or characters with correct ones.
                                // This will return a string which is then being tokenized.
                                parsing_warnings.push([ -1, value_length - old_val.length,
                                    comment.replace(/<ko>/, old_val).replace(/<ok>/, val) ]);
                                return val;
                            } else {
                                // Get correct string value from the 'default' hash and generate warning.
                                var correct_abbr;
                                for (correct_abbr in word_error_correction[token_name]['default']) {
                                    if (word_error_correction[token_name]['default'][correct_abbr] === val)
                                        break;
                                }
                                if (typeof correct_abbr === 'undefined') {
                                    throw formatLibraryBugMessage('Including the stacktrace.');
                                }
                                if (token_name !== 'timevar') {
                                    // Everything else than timevar:
                                    // E.g. 'Mo' start with a upper case letter.
                                    // It just looks better.
                                    correct_abbr = correct_abbr.charAt(0).toUpperCase()
                                        + correct_abbr.slice(1);
                                }
                                if (!done_with_warnings)
                                    parsing_warnings.push([ -1, value_length - old_val.length,
                                        comment.replace(/<ko>/, old_val).replace(/<ok>/, correct_abbr) ]);
                                return [ val, token_name ];
                            }
                        }
                    }
                }
            }
            return undefined;
        }
        // }}}

        /* return warnings as list {{{
         *
         * :param it: Iterator object if available (optional).
         * :returns: Warnings as list with one warning per element.
         */
        function getWarnings(it) {
            if (warnings_severity < 4) {
                return [];
            }

            if (!done_with_warnings && typeof it === 'object') {
                /* getWarnings was called in a state without critical errors.
                 * We can do extended tests.
                 */

                /* Place all tests in this function if an additional (high
                 * level) test is added and this does not require to rewrite
                 * big parts of (sub) selector parsers only to get the
                 * position. If that is the case, then rather place the test
                 * code in the (sub) selector parser function directly.
                 */

                var wide_range_selector_order = [ 'year', 'month', 'week', 'holiday' ];
                var small_range_selector_order = [ 'weekday', 'time', '24/7', 'state', 'comment'];

                // How many times was a selector_type used per rule? {{{
                var used_selectors = [];
                var used_selectors_types_array = [];
                var has_token = {};

                for (var nrule = 0; nrule < new_tokens.length; nrule++) {
                    if (new_tokens[nrule][0].length === 0) continue;
                    // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.

                    var selector_start_end_type = [ 0, 0, undefined ],
                        prettified_group_value  = [];
                    // console.log(new_tokens[nrule][0]);

                    used_selectors[nrule] = {};
                    used_selectors_types_array[nrule] = [];

                    do {
                        selector_start_end_type = getSelectorRange(new_tokens[nrule][0], selector_start_end_type[1]);
                        // console.log(selector_start_end_type, new_tokens[nrule][0].length);

                        for (var token_pos = 0; token_pos < selector_start_end_type[1]; token_pos++) {
                            if (typeof new_tokens[nrule][0][token_pos] === 'object' && new_tokens[nrule][0][token_pos][0] === 'PH') {
                                has_token['PH'] = true;
                            }
                        }

                        if (selector_start_end_type[0] === selector_start_end_type[1] &&
                            new_tokens[nrule][0][selector_start_end_type[0]][0] === '24/7'
                            ) {
                                has_token['24/7'] = true;
                        }

                        if (typeof used_selectors[nrule][selector_start_end_type[2]] !== 'object') {
                            used_selectors[nrule][selector_start_end_type[2]] = [ selector_start_end_type[1] ];
                        } else {
                            used_selectors[nrule][selector_start_end_type[2]].push(selector_start_end_type[1]);
                        }
                        used_selectors_types_array[nrule].push(selector_start_end_type[2]);

                        selector_start_end_type[1]++;
                    } while (selector_start_end_type[1] < new_tokens[nrule][0].length);
                }
                // console.log('used_selectors: ' + JSON.stringify(used_selectors, null, '    '));
                // }}}

                for (var nrule = 0; nrule < used_selectors.length; nrule++) {

                    /* Check if more than one not connected selector of the same type is used in one rule {{{ */
                    for (var selector_type in used_selectors[nrule]) {
                        // console.log(selector_type + ' use at: ' + used_selectors[nrule][selector_type].length);
                        if (used_selectors[nrule][selector_type].length > 1) {
                            parsing_warnings.push([nrule, used_selectors[nrule][selector_type][used_selectors[nrule][selector_type].length - 1],
                                'You have used ' + used_selectors[nrule][selector_type].length
                                + (selector_type.match(/^(?:comment|state)/) ?
                                    ' ' + selector_type
                                    + (selector_type === 'state' ? ' keywords' : 's')
                                    + ' in one rule.'
                                    + ' You may only use one in one rule.'
                                    :
                                    ' not connected ' + selector_type
                                    + (selector_type.match(/^(?:month|weekday)$/) ? 's' : ' ranges')
                                    + ' in one rule.'
                                    + ' This is probably an error.'
                                    + ' Equal selector types can (and should) always be written in conjunction separated by comma.'
                                    + ' Example for time ranges "12:00-13:00,15:00-18:00".'
                                    + ' Example for weekdays "Mo-We,Fr".'
                                  )
                                + ' Rules can be separated by ";".' ]
                            );
                            done_with_selector_reordering = true; // Correcting the selector order makes no sense if this kind of issue exists.
                        }
                    }
                    /* }}} */
                    /* Check if change default state rule is not the first rule {{{ */
                    if (   typeof used_selectors[nrule].state === 'object'
                        && Object.keys(used_selectors[nrule]).length === 1
                    ) {

                        if (nrule !== 0) {
                            parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                                "This rule which changes the default state (which is closed) for all following rules is not the first rule."
                                + " The rule will overwrite all previous rules."
                                + " It can be legitimate to change the default state to open for example"
                                + " and then only specify for which times the facility is closed."
                            ]);
                        }
                    /* }}} */
                    /* Check if a rule (with state open) has no time selector {{{ */
                    } else if (typeof used_selectors[nrule].time === 'undefined') {
                        if (    (      typeof used_selectors[nrule].state === 'object'
                                    && new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'open'
                                    && typeof used_selectors[nrule].comment === 'undefined'
                                ) || ( typeof used_selectors[nrule].comment === 'undefined'
                                    && typeof used_selectors[nrule].state === 'undefined'
                                ) &&
                                typeof used_selectors[nrule]['24/7'] === 'undefined'
                        ) {

                            parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                                "This rule is not very explicit because there is no time selector being used."
                                + " Please add a time selector to this rule or use a comment to make it more explicit."
                            ]);
                        }
                    }
                    /* }}} */
                    /* Check if empty comment was given {{{ */
                    if (typeof used_selectors[nrule].comment === 'object'
                        && new_tokens[nrule][0][used_selectors[nrule].comment[0]][0].length === 0
                    ) {

                        parsing_warnings.push([nrule, used_selectors[nrule].comment[0],
                            "You have used an empty comment."
                            + " Please either write something in the comment or use the keyword unknown instead."
                        ]);
                    }
                    /* }}} */
                    /* Check for valid use of <separator_for_readability> {{{ */
                    for (var i = 0; i < used_selectors_types_array[nrule].length - 1; i++) {
                        var selector_type = used_selectors_types_array[nrule][i];
                        var next_selector_type = used_selectors_types_array[nrule][i+1];
                        if (   (   wide_range_selector_order.indexOf(selector_type)       !== -1
                                && wide_range_selector_order.indexOf(next_selector_type)  !== -1
                            ) || ( small_range_selector_order.indexOf(selector_type)      !== -1
                                && small_range_selector_order.indexOf(next_selector_type) !== -1)
                            ) {

                            if (new_tokens[nrule][0][used_selectors[nrule][selector_type][0]][0] === ':') {
                                parsing_warnings.push([nrule, used_selectors[nrule][selector_type][0],
                                    "You have used the optional symbol <separator_for_readability> in the wrong place."
                                    + " Please check the syntax specification to see where it could be used or remove it."
                                ]);
                            }
                        }
                    }
                    /* }}} */

                    /* FIXME: Enable (currently disabled): Check if rule with closed|off modifier is additional {{{ */
                    if (typeof new_tokens[nrule][0][0] === 'object'
                            && new_tokens[nrule][0][0][0] === ','
                            && new_tokens[nrule][0][0][1] === 'rule separator'
                            && typeof used_selectors[nrule].state === 'object'
                            && (
                                   new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'closed'
                                || new_tokens[nrule][0][used_selectors[nrule].state[0]][0] === 'off'
                               )
                    ) {

                        // parsing_warnings.push([nrule, new_tokens[nrule][0].length - 1,
                            // "This rule will be evaluated as closed but it was specified as additional rule."
                            // + " It is enough to specify this rule as normal rule using the \";\" character."
                            // + " See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:rule_modifier:closed."
                        // ]);
                    }
                    /* }}} */

                }

                /* Check if 24/7 is used and it does not mean 24/7 because there are other rules {{{ */
                var has_advanced = it.advance();

                if (has_advanced === true && has_token['24/7'] && !done_with_warnings) {
                    parsing_warnings.push([ -1, 0,
                        'You used 24/7 in a way that is probably not interpreted as "24 hours 7 days a week".'
                        // Probably because of: "24/7; 12:00-14:00 open", ". Needs extra testing.
                        + ' For correctness you might want to use "open" or "closed"'
                        + ' for this rule and then write your exceptions which should achieve the same goal and is more clear'
                        + ' e.g. "open; Mo 12:00-14:00 off".'
                    ]);
                }
                /* }}} */

                /* Check for missing PH. {{{ */
                if (    warnings_severity >= 5
                    && !has_token['PH']
                    && !done_with_warnings
                    && (
                            (
                                typeof oh_key === 'string'
                                && osm_tag_defaults[oh_regex_key]['warn_for_PH_missing']
                            )
                            || (typeof oh_key !== 'string')
                       )
                    ) {

                    var keys_with_warn_for_PH_missing = [];
                    for (var key in osm_tag_defaults) {
                        if (osm_tag_defaults[key]['warn_for_PH_missing']) {
                            keys_with_warn_for_PH_missing.push(key);
                        }
                    }
                    parsing_warnings.push([ -1, 0,
                        'There was no PH (public holiday) specified. This is not very explicit.'
                        + (typeof oh_key !== 'string'
                            ? ' Unfortunately the tag key (e.g. "opening_hours", or "lit") is unknown to opening_hours.js'
                                // + '(see README how to provide it)' // UI of the evaluation tool does not allow to provide it (currently).
                                + '. This warning only applies to the key'
                                + (keys_with_warn_for_PH_missing.length === 1 ? ' ' : 's: ')
                                + keys_with_warn_for_PH_missing.join(', ') + '.'
                                + ' If your value is for that key than read on. If not you can ignore the following.'
                            : ''
                        )
                        + ' Please either append a "PH off" rule if the amenity is closed on all public holidays'
                        + ' or use something like "Sa,Su,PH 12:00-16:00" to say that on Saturdays, Sundays and on public holidays the amenity is open 12:00-16:00.'
                        + ' If you are not certain try to find it out. If you can’t then do not add PH to the value and ignore this warning.'
                    ]);
                }
                /* }}} */

                prettifyValue();
            }
            done_with_warnings = true;

            var warnings = [];
            // FIXME: Sort based on parsing_warnings[1], tricky …
            for (var i = 0; i < parsing_warnings.length; i++) {
                warnings.push( formatWarnErrorMessage(parsing_warnings[i][0], parsing_warnings[i][1], parsing_warnings[i][2]) );
            }
            return warnings;
        }

        /* Helpers for getWarnings {{{ */

        /* Check if token is the begin of a selector and why. {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns:
         *      * false the current token is not the begin of a selector.
         *      * Position in token array from where the decision was made that
         *        the token is the start of a selector.
         */
        function tokenIsTheBeginOfSelector(tokens, at) {
            if (typeof tokens[at][3] === 'string') {
                return 3;
            } else if (tokens[at][1] === 'comment'
                    || tokens[at][1] === 'state'
                    || tokens[at][1] === '24/7'
                    || tokens[at][1] === 'rule separator'
                ){

                return 1;
            } else {
                return false;
            }
        }
        /* }}} */

        /* Get start and end position of a selector. {{{
         * For example this value 'Mo-We,Fr' will return the position of the
         * token lexeme 'Mo' and 'Fr' e.g. there indexes [ 0, 4 ] in the
         * selector array of tokens.
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Array:
         *          0. Index of first token in selector array of tokens.
         *          1. Index of last token in selector array of tokens.
         *          2. Selector type.
         */
        function getSelectorRange(tokens, at) {
            var selector_start = at,
                selector_end,
                pos_in_token_array;

            for (; selector_start >= 0; selector_start--) {
                pos_in_token_array = tokenIsTheBeginOfSelector(tokens, selector_start);
                if (pos_in_token_array)
                    break;
            }
            selector_end = selector_start;

            if (pos_in_token_array === 1) {
                // Selector consists of a single token.

                // Include tailing colon.
                if (selector_end + 1 < tokens.length && tokens[selector_end + 1][0] === ':')
                    selector_end++;

                return [ selector_start, selector_end, tokens[selector_start][pos_in_token_array] ];
            }

            for (selector_end++; selector_end < tokens.length ; selector_end++) {
                if (tokenIsTheBeginOfSelector(tokens, selector_end))
                    return [ selector_start, selector_end - 1, tokens[selector_start][pos_in_token_array] ];
            }

            return [ selector_start, selector_end - 1, tokens[selector_start][pos_in_token_array] ];
        }
        /* }}} */
        /* }}} */
        /* }}} */

        /* Prettify raw value from user. {{{
         * The value is generated by putting the tokens back together to a string.
         *
         * :param argument_hash: Hash which can contain:
         *      'conf': Configuration hash.
         *      'get_internals: If true export internal data structures.
         *      'rule_index: Only prettify the rule with this index.
         * :returns: Prettified value string or object if get_internals is true.
         */
        function prettifyValue(argument_hash) {
            var user_conf = {};
            var get_internals = false;
            var rule_index;

            prettified_value = '';
            var prettified_value_array = [];

            if (typeof argument_hash !== 'undefined') {
                if (typeof argument_hash.conf === 'object') {
                    user_conf = argument_hash.conf;
                }

                if (typeof argument_hash.rule_index === 'number') {
                    rule_index = argument_hash.rule_index;
                }

                if (argument_hash.get_internals === true) {
                    get_internals = true;
                }
            }

            for (var key in default_prettify_conf) {
                if (typeof user_conf[key] === 'undefined')
                    user_conf[key] = default_prettify_conf[key];
            }

            for (var nrule = 0; nrule < new_tokens.length; nrule++) {
                if (new_tokens[nrule][0].length === 0) continue;
                // Rule does contain nothing useful e.g. second rule of '10:00-12:00;' (empty) which needs to be handled.

                if (typeof rule_index === 'number') {
                    if (rule_index !== nrule) continue;
                } else {
                    if (nrule !== 0)
                        prettified_value += (
                            new_tokens[nrule][1]
                                ? user_conf.rule_sep_string + '|| '
                                : (
                                    new_tokens[nrule][0][0][1] === 'rule separator'
                                    ? ','
                                    : (
                                        user_conf.print_semicolon
                                        ? ';'
                                        : ''
                                    )
                                ) +
                            user_conf.rule_sep_string);
                }

                var selector_start_end_type = [ 0, 0, undefined ];
                var prettified_group_value = [];
                var count = 0;
                // console.log(new_tokens[nrule][0]);

                do {
                    selector_start_end_type = getSelectorRange(new_tokens[nrule][0], selector_start_end_type[1]);
                    // console.log(selector_start_end_type, new_tokens[nrule][0].length, count);

                    if (count > 50) {
                        throw formatLibraryBugMessage('infinite loop');
                    }

                    if (selector_start_end_type[2] !== 'rule separator') {
                        prettified_group_value.push(
                            [
                                selector_start_end_type,
                                prettifySelector(
                                    new_tokens[nrule][0],
                                    selector_start_end_type[0],
                                    selector_start_end_type[1],
                                    selector_start_end_type[2],
                                    user_conf
                                ),
                            ]
                        );
                    }

                    selector_start_end_type[1]++;
                    count++;
                    // console.log(selector_start_end_type, new_tokens[nrule][0].length, count);
                } while (selector_start_end_type[1] < new_tokens[nrule][0].length);
                // console.log('Prettified value: ' + JSON.stringify(prettified_group_value, null, '    '));
                var not_sorted_prettified_group_value = prettified_group_value.slice();

                if (!done_with_selector_reordering) {
                    prettified_group_value.sort(
                        function (a, b) {
                            var selector_order = [ 'year', 'month', 'week', 'holiday', 'weekday', 'time', '24/7', 'state', 'comment'];
                            return selector_order.indexOf(a[0][2]) - selector_order.indexOf(b[0][2]);
                        }
                    );
                }
                var old_prettified_value_length = prettified_value.length;

                prettified_value += prettified_group_value.map(
                    function (array) {
                        return array[1];
                    }
                ).join(' ');

                prettified_value_array.push( prettified_group_value );

                if (!done_with_selector_reordering_warnings) {
                    for (var i = 0, l = not_sorted_prettified_group_value.length; i < l; i++) {
                        if (not_sorted_prettified_group_value[i] !== prettified_group_value[i]) {
                            // console.log(i + ': ' + prettified_group_value[i][0][2]);
                            var length = i + old_prettified_value_length; // i: Number of spaces in string.
                            for (var x = 0; x <= i; x++) {
                                length += prettified_group_value[x][1].length;
                                // console.log('Length: ' + length + ' ' + prettified_group_value[x][1]);
                            }
                            // console.log(length);
                            parsing_warnings.push([ prettified_value, length,
                                'The selector "' + prettified_group_value[i][0][2] + '" was switched with'
                                + ' the selector "' + not_sorted_prettified_group_value[i][0][2] + '"'
                                + ' for readablitity and compatibiltity reasons.'
                            ]);
                        }
                    }
                }
            }

            done_with_selector_reordering_warnings = true;
            // console.log(JSON.stringify(prettified_value_array, null, '    '));

            if (get_internals) {
                return [ prettified_value_array, new_tokens ];
            } else {
                return prettified_value;
            }
        }
        // }}}

        /* Check selector array of tokens for specific token name pattern. {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position at which the matching should begin.
         * :param token_name(s): One or many token_name strings which have to match in that order.
         * :returns: true if token_name(s) match in order false otherwise.
         */
        function matchTokens(tokens, at /*, matches... */) {
            if (at + arguments.length - 2 > tokens.length)
                return false;
            for (var i = 0; i < arguments.length - 2; i++) {
                if (tokens[at + i][1] !== arguments[i + 2])
                    return false;
            }

            return true;
        }
        // }}}

        /* Generate selector wrapper with time offset {{{
         *
         * :param func: Generated selector code function.
         * :param shirt: Time to shift in milliseconds.
         * :param token_name(s): One or many token_name strings which have to match in that order.
         * :returns: See selector code.
         */
        function generateDateShifter(func, shift) {
            return function(date) {
                var res = func(new Date(date.getTime() + shift));

                if (typeof res[1] === 'undefined')
                    return res;
                return [ res[0], new Date(res[1].getTime() - shift) ];
            };
        }
        // }}}

        /* Top-level parser {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param selectors: Reference to selector object.
         * :param nrule: Rule number starting with 0.
         * :returns: See selector code.
         */
        function parseGroup(tokens, at, selectors, nrule) {
            var rule_modifier_specified = false;

            // console.log(tokens); // useful for debugging of tokenize
            while (at < tokens.length) {
                // console.log('Parsing at position', at +':', tokens[at]);
                if (matchTokens(tokens, at, 'weekday')) {
                    at = parseWeekdayRange(tokens, at, selectors);
                } else if (matchTokens(tokens, at, '24/7')) {
                    selectors.time.push(function(date) { return [true]; });
                    // Not needed. If there is no selector it automatically matches everything.
                    // WRONG: This only works if there is no other selector in this selector group ...
                    at++;
                } else if (matchTokens(tokens, at, 'holiday')) {
                    if (matchTokens(tokens, at+1, ','))
                        at = parseHoliday(tokens, at, selectors, true);
                    else
                        at = parseHoliday(tokens, at, selectors, false);
                    week_stable = false;
                } else if (matchTokens(tokens, at, 'month', 'number')
                        || matchTokens(tokens, at, 'month', 'weekday')
                        || matchTokens(tokens, at, 'year', 'month', 'number')
                        || matchTokens(tokens, at, 'year', 'event')
                        || matchTokens(tokens, at, 'event')) {

                    at = parseMonthdayRange(tokens, at, nrule);
                    week_stable = false;
                } else if (matchTokens(tokens, at, 'year')) {
                    at = parseYearRange(tokens, at);
                    week_stable = false;
                } else if (matchTokens(tokens, at, 'month')) {
                    at = parseMonthRange(tokens, at);
                    // week_stable = false; // Decided based on the actual value/tokens.
                } else if (matchTokens(tokens, at, 'week')) {
                    tokens[at][3] = 'week';
                    at = parseWeekRange(tokens, at);

                } else if (at !== 0 && at !== tokens.length - 1 && tokens[at][0] === ':') {
                    /* Ignore colon if they appear somewhere else than as time separator.
                     * Except the start or end of the value.
                     * This provides compatibility with the syntax proposed by Netzwolf:
                     * http://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#separator_for_readability
                     * Check for valid use of <separator_for_readability> is implemented in function getWarnings().
                     */

                    if (!done_with_warnings && matchTokens(tokens, at-1, 'holiday'))
                        parsing_warnings.push([nrule, at, 'Please don’t use ":" after ' + tokens[at-1][1] + '.']);

                    at++;
                } else if (matchTokens(tokens, at, 'number', 'timesep')
                        || matchTokens(tokens, at, 'timevar')
                        || matchTokens(tokens, at, '(', 'timevar')
                        || matchTokens(tokens, at, 'number', '-')) {

                    at = parseTimeRange(tokens, at, selectors, false);

                } else if (matchTokens(tokens, at, 'state')) {

                    if (tokens[at][0] === 'open') {
                        selectors.meaning = true;
                    } else if (tokens[at][0] === 'closed' || tokens[at][0] === 'off') {
                        selectors.meaning = false;
                    } else {
                        selectors.meaning = false;
                        selectors.unknown = true;
                    }

                    rule_modifier_specified = true;
                    at++;
                    if (typeof tokens[at] === 'object' && tokens[at][0] === ',') // additional rule
                        at = [ at + 1 ];

                } else if (matchTokens(tokens, at, 'comment')) {
                    selectors.comment = tokens[at][0];
                    if (!rule_modifier_specified) {
                        // Then it is unknown. Either with unknown explicitly
                        // specified or just a comment.
                        selectors.meaning = false;
                        selectors.unknown = true;
                    }

                    rule_modifier_specified = true;
                    at++;
                    if (typeof tokens[at] === 'object' && tokens[at][0] === ',') // additional rule
                        at = [ at + 1 ];
                } else if ((at === 0 || at === tokens.length - 1) && matchTokens(tokens, at, 'rule separator')) {
                    at++;
                    console.log("value: " + nrule);
                    // throw formatLibraryBugMessage('Not implemented yet.');
                } else {
                    var warnings = getWarnings();
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token: "' + tokens[at][1]
                        + '" This means that the syntax is not valid at that point or it is currently not supported.')
                        + (warnings ? (' ' + warnings.join('; ')) : '');
                }

                if (typeof at === 'object') { // additional rule
                    tokens[at[0] - 1][1] = 'rule separator';
                    break;
                }
            }

            return at;
        }

        function get_last_token_pos_in_token_group(tokens, at, last_at) {
            for (at++; at < last_at; at++) {
                if (typeof tokens[at] !== 'undefined') {
                    if (typeof tokens[at][3] === 'string'
                            || tokens[at][1] === 'comment'
                            || tokens[at][1] === 'state'){

                            return at - 1;
                    }
                }
            }
            return last_at;
        }
        // }}}

        // helper functions for sub parser {{{

        /* For given date, returns date moved to the start of the day with an offset specified in minutes. {{{
         * For example, if date is 2014-05-19_18:17:12, dateAtDayMinutes would
         * return 2014-05-19_02:00:00 for minutes=120.
         *
         * :param date: Date object.
         * :param minutes: Minutes used as offset starting from midnight of current day.
         * :returns: Moved date object.
         */
        function dateAtDayMinutes(date, minutes) {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, minutes);
        }
        // }}}

        /* For given date, returns date moved to the specific day of week {{{
         *
         * :param date: Date object.
         * :param weekday: Integer number for day of week. Starting with zero (Sunday).
         * :returns: Moved date object.
         */
        function dateAtNextWeekday(date, weekday) {
            var delta = weekday - date.getDay();
            return new Date(date.getFullYear(), date.getMonth(), date.getDate() + delta + (delta < 0 ? 7 : 0));
        }
        // }}}

        /* Function to determine whether an array contains a value {{{
         * Source: http://stackoverflow.com/a/1181586
         *
         * :param needle: Element to find.
         * :returns: Index of element if present, if not present returns -1.
         */
        function indexOf(needle) {
            if(typeof Array.prototype.indexOf === 'function') {
                indexOf = Array.prototype.indexOf;
            } else {
                indexOf = function(needle) {
                    var i = -1, index = -1;
                    for(i = 0; i < this.length; i++) {
                        if(this[i] === needle) {
                            index = i;
                            break;
                        }
                    }
                    return index;
                };
            }
            return indexOf.call(this, needle);
        }
        // }}}

        /* Numeric list parser (1,2,3-4,-1) {{{
         * Used in weekday parser above.
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param func: Function func(from, to, at).
         * :returns: Position at which the token does not belong to the list any more.
         */
        function parseNumRange(tokens, at, func) {
            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'number', '-', 'number')) {
                    // Number range
                    func(tokens[at][0], tokens[at+2][0], at);
                    at += 3;
                } else if (matchTokens(tokens, at, '-', 'number')) {
                    // Negative number
                    func(-tokens[at+1][0], -tokens[at+1][0], at);
                    at += 2;
                } else if (matchTokens(tokens, at, 'number')) {
                    // Single number
                    func(tokens[at][0], tokens[at][0], at);
                    at++;
                } else {
                    throw formatWarnErrorMessage(nrule, at + matchTokens(tokens, at, '-'),
                        'Unexpected token in number range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* List parser for constrained weekdays in month range {{{
         * e.g. Su[-1] which selects the last Sunday of the month.
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Array:
         *          0. Constrained weekday number.
         *          1. Position at which the token does not belong to the list any more (after ']' token).
         */
        function getConstrainedWeekday(tokens, at) {
            var number = 0;
            var endat = parseNumRange(tokens, at, function(from, to, at) {

                // bad number
                if (from === 0 || from < -5 || from > 5)
                    throw formatWarnErrorMessage(nrule, at,
                        'Number between -5 and 5 (except 0) expected');

                if (from === to) {
                    if (number !== 0)
                        throw formatWarnErrorMessage(nrule, at,
                            'You can not use more than one constrained weekday in a month range');
                    number = from;
                } else {
                    throw formatWarnErrorMessage(nrule, at+2,
                        'You can not use a range of constrained weekdays in a month range');
                }
            });

            if (!matchTokens(tokens, endat, ']'))
                throw formatWarnErrorMessage(nrule, endat, '"]" expected.');

            return [ number, endat + 1 ];
        }
        // }}}

        // Check if period is ok. Period 0 or 1 don’t make much sense.
        function checkPeriod(at, period, period_type, parm_string) {
            if (done_with_warnings)
                return;

            if (period === 0) {
                throw formatWarnErrorMessage(nrule, at,
                    'You can not use '+ period_type +' ranges with period equals zero.');
            } else if (period === 1) {
                if (typeof parm_string === 'string' && parm_string === 'no_end_year')
                    parsing_warnings.push([nrule, at,
                        'Please don’t use '+ period_type +' ranges with period equals one.'
                        + ' If you want to express that a facility is open starting from a year without limit use "<year>+".']);
                else
                    parsing_warnings.push([nrule, at,
                        'Please don’t use '+ period_type +' ranges with period equals one.']);
            }
        }

        /* Get date moved to constrained weekday (and moved for add_days. {{{
         * E.g. used for 'Aug Su[-1] -1 day'.
         *
         * :param year: Year as integer.
         * :param month: Month as integer starting with zero.
         * :param weekday: Integer number for day of week. Starting with zero (Sunday).
         * :param constrained_weekday: Position where to start.
         * :returns: Date object.
         */
        function getDateForConstrainedWeekday(year, month, weekday, constrained_weekday, add_days) {
            var tmp_date = dateAtNextWeekday(
                new Date(year, month + (constrained_weekday[0] > 0 ? 0 : 1), 1), weekday);

            tmp_date.setDate(tmp_date.getDate() + (constrained_weekday[0] + (constrained_weekday[0] > 0 ? -1 : 0)) * 7);

            if (typeof add_days !== 'undefined' && add_days[1])
                tmp_date.setDate(tmp_date.getDate() + add_days[0]);

            return tmp_date;
        }
        // }}}

        /* Check if date is valid. {{{
         *
         * :param month: Month as integer starting with zero.
         * :param date: Day of month as integer.
         * :returns: undefined. There is no real return value. This function just throws an exception if something is wrong.
         */
        function checkIfDateIsValid(month, day, nrule, at) {
            // May use this instead. The problem is that this does not give feedback as precise as the code which is used in this function.
            // var testDate = new Date(year, month, day);
            // if (testDate.getDate() !== day || testDate.getMonth() !== month || testDate.getFullYear() !== year) {
            //  console.error('date not valid');
            // }

            // https://en.wikipedia.org/wiki/Month#Julian_and_Gregorian_calendars
            if (day < 1 || day > 31) {
                throw formatWarnErrorMessage(nrule, at, "The day for " + months[month] + " must be between 1 and 31.");
            } else if ((month === 3 || month === 5 || month === 8 || month === 10) && day === 31) {
                throw formatWarnErrorMessage(nrule, at, "Month " + months[month] + " doesn't have 31 days. The last day of " + months[month] + " is day 30.");
            } else if (month === 1 && day === 30) {
                throw formatWarnErrorMessage(nrule, at, "Month " + months[1]+ " either has 28 or 29 days (leap years).");
            }
        }
        // }}}
        // }}}

        /* Time range parser (10:00-12:00,14:00-16:00) {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param selectors: Reference to selector object.
         * :param extended_open_end: Used for combined time range with open end.
         * extended_open_end: <time> - <time> +
         *            param at is here A (if extended_open_end is true)
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseTimeRange(tokens, at, selectors, extended_open_end) {
            if (!extended_open_end)
                tokens[at][3] = 'time';

            for (; at < tokens.length; at++) {
                var has_time_var_calc = [], has_normal_time = []; // element 0: start time, 1: end time
                    has_normal_time[0]   = matchTokens(tokens, at, 'number', 'timesep', 'number');
                    has_time_var_calc[0] = matchTokens(tokens, at, '(', 'timevar');
                var minutes_from,
                    minutes_to;
                if (has_normal_time[0] || matchTokens(tokens, at, 'timevar') || has_time_var_calc[0]) {
                    // relying on the fact that always *one* of them is true

                    var is_point_in_time = false; // default no time range
                    var has_open_end     = false; // default no open end
                    var timevar_add      = [ 0, 0 ];
                    var timevar_string   = [];    // capture timevar string like 'sunrise' to calculate it for the current date.
                    var point_in_time_period;

                    // minutes_from
                    if (has_normal_time[0]) {
                        minutes_from = getMinutesByHoursMinutes(tokens, nrule, at+has_time_var_calc[0]);
                    } else {
                        timevar_string[0] = tokens[at+has_time_var_calc[0]][0];
                        minutes_from = word_value_replacement[timevar_string[0]];

                        if (has_time_var_calc[0]) {
                            timevar_add[0] = parseTimevarCalc(tokens, at);
                            minutes_from += timevar_add[0];
                        }
                    }

                    var at_end_time = at+(has_normal_time[0] ? 3 : (has_time_var_calc[0] ? 7 : 1))+1; // after '-'
                    if (!matchTokens(tokens, at_end_time - 1, '-')) { // not time range
                        if (matchTokens(tokens, at_end_time - 1, '+')) {
                            has_open_end = true;
                        } else {
                            if (oh_mode === 0) {
                                throw formatWarnErrorMessage(nrule,
                                    at+(
                                        has_normal_time[0] ? (
                                            typeof tokens[at+3] === 'object' ? 3 : 2
                                        ) : (
                                            has_time_var_calc[0] ? 2 : (
                                                    typeof tokens[at+1] !== 'undefined' ? 1 : 0
                                                )
                                        )
                                    ),
                                    'hyphen (-) or open end (+) in time range '
                                    + (has_time_var_calc[0] ? 'calculation ' : '') + 'expected.'
                                    + ' For working with points in time, the mode for ' + library_name + ' has to be altered.'
                                    + ' Maybe wrong tag?');
                            } else {
                                minutes_to = minutes_from + 1;
                                is_point_in_time = true;
                            }
                        }
                    }

                    // minutes_to
                    if (has_open_end) {
                        if (extended_open_end === 1)
                            minutes_from += minutes_in_day;
                        if (minutes_from >= 22 * 60)
                            minutes_to = minutes_from +  8 * 60;
                        else if (minutes_from >= 17 * 60)
                            minutes_to = minutes_from + 10 * 60;
                        else
                            minutes_to = minutes_in_day;
                    } else if (!is_point_in_time) {
                        has_normal_time[1] = matchTokens(tokens, at_end_time, 'number', 'timesep', 'number');
                        has_time_var_calc[1]      = matchTokens(tokens, at_end_time, '(', 'timevar');
                        if (!has_normal_time[1] && !matchTokens(tokens, at_end_time, 'timevar') && !has_time_var_calc[1]) {
                            throw formatWarnErrorMessage(nrule, at_end_time - (typeof tokens[at_end_time] !== 'undefined' ? 0 : 1),
                                    'Time range does not continue as expected');
                        } else {
                            if (has_normal_time[1]) {
                                minutes_to = getMinutesByHoursMinutes(tokens, nrule, at_end_time);
                            } else {
                                timevar_string[1] = tokens[at_end_time+has_time_var_calc[1]][0];
                                minutes_to = word_value_replacement[timevar_string[1]];
                            }

                            if (has_time_var_calc[1]) {
                                timevar_add[1] = parseTimevarCalc(tokens, at_end_time);
                                minutes_to += timevar_add[1];
                            }
                        }
                    }

                    at = at_end_time + (is_point_in_time ? -1 :
                            (has_normal_time[1] ? 3 : (has_time_var_calc[1] ? 7 : !has_open_end))
                        );

                    if (matchTokens(tokens, at, '/', 'number')) {
                        if (matchTokens(tokens, at + 2, 'timesep', 'number')) { // /hours:minutes
                            point_in_time_period = getMinutesByHoursMinutes(tokens, nrule, at + 1);
                            at += 4;
                        } else { // /minutes
                            point_in_time_period = tokens[at + 1][0];
                            at += 2;
                            if (matchTokens(tokens, at, 'timesep'))
                                throw formatWarnErrorMessage(nrule, at,
                                    'Time period does not continue as expected. Exampe "/01:30".');
                        }

                        // Check at this later state in the if condition to get the correct position.
                        if (oh_mode === 0)
                            throw formatWarnErrorMessage(nrule, at - 1,
                                'opening_hours is running in "time range mode". Found point in time.');

                        is_point_in_time = true;
                    } else if (matchTokens(tokens, at, '+')) {
                        parseTimeRange(tokens, at_end_time, selectors, minutes_to < minutes_from ? 1 : true);
                        at++;
                    } else if (oh_mode === 1 && !is_point_in_time) {
                        throw formatWarnErrorMessage(nrule, at_end_time,
                            'opening_hours is running in "points in time mode". Found time range.');
                    }

                    if (typeof lat !== 'undefined') { // lon will also be defined (see above)
                        if (!has_normal_time[0] || !(has_normal_time[1] || has_open_end || is_point_in_time) )
                            week_stable = false;
                    } else { // we can not calculate exact times so we use the already applied constants (word_value_replacement).
                        timevar_string = [];
                    }

                    // Normalize minutes into range.
                    if (!extended_open_end && minutes_from >= minutes_in_day)
                        throw formatWarnErrorMessage(nrule, at_end_time - 2,
                            'Time range starts outside of the current day');
                    if (minutes_to < minutes_from || ((has_normal_time[0] && has_normal_time[1]) && minutes_from === minutes_to))
                        minutes_to += minutes_in_day;
                    if (minutes_to > minutes_in_day * 2)
                        throw formatWarnErrorMessage(nrule, at_end_time + (has_normal_time[1] ? 4 : (has_time_var_calc[1] ? 7 : 1)) - 2,
                            'Time spanning more than two midnights not supported');

                    // This shortcut makes always-open range check faster.
                    if (minutes_from === 0 && minutes_to === minutes_in_day) {
                        selectors.time.push(function(date) { return [true]; });
                    } else {
                        if (minutes_to > minutes_in_day) { // has_normal_time[1] must be true
                            selectors.time.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                                var ourminutes = date.getHours() * 60 + date.getMinutes();

                                if (timevar_string[0]) {
                                    var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                    minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                                }
                                if (timevar_string[1]) {
                                    var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                    minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                    minutes_to += minutes_in_day;
                                    // Needs to be added because it was added by
                                    // normal times: if (minutes_to < minutes_from)
                                    // above the selector construction.
                                } else if (is_point_in_time && typeof point_in_time_period !== 'number') {
                                    minutes_to = minutes_from + 1;
                                }

                                if (typeof point_in_time_period === 'number') {
                                    if (ourminutes < minutes_from) {
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    } else if (ourminutes <= minutes_to) {
                                        for (var cur_min = minutes_from; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                            if (cur_min === ourminutes) {
                                                return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                            } else if (ourminutes < cur_min) {
                                                return [false, dateAtDayMinutes(date, cur_min)];
                                            }
                                        }
                                    }
                                    return [false, dateAtDayMinutes(date, minutes_in_day)];
                                } else {
                                    if (ourminutes < minutes_from)
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    else
                                        return [true, dateAtDayMinutes(date, minutes_to), has_open_end, extended_open_end];
                                }
                            }}(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));

                            selectors.wraptime.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                                var ourminutes = date.getHours() * 60 + date.getMinutes();

                                if (timevar_string[0]) {
                                    var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                    minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                                }
                                if (timevar_string[1]) {
                                    var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                    minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                    // minutes_in_day does not need to be added.
                                    // For normal times in it was added in: if (minutes_to < // minutes_from)
                                    // above the selector construction and
                                    // subtracted in the selector construction call
                                    // which returns the selector function.
                                }

                                if (typeof point_in_time_period === 'number') {
                                    if (ourminutes <= minutes_to) {
                                        for (var cur_min = 0; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                            if (cur_min === ourminutes) {
                                                return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                            } else if (ourminutes < cur_min) {
                                                return [false, dateAtDayMinutes(date, cur_min)];
                                            }
                                        }
                                    }
                                } else {
                                    if (ourminutes < minutes_to)
                                        return [true, dateAtDayMinutes(date, minutes_to), has_open_end, extended_open_end];
                                }
                                return [false, undefined];
                            }}(minutes_from, minutes_to - minutes_in_day, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));
                        } else {
                            selectors.time.push(function(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end) { return function(date) {
                                var ourminutes = date.getHours() * 60 + date.getMinutes();

                                if (timevar_string[0]) {
                                    var date_from = SunCalc.getTimes(date, lat, lon)[timevar_string[0]];
                                    minutes_from  = date_from.getHours() * 60 + date_from.getMinutes() + timevar_add[0];
                                }
                                if (timevar_string[1]) {
                                    var date_to = SunCalc.getTimes(date, lat, lon)[timevar_string[1]];
                                    minutes_to  = date_to.getHours() * 60 + date_to.getMinutes() + timevar_add[1];
                                } else if (is_point_in_time && typeof point_in_time_period !== 'number') {
                                    minutes_to = minutes_from + 1;
                                }

                                if (typeof point_in_time_period === 'number') {
                                    if (ourminutes < minutes_from) {
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    } else if (ourminutes <= minutes_to) {
                                        for (var cur_min = minutes_from; ourminutes + point_in_time_period >= cur_min; cur_min += point_in_time_period) {
                                            if (cur_min === ourminutes) {
                                                return [true, dateAtDayMinutes(date, ourminutes + 1)];
                                            } else if (ourminutes < cur_min) {
                                                return [false, dateAtDayMinutes(date, cur_min)];
                                            }
                                        }
                                    }
                                    return [false, dateAtDayMinutes(date, minutes_in_day)];
                                } else {
                                    if (ourminutes < minutes_from)
                                        return [false, dateAtDayMinutes(date, minutes_from)];
                                    else if (ourminutes < minutes_to)
                                        return [true, dateAtDayMinutes(date, minutes_to), has_open_end];
                                    else
                                        return [false, dateAtDayMinutes(date, minutes_from + minutes_in_day)];
                                }
                            }}(minutes_from, minutes_to, timevar_string, timevar_add, has_open_end, is_point_in_time, point_in_time_period, extended_open_end));
                        }
                    }

                } else if (matchTokens(tokens, at, 'number', '-', 'number')) { // "Mo 09-18" (Please don’t use this) -> "Mo 09:00-18:00".
                    minutes_from = tokens[at][0]   * 60;
                    minutes_to   = tokens[at+2][0] * 60;
                    if (!done_with_warnings)
                        parsing_warnings.push([nrule, at + 2,
                            'Time range without minutes specified. Not very explicit!'
                            + ' Please use this syntax instead "'
                            + (tokens[at][0]   < 10 ? '0' : '') + tokens[at][0]   + ':00-'
                            + (tokens[at+2][0] < 10 ? '0' : '') + tokens[at+2][0] + ':00".']);

                    if (minutes_from >= minutes_in_day)
                        throw formatWarnErrorMessage(nrule, at,
                            'Time range starts outside of the current day');
                    if (minutes_to < minutes_from)
                        minutes_to += minutes_in_day;
                    if (minutes_to > minutes_in_day * 2)
                        throw formatWarnErrorMessage(nrule, at + 2,
                            'Time spanning more than two midnights not supported');

                    if (minutes_to > minutes_in_day) {
                        selectors.time.push(function(minutes_from, minutes_to) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (ourminutes < minutes_from)
                                return [false, dateAtDayMinutes(date, minutes_from)];
                            else
                                return [true, dateAtDayMinutes(date, minutes_to)];
                        }}(minutes_from, minutes_to));

                        selectors.wraptime.push(function(minutes_from, minutes_to) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (ourminutes < minutes_to)
                                return [true, dateAtDayMinutes(date, minutes_to)];
                            else
                                return [false, undefined];
                        }}(minutes_from, minutes_to - minutes_in_day));
                    } else {
                        selectors.time.push(function(minutes_from, minutes_to) { return function(date) {
                            var ourminutes = date.getHours() * 60 + date.getMinutes();

                            if (ourminutes < minutes_from)
                                return [false, dateAtDayMinutes(date, minutes_from)];
                            else if (ourminutes < minutes_to)
                                return [true, dateAtDayMinutes(date, minutes_to), has_open_end];
                            else
                                return [false, dateAtDayMinutes(date, minutes_from + minutes_in_day)];
                        }}(minutes_from, minutes_to));
                    }

                    at += 3;
                } else { // additional rule
                    if (matchTokens(tokens, at, '('))
                        throw formatWarnErrorMessage(nrule, at, 'Missing variable time (e.g. sunrise) after: "' + tokens[at][1] + '"');
                    if (matchTokens(tokens, at, 'number', 'timesep'))
                        throw formatWarnErrorMessage(nrule, at+1, 'Missing minutes in time range after: "' + tokens[at+1][1] + '"');
                    if (matchTokens(tokens, at, 'number'))
                        throw formatWarnErrorMessage(nrule, at + (typeof tokens[at+1] !== 'undefined' ? 1 : 0),
                                'Missing time separator in time range after: "' + tokens[at][1] + '"');
                    return [ at ];
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Helpers for time range parser {{{ */

        /* Get time in minutes from <hour>:<minute> (tokens). {{{
         * Only used if throwing an error is wanted.
         *
         * :param tokens: List of token objects.
         * :param nrule: Rule number starting with 0.
         * :param at: Position at which the time begins.
         * :returns: Time in minutes.
         */
        function getMinutesByHoursMinutes(tokens, nrule, at) {
            if (tokens[at+2][0] > 59)
                throw formatWarnErrorMessage(nrule, at+2,
                        'Minutes are greater than 59.');
            return tokens[at][0] * 60 + tokens[at+2][0];
        }
        // }}}

        /* Get time in minutes from "(sunrise-01:30)" {{{
         * Extract the added or subtracted time from "(sunrise-01:30)"
         * returns time in minutes e.g. -90.
         *
         * :param tokens: List of token objects.
         * :param at: Position where the specification for the point in time could be.
         * :returns: Time in minutes on suggest, throws an exception otherwise.
        */
        function parseTimevarCalc(tokens, at) {
            var error;
            if (matchTokens(tokens, at+2, '+') || matchTokens(tokens, at+2, '-')) {
                if (matchTokens(tokens, at+3, 'number', 'timesep', 'number')) {
                    if (matchTokens(tokens, at+6, ')')) {
                        var add_or_subtract = tokens[at+2][0] === '+' ? '1' : '-1';
                        var minutes = getMinutesByHoursMinutes(tokens, nrule, at+3) * add_or_subtract;
                        if (minutes === 0)
                            parsing_warnings.push([ nrule, at+5, 'Adding zero in a variable time calculation does not change the variable time.'
                                    + ' Please omit the calculation (example: "sunrise-(sunset-00:00)").' ]
                                );
                        return minutes;
                    } else {
                        error = [ at+6, '. Missing ")".'];
                    }
                } else {
                    error = [ at+5, ' (time).'];
                }
            } else {
                error = [ at+2, '. "+" or "-" expected.'];
            }

            if (error)
                throw formatWarnErrorMessage(nrule, error[0],
                    'Calculcation with variable time is not in the right syntax' + error[1]);
        }
        /* }}} */
        /* }}} */

        /* Weekday range parser (Mo,We-Fr,Sa[1-2,-1],PH). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where the weekday tokens could be.
         * :param selectors: Reference to selector object.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseWeekdayRange(tokens, at, selectors, in_holiday_selector) {
            if (!in_holiday_selector) {
                in_holiday_selector = true;
                tokens[at][3] = 'weekday';
            }

            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'weekday', '[')) {
                    // Conditional weekday (Mo[3])
                    var numbers = [];

                    // Get list of constraints
                    var endat = parseNumRange(tokens, at+2, function(from, to, at) {

                        // bad number
                        if (from === 0 || from < -5 || from > 5)
                            throw formatWarnErrorMessage(nrule, at,
                                'Number between -5 and 5 (except 0) expected');

                        if (from === to) {
                            numbers.push(from);
                        } else if (from < to) {
                            for (var i = from; i <= to; i++) {
                                // bad number
                                if (i === 0 || i < -5 || i > 5)
                                    throw formatWarnErrorMessage(nrule, at+2,
                                        'Number between -5 and 5 (except 0) expected.');

                                numbers.push(i);
                            }
                        } else {
                            throw formatWarnErrorMessage(nrule, at+2,
                                'Bad range: ' + from + '-' + to);
                        }
                    });

                    if (!matchTokens(tokens, endat, ']'))
                        throw formatWarnErrorMessage(nrule, endat, '"]" or more numbers expected.');

                    var add_days = getMoveDays(tokens, endat+1, 6, 'constrained weekdays');
                    week_stable = false;

                    // Create selector for each list element.
                    for (var nnumber = 0; nnumber < numbers.length; nnumber++) {

                        selectors.weekday.push(function(weekday, number, add_days) { return function(date) {
                            var date_num = getValueForDate(date, false); // Year not needed to distinguish.
                            var start_of_this_month = new Date(date.getFullYear(), date.getMonth(), 1);
                            var start_of_next_month = new Date(date.getFullYear(), date.getMonth() + 1, 1);

                            var target_day_this_month;

                            target_day_this_month = getDateForConstrainedWeekday(date.getFullYear(), date.getMonth(), weekday, [ number ]);

                            var target_day_with_added_days_this_month = new Date(target_day_this_month.getFullYear(),
                                target_day_this_month.getMonth(), target_day_this_month.getDate() + add_days);

                            // The target day with added days can be before this month
                            if (target_day_with_added_days_this_month.getTime() < start_of_this_month.getTime()) {
                                // but in this case, the target day without the days added needs to be in this month
                                if (target_day_this_month.getTime() >= start_of_this_month.getTime()) {
                                    // so we calculate it for the month
                                    // following this month and hope that the
                                    // target day will actually be this month.

                                    target_day_with_added_days_this_month = dateAtNextWeekday(
                                        new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) + 1, 1), weekday);
                                    target_day_this_month.setDate(target_day_with_added_days_this_month.getDate()
                                        + (number + (number > 0 ? -1 : 0)) * 7 + add_days);
                                } else {
                                    // Calculated target day is not inside this month
                                    // therefore the specified weekday (e.g. fifth Sunday)
                                    // does not exist this month. Try it next month.
                                    return [false, start_of_next_month];
                                }
                            } else if (target_day_with_added_days_this_month.getTime() >= start_of_next_month.getTime()) {
                                // The target day is in the next month. If the target day without the added days is not in this month
                                if (target_day_this_month.getTime() >= start_of_next_month.getTime())
                                    return [false, start_of_next_month];
                            }

                            var target_day_with_added_moved_days_this_month;
                            if (add_days > 0) {
                                target_day_with_added_moved_days_this_month = dateAtNextWeekday(
                                    new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) -1, 1), weekday);
                                target_day_with_added_moved_days_this_month.setDate(target_day_with_added_moved_days_this_month.getDate()
                                    + (number + (number > 0 ? -1 : 0)) * 7 + add_days);

                                if (date_num === getValueForDate(target_day_with_added_moved_days_this_month, false))
                                    return [true, dateAtDayMinutes(date, minutes_in_day)];
                            } else if (add_days < 0) {
                                target_day_with_added_moved_days_this_month = dateAtNextWeekday(
                                    new Date(date.getFullYear(), date.getMonth() + (number > 0 ? 0 : 1) + 1, 1), weekday);
                                target_day_with_added_moved_days_this_month.setDate(target_day_with_added_moved_days_this_month.getDate()
                                    + (number + (number > 0 ? -1 : 0)) * 7 + add_days);

                                if (target_day_with_added_moved_days_this_month.getTime() >= start_of_next_month.getTime()) {
                                    if (target_day_with_added_days_this_month.getTime() >= start_of_next_month.getTime())
                                        return [false, target_day_with_added_moved_days_this_month];
                                } else {
                                    if (target_day_with_added_days_this_month.getTime() < start_of_next_month.getTime()
                                        && getValueForDate(target_day_with_added_days_this_month, false) === date_num)
                                        return [true, dateAtDayMinutes(date, minutes_in_day)];

                                    target_day_with_added_days_this_month = target_day_with_added_moved_days_this_month;
                                }
                            }

                            // we hit the target day
                            if (date.getDate() === target_day_with_added_days_this_month.getDate()) {
                                return [true, dateAtDayMinutes(date, minutes_in_day)];
                            }

                            // we're before target day
                            if (date.getDate() < target_day_with_added_days_this_month.getDate()) {
                                return [false, target_day_with_added_days_this_month];
                            }

                            // we're after target day, set check date to next month
                            return [false, start_of_next_month];
                        }}(tokens[at][0], numbers[nnumber], add_days[0]));
                    }

                    at = endat + 1 + add_days[1];
                } else if (matchTokens(tokens, at, 'weekday')) {
                    // Single weekday (Mo) or weekday range (Mo-Fr)
                    var is_range = matchTokens(tokens, at+1, '-', 'weekday');

                    var weekday_from = tokens[at][0];
                    var weekday_to = is_range ? tokens[at+2][0] : weekday_from;

                    var inside = true;

                    // handle reversed range
                    if (weekday_to < weekday_from) {
                        var tmp = weekday_to;
                        weekday_to = weekday_from - 1;
                        weekday_from = tmp + 1;
                        inside = false;
                    }

                    if (weekday_to < weekday_from) { // handle full range
                        selectors.weekday.push(function(date) { return [true]; });
                        // Not needed. If there is no selector it automatically matches everything.
                        // WRONG: This only works if there is no other selector in this selector group ...
                    } else {
                        selectors.weekday.push(function(weekday_from, weekday_to, inside) { return function(date) {
                            var ourweekday = date.getDay();

                            if (ourweekday < weekday_from || ourweekday > weekday_to) {
                                return [!inside, dateAtNextWeekday(date, weekday_from)];
                            } else {
                                return [inside, dateAtNextWeekday(date, weekday_to + 1)];
                            }
                        }}(weekday_from, weekday_to, inside));
                    }

                    at += is_range ? 3 : 1;
                } else if (matchTokens(tokens, at, 'holiday')) {
                    week_stable = false;
                    return parseHoliday(tokens, at, selectors, true, in_holiday_selector);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in weekday range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Get the number of days a date should be moved (if any). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where the date moving tokens could be.
         * :param max_differ: Maximal number of days to move (could also be zero if there are no day move tokens).
         * :returns: Array:
         *          0. Days to add.
         *          1. How many tokens.
         */
        function getMoveDays(tokens, at, max_differ, name) {
            var add_days = [ 0, 0 ]; // [ 'days to add', 'how many tokens' ]
            add_days[0] = matchTokens(tokens, at, '+') || (matchTokens(tokens, at, '-') ? -1 : 0);
            if (add_days[0] !== 0 && matchTokens(tokens, at+1, 'number', 'calcday')) {
                // continues with '+ 5 days' or something like that
                if (tokens[at+1][0] > max_differ)
                    throw formatWarnErrorMessage(nrule, at+2,
                        'There should be no reason to differ more than ' + max_differ + ' days from a ' + name + '. If so tell us …');
                add_days[0] *= tokens[at+1][0];
                if (add_days[0] === 0 && !done_with_warnings)
                    parsing_warnings.push([ nrule, at+2, 'Adding 0 does not change the date. Please omit this.' ]);
                add_days[1] = 3;
            } else {
                add_days[0] = 0;
            }
            return add_days;
        }
        // }}}

        /* Holiday parser for public and school holidays (PH,SH) {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param selectors: Reference to selector object.
         * :param push_to_weekday: Will push the selector into the weekday selector array which has the desired side effect of working in conjunction with the weekday selectors (either the holiday match or the weekday), which is the normal and expected behavior.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseHoliday(tokens, at, selectors, push_to_weekday, in_holiday_selector) {
            if (!in_holiday_selector) {

                if (push_to_weekday)
                    tokens[at][3] = 'weekday';
                else
                    tokens[at][3] = 'holiday'; // Could also be holiday but this is not important here.
            }

            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'holiday')) {
                    if (tokens[at][0] === 'PH') {
                        var applying_holidays = getMatchingHoliday(tokens[at][0]);

                        // Only allow moving one day in the past or in the future.
                        // This makes implementation easier because only one holiday is assumed to be moved to the next year.
                        var add_days = getMoveDays(tokens, at+1, 1, 'public holiday');

                        var selector = function(applying_holidays, add_days) { return function(date) {

                            var holidays = getApplyingHolidaysForYear(applying_holidays, date.getFullYear(), add_days);
                            // Needs to be calculated each time because of movable days.

                            var date_num = getValueForDate(date, true);

                            for (var i = 0; i < holidays.length; i++) {
                                var next_holiday_date_num = getValueForDate(holidays[i][0], true);

                                if (date_num < next_holiday_date_num) {

                                    if (add_days[0] > 0) {
                                        // Calculate the last holiday from previous year to tested against it.
                                        var holidays_last_year = getApplyingHolidaysForYear(applying_holidays, date.getFullYear() - 1, add_days);
                                        var last_holiday_last_year = holidays_last_year[holidays_last_year.length - 1];
                                        var last_holiday_last_year_num = getValueForDate(last_holiday_last_year[0], true);

                                        if (date_num < last_holiday_last_year_num ) {
                                            return [ false, last_holiday_last_year[0] ];
                                        } else if (date_num === last_holiday_last_year_num) {
                                            return [true, dateAtDayMinutes(last_holiday_last_year[0], minutes_in_day),
                                                'Day after ' +last_holiday_last_year[1] ];
                                        }
                                    }

                                    return [ false, holidays[i][0] ];
                                } else if (date_num === next_holiday_date_num) {
                                    return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
                                        (add_days[0] > 0 ? 'Day after ' : (add_days[0] < 0 ? 'Day before ' : '')) + holidays[i][1] ];
                                }
                            }

                            if (add_days[0] < 0) {
                                // Calculate the first holiday from next year to tested against it.
                                var holidays_next_year = getApplyingHolidaysForYear(applying_holidays, date.getFullYear() + 1, add_days);
                                var first_holidays_next_year = holidays_next_year[0];
                                var first_holidays_next_year_num = getValueForDate(first_holidays_next_year[0], true);
                                if (date_num === first_holidays_next_year_num) {
                                    return [true, dateAtDayMinutes(first_holidays_next_year[0], minutes_in_day),
                                        'Day before ' + first_holidays_next_year[1] ];
                                }
                            }

                            // continue next year
                            return [ false, new Date(holidays[0][0].getFullYear() + 1,
                                    holidays[0][0].getMonth(),
                                    holidays[0][0].getDate()) ];

                        }}(applying_holidays, add_days);

                        if (push_to_weekday)
                            selectors.weekday.push(selector);
                        else
                            selectors.holiday.push(selector);

                        at += 1 + add_days[1];
                    } else if (tokens[at][0] === 'SH') {
                        var applying_holidays = getMatchingHoliday(tokens[at][0]);

                        var holidays = []; // needs to be sorted each time because of movable days

                        var selector = function(applying_holidays) { return function(date) {
                            var date_num = getValueForDate(date);

                            // Iterate over holiday array containing the different holiday ranges.
                            for (var i = 0; i < applying_holidays.length; i++) {

                                var holiday = getSHForYear(applying_holidays[i], date.getFullYear());

                                for (var h = 0; h < holiday.length; h+=4) {
                                    var holiday_to_plus = new Date(date.getFullYear(), holiday[2+h] - 1, holiday[3+h] + 1);
                                    var holiday_from = (holiday[0+h] - 1) * 100 + holiday[1+h];
                                    var holiday_to   = (holiday[2+h] - 1) * 100 + holiday[3+h];
                                    holiday_to_plus  = getValueForDate(holiday_to_plus);

                                    var holiday_ends_next_year = holiday_to < holiday_from;

                                    if (date_num < holiday_from) { // date is before selected holiday

                                        // check if we are in the holidays from the last year spanning into this year
                                        var last_year_holiday = getSHForYear(applying_holidays[applying_holidays.length - 1], date.getFullYear() - 1, false);
                                        if (typeof last_year_holiday !== 'undefined') {
                                            var last_year_holiday_from = (last_year_holiday[last_year_holiday.length - 4] - 1) * 100
                                                + last_year_holiday[last_year_holiday.length - 3]; // e.g. 1125
                                            var last_year_holiday_to   = (last_year_holiday[last_year_holiday.length - 2] - 1) * 100
                                                + last_year_holiday[last_year_holiday.length - 1]; // e.g. 0005

                                            if (last_year_holiday_to < last_year_holiday_from && date_num < last_year_holiday_to)
                                                return [ true, new Date(date.getFullYear(),
                                                    last_year_holiday[last_year_holiday.length - 2] - 1,
                                                    last_year_holiday[last_year_holiday.length - 1] + 1),
                                                    applying_holidays[applying_holidays.length - 1].name ];
                                            else
                                                return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        } else { // school holidays for last year are not defined.
                                            return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        }
                                    } else if (holiday_from <= date_num && (date_num < holiday_to_plus || holiday_ends_next_year)) {
                                        return [ true, new Date(date.getFullYear() + holiday_ends_next_year, holiday[2+h] - 1, holiday[3+h] + 1),
                                            applying_holidays[i].name ];
                                    } else if (holiday_to_plus === date_num) { // selected holiday end is equal to month and day
                                        if (h + 4 < holiday.length) { // next holiday is next date range of the same holidays
                                            h += 4;
                                            return [ false, new Date(date.getFullYear(), holiday[0+h] - 1, holiday[1+h]) ];
                                        } else {
                                            if (i + 1 === applying_holidays.length) { // last holidays are handled, continue all over again
                                                var holiday = getSHForYear(applying_holidays[0], date.getFullYear() + 1);
                                                return [ false, new Date(date.getFullYear() + !holiday_ends_next_year, holiday[0+h] - 1, holiday[1+h]) ];
                                            } else { // return the start of the next holidays
                                                    var holiday = getSHForYear(applying_holidays[i+1], date.getFullYear());
                                                    return [ false, new Date(date.getFullYear(), holiday[0] - 1, holiday[1]) ];
                                            }
                                        }
                                    }
                                }
                            }
                            return [ false ];
                        }}(applying_holidays);

                        if (push_to_weekday)
                            selectors.weekday.push(selector);
                        else
                            selectors.holiday.push(selector);
                        at += 1; // FIXME: test
                    }
                } else if (matchTokens(tokens, at, 'weekday')) {
                    return parseWeekdayRange(tokens, at, selectors, true);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token (holiday parser): ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }

        // Helpers for holiday parsers {{{

        /* Returns a number for a date which can then be used to compare just the dates (without the time). {{{
         * This is necessary because a selector could be called for the middle of the day and we need to tell if it matches that day.
         * Example: Returns 20150015 for Jan 01 2015
         *
         * :param date: Date object.
         * :param include_year: Boolean. If true include the year.
         * :returns: Number for the date.
         */
        function getValueForDate(date, include_year) {
            // Implicit because undefined evaluates to false.
            // include_year = typeof include_year !== 'undefined' ? include_year : false;

            return (include_year ? date.getFullYear() * 10000 : 0) + date.getMonth() * 100 + date.getDate();
        }
        // }}}

        // return the school holiday definition e.g. [ 5, 25, /* to */ 6, 5 ],
        // for the specified year
        function getSHForYear(SH_hash, year, fatal) {
            if (typeof fatal === 'undefined')
                fatal = true;

            var holiday = SH_hash[year];
            if (typeof holiday === 'undefined') {
                holiday = SH_hash['default']; // applies for any year without explicit definition
                if (typeof holiday === 'undefined') {
                    if (fatal) {
                        throw formatLibraryBugMessage('School holiday ' + SH_hash.name + ' has no definition for the year ' + year + '.'
                                + ' You can also add them: ' + repository_url);
                    } else {
                        return undefined;
                    }
                }
            }
            return holiday;
        }

        // Return closed holiday definition available.
        // First try to get the state, if missing get the country wide holidays
        // (which can be limited to some states).
        function getMatchingHoliday(type_of_holidays) {
            if (typeof location_cc !== 'undefined') {
                if (holidays.hasOwnProperty(location_cc)) {
                    if (typeof location_state !== 'undefined'
                            && holidays[location_cc][location_state]
                            && holidays[location_cc][location_state][type_of_holidays]) {
                        // if holidays for the state are specified use it
                        // and ignore lesser specific ones (for the country)
                        return holidays[location_cc][location_state][type_of_holidays];
                    } else if (holidays[location_cc][type_of_holidays]) {
                        // holidays are only defined country wide
                        var matching_holiday = {}; // holidays in the country wide scope can be limited to certain states
                        for (var holiday_name in holidays[location_cc][type_of_holidays]) {
                            if (typeof holidays[location_cc][type_of_holidays][holiday_name][2] === 'object') {
                                if (-1 !== holidays[location_cc][type_of_holidays][holiday_name][2].indexOf(location_state))
                                    matching_holiday[holiday_name] = holidays[location_cc][type_of_holidays][holiday_name];
                            } else {
                                matching_holiday[holiday_name] = holidays[location_cc][type_of_holidays][holiday_name];
                            }
                        }
                        if (Object.keys(matching_holiday).length === 0)
                        throw formatLibraryBugMessage('There are no holidays ' + type_of_holidays + ' defined for country ' + location_cc + '.'
                                + ' You can also add them: ' + repository_url);
                        return matching_holiday;
                    } else {
                        throw formatLibraryBugMessage('Holidays ' + type_of_holidays + ' are not defined for country ' + location_cc
                                + ' and state ' + location_state + '.'
                                + ' You can also add them: ' + repository_url);
                    }
                } else {
                    throw formatLibraryBugMessage('No holidays are defined for country ' + location_cc + '.'
                            + ' You can also add them: ' + repository_url);
                }
            } else { /* We have no idea which holidays do apply because the country code was not provided. */
                throw 'Country code missing which is needed to select the correct holidays (see README how to provide it)';
            }
        }

        function getMovableEventsForYear(Y) {
            // calculate easter
            var C = Math.floor(Y/100);
            var N = Y - 19*Math.floor(Y/19);
            var K = Math.floor((C - 17)/25);
            var I = C - Math.floor(C/4) - Math.floor((C - K)/3) + 19*N + 15;
            I = I - 30*Math.floor((I/30));
            I = I - Math.floor(I/28)*(1 - Math.floor(I/28)*Math.floor(29/(I + 1))*Math.floor((21 - N)/11));
            var J = Y + Math.floor(Y/4) + I + 2 - C + Math.floor(C/4);
            J = J - 7*Math.floor(J/7);
            var L = I - J;
            var M = 3 + Math.floor((L + 40)/44);
            var D = L + 28 - 31*Math.floor(M/4);

            // calculate orthodox easter
            var oA = Y % 4;
            var oB = Y % 7;
            var oC = Y % 19;
            var oD = (19*oC + 15) % 30;
            var oE = (2*oA+4*oB - oD + 34) % 7;
            var oF = oD+oE;

            var oDate;
            if (oF < 9) {
                oDate = new Date(Y, 4-1, oF+4);
            } else {
                if ((oF+4)<31) {
                    oDate = new Date(Y, 4-1, oF+4);
                } else {
                    oDate = new Date(Y, 5-1, oF-26);
                }
            }

            // calculate last Sunday in February
            var lastFebruaryDay = new Date(Y, 2, 0);
            var lastFebruarySunday = lastFebruaryDay.getDate() - lastFebruaryDay.getDay();

            // calculate Victoria Day. last Monday before or on May 24
            var may_24 = new Date(Y, 4, 24);
            var victoriaDay = 24  - ((6 + may_24.getDay()) % 7);

            // calculate Canada Day. July 1st unless 1st is on Sunday, then July 2.
            var july_1 = new Date(Y, 6, 1);
            var canadaDay = july_1.getDay() === 0 ? 2 : 1;

            function firstWeekdayOfMonth(month, weekday){
                var first = new Date(Y, month, 1);
                return 1 + ((7 + weekday - first.getDay()) % 7);
            }

            function lastWeekdayOfMonth(month, weekday){
                var last = new Date(Y, month+1, 0);
                var offset=((7 + last.getDay() - weekday) % 7);
                return last.getDate() - offset;
            }

            return {
                'easter'                :  new Date(Y, M - 1, D),
                'orthodox easter'       :  oDate,
                'victoriaDay'           :  new Date(Y,  4, victoriaDay),
                'canadaDay'             :  new Date(Y,  6, canadaDay),
                'firstJanuaryMonday'    :  new Date(Y,  0, firstWeekdayOfMonth(0, 1)),
                'firstFebruaryMonday'   :  new Date(Y,  1, firstWeekdayOfMonth(1, 1)),
                'lastFebruarySunday'    :  new Date(Y,  1, lastFebruarySunday),
                'firstMarchMonday'      :  new Date(Y,  2, firstWeekdayOfMonth(2, 1)),
                'firstAprilMonday'      :  new Date(Y,  3, firstWeekdayOfMonth(3, 1)),
                'firstMayMonday'        :  new Date(Y,  4, firstWeekdayOfMonth(4, 1)),
                'firstJuneMonday'       :  new Date(Y,  5, firstWeekdayOfMonth(5, 1)),
                'firstJulyMonday'       :  new Date(Y,  6, firstWeekdayOfMonth(6, 1)),
                'firstAugustMonday'     :  new Date(Y,  7, firstWeekdayOfMonth(7, 1)),
                'firstSeptemberMonday'  :  new Date(Y,  8, firstWeekdayOfMonth(8, 1)),
                'firstSeptemberSunday'  :  new Date(Y,  8, firstWeekdayOfMonth(8, 0)),
                'firstOctoberMonday'    :  new Date(Y,  9, firstWeekdayOfMonth(9, 1)),
                'firstNovemberMonday'   :  new Date(Y, 10, firstWeekdayOfMonth(10, 1)),
                'firstMarchTuesday'     :  new Date(Y,  2, firstWeekdayOfMonth(2, 2)),
                'firstAugustTuesday'    :  new Date(Y,  7, firstWeekdayOfMonth(7, 2)),
                'firstAugustFriday'     :  new Date(Y,  7, firstWeekdayOfMonth(7, 5)),
                'firstNovemberThursday' :  new Date(Y, 10, firstWeekdayOfMonth(10, 4)),
                'lastMayMonday'         :  new Date(Y,  4, lastWeekdayOfMonth(4, 1)),
                'lastMarchMonday'       :  new Date(Y,  2, lastWeekdayOfMonth(2, 1)),
                'lastAprilMonday'       :  new Date(Y,  3, lastWeekdayOfMonth(3, 1)),
                'lastAprilFriday'       :  new Date(Y,  3, lastWeekdayOfMonth(3, 5)),
                'lastAugustMonday'      :  new Date(Y,  7, lastWeekdayOfMonth(7, 1)),
                'lastOctoberFriday'     :  new Date(Y,  9, lastWeekdayOfMonth(9, 5))
            };
        }

        function getApplyingHolidaysForYear(applying_holidays, year, add_days) {
            var movableDays = getMovableEventsForYear(year);

            var sorted_holidays = [];
            var next_holiday;

            for (var holiday_name in applying_holidays) {
                if (typeof applying_holidays[holiday_name][0] === 'string') {
                    var selected_movableDay = movableDays[applying_holidays[holiday_name][0]];
                    if (!selected_movableDay)
                        throw 'Movable day ' + applying_holidays[holiday_name][0] + ' can not not be calculated.'
                            + ' Please add the formula how to calculate it.';
                    next_holiday = new Date(selected_movableDay.getFullYear(),
                            selected_movableDay.getMonth(),
                            selected_movableDay.getDate()
                            + applying_holidays[holiday_name][1]
                        );
                    if (year !== next_holiday.getFullYear())
                        throw 'The movable day ' + applying_holidays[holiday_name][0] + ' plus '
                            + applying_holidays[holiday_name][1]
                            + ' days is not in the year of the movable day anymore. Currently not supported.';
                } else {
                    next_holiday = new Date(year,
                            applying_holidays[holiday_name][0] - 1,
                            applying_holidays[holiday_name][1]
                        );
                }
                if (add_days[0])
                    next_holiday.setDate(next_holiday.getDate() + add_days[0]);

                sorted_holidays.push([ next_holiday, holiday_name ]);
            }

            sorted_holidays = sorted_holidays.sort(function(a,b){
                if (a[0].getTime() < b[0].getTime()) return -1;
                if (a[0].getTime() > b[0].getTime()) return 1;
                return 0;
            });

            return sorted_holidays;
        }
        // }}}
        // }}}

        /* Year range parser (2013,2016-2018,2020/2). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseYearRange(tokens, at) {
            tokens[at][3] = 'year';
            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'year')) {
                    var is_range   = false,
                        has_period,
                        period;
                    if (matchTokens(tokens, at+1, '-', 'year', '/', 'number')) {
                        is_range   = true;
                        has_period = true;
                        period = parseInt(tokens[at+4][0]);
                        checkPeriod(at+4, period, 'year');
                    } else {
                        is_range   = matchTokens(tokens, at+1, '-', 'year');
                        has_period = matchTokens(tokens, at+1, '/', 'number');
                        if (has_period) {
                            period = parseInt(tokens[at+2][0]);
                            checkPeriod(at+2, period, 'year', 'no_end_year');
                        } else if (matchTokens(tokens, at+1, '+')) {
                            period = 1;
                            has_period = 2;
                        }
                    }

                    var year_from = parseInt(tokens[at][0]);
                    // error checking {{{
                        if (is_range && tokens[at+2][0] <= year_from) {
                            // handle reversed range
                            if (tokens[at+2][0] === year_from) {
                                throw formatWarnErrorMessage(nrule, at,
                                        'A year range in which the start year is equal to the end year does not make sense.'
                                        + ' Please remove the end year. E.g. "' + year_from + ' May 23"');
                            } else {
                                throw formatWarnErrorMessage(nrule, at,
                                        'A year range in which the start year is greater than the end year does not make sense.'
                                        + ' Please turn it over.');
                            }
                        }
                        if (!is_range && year_from < new Date().getFullYear()) {
                            parsing_warnings.push([ nrule, at, 'The year is in the past.' ]);
                        }
                        if (is_range && tokens[at+2][0] < new Date().getFullYear()) {
                            parsing_warnings.push([ nrule, at+2, 'The year is in the past.' ]);
                        }
                    // }}}

                    selectors.year.push(function(tokens, at, year_from, is_range, has_period, period) { return function(date) {
                        var ouryear = date.getFullYear();
                        var year_to = is_range ? parseInt(tokens[at+2][0]) : year_from;

                        if (ouryear < year_from ){
                            return [false, new Date(year_from, 0, 1)];
                        } else if (has_period) {
                            if (year_from <= ouryear) {
                                if (is_range && ouryear > year_to)
                                    return [false];
                                if (period > 0) {
                                    if ((ouryear - year_from) % period === 0) {
                                        return [true, new Date(ouryear + 1, 0, 1)];
                                    } else {
                                        return [false, new Date(ouryear + period - 1, 0, 1)];
                                    }
                                }
                            }
                        } else if (is_range) {
                            if (ouryear <= year_to)
                                return [true, new Date(year_to + 1, 0, 1)];
                        } else if (ouryear === year_from) {
                            return [true];
                        }

                        return [false];

                    }}(tokens, at, year_from, is_range, has_period, period));

                    at += 1 + (is_range ? 2 : 0) + (has_period ? (has_period === 2 ? 1 : 2) : 0);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in year range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Week range parser (week 11-20, week 1-53/2). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseWeekRange(tokens, at) {
            for (; at < tokens.length; at++) {
                if (matchTokens(tokens, at, 'week')) {
                    at++;
                }
                if (matchTokens(tokens, at, 'number')) {
                    var is_range = matchTokens(tokens, at+1, '-', 'number'), period = 0;
                    var week_from = tokens[at][0];
                    var week_to   = is_range ? tokens[at+2][0] : week_from;
                    if (week_from > week_to) {
                        throw formatWarnErrorMessage(nrule, at+2,
                            'You have specified a week range in reverse order or leaping over a year. This is (currently) not supported.');
                    }
                    if (week_from < 1) {
                        throw formatWarnErrorMessage(nrule, at,
                            'You have specified a week date less then one. A valid week date range is 1-53.');
                    }
                    if (week_to > 53) {
                        throw formatWarnErrorMessage(nrule, is_range ? at+2 : at,
                            'You have specified a week date greater then 53. A valid week date range is 1-53.');
                    }
                    if (is_range) {
                        period = matchTokens(tokens, at+3, '/', 'number');
                        if (period) {
                            period = tokens[at+4][0];
                            if (period < 2) {
                                throw formatWarnErrorMessage(nrule, at+4,
                                    'You have specified a week period which is less than two.'
                                    + ' If you want to select the whole range from week ' + week_from + ' to week ' + week_to + ' then just omit the "/' + period + '".');
                            } else if (period > 26) {
                                throw formatWarnErrorMessage(nrule, at+4,
                                    'You have specified a week period which is greater than 26.'
                                    + ' 26.5 is the half of the maximum 53 week dates per year so a week date period greater than 26 would only apply once per year.'
                                    + ' Please specify the week selector as "week ' + week_from + '" if that is what you want to express.');
                            }
                        }
                    }

                    if (week_stable && (!(week_from <= 1 && week_to >= 53) || period)) {
                        week_stable = false;
                    }

                    if (!period && week_from === 1 && week_to === 53) {
                        /* Shortcut and work around bug. */
                        selectors.week.push(function(date) { return [true]; });
                    } else {

                        selectors.week.push(function(week_from, week_to, is_range, period) { return function(date) {
                            var ourweek = getWeekNumber(date);

                            // console.log("week_from: %s, week_to: %s", week_from, week_to);
                            // console.log("ourweek: %s, date: %s", ourweek, date);

                            // before range
                            if (ourweek < week_from) {
                                // console.log("Before: " + getNextDateOfISOWeek(week_from, date));
                                return [false, getNextDateOfISOWeek(week_from, date)];
                            }

                            // we're after range, set check date to next year
                            if (ourweek > week_to) {
                                // console.log("After");
                                return [false, getNextDateOfISOWeek(week_from, date)];
                            }

                            // we're in range
                            if (period) {
                                var in_period = (ourweek - week_from) % period === 0;
                                if (in_period) {
                                    return [true, getNextDateOfISOWeek(ourweek + 1, date)];
                                } else {
                                    return [false, getNextDateOfISOWeek(ourweek + period - 1, date)];
                                }
                            }

                            // console.log("Match");
                            return [true, getNextDateOfISOWeek(week_to === 53 ? 1 : week_to + 1, date)];
                        }}(week_from, week_to, is_range, period));
                    }

                    at += 1 + (is_range ? 2 : 0) + (period ? 2 : 0);
                } else if (matchTokens(tokens, at - 1, ',')) { // additional rule
                    throw formatWarnErrorMessage(
                        nrule,
                        at - 1,
                        'An additional rule does not make sense here. Just use a ";" as rule separator.'
                        + ' See https://wiki.openstreetmap.org/wiki/Key:opening_hours/specification#explain:additional_rule_separator');
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in week range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }

        // http://stackoverflow.com/a/6117889
        /* For a given date, get the ISO week number
         *
         * Based on information at:
         *
         *    http://www.merlyn.demon.co.uk/weekcalc.htm#WNR
         *
         * Algorithm is to find nearest thursday, it's year
         * is the year of the week number. Then get weeks
         * between that date and the first day of that year.
         *
         * Note that dates in one year can be weeks of previous
         * or next year, overlap is up to 3 days.
         *
         * e.g. 2014/12/29 is Monday in week  1 of 2015
         *      2012/1/1   is Sunday in week 52 of 2011
         */
        function getWeekNumber(d) {
            // Copy date so don't modify original
            d = new Date(+d);
            d.setHours(0,0,0);
            // Set to nearest Thursday: current date + 4 - current day number
            // Make Sunday's day number 7
            d.setDate(d.getDate() + 4 - (d.getDay()||7));
            // Get first day of year
            var yearStart = new Date(d.getFullYear(),0,1);
            // Calculate full weeks to nearest Thursday
            return Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7)
        }
        // http://stackoverflow.com/a/16591175
        function getDateOfISOWeek(w, y) {
            var simple = new Date(y, 0, 1 + (w - 1) * 7);
            var dow = simple.getDay();
            var ISOweekStart = simple;
            if (dow <= 4)
                ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
            else
                ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
            return ISOweekStart;
        }
        function getNextDateOfISOWeek(week, date) {
            var next_date;
            for (var i = -1; i <= 1; i++) {
                next_date = getDateOfISOWeek(week, date.getFullYear() + i);
                if (next_date.getTime() > date.getTime()) {
                    return next_date;
                }
            }
            throw formatLibraryBugMessage();
        }
        // }}}

        /* Month range parser (Jan,Feb-Mar). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param push_to_monthday: Will push the selector into the monthday selector array which has the desired side effect of working in conjunction with the monthday selectors (either the month match or the monthday).
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseMonthRange(tokens, at, push_to_monthday, in_selector) {
            if (!in_selector)
                tokens[at][3] = 'month';

            for (; at < tokens.length; at++) {
                // Use parseMonthdayRange if '<month> <daynum>' and not '<month> <hour>:<minute>'
                if (matchTokens(tokens, at, 'month', 'number') && !matchTokens(tokens, at+2, 'timesep', 'number')) {
                    return parseMonthdayRange(tokens, at, nrule, true);
                } else if (matchTokens(tokens, at, 'month')) {
                    // Single month (Jan) or month range (Feb-Mar)
                    var is_range = matchTokens(tokens, at+1, '-', 'month');

                    var month_from = tokens[at][0];
                    var month_to = is_range ? tokens[at+2][0] : month_from;

                    if (is_range && week_stable) {
                        if (month_from !== (month_to + 1) % 12)
                            week_stable = false;
                    } else {
                        week_stable = false;
                    }

                    var inside = true;

                    // handle reversed range
                    if (month_to < month_from) {
                        var tmp = month_to;
                        month_to = month_from - 1;
                        month_from = tmp + 1;
                        inside = false;
                    }

                    var selector = function(tokens, at, month_from, month_to, is_range, inside) { return function(date) {
                        var ourmonth = date.getMonth();

                        // handle full range
                        if (month_to < month_from)
                            return [!inside];

                        if (ourmonth < month_from || ourmonth > month_to) {
                            return [!inside, dateAtNextMonth(date, month_from)];
                        } else {
                            return [inside, dateAtNextMonth(date, month_to + 1)];
                        }
                    }}(tokens, at, month_from, month_to, is_range, inside);

                    if (push_to_monthday === true)
                        selectors.monthday.push(selector);
                    else
                        selectors.month.push(selector);

                    at += is_range ? 3 : 1;
                } else {
                    throw formatWarnErrorMessage(nrule, at, 'Unexpected token in month range: ' + tokens[at][1]);
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }

        function dateAtNextMonth(date, month) {
            return new Date(date.getFullYear(), month < date.getMonth() ? month + 12 : month);
        }
        // }}}

        /* Month day range parser (Jan 26-31; Jan 26-Feb 26). {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param nrule: Rule number starting with 0.
         * :param push_to_month: Will push the selector into the month selector array which has the desired side effect of working in conjunction with the month selectors (either the month match or the monthday).
         * :returns: Position at which the token does not belong to the selector anymore.
         */
        function parseMonthdayRange(tokens, at, nrule, push_to_month) {
            if (!push_to_month)
                tokens[at][3] = 'month';

            for (; at < tokens.length; at++) {
                var has_year = [], has_month = [], has_event = [], has_calc = [], has_constrained_weekday = [];
                has_year[0]  = matchTokens(tokens, at, 'year');
                has_month[0] = matchTokens(tokens, at+has_year[0], 'month', 'number');
                has_event[0] = matchTokens(tokens, at+has_year[0], 'event');

                if (has_event[0])
                    has_calc[0] = getMoveDays(tokens, at+has_year[0]+1, 200, 'event like easter');

                var at_range_sep;
                if (matchTokens(tokens, at+has_year[0], 'month', 'weekday', '[')) {
                    has_constrained_weekday[0] = getConstrainedWeekday(tokens, at+has_year[0]+3);
                    has_calc[0] = getMoveDays(tokens, has_constrained_weekday[0][1], 6, 'constrained weekdays');
                    at_range_sep = has_constrained_weekday[0][1] + (typeof has_calc[0] !== 'undefined' && has_calc[0][1] ? 3 : 0);
                } else {
                    at_range_sep = at+has_year[0]
                        + (has_event[0]
                            ? (typeof has_calc[0] !== 'undefined' && has_calc[0][1] ? 4 : 1)
                            : 2);
                }

                var at_sec_event_or_month;
                if ((has_month[0] || has_event[0] || has_constrained_weekday[0]) && matchTokens(tokens, at_range_sep, '-')) {
                    has_year[1] = matchTokens(tokens, at_range_sep+1, 'year');
                    at_sec_event_or_month = at_range_sep+1+has_year[1];
                    has_month[1] = matchTokens(tokens, at_sec_event_or_month, 'month', 'number');
                    if (!has_month[1]) {
                        has_event[1] = matchTokens(tokens, at_sec_event_or_month, 'event');
                        if (has_event[1]) {
                            has_calc[1] = getMoveDays(tokens, at_sec_event_or_month+1, 366, 'event like easter');
                        } else if (matchTokens(tokens, at_sec_event_or_month, 'month', 'weekday', '[')) {
                            has_constrained_weekday[1] = getConstrainedWeekday(tokens, at_sec_event_or_month+3);
                            has_calc[1] = getMoveDays(tokens, has_constrained_weekday[1][1], 6, 'constrained weekdays');
                        }
                    }
                }

                // monthday range like Jan 26-Feb 26 {{{
                if (has_year[0] === has_year[1] && (has_month[1] || has_event[1] || has_constrained_weekday[1])) {

                    if (has_month[0])
                        checkIfDateIsValid(tokens[at+has_year[0]][0], tokens[at+has_year[0]+1][0], nrule, at+has_year[0]+1);
                    if (has_month[1])
                        checkIfDateIsValid(tokens[at_sec_event_or_month][0], tokens[at_sec_event_or_month+1][0], nrule, at_sec_event_or_month+1);

                    var selector = function(tokens, at, nrule, has_year, has_event, has_calc, at_sec_event_or_month, has_constrained_weekday) { return function(date) {
                        var start_of_next_year = new Date(date.getFullYear() + 1, 0, 1);

                        var movableDays,
                            from_date;
                        if (has_event[0]) {
                            movableDays = getMovableEventsForYear(has_year[0] ? parseInt(tokens[at][0]) : date.getFullYear());
                            from_date = movableDays[tokens[at+has_year[0]][0]];

                            if (typeof has_calc[0] !== 'undefined' && has_calc[0][1]) {
                                var from_year_before_calc = from_date.getFullYear();
                                from_date.setDate(from_date.getDate() + has_calc[0][0]);
                                if (from_year_before_calc !== from_date.getFullYear())
                                    throw formatWarnErrorMessage(nrule, at+has_year[0]+has_calc[0][1]*3,
                                        'The movable day ' + tokens[at+has_year[0]][0] + ' plus ' + has_calc[0][0]
                                        + ' days is not in the year of the movable day anymore. Currently not supported.');
                            }
                        } else if (has_constrained_weekday[0]) {
                            from_date = getDateForConstrainedWeekday((has_year[0] ? tokens[at][0] : date.getFullYear()), // year
                                tokens[at+has_year[0]][0], // month
                                tokens[at+has_year[0]+1][0], // weekday
                                has_constrained_weekday[0],
                                has_calc[0]);
                        } else {
                            from_date = new Date((has_year[0] ? tokens[at][0] : date.getFullYear()),
                                tokens[at+has_year[0]][0], tokens[at+has_year[0]+1][0]);
                        }

                        var to_date;
                        if (has_event[1]) {
                            movableDays = getMovableEventsForYear(has_year[1]
                                        ? parseInt(tokens[at_sec_event_or_month-1][0])
                                        : date.getFullYear());
                            to_date = movableDays[tokens[at_sec_event_or_month][0]];

                            if (typeof has_calc[1] !== 'undefined' && has_calc[1][1]) {
                                var to_year_before_calc = to_date.getFullYear();
                                to_date.setDate(to_date.getDate() + has_calc[1][0]);
                                if (to_year_before_calc !== to_date.getFullYear())
                                    throw formatWarnErrorMessage(nrule, at_sec_event_or_month+has_calc[1][1],
                                        'The movable day ' + tokens[at_sec_event_or_month][0] + ' plus ' + has_calc[1][0]
                                        + ' days is not in the year of the movable day anymore. Currently not supported.');
                            }
                        } else if (has_constrained_weekday[1]) {
                            to_date = getDateForConstrainedWeekday((has_year[1] ? tokens[at_sec_event_or_month-1][0] : date.getFullYear()), // year
                                tokens[at_sec_event_or_month][0],   // month
                                tokens[at_sec_event_or_month+1][0], // weekday
                                has_constrained_weekday[1],
                                has_calc[1]);
                        } else {
                            to_date = new Date((has_year[1] ? tokens[at_sec_event_or_month-1][0] : date.getFullYear()),
                                tokens[at_sec_event_or_month][0], tokens[at_sec_event_or_month+1][0] + 1);
                        }

                        var inside = true;

                        if (to_date < from_date) {
                            var tmp = to_date;
                            to_date = from_date;
                            from_date = tmp;
                            inside = false;
                        }

                        if (date.getTime() < from_date.getTime()) {
                            return [!inside, from_date];
                        } else if (date.getTime() < to_date.getTime()) {
                            return [inside, to_date];
                        } else {
                            if (has_year[0]) {
                                return [!inside];
                            } else {
                                return [!inside, start_of_next_year];
                            }
                        }
                    }}(tokens, at, nrule, has_year, has_event, has_calc, at_sec_event_or_month, has_constrained_weekday);

                    if (push_to_month === true)
                        selectors.month.push(selector);
                    else
                        selectors.monthday.push(selector);

                    at = (has_constrained_weekday[1]
                            ? has_constrained_weekday[1][1]
                            : at_sec_event_or_month + (has_event[1] ? 1 : 2))
                        + (typeof has_calc[1] !== 'undefined' ? has_calc[1][1] : 0);

                    // }}}
                    // Monthday range like Jan 26-31 {{{
                } else if (has_month[0]) {

                    has_year = has_year[0];
                    var year = tokens[at][0]; // Could be month if has no year. Tested later.
                    var month = tokens[at+has_year][0];

                    var first_round = true;

                    do {
                        var range_from = tokens[at+1 + has_year][0];
                        var is_range = matchTokens(tokens, at+2+has_year, '-', 'number');
                        var period = undefined;
                        var range_to = tokens[at+has_year+(is_range ? 3 : 1)][0] + 1;
                        if (is_range && matchTokens(tokens, at+has_year+4, '/', 'number')) {
                            period = tokens[at+has_year+5][0];
                            checkPeriod(at+has_year+5, period, 'day');
                        }

                        if (first_round) {
                            var at_timesep_if_monthRange = at + has_year + 1 // at month number
                                + (is_range ? 2 : 0) + (period ? 2 : 0)
                                + !(is_range || period); // if not range nor has period, add one

                            // Check for '<month> <timespan>'
                            if (matchTokens(tokens, at_timesep_if_monthRange, 'timesep', 'number')
                                    && (matchTokens(tokens, at_timesep_if_monthRange+2, '+')
                                        || matchTokens(tokens, at_timesep_if_monthRange+2, '-')
                                        || oh_mode !== 0)) {
                                            return parseMonthRange(tokens, at, true, true);
                            }
                        }

                        // error checking {{{
                        if (range_to < range_from)
                            throw formatWarnErrorMessage(nrule, at+has_year+3,
                                    'Range in wrong order. From day is greater than to day.');

                        checkIfDateIsValid(month, range_from, nrule, at+1 + has_year);
                        checkIfDateIsValid(month, range_to - 1 /* added previously */,
                            nrule, at+has_year+(is_range ? 3 : 1));
                        // }}}

                        var selector = function(year, has_year, month, range_from, range_to, period) { return function(date) {
                            var start_of_next_year = new Date(date.getFullYear() + 1, 0, 1);

                            var from_date = new Date(has_year ? year : date.getFullYear(),
                                month, range_from);
                            if (month === 1 && range_from !== from_date.getDate()) // Only on leap years does this day exist.
                                return [false]; // If day 29 does not exist,
                                                // then the date object adds one day to date
                                                // and this selector should not match.
                            var to_date   = new Date(from_date.getFullYear(),
                                month, range_to);
                            if (month === 1 && is_range && range_to !== to_date.getDate()) // Only on leap years does this day exist.
                                return [false];

                            if (date.getTime() < from_date.getTime())
                                return [false, from_date];
                            else if (date.getTime() >= to_date.getTime())
                                return [false, start_of_next_year];
                            else if (!period)
                                return [true, to_date];

                            var nday = Math.floor((date.getTime() - from_date.getTime()) / msec_in_day);
                            var in_period = nday % period;

                            if (in_period === 0)
                                return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)];
                            else
                                return [false, new Date(date.getFullYear(), date.getMonth(), date.getDate() + period - in_period)];

                        }}(year, has_year, month, range_from, range_to, period);

                        if (push_to_month === true)
                            selectors.month.push(selector);
                        else
                            selectors.monthday.push(selector);

                        at += 2 + has_year + (is_range ? 2 : 0) + (period ? 2 : 0);

                        first_round = false;
                    }
                    while (matchTokens(tokens, at, ',', 'number'))


                    // }}}
                    // Only event like easter {{{
                } else if (has_event[0]) {

                    var selector = function(tokens, at, nrule, has_year, add_days) { return function(date) {

                        // console.log('enter selector with date: ' + date);
                        var movableDays = getMovableEventsForYear((has_year ? tokens[at][0] : date.getFullYear()));
                        var event_date = movableDays[tokens[at+has_year][0]];
                        if (!event_date)
                            throw 'Movable day ' + tokens[at+has_year][0] + ' can not not be calculated.'
                                + ' Please add the formula how to calculate it.';

                        if (add_days[0]) {
                            event_date.setDate(event_date.getDate() + add_days[0]);
                            if (date.getFullYear() !== event_date.getFullYear())
                                throw formatWarnErrorMessage(nrule, at+has_year+add_days[1], 'The movable day ' + tokens[at+has_year][0] + ' plus '
                                    + add_days[0]
                                    + ' days is not in the year of the movable day anymore. Currently not supported.');
                        }

                        if (date.getTime() < event_date.getTime())
                            return [false, event_date];
                        // else if (date.getTime() < event_date.getTime() + msec_in_day) // does not work because of daylight saving times
                        else if (event_date.getMonth() * 100 + event_date.getDate() === date.getMonth() * 100 + date.getDate())
                            return [true, new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)];
                        else
                            return [false, new Date(date.getFullYear() + 1, 0, 1)];

                    }}(tokens, at, nrule, has_year[0], has_calc[0]);

                    if (push_to_month === true)
                        selectors.month.push(selector);
                    else
                        selectors.monthday.push(selector);

                    at += has_year[0] + has_event[0] + (typeof has_calc[0][1] !== 'undefined' && has_calc[0][1] ? 3 : 0);
                    // }}}
                } else if (has_constrained_weekday[0]) {
                    at = parseMonthRange(tokens, at);
                } else if (matchTokens(tokens, at, 'month')) {
                    return parseMonthRange(tokens, at, true, true);
                } else {
                    // throw 'Unexpected token in monthday range: "' + tokens[at] + '"';
                    return at;
                }

                if (!matchTokens(tokens, at, ','))
                    break;
            }

            return at;
        }
        // }}}

        /* Main selector traversal function (return state array for date). {{{
         * Checks for given date which rule and those which state and comment applies.
         *
         * :param date: Date object.
         * :returns: Array:
         *          0. resultstate: State: true for 'open', false for 'closed'.
         *          1. changedate: Next change as date object.
         *          2. unknown: true if state open is not sure.
         *          3. comment: Comment which applies for this time range (from date to changedate).
         *          4. match_rule: Rule number starting with 0 (nrule).
         */
        this.getStatePair = function(date) {
            var resultstate = false;
            var changedate;
            var unknown = false;
            var comment;
            var match_rule;

            var date_matching_rules = [];

            /* Go though all date selectors and check if they return something
             * else than closed for the given date.
             */
            for (var nrule = 0; nrule < rules.length; nrule++) {
                var matching_date_rule = true;
                // console.log(nrule, 'length',  rules[nrule].date.length);

                /* Try each date selector type. */
                for (var ndateselector = 0; ndateselector < rules[nrule].date.length; ndateselector++) {
                    var dateselectors = rules[nrule].date[ndateselector];
                    // console.log(nrule, ndateselector);

                    var has_matching_selector = false;
                    for (var datesel = 0; datesel < dateselectors.length; datesel++) {
                        var res = dateselectors[datesel](date);
                        if (res[0]) {
                            has_matching_selector = true;

                            if (typeof res[2] === 'string') { // holiday name
                                comment = [ res[2], nrule ];
                            }

                        }
                        if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1].getTime() < changedate.getTime()))
                            changedate = res[1];
                    }

                    if (!has_matching_selector) {
                        matching_date_rule = false;
                        // We can ignore other date selectors, as the state won't change
                        // anyway until THIS selector matches (due to conjunction of date
                        // selectors of different types).
                        // This is also an optimization, if widest date selector types
                        // are checked first.
                        break;
                    }
                }

                if (matching_date_rule) {
                    /* The following lines implement date overwriting logic (e.g. for
                     * "Mo-Fr 10:00-20:00; We 10:00-16:00", We rule overrides Mo-Fr rule partly (We).
                     *
                     * This is the only way to be consistent. I thought about ("22:00-02:00; Tu 12:00-14:00") letting Th override 22:00-02:00 partly:
                     * Like: Th 00:00-02:00,12:00-14:00 but this would result in including 22:00-00:00 for Th which is probably not what you want.
                     */
                    if ((rules[nrule].date.length > 0 || nrule > 0 && rules[nrule].meaning && rules[nrule-1].date.length === 0)
                            && (rules[nrule].meaning || rules[nrule].unknown)
                            && !rules[nrule].wrapped && !rules[nrule].additional && !rules[nrule].fallback
                        ) {

                        // var old_date_matching_rules = date_matching_rules;
                        date_matching_rules = [];
                        // for (var nrule = 0; nrule < old_date_matching_rules.length; nrule++) {
                        //  if (!rules[old_date_matching_rules[nrule]].wrapped)
                        //      date_matching_rules.push(nrule);
                        // }
                    }
                    date_matching_rules.push(nrule);
                }
            }

            // console.log(date_matching_rules);
            rule:
            for (var nrule = 0; nrule < date_matching_rules.length; nrule++) {
                var rule = date_matching_rules[nrule];

                // console.log('Processing rule ' + rule + ': with date ' + date
                    // + ' and ' + rules[rule].time.length + ' time selectors (comment: "' + rules[rule].comment + '").');

                /* There is no time specified, state applies to the whole day. */
                if (rules[rule].time.length === 0) {
                    // console.log('there is no time', date);
                    if (!rules[rule].fallback || (rules[rule].fallback && !(resultstate || unknown))) {
                        resultstate = rules[rule].meaning;
                        unknown     = rules[rule].unknown;
                        match_rule  = rule;

                        // if (rules[rule].fallback)
                            // break rule; // fallback rule matched, no need for checking the rest
                        // WRONG: What if closing rules follow?
                    }
                }

                for (var timesel = 0; timesel < rules[rule].time.length; timesel++) {
                    var res = rules[rule].time[timesel](date);

                    // console.log('res:', res);
                    if (res[0]) {
                        if (!rules[rule].fallback || (rules[rule].fallback && !(resultstate || unknown))) {
                            resultstate = rules[rule].meaning;
                            unknown     = rules[rule].unknown;
                            match_rule  = rule;

                            /* Reset open end comment */
                            if (typeof comment === 'object' && comment[0] === 'Specified as open end. Closing time was guessed.')
                                comment = undefined;

                            // open end
                            if (res[2] === true && (resultstate || unknown)) {
                                comment = [ 'Specified as open end. Closing time was guessed.', match_rule ];

                                resultstate = false;
                                unknown     = true;

                                /* Hack to make second rule in '07:00+,12:00-16:00; 16:00-24:00 closed "needed because of open end"' obsolete {{{ */
                                if (typeof rules[rule].time[timesel+1] === 'function') {

                                    var next_res = rules[rule].time[timesel+1](date);
                                    if (  !next_res[0]
                                        // && next_res[2]
                                        && typeof next_res[1] === 'object'
                                        // && getValueForDate(next_res[1], true) !== getValueForDate(date, true) // Just to be sure.
                                        && rules[rule].time[timesel](new Date(date.getTime() - 1))[0]
                                        /* To distinguish the following two values:
                                         *   'sunrise-14:00,14:00+',
                                         *   '07:00+,12:00-16:00',
                                         */
                                        ) {

                                        // console.log("07:00+,12:00-16:00 matched.");

                                        resultstate = false;
                                        unknown     = false;
                                    }
                                }

                                /* Hack to handle '17:00+,13:00-02:00' {{{ */
                                /* Not enabled. To complicated, just don‘t use them …
                                 * It gets even crazier …
                                 * Time wrapping over midnight is
                                 * stored in the next internal rule:
                                 * '17:00-00:00 unknown "Specified as open end. Closing time was guessed.", 13:00-00:00 open' // First internal rule.
                                 * + ', ' overwritten part: 00:00-03:00 open + '00:00-02:00 open', // Second internal rule.
                                 */
                                if (    false
                                        && typeof rules[rule-1] === 'object'
                                        && rules[rule].build_from_token_rule.toString() === rules[rule-1].build_from_token_rule.toString()
                                        && typeof rules[rule] === 'object'
                                        && rules[rule].build_from_token_rule.toString() === rules[rule].build_from_token_rule.toString()
                                        ) {

                                    var last_wrapping_time_selector = rules[rule].time[rules[rule].time.length - 1];
                                    var last_w_res = last_wrapping_time_selector(new Date(date.getTime() - 1));
                                    // console.log(last_w_res);

                                    if (    last_w_res[0]
                                            &&  typeof last_w_res[2] === 'undefined'
                                            && (typeof last_w_res[2] === 'undefined' || last_w_res[2] === false) // Do not match for 'Tu 23:59-40:00+'
                                            &&  typeof last_w_res[1] === 'object'
                                            && date.getTime() === last_w_res[1].getTime()
                                        ) {

                                        // '05:00-06:00,17:00+,13:00-02:00',

                                        // console.log("17:00+,13:00-02:00 matched.");
                                        // console.log(JSON.stringify(rules, null, '    '));

                                        resultstate = false;
                                        unknown     = false;
                                    }
                                /* }}} */
                                }
                                /* }}} */
                            }

                            if (rules[rule].fallback) {
                                if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1] < changedate))
                                    changedate = res[1];

                                // break rule; // Fallback rule matched, no need for checking the rest.
                                // WRONG: What if 'off' is used after fallback rule.
                            }
                        }
                    }
                    if (typeof changedate === 'undefined' || (typeof res[1] !== 'undefined' && res[1] < changedate))
                        changedate = res[1];
                }
            }

            if (typeof rules[match_rule] === 'object' && typeof rules[match_rule].comment === 'string') {
                /* Only use comment if one is explicitly specified. */
                comment = rules[match_rule].comment;
            } else if (typeof comment === 'object') {
                if (comment[1] === match_rule) {
                    comment = comment[0];
                } else {
                    comment = undefined;
                }
            }

            // console.log('changedate', changedate, resultstate, comment, match_rule);
            return [ resultstate, changedate, unknown, comment, match_rule ];
        };
        // }}}

        /* Generate prettified value for selector based on tokens. {{{
         *
         * :param tokens: List of token objects.
         * :param at: Position where to start.
         * :param last_at: Position where to stop.
         * :param conf: Configuration options.
         * :returns: Prettified value.
         */
        function prettifySelector(tokens, selector_start, selector_end, selector_type, conf) {

            var prettified_value = '';
            var at = selector_start;
            while (at <= selector_end) {
                // console.log('At: ' + at + ', token: ' + tokens[at]);
                if (matchTokens(tokens, at, 'weekday')) {
                    if (!conf.leave_weekday_sep_one_day_betw
                        && at - selector_start > 1 && (matchTokens(tokens, at-1, ',') || matchTokens(tokens, at-1, '-'))
                        && matchTokens(tokens, at-2, 'weekday')
                        && tokens[at][0] === (tokens[at-2][0] + 1) % 7) {
                            prettified_value = prettified_value.substring(0, prettified_value.length - 1) + conf.sep_one_day_between;
                    }
                    prettified_value += weekdays[tokens[at][0]];
                } else if (at - selector_start > 0 // e.g. '09:0' -> '09:00'
                        && selector_type === 'time'
                        && matchTokens(tokens, at-1, 'timesep')
                        && matchTokens(tokens, at, 'number')) {
                    prettified_value += (tokens[at][0] < 10 ? '0' : '') + tokens[at][0].toString();
                } else if (selector_type === 'time' // e.g. '9:00' -> ' 09:00'
                        && conf.zero_pad_hour
                        && at !== tokens.length
                        && matchTokens(tokens, at, 'number')
                        && matchTokens(tokens, at+1, 'timesep')) {
                    prettified_value += (
                            tokens[at][0] < 10 ?
                                (tokens[at][0] === 0 && conf.one_zero_if_hour_zero ?
                                 '' : '0') :
                                '') + tokens[at][0].toString();
                } else if (selector_type === 'time' // e.g. '9-18' -> '09:00-18:00'
                        && at + 2 <= selector_end
                        && matchTokens(tokens, at, 'number')
                        && matchTokens(tokens, at+1, '-')
                        && matchTokens(tokens, at+2, 'number')) {
                    prettified_value += (tokens[at][0] < 10 ?
                            (tokens[at][0] === 0 && conf.one_zero_if_hour_zero ? '' : '0')
                            : '') + tokens[at][0].toString();
                    prettified_value += ':00-'
                        + (tokens[at+2][0] < 10 ? '0' : '') + tokens[at+2][0].toString()
                        + ':00';
                    at += 2;
                } else if (matchTokens(tokens, at, 'comment')) {
                    prettified_value += '"' + tokens[at][0].toString() + '"';
                } else if (matchTokens(tokens, at, 'closed')) {
                    prettified_value += (conf.leave_off_closed ? tokens[at][0] : conf.keyword_for_off_closed);
                } else if (at - selector_start > 0 && matchTokens(tokens, at, 'number')
                        && (matchTokens(tokens, at-1, 'month') && selector_type === 'month'
                        ||  matchTokens(tokens, at-1, 'week')  && selector_type === 'week'
                        )) {
                    prettified_value += ' '
                        + (conf.zero_pad_month_and_week_numbers && tokens[at][0] < 10 ? '0' : '')
                        + tokens[at][0];
                } else if (at - selector_start > 0 && matchTokens(tokens, at, 'month')
                        && matchTokens(tokens, at-1, 'year')) {
                    prettified_value += ' ' + months[[tokens[at][0]]];
                } else if (at - selector_start > 0 && matchTokens(tokens, at, 'event')
                        && matchTokens(tokens, at-1, 'year')) {
                    prettified_value += ' ' + tokens[at][0];
                } else if (matchTokens(tokens, at, 'month')) {
                    prettified_value += months[[tokens[at][0]]];
                    if (at + 1 <= selector_end && matchTokens(tokens, at+1, 'weekday'))
                        prettified_value += ' ';
                } else if (at + 2 <= selector_end
                        && (matchTokens(tokens, at, '-') || matchTokens(tokens, at, '+'))
                        && matchTokens(tokens, at+1, 'number', 'calcday')) {
                    prettified_value += ' ' + tokens[at][0] + tokens[at+1][0] + ' day' + (Math.abs(tokens[at+1][0]) === 1 ? '' : 's');
                    at += 2;
                } else if (at === selector_end
                        && selector_type === 'weekday'
                        && tokens[at][0] === ':') {
                    // Do nothing.
                } else {
                    prettified_value += tokens[at][0].toString();
                }
                at++;
            }
            return prettified_value;
        }
        // }}}

        //======================================================================
        // Public interface {{{
        // All functions below are considered public.
        //======================================================================

        // Simple API {{{

        this.getState = function(date) {
            var it = this.getIterator(date);
            return it.getState();
        };

        this.getUnknown = function(date) {
            var it = this.getIterator(date);
            return it.getUnknown();
        };

        this.getStateString = function(date, past) {
            var it = this.getIterator(date);
            return it.getStateString(past);
        };

        this.getComment = function(date) {
            var it = this.getIterator(date);
            return it.getComment();
        };

        this.getMatchingRule = function(date) {
            var it = this.getIterator(date);
            return it.getMatchingRule();
        };

        /* Not available for iterator API {{{ */
        /* getWarnings: Get warnings, empty list if none {{{ */
        this.getWarnings = function() {
            var it = this.getIterator();
            return getWarnings(it);
        };
        /* }}} */

        /* prettifyValue: Get a nicely formated value {{{ */
        this.prettifyValue = function(argument_hash) {
            this.getWarnings();
            /* getWarnings has to be run before prettifyValue because some
             * decisions if a certain aspect makes sense to prettify or not
             * are based on the warnings.
             * Basically, both functions depend on each other in some way :(
             * See done_with_selector_reordering.
             */
            return prettifyValue(argument_hash);
        };
        /* }}} */

        /* getNextChange: Get time of next status change {{{ */
        this.getNextChange = function(date, maxdate) {
            var it = this.getIterator(date),
                originalState = it.getState(),
                infiniteLoopKillSwitch = 0;

            while (it.getState() === originalState && infiniteLoopKillSwitch < 100 ){
                if (it.advance(maxdate) === false){
                    return undefined;
                }

                infiniteLoopKillSwitch++;
            }

            if (originalState !== it.getState()){
                return it.getDate();
            } else {
                return undefined;
            }

            /*
            if (!it.advance(maxdate))
                return undefined;
            */
            return it.getDate();
        };
        /* }}} */

        /* isWeekStable: Checks whether open intervals are same for every week. {{{ */
        this.isWeekStable = function() {
            return week_stable;
        };
        /* }}} */
        /* }}} */
        /* }}} */

        // High-level API {{{
        /* getOpenIntervals: Get array of open intervals between two dates {{{ */
        this.getOpenIntervals = function(from, to) {
            var res = [];

            var it = this.getIterator(from);

            if (it.getState() || it.getUnknown())
                res.push([from, undefined, it.getUnknown(), it.getComment()]);

            while (it.advance(to)) {
                if (it.getState() || it.getUnknown()) {
                    if (res.length !== 0 && typeof res[res.length - 1][1] === 'undefined') {
                        // last state was also open or unknown
                        res[res.length - 1][1] = it.getDate();
                    }
                    res.push([it.getDate(), undefined, it.getUnknown(), it.getComment()]);
                } else {
                    if (res.length !== 0 && typeof res[res.length - 1][1] === 'undefined') {
                        // only use the first time as closing/change time and ignore closing times which might follow
                        res[res.length - 1][1] = it.getDate();
                    }
                }
            }

            if (res.length > 0 && typeof res[res.length - 1][1] === 'undefined')
                res[res.length - 1][1] = to;

            return res;
        };
        /* }}} */

        /* getOpenDuration: Get total number of milliseconds a facility is open,unknown within a given date range {{{ */
        this.getOpenDuration = function(from, to) {
        // console.log('-----------');

            var open    = 0;
            var unknown = 0;

            var it = this.getIterator(from);
            var prevdate    = (it.getState() || it.getUnknown()) ? from : undefined;
            var prevstate   = it.getState();
            var prevunknown = it.getUnknown();

            while (it.advance(to)) {
                if (it.getState() || it.getUnknown()) {

                    if (typeof prevdate !== 'undefined') {
                        // last state was also open or unknown
                        if (prevunknown) //
                            unknown += it.getDate().getTime() - prevdate.getTime();
                        else if (prevstate)
                            open    += it.getDate().getTime() - prevdate.getTime();
                    }

                    prevdate    = it.getDate();
                    prevstate   = it.getState();
                    prevunknown = it.getUnknown();
                    // console.log('if', prevdate, open / (1000 * 60 * 60), unknown / (1000 * 60 * 60));
                } else {
                    // console.log('else', prevdate);
                    if (typeof prevdate !== 'undefined') {
                        if (prevunknown)
                            unknown += it.getDate().getTime() - prevdate.getTime();
                        else
                            open    += it.getDate().getTime() - prevdate.getTime();
                        prevdate = undefined;
                    }
                }
            }

            if (typeof prevdate !== 'undefined') {
                if (prevunknown)
                    unknown += to.getTime() - prevdate.getTime();
                else
                    open    += to.getTime() - prevdate.getTime();
            }

            return [ open, unknown ];
        };
        /* }}} */
        /* }}} */

        // Iterator API {{{
        this.getIterator = function(date) {
            return new function(oh) {
                if (typeof date === 'undefined')
                    date = new Date();

                var prevstate = [ undefined, date, undefined, undefined, undefined ];
                var state = oh.getStatePair(date);

                /* getDate {{{ */
                this.getDate = function() {
                    return prevstate[1];
                };
                /* }}} */

                /* setDate {{{ */
                this.setDate = function(date) {
                    if (typeof date !== 'object')
                        throw 'Date parameter needed.';

                    prevstate = [ undefined, date, undefined, undefined, undefined ];
                    state     = oh.getStatePair(date);
                };
                /* }}} */

                /* getState: Check whether facility is `open' {{{ */
                this.getState = function() {
                    return state[0];
                };
                /* }}} */

                /* getUnknown: Checks whether the opening state is conditional or unknown {{{ */
                this.getUnknown = function() {
                    return state[2];
                };
                /* }}} */

                /* getStateString: Get state string. Either 'open', 'unknown' or 'closed' {{{ */
                this.getStateString = function(past) {
                    return (state[0] ? 'open' : (state[2] ? 'unknown' : (past ? 'closed' : 'close')));
                };
                /* }}} */

                /* getComment: Get the comment, undefined in none {{{ */
                this.getComment = function() {
                    return state[3];
                };
                /* }}} */

                /* getMatchingRule: Get the rule which matched thus deterrents the current state {{{ */
                this.getMatchingRule = function() {
                    if (typeof state[4] === 'undefined')
                        return undefined;

                    return rules[state[4]].build_from_token_rule[2];
                };
                /* }}} */

                /* advance: Advances to the next position {{{ */
                this.advance = function(datelimit) {
                    if (typeof datelimit === 'undefined')
                        datelimit = new Date(prevstate[1].getTime() + msec_in_day * 366 * 5);
                    else if (datelimit.getTime() <= prevstate[1].getTime())
                        return false; // The limit for advance needs to be after the current time.

                    do {
                        // open range, we won't be able to advance
                        if (typeof state[1] === 'undefined')
                            return false;

                        // console.log('\n' + 'previous check time:', prevstate[1]
                            // + ', current check time:',
                            // // (state[1].getHours() < 10 ? '0' : '') + state[1].getHours() +
                            // // ':'+(state[1].getMinutes() < 10 ? '0' : '')+ state[1].getMinutes(), state[1].getDate(),
                            // state[1],
                            // (state[0] ? 'open' : (state[2] ? 'unknown' : 'closed')) + ', comment:', state[3]);

                        // We're going backwards or staying at place.
                        // This always indicates coding error in a selector code.
                        if (state[1].getTime() <= prevstate[1].getTime())
                            throw 'Fatal: infinite loop in nextChange';

                        // don't advance beyond limits (same as open range)
                        if (state[1].getTime() >= datelimit.getTime())
                            return false;

                        // do advance
                        prevstate = state;
                        state = oh.getStatePair(prevstate[1]);
                    } while (state[0] === prevstate[0] && state[2] === prevstate[2] && state[3] === prevstate[3]);
                    return true;
                };
                /* }}} */
            }(this);
        };
        /* }}} */

        /* }}} */
    };
}));
// vim: set ts=4 sw=4 tw=0 noet foldmarker={{{,}}} foldlevel=0 foldmethod=marker :

/* global opening_hours */
/**
 * @fileOverview Render opening hours
 * @author: Robert Fleischmann <robert.fleischmann@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.openingHours = (function() {
    'use strict';

    /**
     * Parse dateTime string
     * @param  {String} dateStr    date string
     * @return {Object} Date Object
     */

    function parseDateTime(dateStr) {
        var a=dateStr.split('T');
        var d=a[0].split('-');
        var t=a[1].split(':');
        var s=t[2].substr(0,t[2].length-1); // Remove Z
        var date = new Date(d[0],(d[1]-1),d[2],t[0],t[1],s);
        return date;
    }

    function getWeekDay(dateStr){
        var a=dateStr.split('T');
        var d=a[0].split('-');
        var date = new Date(d[0],(d[1]-1),d[2]);
        return (date.getDay() + 6) % 7;
    }

    function createElement(tag, textContent, props) {
        var i;
        var el = document.createElement(tag);
        props = props || {};

        // set properties
        for (i in props) {
            if (props.hasOwnProperty(i) && props[i]) {
                if (i === 'className') {
                    el.setAttribute('class', props[i]);
                } else {
                    el.setAttribute(i, props[i]);
                }
            }
        }

        // set inner text
        if (textContent) {
            el.textContent = textContent;
            el.innerText = textContent;
        }

        return el;
    }

    function createChild(appendTo, tag, textContent, props) {
        var el = createElement(tag, textContent, props);
        appendTo.appendChild(el);
        return el;
    }

    function lz(v) {
        // Fix negative values for IE8
        var str = '00' + v,
            start = str.length - 2;
        return str.substr(start);
    }

    function formatTime(date, compact) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        if (compact && minutes === 0) {
            return hours + ampm;
        }
        return hours + '.' + lz(minutes) + ampm;
    }
    
    function parseTime(time){
    	if(time){
        	return time.toString().substring(16, 24);
    	}else{
    		return '00:00:00';
    	}
    }
    
    function getDayJson(openTime,closeTime){
    	var dayJson={ 
    				'openTime': openTime , 
    				'closeTime': closeTime  
     				};
    	return dayJson ;
    }
    
    function getWeekDayJson(openTime,closeTime){
    	return getDayJson(parseTime(openTime),parseTime(closeTime)) ;
    }
    
    function getWeekDayclosed(){
    	return getDayJson('00:00:00','00:00:00');
    }
    
    function getAllDayOpenJson(){
    	//open all day. custom way to present Json 
    	return getDayJson('00:01:00','23:59:59');
    }

    function renderCmaJson(week, dayOfWeek) {

    	if( week === 'error'){
    		var result ={
    						'error':'error in parsing open time'
    					}; 
    		return result;
    	}
	    var result = {
	    				'monday':{}, 
	    				'tuesday':{}, 
	    				'wednesday':{}, 
	    				'thursday':{}, 
	    				'friday':{}, 
	    				'saturday':{}, 
	    				'sunday':{}
	   				};

        
    	if (!week.isWeekStable) {
        	result.publicHoliday={};
        }

        if (week.numDays === 1 && week.days[0] && week.days[0].length === 1) {
            if (week.days[0][0].from === week.from && week.days[0][0].to === week.to) {
            	// check for 24/7
		        $.each( result, function( key, value ) {
		        	result[key] = getAllDayOpenJson();
		        });
            }
        }else{
        //process rest of days & combinations
        	var count = 0;
	        $.each( result, function( key, value ) {
	        	if(week.days[count] && week.days[count][0]){
	        		result[key] = getWeekDayJson(week.days[count][0].from, week.days[count][0].to);
	        	}else{
		        	result[key] = getWeekDayclosed();
	        	}
	        	count++;
	        });
        }
    	
        return JSON.stringify(result);
    }
    
    function renderWeek(week, dayOfWeek) {
    	if( week === 'error'){
    		return createElement('div', 'Error: ' , { className: 'openinghours error' });
    	}
        var days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
        var el = createElement('ul', '', { className: 'openinghours' });
        var child, ul;

        if (!week.isWeekStable) {
            days.push('Public holiday');
        }

        // check for 24/7
        if (week.numDays === 1 && week.days[0] && week.days[0].length === 1) {
            if (week.days[0][0].from === week.from && week.days[0][0].to === week.to) {
                createChild(el, 'li', '24/7');

                // might be off on a PH
                if (!week.isWeekStable) {
                    child = createChild(el, 'li');
                    createChild(child, 'span', days[7], { className: 'label' });
                    ul = createChild(child, 'ul', '', { className: 'times' });

                    if (week.days[7].length) {
                        createChild(ul, 'li', formatTime(week.days[7][0].from) + ' to ' + formatTime(week.days[7][0].to));
                    } else {
                        createChild(ul, 'li', 'Closed');
                    }
                }

                return el;
            }
        }

        var today = dayOfWeek !== undefined ? dayOfWeek : ((new Date()).getDay() + 6) % 7;

        for (var i = 0, xi = days.length; i < xi; i++) {
            child = createChild(el, 'li', '', { className: today === i ? 'today' : '' });
            createChild(child, 'span', days[i], { className: 'label' });
            ul = createChild(child, 'ul', '', { className: 'times' });

            if (!week.days[i] || week.days[i].length === 0) {
                createChild(ul, 'li', 'Closed');
            } else {
                for (var u = 0, xu = week.days[i].length; u < xu; u++) {
                    createChild(ul, 'li', formatTime(week.days[i][u].from) + ' to ' + formatTime(week.days[i][u].to));
                }
            }
        }

        return el;
    }

    /**
     * Get next open time from opening hours within the next week
     * @param   {String} openingHours Open street formatted opening hours
     * @param   {String} currentTime Current time, use server time from the context object
     * @return  {String}              Open next time and day string
     */
    function getRichState(openingHours, currentUTCTime, includeReopenTime ) {

        // we need to change currentUTCTime to currentTime (UK)

        var from = parseDateTime(currentUTCTime);

        var extraUKTimeOffset = 0;
        if (bcpublic.helpandsupport.timeHelpers.isTimeWithinBST(currentUTCTime)){
            extraUKTimeOffset = 60 * 60 * 1000; // +60 mins in ms
        }

        from = new Date( from.getTime() + extraUKTimeOffset );

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var oh = new opening_hours(openingHours, { address: { country_code: 'gb' } }); // jshint ignore:line

        var to = new Date(from.getTime() + 864e5 * 7); // Add 24h * 7

        var isOpen = oh.getState(from);
        var nextChange = oh.getNextChange(from, to);
        var nextChangeOnSameDay = nextChange && nextChange.getDate() === from.getDate();

        var label = [];

        if (isOpen) {
            label.push('Open');

            if (openingHours === '24/7'){

                label.push('24/7, including holidays');

            } else  if (nextChange) {
                label.push('now until');
                label.push(formatTime(nextChange, true));
                if (!nextChangeOnSameDay) {
                    label.push(days[nextChange.getDay()]);
                }
            }
        } else if (nextChange && includeReopenTime) {
            label.push('Open again at');
            
            if (!nextChangeOnSameDay) {
                label.push(formatTime(nextChange, true));
                label.push(days[nextChange.getDay()] + '.');
            } else {
                label.push(formatTime(nextChange, true) + '.');
            }
        }

        return label.join(' ');
    }
    

    function createOpeningHoursTable(openingHours) {
        var interval, day, from, to, oh, intervals, week, i, phFrom, phTo, phIntervals;

        var splitIntervalsByDays = function(intervals){

            var newIntervals = [];

            for (var i in intervals) {
                if (intervals.hasOwnProperty(i)) {

                    interval = intervals[i];
                    var daysSpan = interval[1].getDate() - interval[0].getDate(),
                        addNextDay;

                    var f = interval[0];

                    if (daysSpan > 0){

                        var newSingleInterval = [];
                        newSingleInterval.push(interval[0]);

                        for (var day=1; day <= daysSpan; day++){

                            var newDay = new Date(f.getFullYear(),f.getMonth(),f.getDate() +day, 0, 0, 0);

                            newSingleInterval.push( newDay );
                            newIntervals.push(newSingleInterval);
                            newSingleInterval = [];

                            addNextDay = !(day === daysSpan && newDay.getTime() === interval[1].getTime() );

                            if (addNextDay === true){
                                newSingleInterval.push( newDay );
                            }
                        }

                        if (addNextDay === true){
                            newSingleInterval.push(interval[1]);
                            newIntervals.push(newSingleInterval);
                        }

                    } else {
                        newIntervals.push(interval);
                    }
                }
            }

            return newIntervals;
        };

        try {
            // create start date first monday in feb
            from = new Date();
            from.setMonth(1); // Feb
            from.setDate(1);
            from.setHours(0);
            from.setMinutes(0);
            from.setSeconds(0);
            from.setMilliseconds(0);
            // get first monday in month
            while (from.getDay() !== 1) {
                // add 24h
                from = new Date(from.getTime() + 864e5);
            }
            // add one week
            to = new Date(from.getTime() + 6048e5);

            oh = new opening_hours(openingHours, { address: { country_code: 'gb' } }); // jshint ignore:line
            intervals = oh.getOpenIntervals(from, to);

            // if we have only 1 interval === 24/7 then don't split by days
            if ((intervals.length === 1 && intervals[0][0] === from && intervals[0][1] === to) === false){
                intervals = splitIntervalsByDays(intervals);
            }

            week = {
                from: from,
                to: to,
                isWeekStable: oh.isWeekStable(),
                numDays: 0,
                days: {}
            };

            // interval [ from1, to1, unknown1, comment1 ];
            for (i in intervals) {
                if (intervals.hasOwnProperty(i)) {
                    interval = intervals[i];
                    // 0=Mo, 1=Tu, ..., 6=Su
                    day = (interval[0].getDay() + 6) % 7;

                    if (!week.days[day]) {
                        week.days[day] = [];
                        week.numDays++;
                    }

                    week.days[day].push({
                        from: interval[0],
                        to: interval[1]
                    });
                }
            }

            if (!week.isWeekStable) {
                phFrom = new Date(from.getTime());
                phFrom.setDate(25); // always a bank holiday
                phFrom.setMonth(11); // 12

                phTo = new Date(phFrom.getTime());
                phTo.setHours(23);
                phTo.setMinutes(59);
                phTo.setSeconds(59);
                phTo.setMilliseconds(999);

                phIntervals = oh.getOpenIntervals(phFrom, phTo);
                week.days[7] = [];
                if (phIntervals.length) {
                    week.days[7].push({
                        from: phIntervals[0][0],
                        to: phIntervals[0][1]
                    });
                }
            }
            return week;
        } catch (e) {
        	return 'error';
        }
    }

    return {
        getTable: function(openingHours, today) {
             var week = createOpeningHoursTable(openingHours);
             return renderWeek(week, today);
        },
        getCmaJson: function(openingHours, today) {
            var week = createOpeningHoursTable(openingHours);
            var result = renderCmaJson(week, today);
            return result;
       },
        getRichState: getRichState,
        parseDateTime: parseDateTime,
        getWeekDay: getWeekDay
    };

})(jQuery);

