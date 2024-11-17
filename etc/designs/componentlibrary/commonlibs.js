!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,i;function c(){return e.apply(null,arguments)}function o(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function u(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function l(e){return void 0===e}function d(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function h(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function f(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function m(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function _(e,t){for(var n in t)m(t,n)&&(e[n]=t[n]);return m(t,"toString")&&(e.toString=t.toString),m(t,"valueOf")&&(e.valueOf=t.valueOf),e}function y(e,t,n,s){return Ot(e,t,n,s,!0).utc()}function g(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function p(e){if(null==e._isValid){var t=g(e),n=i.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s;e._isValid=s}return e._isValid}function v(e){var t=y(NaN);return null!=e?_(g(t),e):g(t).userInvalidated=!0,t}i=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0;s<n;s++)if(s in t&&e.call(this,t[s],s,t))return!0;return!1};var r=c.momentProperties=[];function w(e,t){var n,s,i;if(l(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),l(t._i)||(e._i=t._i),l(t._f)||(e._f=t._f),l(t._l)||(e._l=t._l),l(t._strict)||(e._strict=t._strict),l(t._tzm)||(e._tzm=t._tzm),l(t._isUTC)||(e._isUTC=t._isUTC),l(t._offset)||(e._offset=t._offset),l(t._pf)||(e._pf=g(t)),l(t._locale)||(e._locale=t._locale),0<r.length)for(n=0;n<r.length;n++)l(i=t[s=r[n]])||(e[s]=i);return e}var t=!1;function M(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===t&&(t=!0,c.updateOffset(this),t=!1)}function S(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function D(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function k(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=D(t)),n}function a(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&k(e[s])!==k(t[s]))&&a++;return a+r}function Y(e){!1===c.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function n(i,r){var a=!0;return _(function(){if(null!=c.deprecationHandler&&c.deprecationHandler(null,i),a){for(var e,t=[],n=0;n<arguments.length;n++){if(e="","object"==typeof arguments[n]){for(var s in e+="\n["+n+"] ",arguments[0])e+=s+": "+arguments[0][s]+", ";e=e.slice(0,-2)}else e=arguments[n];t.push(e)}Y(i+"\nArguments: "+Array.prototype.slice.call(t).join("")+"\n"+(new Error).stack),a=!1}return r.apply(this,arguments)},r)}var s,O={};function T(e,t){null!=c.deprecationHandler&&c.deprecationHandler(e,t),O[e]||(Y(t),O[e]=!0)}function x(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=_({},e);for(n in t)m(t,n)&&(u(e[n])&&u(t[n])?(s[n]={},_(s[n],e[n]),_(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)m(e,n)&&!m(t,n)&&u(e[n])&&(s[n]=_({},s[n]));return s}function P(e){null!=e&&this.set(e)}c.suppressDeprecationWarnings=!1,c.deprecationHandler=null,s=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)m(e,t)&&n.push(t);return n};var W={};function H(e,t){var n=e.toLowerCase();W[n]=W[n+"s"]=W[t]=e}function R(e){return"string"==typeof e?W[e]||W[e.toLowerCase()]:void 0}function C(e){var t,n,s={};for(n in e)m(e,n)&&(t=R(n))&&(s[t]=e[n]);return s}var F={};function L(e,t){F[e]=t}function U(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(0<=e?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,G=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,V={},E={};function I(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(E[e]=i),t&&(E[t[0]]=function(){return U(i.apply(this,arguments),t[1],t[2])}),n&&(E[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function A(e,t){return e.isValid()?(t=j(t,e.localeData()),V[t]=V[t]||function(s){var e,i,t,r=s.match(N);for(e=0,i=r.length;e<i;e++)E[r[e]]?r[e]=E[r[e]]:r[e]=(t=r[e]).match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"");return function(e){var t,n="";for(t=0;t<i;t++)n+=x(r[t])?r[t].call(e,s):r[t];return n}}(t),V[t](e)):e.localeData().invalidDate()}function j(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(G.lastIndex=0;0<=n&&G.test(e);)e=e.replace(G,s),G.lastIndex=0,n-=1;return e}var Z=/\d/,z=/\d\d/,$=/\d{3}/,q=/\d{4}/,J=/[+-]?\d{6}/,B=/\d\d?/,Q=/\d\d\d\d?/,X=/\d\d\d\d\d\d?/,K=/\d{1,3}/,ee=/\d{1,4}/,te=/[+-]?\d{1,6}/,ne=/\d+/,se=/[+-]?\d+/,ie=/Z|[+-]\d\d:?\d\d/gi,re=/Z|[+-]\d\d(?::?\d\d)?/gi,ae=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,oe={};function ue(e,n,s){oe[e]=x(n)?n:function(e,t){return e&&s?s:n}}function le(e,t){return m(oe,e)?oe[e](t._strict,t._locale):new RegExp(de(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function de(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var he={};function ce(e,n){var t,s=n;for("string"==typeof e&&(e=[e]),d(n)&&(s=function(e,t){t[n]=k(e)}),t=0;t<e.length;t++)he[e[t]]=s}function fe(e,i){ce(e,function(e,t,n,s){n._w=n._w||{},i(e,n._w,n,s)})}var me=0,_e=1,ye=2,ge=3,pe=4,ve=5,we=6,Me=7,Se=8;function De(e){return ke(e)?366:365}function ke(e){return e%4==0&&e%100!=0||e%400==0}I("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),I(0,["YY",2],0,function(){return this.year()%100}),I(0,["YYYY",4],0,"year"),I(0,["YYYYY",5],0,"year"),I(0,["YYYYYY",6,!0],0,"year"),H("year","y"),L("year",1),ue("Y",se),ue("YY",B,z),ue("YYYY",ee,q),ue("YYYYY",te,J),ue("YYYYYY",te,J),ce(["YYYYY","YYYYYY"],me),ce("YYYY",function(e,t){t[me]=2===e.length?c.parseTwoDigitYear(e):k(e)}),ce("YY",function(e,t){t[me]=c.parseTwoDigitYear(e)}),ce("Y",function(e,t){t[me]=parseInt(e,10)}),c.parseTwoDigitYear=function(e){return k(e)+(68<k(e)?1900:2e3)};var Ye,Oe=Te("FullYear",!0);function Te(t,n){return function(e){return null!=e?(be(this,t,e),c.updateOffset(this,n),this):xe(this,t)}}function xe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function be(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&ke(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Pe(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function Pe(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?ke(e)?29:28:31-s%7%2}Ye=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},I("M",["MM",2],"Mo",function(){return this.month()+1}),I("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),I("MMMM",0,0,function(e){return this.localeData().months(this,e)}),H("month","M"),L("month",8),ue("M",B),ue("MM",B,z),ue("MMM",function(e,t){return t.monthsShortRegex(e)}),ue("MMMM",function(e,t){return t.monthsRegex(e)}),ce(["M","MM"],function(e,t){t[_e]=k(e)-1}),ce(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[_e]=i:g(n).invalidMonth=e});var We=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,He="January_February_March_April_May_June_July_August_September_October_November_December".split("_");var Re="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Ce(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=k(t);else if(!d(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Pe(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function Fe(e){return null!=e?(Ce(this,e),c.updateOffset(this,!0),this):xe(this,"Month")}var Le=ae;var Ue=ae;function Ne(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=y([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=de(s[t]),i[t]=de(i[t]);for(t=0;t<24;t++)r[t]=de(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Ge(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&0<=e&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Ve(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ee(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ve(e,s,i);return o<=0?a=De(r=e-1)+o:o>De(e)?(r=e+1,a=o-De(e)):(r=e,a=o),{year:r,dayOfYear:a}}function Ie(e,t,n){var s,i,r=Ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ae(i=e.year()-1,t,n):a>Ae(e.year(),t,n)?(s=a-Ae(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ae(e,t,n){var s=Ve(e,t,n),i=Ve(e+1,t,n);return(De(e)-s+i)/7}I("w",["ww",2],"wo","week"),I("W",["WW",2],"Wo","isoWeek"),H("week","w"),H("isoWeek","W"),L("week",5),L("isoWeek",5),ue("w",B),ue("ww",B,z),ue("W",B),ue("WW",B,z),fe(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=k(e)});I("d",0,"do","day"),I("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),I("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),I("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),I("e",0,0,"weekday"),I("E",0,0,"isoWeekday"),H("day","d"),H("weekday","e"),H("isoWeekday","E"),L("day",11),L("weekday",11),L("isoWeekday",11),ue("d",B),ue("e",B),ue("E",B),ue("dd",function(e,t){return t.weekdaysMinRegex(e)}),ue("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ue("dddd",function(e,t){return t.weekdaysRegex(e)}),fe(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:g(n).invalidWeekday=e}),fe(["d","e","E"],function(e,t,n,s){t[s]=k(e)});var je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");var Ze="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");var ze="Su_Mo_Tu_We_Th_Fr_Sa".split("_");var $e=ae;var qe=ae;var Je=ae;function Be(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=y([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=de(o[t]),u[t]=de(u[t]),l[t]=de(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Qe(){return this.hours()%12||12}function Xe(e,t){I(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ke(e,t){return t._meridiemParse}I("H",["HH",2],0,"hour"),I("h",["hh",2],0,Qe),I("k",["kk",2],0,function(){return this.hours()||24}),I("hmm",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)}),I("hmmss",0,0,function(){return""+Qe.apply(this)+U(this.minutes(),2)+U(this.seconds(),2)}),I("Hmm",0,0,function(){return""+this.hours()+U(this.minutes(),2)}),I("Hmmss",0,0,function(){return""+this.hours()+U(this.minutes(),2)+U(this.seconds(),2)}),Xe("a",!0),Xe("A",!1),H("hour","h"),L("hour",13),ue("a",Ke),ue("A",Ke),ue("H",B),ue("h",B),ue("k",B),ue("HH",B,z),ue("hh",B,z),ue("kk",B,z),ue("hmm",Q),ue("hmmss",X),ue("Hmm",Q),ue("Hmmss",X),ce(["H","HH"],ge),ce(["k","kk"],function(e,t,n){var s=k(e);t[ge]=24===s?0:s}),ce(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ce(["h","hh"],function(e,t,n){t[ge]=k(e),g(n).bigHour=!0}),ce("hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s)),g(n).bigHour=!0}),ce("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i)),g(n).bigHour=!0}),ce("Hmm",function(e,t,n){var s=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s))}),ce("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[ge]=k(e.substr(0,s)),t[pe]=k(e.substr(s,2)),t[ve]=k(e.substr(i))});var et,tt=Te("Hours",!0),nt={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:He,monthsShort:Re,week:{dow:0,doy:6},weekdays:je,weekdaysMin:ze,weekdaysShort:Ze,meridiemParse:/[ap]\.?m?\.?/i},st={},it={};function rt(e){return e?e.toLowerCase().replace("_","-"):e}function at(e){var t=null;if(!st[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=et._abbr,require("./locale/"+e),ot(t)}catch(e){}return st[e]}function ot(e,t){var n;return e&&((n=l(t)?lt(e):ut(e,t))?et=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),et._abbr}function ut(e,t){if(null!==t){var n,s=nt;if(t.abbr=e,null!=st[e])T("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])s=st[t.parentLocale]._config;else{if(null==(n=at(t.parentLocale)))return it[t.parentLocale]||(it[t.parentLocale]=[]),it[t.parentLocale].push({name:e,config:t}),null;s=n._config}return st[e]=new P(b(s,t)),it[e]&&it[e].forEach(function(e){ut(e.name,e.config)}),ot(e),st[e]}return delete st[e],null}function lt(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return et;if(!o(e)){if(t=at(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=rt(e[r]).split("-")).length,n=(n=rt(e[r+1]))?n.split("-"):null;0<t;){if(s=at(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&a(i,n,!0)>=t-1)break;t--}r++}return et}(e)}function dt(e){var t,n=e._a;return n&&-2===g(e).overflow&&(t=n[_e]<0||11<n[_e]?_e:n[ye]<1||n[ye]>Pe(n[me],n[_e])?ye:n[ge]<0||24<n[ge]||24===n[ge]&&(0!==n[pe]||0!==n[ve]||0!==n[we])?ge:n[pe]<0||59<n[pe]?pe:n[ve]<0||59<n[ve]?ve:n[we]<0||999<n[we]?we:-1,g(e)._overflowDayOfYear&&(t<me||ye<t)&&(t=ye),g(e)._overflowWeeks&&-1===t&&(t=Me),g(e)._overflowWeekday&&-1===t&&(t=Se),g(e).overflow=t),e}function ht(e,t,n){return null!=e?e:null!=t?t:n}function ct(e){var t,n,s,i,r,a=[];if(!e._d){var o,u;for(o=e,u=new Date(c.now()),s=o._useUTC?[u.getUTCFullYear(),u.getUTCMonth(),u.getUTCDate()]:[u.getFullYear(),u.getMonth(),u.getDate()],e._w&&null==e._a[ye]&&null==e._a[_e]&&function(e){var t,n,s,i,r,a,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)r=1,a=4,n=ht(t.GG,e._a[me],Ie(Tt(),1,4).year),s=ht(t.W,1),((i=ht(t.E,1))<1||7<i)&&(u=!0);else{r=e._locale._week.dow,a=e._locale._week.doy;var l=Ie(Tt(),r,a);n=ht(t.gg,e._a[me],l.year),s=ht(t.w,l.week),null!=t.d?((i=t.d)<0||6<i)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||6<t.e)&&(u=!0)):i=r}s<1||s>Ae(n,r,a)?g(e)._overflowWeeks=!0:null!=u?g(e)._overflowWeekday=!0:(o=Ee(n,s,i,r,a),e._a[me]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(r=ht(e._a[me],s[me]),(e._dayOfYear>De(r)||0===e._dayOfYear)&&(g(e)._overflowDayOfYear=!0),n=Ge(r,0,e._dayOfYear),e._a[_e]=n.getUTCMonth(),e._a[ye]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=a[t]=s[t];for(;t<7;t++)e._a[t]=a[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[ge]&&0===e._a[pe]&&0===e._a[ve]&&0===e._a[we]&&(e._nextDay=!0,e._a[ge]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a);return e<100&&0<=e&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ge]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(g(e).weekdayMismatch=!0)}}var ft=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,mt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/Z|[+-]\d\d(?::?\d\d)?/,yt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],gt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((\-?\d+)/i;function vt(e){var t,n,s,i,r,a,o=e._i,u=ft.exec(o)||mt.exec(o);if(u){for(g(e).iso=!0,t=0,n=yt.length;t<n;t++)if(yt[t][1].exec(u[1])){i=yt[t][0],s=!1!==yt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[3])){r=(u[2]||" ")+gt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!_t.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),kt(e)}else e._isValid=!1}var wt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function Mt(e,t,n,s,i,r){var a=[function(e){var t=parseInt(e,10);{if(t<=49)return 2e3+t;if(t<=999)return 1900+t}return t}(e),Re.indexOf(t),parseInt(n,10),parseInt(s,10),parseInt(i,10)];return r&&a.push(parseInt(r,10)),a}var St={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,s,i=wt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(i){var r=Mt(i[4],i[3],i[2],i[5],i[6],i[7]);if(t=i[1],n=r,s=e,t&&Ze.indexOf(t)!==new Date(n[0],n[1],n[2]).getDay()&&(g(s).weekdayMismatch=!0,!(s._isValid=!1)))return;e._a=r,e._tzm=function(e,t,n){if(e)return St[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(i[8],i[9],i[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),g(e).rfc2822=!0}else e._isValid=!1}function kt(e){if(e._f!==c.ISO_8601)if(e._f!==c.RFC_2822){e._a=[],g(e).empty=!0;var t,n,s,i,r,a,o,u,l=""+e._i,d=l.length,h=0;for(s=j(e._f,e._locale).match(N)||[],t=0;t<s.length;t++)i=s[t],(n=(l.match(le(i,e))||[])[0])&&(0<(r=l.substr(0,l.indexOf(n))).length&&g(e).unusedInput.push(r),l=l.slice(l.indexOf(n)+n.length),h+=n.length),E[i]?(n?g(e).empty=!1:g(e).unusedTokens.push(i),a=i,u=e,null!=(o=n)&&m(he,a)&&he[a](o,u._a,u,a)):e._strict&&!n&&g(e).unusedTokens.push(i);g(e).charsLeftOver=d-h,0<l.length&&g(e).unusedInput.push(l),e._a[ge]<=12&&!0===g(e).bigHour&&0<e._a[ge]&&(g(e).bigHour=void 0),g(e).parsedDateParts=e._a.slice(0),g(e).meridiem=e._meridiem,e._a[ge]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):(null!=e.isPM&&((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0)),t)}(e._locale,e._a[ge],e._meridiem),ct(e),dt(e)}else Dt(e);else vt(e)}function Yt(e){var t,n,s,i,r=e._i,a=e._f;return e._locale=e._locale||lt(e._l),null===r||void 0===a&&""===r?v({nullInput:!0}):("string"==typeof r&&(e._i=r=e._locale.preparse(r)),S(r)?new M(dt(r)):(h(r)?e._d=r:o(a)?function(e){var t,n,s,i,r;if(0===e._f.length)return g(e).invalidFormat=!0,e._d=new Date(NaN);for(i=0;i<e._f.length;i++)r=0,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],kt(t),p(t)&&(r+=g(t).charsLeftOver,r+=10*g(t).unusedTokens.length,g(t).score=r,(null==s||r<s)&&(s=r,n=t));_(e,n||t)}(e):a?kt(e):l(n=(t=e)._i)?t._d=new Date(c.now()):h(n)?t._d=new Date(n.valueOf()):"string"==typeof n?(s=t,null===(i=pt.exec(s._i))?(vt(s),!1===s._isValid&&(delete s._isValid,Dt(s),!1===s._isValid&&(delete s._isValid,c.createFromInputFallback(s)))):s._d=new Date(+i[1])):o(n)?(t._a=f(n.slice(0),function(e){return parseInt(e,10)}),ct(t)):u(n)?function(e){if(!e._d){var t=C(e._i);e._a=f([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ct(e)}}(t):d(n)?t._d=new Date(n):c.createFromInputFallback(t),p(e)||(e._d=null),e))}function Ot(e,t,n,s,i){var r,a={};return!0!==n&&!1!==n||(s=n,n=void 0),(u(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||o(e)&&0===e.length)&&(e=void 0),a._isAMomentObject=!0,a._useUTC=a._isUTC=i,a._l=n,a._i=e,a._f=t,a._strict=s,(r=new M(dt(Yt(a))))._nextDay&&(r.add(1,"d"),r._nextDay=void 0),r}function Tt(e,t,n,s){return Ot(e,t,n,s,!1)}c.createFromInputFallback=n("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),c.ISO_8601=function(){},c.RFC_2822=function(){};var xt=n("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:v()}),bt=n("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Tt.apply(null,arguments);return this.isValid()&&e.isValid()?this<e?this:e:v()});function Pt(e,t){var n,s;if(1===t.length&&o(t[0])&&(t=t[0]),!t.length)return Tt();for(n=t[0],s=1;s<t.length;++s)t[s].isValid()&&!t[s][e](n)||(n=t[s]);return n}var Wt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ht(e){var t=C(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Ye.call(Wt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,s=0;s<Wt.length;++s)if(e[Wt[s]]){if(n)return!1;parseFloat(e[Wt[s]])!==k(e[Wt[s]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=lt(),this._bubble()}function Rt(e){return e instanceof Ht}function Ct(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Ft(e,n){I(e,0,0,function(){var e=this.utcOffset(),t="+";return e<0&&(e=-e,t="-"),t+U(~~(e/60),2)+n+U(~~e%60,2)})}Ft("Z",":"),Ft("ZZ",""),ue("Z",re),ue("ZZ",re),ce(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ut(re,e)});var Lt=/([\+\-]|\d\d)/gi;function Ut(e,t){var n=(t||"").match(e);if(null===n)return null;var s=((n[n.length-1]||[])+"").match(Lt)||["-",0,0],i=60*s[1]+k(s[2]);return 0===i?0:"+"===s[0]?i:-i}function Nt(e,t){var n,s;return t._isUTC?(n=t.clone(),s=(S(e)||h(e)?e.valueOf():Tt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+s),c.updateOffset(n,!1),n):Tt(e).local()}function Gt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}c.updateOffset=function(){};var Et=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,It=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function At(e,t){var n,s,i,r=e,a=null;return Rt(e)?r={ms:e._milliseconds,d:e._days,M:e._months}:d(e)?(r={},t?r[t]=e:r.milliseconds=e):(a=Et.exec(e))?(n="-"===a[1]?-1:1,r={y:0,d:k(a[ye])*n,h:k(a[ge])*n,m:k(a[pe])*n,s:k(a[ve])*n,ms:k(Ct(1e3*a[we]))*n}):(a=It.exec(e))?(n="-"===a[1]?-1:(a[1],1),r={y:jt(a[2],n),M:jt(a[3],n),w:jt(a[4],n),d:jt(a[5],n),h:jt(a[6],n),m:jt(a[7],n),s:jt(a[8],n)}):null==r?r={}:"object"==typeof r&&("from"in r||"to"in r)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Nt(t,e),e.isBefore(t)?n=Zt(e,t):((n=Zt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Tt(r.from),Tt(r.to)),(r={}).ms=i.milliseconds,r.M=i.months),s=new Ht(r),Rt(e)&&m(e,"_locale")&&(s._locale=e._locale),s}function jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Zt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function zt(s,i){return function(e,t){var n;return null===t||isNaN(+t)||(T(i,"moment()."+i+"(period, number) is deprecated. Please use moment()."+i+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),n=e,e=t,t=n),$t(this,At(e="string"==typeof e?+e:e,t),s),this}}function $t(e,t,n,s){var i=t._milliseconds,r=Ct(t._days),a=Ct(t._months);e.isValid()&&(s=null==s||s,a&&Ce(e,xe(e,"Month")+a*n),r&&be(e,"Date",xe(e,"Date")+r*n),i&&e._d.setTime(e._d.valueOf()+i*n),s&&c.updateOffset(e,r||a))}At.fn=Ht.prototype,At.invalid=function(){return At(NaN)};var qt=zt(1,"add"),Jt=zt(-1,"subtract");function Bt(e,t){var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function Qt(e){var t;return void 0===e?this._locale._abbr:(null!=(t=lt(e))&&(this._locale=t),this)}c.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",c.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var Xt=n("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function Kt(){return this._locale}function en(e,t){I(0,[e,e.length],0,t)}function tn(e,t,n,s,i){var r;return null==e?Ie(this,s,i).year:((r=Ae(e,s,i))<t&&(t=r),function(e,t,n,s,i){var r=Ee(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}I(0,["gg",2],0,function(){return this.weekYear()%100}),I(0,["GG",2],0,function(){return this.isoWeekYear()%100}),en("gggg","weekYear"),en("ggggg","weekYear"),en("GGGG","isoWeekYear"),en("GGGGG","isoWeekYear"),H("weekYear","gg"),H("isoWeekYear","GG"),L("weekYear",1),L("isoWeekYear",1),ue("G",se),ue("g",se),ue("GG",B,z),ue("gg",B,z),ue("GGGG",ee,q),ue("gggg",ee,q),ue("GGGGG",te,J),ue("ggggg",te,J),fe(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=k(e)}),fe(["gg","GG"],function(e,t,n,s){t[s]=c.parseTwoDigitYear(e)}),I("Q",0,"Qo","quarter"),H("quarter","Q"),L("quarter",7),ue("Q",Z),ce("Q",function(e,t){t[_e]=3*(k(e)-1)}),I("D",["DD",2],"Do","date"),H("date","D"),L("date",9),ue("D",B),ue("DD",B,z),ue("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ce(["D","DD"],ye),ce("Do",function(e,t){t[ye]=k(e.match(B)[0])});var nn=Te("Date",!0);I("DDD",["DDDD",3],"DDDo","dayOfYear"),H("dayOfYear","DDD"),L("dayOfYear",4),ue("DDD",K),ue("DDDD",$),ce(["DDD","DDDD"],function(e,t,n){n._dayOfYear=k(e)}),I("m",["mm",2],0,"minute"),H("minute","m"),L("minute",14),ue("m",B),ue("mm",B,z),ce(["m","mm"],pe);var sn=Te("Minutes",!1);I("s",["ss",2],0,"second"),H("second","s"),L("second",15),ue("s",B),ue("ss",B,z),ce(["s","ss"],ve);var rn,an=Te("Seconds",!1);for(I("S",0,0,function(){return~~(this.millisecond()/100)}),I(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),I(0,["SSS",3],0,"millisecond"),I(0,["SSSS",4],0,function(){return 10*this.millisecond()}),I(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),I(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),I(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),I(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),I(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),H("millisecond","ms"),L("millisecond",16),ue("S",K,Z),ue("SS",K,z),ue("SSS",K,$),rn="SSSS";rn.length<=9;rn+="S")ue(rn,ne);function on(e,t){t[we]=k(1e3*("0."+e))}for(rn="S";rn.length<=9;rn+="S")ce(rn,on);var un=Te("Milliseconds",!1);I("z",0,0,"zoneAbbr"),I("zz",0,0,"zoneName");var ln=M.prototype;function dn(e){return e}ln.add=qt,ln.calendar=function(e,t){var n=e||Tt(),s=Nt(n,this).startOf("day"),i=c.calendarFormat(this,s)||"sameElse",r=t&&(x(t[i])?t[i].call(this,n):t[i]);return this.format(r||this.localeData().calendar(i,this,Tt(n)))},ln.clone=function(){return new M(this)},ln.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Nt(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=R(t)){case"year":r=Bt(this,s)/12;break;case"month":r=Bt(this,s);break;case"quarter":r=Bt(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:D(r)},ln.endOf=function(e){return void 0===(e=R(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},ln.format=function(e){e||(e=this.isUtc()?c.defaultFormatUtc:c.defaultFormat);var t=A(this,e);return this.localeData().postformat(t)},ln.from=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.fromNow=function(e){return this.from(Tt(),e)},ln.to=function(e,t){return this.isValid()&&(S(e)&&e.isValid()||Tt(e).isValid())?At({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},ln.toNow=function(e){return this.to(Tt(),e)},ln.get=function(e){return x(this[e=R(e)])?this[e]():this},ln.invalidAt=function(){return g(this).overflow},ln.isAfter=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},ln.isBefore=function(e,t){var n=S(e)?e:Tt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=R(l(t)?"millisecond":t))?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},ln.isBetween=function(e,t,n,s){return("("===(s=s||"()")[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))},ln.isSame=function(e,t){var n,s=S(e)?e:Tt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=R(t||"millisecond"))?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},ln.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},ln.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},ln.isValid=function(){return p(this)},ln.lang=Xt,ln.locale=Qt,ln.localeData=Kt,ln.max=bt,ln.min=xt,ln.parsingFlags=function(){return _({},g(this))},ln.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=C(e)),s=0;s<n.length;s++)this[n[s].unit](e[n[s].unit]);else if(x(this[e=R(e)]))return this[e](t);return this},ln.startOf=function(e){switch(e=R(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},ln.subtract=Jt,ln.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},ln.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},ln.toDate=function(){return new Date(this.valueOf())},ln.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||9999<n.year()?A(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):x(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",A(n,"Z")):A(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},ln.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',s=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i=t+'[")]';return this.format(n+s+"-MM-DD[T]HH:mm:ss.SSS"+i)},ln.toJSON=function(){return this.isValid()?this.toISOString():null},ln.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},ln.unix=function(){return Math.floor(this.valueOf()/1e3)},ln.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},ln.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},ln.year=Oe,ln.isLeapYear=function(){return ke(this.year())},ln.weekYear=function(e){return tn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},ln.isoWeekYear=function(e){return tn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},ln.quarter=ln.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},ln.month=Fe,ln.daysInMonth=function(){return Pe(this.year(),this.month())},ln.week=ln.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},ln.isoWeek=ln.isoWeeks=function(e){var t=Ie(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},ln.weeksInYear=function(){var e=this.localeData()._week;return Ae(this.year(),e.dow,e.doy)},ln.isoWeeksInYear=function(){return Ae(this.year(),1,4)},ln.date=nn,ln.day=ln.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t,n,s=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(t=e,n=this.localeData(),e="string"!=typeof t?t:isNaN(t)?"number"==typeof(t=n.weekdaysParse(t))?t:null:parseInt(t,10),this.add(e-s,"d")):s},ln.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},ln.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=(n=e,s=this.localeData(),"string"==typeof n?s.weekdaysParse(n)%7||7:isNaN(n)?null:n);return this.day(this.day()%7?t:t-7)}return this.day()||7;var n,s},ln.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},ln.hour=ln.hours=tt,ln.minute=ln.minutes=sn,ln.second=ln.seconds=an,ln.millisecond=ln.milliseconds=un,ln.utcOffset=function(e,t,n){var s,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Ut(re,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(s=Gt(this)),this._offset=e,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==e&&(!t||this._changeInProgress?$t(this,At(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,c.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Gt(this)},ln.utc=function(e){return this.utcOffset(0,e)},ln.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Gt(this),"m")),this},ln.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Ut(ie,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},ln.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Tt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},ln.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},ln.isLocal=function(){return!!this.isValid()&&!this._isUTC},ln.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},ln.isUtc=Vt,ln.isUTC=Vt,ln.zoneAbbr=function(){return this._isUTC?"UTC":""},ln.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},ln.dates=n("dates accessor is deprecated. Use date instead.",nn),ln.months=n("months accessor is deprecated. Use month instead",Fe),ln.years=n("years accessor is deprecated. Use year instead",Oe),ln.zone=n("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),ln.isDSTShifted=n("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!l(this._isDSTShifted))return this._isDSTShifted;var e={};if(w(e,this),(e=Yt(e))._a){var t=e._isUTC?y(e._a):Tt(e._a);this._isDSTShifted=this.isValid()&&0<a(e._a,t.toArray())}else this._isDSTShifted=!1;return this._isDSTShifted});var hn=P.prototype;function cn(e,t,n,s){var i=lt(),r=y().set(s,t);return i[n](r,e)}function fn(e,t,n){if(d(e)&&(t=e,e=void 0),e=e||"",null!=t)return cn(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=cn(e,s,n,"month");return i}function mn(e,t,n,s){"boolean"==typeof e?d(t)&&(n=t,t=void 0):(t=e,e=!1,d(n=t)&&(n=t,t=void 0)),t=t||"";var i,r=lt(),a=e?r._week.dow:0;if(null!=n)return cn(t,(n+a)%7,s,"day");var o=[];for(i=0;i<7;i++)o[i]=cn(t,(i+a)%7,s,"day");return o}hn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return x(s)?s.call(t,n):s},hn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},hn.invalidDate=function(){return this._invalidDate},hn.ordinal=function(e){return this._ordinal.replace("%d",e)},hn.preparse=dn,hn.postformat=dn,hn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return x(i)?i(e,t,n,s):i.replace(/%d/i,e)},hn.pastFuture=function(e,t){var n=this._relativeTime[0<e?"future":"past"];return x(n)?n(t):n.replace(/%s/i,t)},hn.set=function(e){var t,n;for(n in e)x(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},hn.months=function(e,t){return e?o(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||We).test(t)?"format":"standalone"][e.month()]:o(this._months)?this._months:this._months.standalone},hn.monthsShort=function(e,t){return e?o(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[We.test(t)?"format":"standalone"][e.month()]:o(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},hn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=y([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=Ye.call(this._shortMonthsParse,a))?i:-1!==(i=Ye.call(this._longMonthsParse,a))?i:null:-1!==(i=Ye.call(this._longMonthsParse,a))?i:-1!==(i=Ye.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=y([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},hn.monthsRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsStrictRegex:this._monthsRegex):(m(this,"_monthsRegex")||(this._monthsRegex=Ue),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},hn.monthsShortRegex=function(e){return this._monthsParseExact?(m(this,"_monthsRegex")||Ne.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(m(this,"_monthsShortRegex")||(this._monthsShortRegex=Le),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},hn.week=function(e){return Ie(e,this._week.dow,this._week.doy).week},hn.firstDayOfYear=function(){return this._week.doy},hn.firstDayOfWeek=function(){return this._week.dow},hn.weekdays=function(e,t){return e?o(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:o(this._weekdays)?this._weekdays:this._weekdays.standalone},hn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},hn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},hn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=y([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:null:-1!==(i=Ye.call(this._minWeekdaysParse,a))?i:-1!==(i=Ye.call(this._weekdaysParse,a))?i:-1!==(i=Ye.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=y([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},hn.weekdaysRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(m(this,"_weekdaysRegex")||(this._weekdaysRegex=$e),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},hn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(m(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=qe),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},hn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(m(this,"_weekdaysRegex")||Be.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(m(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Je),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},hn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},hn.meridiem=function(e,t,n){return 11<e?n?"pm":"PM":n?"am":"AM"},ot("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===k(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),c.lang=n("moment.lang is deprecated. Use moment.locale instead.",ot),c.langData=n("moment.langData is deprecated. Use moment.localeData instead.",lt);var _n=Math.abs;function yn(e,t,n,s){var i=At(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function gn(e){return e<0?Math.floor(e):Math.ceil(e)}function pn(e){return 4800*e/146097}function vn(e){return 146097*e/4800}function wn(e){return function(){return this.as(e)}}var Mn=wn("ms"),Sn=wn("s"),Dn=wn("m"),kn=wn("h"),Yn=wn("d"),On=wn("w"),Tn=wn("M"),xn=wn("y");function bn(e){return function(){return this.isValid()?this._data[e]:NaN}}var Pn=bn("milliseconds"),Wn=bn("seconds"),Hn=bn("minutes"),Rn=bn("hours"),Cn=bn("days"),Fn=bn("months"),Ln=bn("years");var Un=Math.round,Nn={ss:44,s:45,m:45,h:22,d:26,M:11};var Gn=Math.abs;function Vn(e){return(0<e)-(e<0)||+e}function En(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Gn(this._milliseconds)/1e3,s=Gn(this._days),i=Gn(this._months);t=D((e=D(n/60))/60),n%=60,e%=60;var r=D(i/12),a=i%=12,o=s,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",h=this.asSeconds();if(!h)return"P0D";var c=h<0?"-":"",f=Vn(this._months)!==Vn(h)?"-":"",m=Vn(this._days)!==Vn(h)?"-":"",_=Vn(this._milliseconds)!==Vn(h)?"-":"";return c+"P"+(r?f+r+"Y":"")+(a?f+a+"M":"")+(o?m+o+"D":"")+(u||l||d?"T":"")+(u?_+u+"H":"")+(l?_+l+"M":"")+(d?_+d+"S":"")}var In=Ht.prototype;return In.isValid=function(){return this._isValid},In.abs=function(){var e=this._data;return this._milliseconds=_n(this._milliseconds),this._days=_n(this._days),this._months=_n(this._months),e.milliseconds=_n(e.milliseconds),e.seconds=_n(e.seconds),e.minutes=_n(e.minutes),e.hours=_n(e.hours),e.months=_n(e.months),e.years=_n(e.years),this},In.add=function(e,t){return yn(this,e,t,1)},In.subtract=function(e,t){return yn(this,e,t,-1)},In.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=R(e))||"year"===e)return t=this._days+s/864e5,n=this._months+pn(t),"month"===e?n:n/12;switch(t=this._days+Math.round(vn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},In.asMilliseconds=Mn,In.asSeconds=Sn,In.asMinutes=Dn,In.asHours=kn,In.asDays=Yn,In.asWeeks=On,In.asMonths=Tn,In.asYears=xn,In.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*k(this._months/12):NaN},In._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return 0<=r&&0<=a&&0<=o||r<=0&&a<=0&&o<=0||(r+=864e5*gn(vn(o)+a),o=a=0),u.milliseconds=r%1e3,e=D(r/1e3),u.seconds=e%60,t=D(e/60),u.minutes=t%60,n=D(t/60),u.hours=n%24,o+=i=D(pn(a+=D(n/24))),a-=gn(vn(i)),s=D(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},In.clone=function(){return At(this)},In.get=function(e){return e=R(e),this.isValid()?this[e+"s"]():NaN},In.milliseconds=Pn,In.seconds=Wn,In.minutes=Hn,In.hours=Rn,In.days=Cn,In.weeks=function(){return D(this.days()/7)},In.months=Fn,In.years=Ln,In.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t,n,s,i,r,a,o,u,l,d,h,c=this.localeData(),f=(n=!e,s=c,i=At(t=this).abs(),r=Un(i.as("s")),a=Un(i.as("m")),o=Un(i.as("h")),u=Un(i.as("d")),l=Un(i.as("M")),d=Un(i.as("y")),(h=r<=Nn.ss&&["s",r]||r<Nn.s&&["ss",r]||a<=1&&["m"]||a<Nn.m&&["mm",a]||o<=1&&["h"]||o<Nn.h&&["hh",o]||u<=1&&["d"]||u<Nn.d&&["dd",u]||l<=1&&["M"]||l<Nn.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=n,h[3]=0<+t,h[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,h));return e&&(f=c.pastFuture(+this,f)),c.postformat(f)},In.toISOString=En,In.toString=En,In.toJSON=En,In.locale=Qt,In.localeData=Kt,In.toIsoString=n("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",En),In.lang=Xt,I("X",0,0,"unix"),I("x",0,0,"valueOf"),ue("x",se),ue("X",/[+-]?\d+(\.\d{1,3})?/),ce("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),ce("x",function(e,t,n){n._d=new Date(k(e))}),c.version="2.22.2",e=Tt,c.fn=ln,c.min=function(){return Pt("isBefore",[].slice.call(arguments,0))},c.max=function(){return Pt("isAfter",[].slice.call(arguments,0))},c.now=function(){return Date.now?Date.now():+new Date},c.utc=y,c.unix=function(e){return Tt(1e3*e)},c.months=function(e,t){return fn(e,t,"months")},c.isDate=h,c.locale=ot,c.invalid=v,c.duration=At,c.isMoment=S,c.weekdays=function(e,t,n){return mn(e,t,n,"weekdays")},c.parseZone=function(){return Tt.apply(null,arguments).parseZone()},c.localeData=lt,c.isDuration=Rt,c.monthsShort=function(e,t){return fn(e,t,"monthsShort")},c.weekdaysMin=function(e,t,n){return mn(e,t,n,"weekdaysMin")},c.defineLocale=ut,c.updateLocale=function(e,t){if(null!=t){var n,s,i=nt;null!=(s=at(e))&&(i=s._config),(n=new P(t=b(i,t))).parentLocale=st[e],st[e]=n,ot(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},c.locales=function(){return s(st)},c.weekdaysShort=function(e,t,n){return mn(e,t,n,"weekdaysShort")},c.normalizeUnits=R,c.relativeTimeRounding=function(e){return void 0===e?Un:"function"==typeof e&&(Un=e,!0)},c.relativeTimeThreshold=function(e,t){return void 0!==Nn[e]&&(void 0===t?Nn[e]:(Nn[e]=t,"s"===e&&(Nn.ss=t-1),!0))},c.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},c.prototype=ln,c.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"YYYY-[W]WW",MONTH:"YYYY-MM"},c});
!function(t,e){"use strict";"function"==typeof define&&define.amd?define(["moment"],e):"object"==typeof module&&module.exports?module.exports=e(require("moment")):e(t.moment)}(this,function(s){"use strict";var e,i={},f={},u={},c={},t=s.version.split("."),n=+t[0],o=+t[1];function a(t){return 96<t?t-87:64<t?t-29:t-48}function r(t){var e=0,n=t.split("."),o=n[0],r=n[1]||"",s=1,i=0,f=1;for(45===t.charCodeAt(0)&&(f=-(e=1));e<o.length;e++)i=60*i+a(o.charCodeAt(e));for(e=0;e<r.length;e++)s/=60,i+=a(r.charCodeAt(e))*s;return i*f}function h(t){for(var e=0;e<t.length;e++)t[e]=r(t[e])}function l(t,e){var n,o=[];for(n=0;n<e.length;n++)o[n]=t[e[n]];return o}function p(t){var e=t.split("|"),n=e[2].split(" "),o=e[3].split(""),r=e[4].split(" ");return h(n),h(o),h(r),function(t,e){for(var n=0;n<e;n++)t[n]=Math.round((t[n-1]||0)+6e4*t[n]);t[e-1]=1/0}(r,o.length),{name:e[0],abbrs:l(e[1].split(" "),o),offsets:l(n,o),untils:r,population:0|e[5]}}function d(t){t&&this._set(p(t))}function m(t){var e=t.toTimeString(),n=e.match(/\([a-z ]+\)/i);"GMT"===(n=n&&n[0]?(n=n[0].match(/[A-Z]/g))?n.join(""):void 0:(n=e.match(/[A-Z]{3,5}/g))?n[0]:void 0)&&(n=void 0),this.at=+t,this.abbr=n,this.offset=t.getTimezoneOffset()}function v(t){this.zone=t,this.offsetScore=0,this.abbrScore=0}function z(t,e){for(var n,o;o=6e4*((e.at-t.at)/12e4|0);)(n=new m(new Date(t.at+o))).offset===t.offset?t=n:e=n;return t}function b(t,e){return t.offsetScore!==e.offsetScore?t.offsetScore-e.offsetScore:t.abbrScore!==e.abbrScore?t.abbrScore-e.abbrScore:e.zone.population-t.zone.population}function g(t,e){var n,o;for(h(e),n=0;n<e.length;n++)o=e[n],c[o]=c[o]||{},c[o][t]=!0}function _(){try{var t=Intl.DateTimeFormat().resolvedOptions().timeZone;if(t&&3<t.length){var e=u[w(t)];if(e)return e;M("Moment Timezone found "+t+" from the Intl api, but did not have that data loaded.")}}catch(t){}var n,o,r,s=function(){var t,e,n,o=(new Date).getFullYear()-2,r=new m(new Date(o,0,1)),s=[r];for(n=1;n<48;n++)(e=new m(new Date(o,n,1))).offset!==r.offset&&(t=z(r,e),s.push(t),s.push(new m(new Date(t.at+6e4)))),r=e;for(n=0;n<4;n++)s.push(new m(new Date(o+n,0,1))),s.push(new m(new Date(o+n,6,1)));return s}(),i=s.length,f=function(t){var e,n,o,r=t.length,s={},i=[];for(e=0;e<r;e++)for(n in o=c[t[e].offset]||{})o.hasOwnProperty(n)&&(s[n]=!0);for(e in s)s.hasOwnProperty(e)&&i.push(u[e]);return i}(s),a=[];for(o=0;o<f.length;o++){for(n=new v(S(f[o]),i),r=0;r<i;r++)n.scoreOffsetAt(s[r]);a.push(n)}return a.sort(b),0<a.length?a[0].zone.name:void 0}function w(t){return(t||"").toLowerCase().replace(/\//g,"_")}function y(t){var e,n,o,r;for("string"==typeof t&&(t=[t]),e=0;e<t.length;e++)r=w(n=(o=t[e].split("|"))[0]),i[r]=t[e],u[r]=n,g(r,o[2].split(" "))}function S(t,e){t=w(t);var n,o=i[t];return o instanceof d?o:"string"==typeof o?(o=new d(o),i[t]=o):f[t]&&e!==S&&(n=S(f[t],S))?((o=i[t]=new d)._set(n),o.name=u[t],o):null}function O(t){var e,n,o,r;for("string"==typeof t&&(t=[t]),e=0;e<t.length;e++)o=w((n=t[e].split("|"))[0]),r=w(n[1]),f[o]=r,u[o]=n[0],f[r]=o,u[r]=n[1]}function A(t){var e="X"===t._f||"x"===t._f;return!(!t._a||void 0!==t._tzm||e)}function M(t){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(t)}function j(t){var e=Array.prototype.slice.call(arguments,0,-1),n=arguments[arguments.length-1],o=S(n),r=s.utc.apply(null,e);return o&&!s.isMoment(t)&&A(r)&&r.add(o.parse(r),"minutes"),r.tz(n),r}(n<2||2===n&&o<6)&&M("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+s.version+". See momentjs.com"),d.prototype={_set:function(t){this.name=t.name,this.abbrs=t.abbrs,this.untils=t.untils,this.offsets=t.offsets,this.population=t.population},_index:function(t){var e,n=+t,o=this.untils;for(e=0;e<o.length;e++)if(n<o[e])return e},parse:function(t){var e,n,o,r,s=+t,i=this.offsets,f=this.untils,a=f.length-1;for(r=0;r<a;r++)if(e=i[r],n=i[r+1],o=i[r?r-1:r],e<n&&j.moveAmbiguousForward?e=n:o<e&&j.moveInvalidForward&&(e=o),s<f[r]-6e4*e)return i[r];return i[a]},abbr:function(t){return this.abbrs[this._index(t)]},offset:function(t){return M("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(t)]},utcOffset:function(t){return this.offsets[this._index(t)]}},v.prototype.scoreOffsetAt=function(t){this.offsetScore+=Math.abs(this.zone.utcOffset(t.at)-t.offset),this.zone.abbr(t.at).replace(/[^A-Z]/g,"")!==t.abbr&&this.abbrScore++},j.version="0.5.17",j.dataVersion="",j._zones=i,j._links=f,j._names=u,j.add=y,j.link=O,j.load=function(t){y(t.zones),O(t.links),j.dataVersion=t.version},j.zone=S,j.zoneExists=function t(e){return t.didShowError||(t.didShowError=!0,M("moment.tz.zoneExists('"+e+"') has been deprecated in favor of !moment.tz.zone('"+e+"')")),!!S(e)},j.guess=function(t){return e&&!t||(e=_()),e},j.names=function(){var t,e=[];for(t in u)u.hasOwnProperty(t)&&(i[t]||i[f[t]])&&u[t]&&e.push(u[t]);return e.sort()},j.Zone=d,j.unpack=p,j.unpackBase60=r,j.needsOffset=A,j.moveInvalidForward=!0,j.moveAmbiguousForward=!1;var D,x=s.fn;function T(t){return function(){return this._z?this._z.abbr(this):t.call(this)}}s.tz=j,s.defaultZone=null,s.updateOffset=function(t,e){var n,o=s.defaultZone;void 0===t._z&&(o&&A(t)&&!t._isUTC&&(t._d=s.utc(t._a)._d,t.utc().add(o.parse(t),"minutes")),t._z=o),t._z&&(n=t._z.utcOffset(t),Math.abs(n)<16&&(n/=60),void 0!==t.utcOffset?t.utcOffset(-n,e):t.zone(n,e))},x.tz=function(t,e){return t?(this._z=S(t),this._z?s.updateOffset(this,e):M("Moment Timezone has no data for "+t+". See http://momentjs.com/timezone/docs/#/data-loading/."),this):this._z?this._z.name:void 0},x.zoneName=T(x.zoneName),x.zoneAbbr=T(x.zoneAbbr),x.utc=(D=x.utc,function(){return this._z=null,D.apply(this,arguments)}),s.tz.setDefault=function(t){return(n<2||2===n&&o<9)&&M("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+s.version+"."),s.defaultZone=t?S(t):null,s};var Z=s.momentProperties;return"[object Array]"===Object.prototype.toString.call(Z)?(Z.push("_z"),Z.push("_a")):Z&&(Z._z=null),s});
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

/**
 * @fileOverview Provides utility functions when in edit mdoe.
 * @author: Tom Maton <thomas.maton@akqa.com>
 * @copyright: AKQA 2014
 * @namespace barclays.bcpublic
 */

var barclays = barclays || {};
barclays.bcpublic = barclays.bcpublic || {};

/**
* This is the description for my class.
*
* @class edit
* @constructor
*/
barclays.bcpublic.edit = (function($) { // jshint ignore:line
    'use strict';

    var tabs,
        dlgRefreshInProgress,

    /**
     * format date or month to two digits by adding zero in front single digit string
     * @param  {Mixed} month or day
     * @return {String}
     */
    formatToTwoDigits = function(s){
        s = s.toString();
        if (s.length === 1){
            s = '0' + s;
        }
        return s;
    },

    /**
     * Global method to show tabs within the CQ dialog by id
     *
     * @method  showTabs
     * @param {String} dialog CQ dialog object
     * @param {String} array of tab ids to show
     */
    showTab = function(component, tab) {
        component.findParentByType('tabpanel').unhideTabStripItem(tab);
    },

    /**
     * Global method to hide tabs within the CQ dialog by id
     *
     * @method hideTabs
     * @param {String} dialog CQ dialog object
     * @param {String} array of tab ids to show
     */
    hideTab = function(component, tab) {        
        component.findParentByType('tabpanel').hideTabStripItem(tab);
        
    },

    /**
     * Global method to enable a tabb within the CQ dialog by id
     *
     * @method hideTabs
     * @param {String} component Current component calling the enableTab method
     * @param {String} tab index of the tab to be enabled
     */
    enableTab = function(component, tab) {   
        if(tabs === undefined) {
            tabs = component.findParentByType('tabpanel').find('baseCls', 'panel-tab');
        }     
        
        tabs[tab].enable();
    },

    /**
     * Global method to disable a tab within the CQ dialog by id
     *
     * @method hideTabs
     * @param {String} component Current component calling the disableTab method
     * @param {String} tab index of the tab to be disabled
     */
    disableTab = function(component, tab) {        
        if(tabs === undefined) {
            tabs = component.findParentByType('tabpanel').find('baseCls', 'panel-tab');
        } 

        tabs[tab].disable();
    },

    /**
     * Retrive a panel within the CQ dialog by id
     *
     * @method disableXtype
     * @param {String} id Id of the panel to retieve
     */
    disableXtype = function(component) {
        component.setDisabled(true);
        component.setValue(null);
    },

    /**
     * Retrive a panel within the CQ dialog by id
     *
     * @method enableXtype
     * @param {String} id Id of the panel to retieve
     */
    enableXtype = function(component) {
        component.setDisabled(false);
    },

    /**
     * Retrive a panel within the CQ dialog by id
     *
     * @method toggleXtypeById
     * @param {Object} component oject of the component
     * @param {String} id Id of the panel to retieve
     */
    toggleXtype = function(component, id, alternateId) {
        var componentItems = component.ownerCt.items.items,
            xtype = findByXtypeName(componentItems, id),
            alternateXtype = findByXtypeName(componentItems, alternateId);

        if(xtype !== undefined) {    
            xtype.setVisible(true);
            alternateXtype.setVisible(false);
        }
    },

    /**
     * Retrive a panel within the CQ dialog by id
     *
     * @method hideXtype
     * @param {Object} component oject of the component
     * @param {String} id Id of the panel to retieve
     */
    hideXtype = function(component) {
        component.setVisible(false);
    },

    /**
     * Retrive a panel within the CQ dialog by id
     *
     * @method showXtype
     * @param {Object} component oject of the component
     * @param {String} id Id of the panel to retieve
     */
    showXtype = function(component) {
        component.setVisible(true);
    },

    /**
     * Retrive a panel within the CQ dialog by id
     *
     * @method showTabs
     * @param {String} id Id of the panel to retieve
     */
    getPanel = function(id) {
        var parentDialog = this.findParentByType('dialog'),
            panel = null;
        
        
        if (parentDialog) {
            var found = parentDialog.findById(id);
            if (found) {
                panel = found;
            }
        }
        
        return panel;
    },
    
    /**
     * Locates an xtype by its associated name property
     *
     * @method findByXtypeName
     * @param {array} items Array of xtypes in the CQ dialog
     * @param {string} xtypeName Name associated with the xtype
     */
    findByXtypeName = function(items, xtypeName){
        var itemLength = items.length -1,
            i;
        
        for (i = itemLength; i >= 0; i--) {
            if(items[i].name !== undefined) {
                if(items[i].name.substring(2) === xtypeName) {
                    return items[i];
                }
            }
        }
    },

    /**
     * Char Count returns a message of how many character left
     * @param  {[type]} message message to display when character count display and to replace special characters
     * @param  {[type]} limit   the limit of the textbox
     * @param  {[type]} value   value entered
     * @param  {[type]} errorMessage   Error message to be displayed
     * @return {[type]} the return message of character count message
     */
    characterCount = function(limit, value, maxLengthMessage) {
        var updateMessage = document.createElement('div'),
            characterCountWrapper = document.createElement('span'),
            maxLengthWrapper = document.createElement('span'),
            contentLength = (value === undefined) ? 0 : value.length;

        characterCountWrapper.setAttribute('class', 'message--character-count');
        if(contentLength > limit) {
            characterCountWrapper.setAttribute('class', 'message--character-count message--character-count-error');
        }
        characterCountWrapper.innerHTML = limit - contentLength;

        maxLengthWrapper.setAttribute('class', 'message--max-length');
        maxLengthWrapper.innerHTML = maxLengthMessage;

        updateMessage.appendChild(maxLengthWrapper);
        updateMessage.appendChild(characterCountWrapper);
        
        return updateMessage.innerHTML;
    },

    /**
     * mutltifield count
     * @param  {[type]} dialog    Dialog component object
     * @param  {[type]} component Component object
     * @param  {[type]} count     Current count of multifield items
     * @param  {[type]} limit     limit
     * @param  {[type]} minmax    Min/Max limit
     * @return {[type]}           [description]
     */
    multifieldCount = function(selector) {
        return document.querySelectorAll(selector).length || 0;
        
    },

    /**
     * Applied to textfields
     */
    clearWhitespace = function(fld) {
        if (fld.getValue().match(/^\s+$/)) {
            fld.setValue('');
        }
    },

    // Do hard resize on type change
    // 1. Wait some time for feilds to load
    // 2. Update dimensions of the dialog triggering the resize
    // 3. Do layout to follow up with layout updates
    dlgHardResize = function(fld) {
        var dlg = fld.findParentByType('bhsdialog'),
            dimensions = dlg.getSize(),
            width = dimensions.width ? dimensions.width : 0;

        // Don't run this function if the timeout hasn't finished yet
        if (dlgRefreshInProgress) {
            return;
        }
        dlgRefreshInProgress = true;

        dlg.setSize(width + 1);
        setTimeout(function() {
            dlg.setSize(width);
            dlgRefreshInProgress = false;
        }, 100);
    },

    /**
     * Transform url into path.
     * 
     * /content/helpsupportpublic/migration-new/Accounts/Added-Features/mobile_claim.html?section=red
     * into
     * /content/helpsupportpublic/migration-new/Accounts/Added-Features/mobile_claim
     * 
     * @param  {String} url Url to transform
     * @return {String}     Path
     */
    urlToPath = function(url) {
        return url.replace(/(\.html.*)/, '');
    };

    return {
        showTab: showTab,
        hideTab: hideTab,
        enableTab: enableTab,
        disableTab: disableTab,
        enableXtype: enableXtype,
        disableXtype: disableXtype,
        findByXtypeName: findByXtypeName,
        getPanel: getPanel,
        multifieldCount: multifieldCount,
        toggleXtype: toggleXtype,
        showXtype: showXtype,
        hideXtype: hideXtype,
        characterCount: characterCount,
        urlToPath: urlToPath,
        clearWhitespace: clearWhitespace,
        formatToTwoDigits: formatToTwoDigits,
        dlgHardResize: dlgHardResize
    };
})(jQuery);


/**
 * @fileOverview Provides utility functions when in live mode.
 * @author: Franco Parente
 * @namespace barclays.utils
 */

barclays.utils = (function() {
    'use strict';

    /**
     * Global debouce not to be confused with the smartresize - this can be used with key events, scrolling, resizing
     *
     * @method  debounce
     * */
    var debounce = function (func, threshold, execAsap) {
        var timeout;

        return function debounced () {
            var obj = this,
                args = arguments;

            function delayed () {
                if (!execAsap) {
                    func.apply(obj, args);
                    timeout = null;
                }
            }

            if (timeout) {
                clearTimeout(timeout);
            } else if (execAsap) {
                func.apply(obj, args);
            }

            timeout = setTimeout(delayed, threshold || 100);
        };
    };

    var getUrlParams = function () {
        var match,
            pl = /\+/g,  // Regex for replacing addition symbol with a space
            search = /([^&=]+)=?([^&]*)/g,
            decode = function (s) {
                return decodeURIComponent(s.replace(pl, " "));
            },
            query = window.location.search.substring(1);

        var urlParams = {};
        while (match = search.exec(query)) {
            urlParams[decode(match[1])] = decode(match[2]);
        }
        return urlParams;
    };

    return{
        debounce : debounce,
        getUrlParams: getUrlParams
    }

})();
/* global Modernizr, CQURLInfo */
/**
 * @fileOverview Global script calls.
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
* Global code to be reused across the site.
*
* @class global
* @constructor
*/
bcpublic.helpandsupport.global = (function($) {
    'use strict';

    !window.addEventListener && (function (WindowPrototype, DocumentPrototype, ElementPrototype, addEventListener, removeEventListener, dispatchEvent, registry) {
        WindowPrototype[addEventListener] = DocumentPrototype[addEventListener] = ElementPrototype[addEventListener] = function (type, listener) {
            var target = this;

            registry.unshift([target, type, listener, function (event) {
                event.currentTarget = target;
                event.preventDefault = function () { event.returnValue = false; };
                event.stopPropagation = function () { event.cancelBubble = true; };
                event.target = event.srcElement || target;

                listener.call(target, event);
            }]);

            this.attachEvent('on' + type, registry[0][3]);
        };

        WindowPrototype[removeEventListener] = DocumentPrototype[removeEventListener] = ElementPrototype[removeEventListener] = function (type, listener) {
            for (var index = 0, register; register = registry[index]; ++index) { //jshint ignore:line
                if (register[0] === this && register[1] === type && register[2] === listener) {
                    return this.detachEvent('on' + type, registry.splice(index, 1)[0][3]);
                }
            }
        };

        WindowPrototype[dispatchEvent] = DocumentPrototype[dispatchEvent] = ElementPrototype[dispatchEvent] = function (eventObject) {
            return this.fireEvent('on' + eventObject.type, eventObject);
        };
    })(Window.prototype, HTMLDocument.prototype, Element.prototype, 'addEventListener', 'removeEventListener', 'dispatchEvent', []); //jshint ignore:line

    if (!Date.prototype.toISOString) {
      (function() {
        function pad(number) {
          if (number < 10) {
            return '0' + number;
          }
          return number;
        }

        Date.prototype.toISOString = function() {
          return this.getUTCFullYear() +
            '-' + pad(this.getUTCMonth() + 1) +
            '-' + pad(this.getUTCDate()) +
            'T' + pad(this.getUTCHours()) +
            ':' + pad(this.getUTCMinutes()) +
            ':' + pad(this.getUTCSeconds()) +
            '.' + (this.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) +
            'Z';
        };
      }());
    }

    if (!String.prototype.capitalizeFirstLetter) {
    	// Add capitalise method to String
		String.prototype.capitalizeFirstLetter = function () {
			return this.charAt(0).toUpperCase() + this.slice(1);
		};
    }

    $.fn.extend({
        swapTag: function(tagName) {
            var $elm = $(this);
            var _attr = {};
            $.each($elm.prop('attributes'), function() {
                _attr[this.name] = this.value;
            });
            $elm.replaceWith(function() {
                return $('<'+ tagName +'/>', $.extend(_attr, {
                    html: $(this).html()
                }));
            });
        }
    });

    var resultsPagePath,

        activeBreakpoint,

        /**
         * Prefix URLs with the contextPath
         * @param  {String} url URL to externalize
         * @return {String}     Externalized URL
         */
        externalizeUrl = function(url) {
            if (window.CQURLInfo && CQURLInfo.contextPath) {
                // if the url does not start with the contextPath and is absolute (starts with '/')
                if (url.substr(0, 1) === '/' && url.indexOf(CQURLInfo.contextPath) !== 0) {
                    return CQURLInfo.contextPath + url;
                }
            }
            return url;
        },

        /**
        * Global debouce not to be confused with the smartresize - this can be used with key events, scrolling
        *
        * @method  debounce
        * */
        debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced () {
                var obj = this,
                    args = arguments;

                function delayed () {
                    if (!execAsap) {
                        func.apply(obj, args);
                        timeout = null;
                    }
                }

                if (timeout) {
                    clearTimeout(timeout);
                } else if (execAsap) {
                    func.apply(obj, args);
                }

            timeout = setTimeout(delayed, threshold || 100);
            };
        },

        /**
         * Finds taller elem in provided list and applys that height to all
         * @param  [] elems [List of elems]
         * @param  {} options  Config for syncing heights
         * @param  {$} filterCB Elem to exclude when calculating max height (useful for already open browse component)
         */
        syncHeights = function(elems, options, filterCB) {

            var maxHeight = 0,
                $elems = $(elems),
                $filteredElems = (filterCB) ? $elems.filter(filterCB) : $elems,
                elemHeight;

            options = options || {};

            $filteredElems.each(function() {
                var $this = $(this);

                if (options.resetHeights) {
                    $this.height('auto');
                }

                elemHeight = $this.height();
                if (elemHeight > maxHeight) {
                    maxHeight = elemHeight;
                }
            });


            if (options.maxHeight) {
                $elems.css('min-height', maxHeight);
            }
            else {
                $elems.height(maxHeight);
            }
        },
        /**
        * Gets screen width viewport, ideal for responsive changes within JavaScript
        *
        * @method  getScreenWidth
        * */
        getScreenWidth = function() {
            return window.innerWidth || document.body.clientWidth || document.documentElement.clientWidth;
        },
        /**
         * Gets screen height of viewport.
         */
        getScreenHeight = function() {
            return window.innerHeight|| document.body.clientHeight|| document.body.clientHeight;
        },
        /**
         * Checks if the viewport is Small or narrower as per Barclays grid
         */
        isSmallViewportOrNarrower = function() {
            return Modernizr.mq('(max-width: 599px)');
        },
        /**
         * Checks if the viewport is Medium or narrower as per Barclays grid
         */
        isMediumViewportOrNarrower = function() {
            return Modernizr.mq('(max-width: 799px)');
        },
        /**
         * Checks if the viewport is Medium r as per Barclays grid
         */
        isMediumViewport = function() {
            return Modernizr.mq('(min-width: 600px) and (max-width: 799px)');
        },
        /**
         * Checks if the viewport is Large
         */
        isLargeViewport = function() {
            return Modernizr.mq('(min-width: 800px) and (max-width: 999px)');
        },
        /**
         * Checks if the viewport is Large or wider as per Barclays grid
         */
        isLargeViewportOrWider = function() {
            return Modernizr.mq('(min-width: 800px)');
        },
        /**
         * Checks if the viewport is ExtraLarge or wider as per Barclays grid
         */
        isXLargeViewportOrWider = function() {
            return Modernizr.mq('(min-width: 1000px)');
        },
        /**
         * Test mq support
         * @return {Boolean} True if supports
         */
        supportsMq = function() {
            return Modernizr.mq('only all');
        },
        /**
         * Check if the browser support history API
         */
        historyAPI = function() {
            return !!(window.history && window.history.pushState);
        },

        /**
         * Get results page path
         * @return {String} Results page path
         */
        getResultsPagePath = function() {
            if (!resultsPagePath) {
                resultsPagePath = $('body').data('resultsPagePath');

                if ( (resultsPagePath !== undefined) && (!(/^\/content\/barclaysuk\/en/.test(window.location.pathname))) ) {
                    resultsPagePath = resultsPagePath.replace('/content/barclaysuk/en','');
                }
            }
            return resultsPagePath;
        },

        /**
         * IE Checks
         */
        isIE8 = function() {
            return ($('html').hasClass('lt-ie9') ? true : false);
        },

        /**
         * Get offset of the elem
         * @param  {$} elem Elem to get offset for
         * @param  {Boolean} top  If offset to be calculated from top or bottom. Default to bottom
         */
        getOffset = function(elem, top) {
            var offset = elem.offset().top;

            if (!top) {
                offset += elem.height();
            }

            return offset;
        },

        /**
         * Returns whether bottom of element is visible in viewport or below the viewport
         * @param  {$}  elem jQuery obj
         * @param  {int}  Optional buffer value (px)
         * @param  {Boolean} top  If offset to be calculated from top or bottom. Default to bottom
         * @return {Boolean}
         */
        isVisible = function(elem, buffer, top) {
            if (!elem) {
                return false;
            }

            var offset = getOffset(elem, top),
                windowScrollPos = $(window).scrollTop();


            if (buffer) {
                offset -= buffer;
            }

            if (offset > windowScrollPos) {
                return true;
            }

            return false;
        },

        getURLParam = function(param) {
               var query = window.location.search.substring(1),
                   vars = query.split('&'),
                   i;

               for (i=0; i < vars.length; i++) {
                    var pair = vars[i].split('=');

                    if (pair[0] === param) {
                        return pair[1];
                    }
               }
               return(false);
        },

        /**
         * Get a object of params in hash
         * @param  {String} url Url to parse
         * @return {String}     Value of the param
         */
        getHashFragmentParamObject = function(url) {
            var search = url.match(/#(.+)$/),
                vars = search ? search[1].split('&') : [],
                i, length, pair,
                params = {};

            for (i = 0, length = vars.length; i < length; i++) {
                pair = vars[i].split('=');
                params[pair[0]] = pair[1];
            }
            return params;
        },

        /**
         * Gets and stores the current viewport
         * @return {String} Breakpoint name
         */
        getActiveBreakpoint = function() {

            if (isSmallViewportOrNarrower()) {
                activeBreakpoint = 'small';
            }

            else if (isMediumViewport()) {
                activeBreakpoint = 'medium';
            }

            else if (isLargeViewport()) {
                activeBreakpoint = 'large';
            }
            else {
                activeBreakpoint = 'xlarge';
            }

            return activeBreakpoint;
        },

        /**
         * Emits new breakpoint changes so can easily bind to any future changes
         * $(document).on('breakpoint-medium') // resized to medium breakpoint
         */
        emitBreakpointChanges = function() {
            $(window).smartresize(function() {
                var oldBreakpoint = activeBreakpoint,
                    newBreakpoint = getActiveBreakpoint();

                if (oldBreakpoint !== newBreakpoint) {
                    $(document).trigger('breakpoint-' + newBreakpoint);
                }
            }, 500);
        },

        /**
         * Is runmode publish?
         * @return {Boolean} If runmode is publish
         */
        isRunModePublish = (function() {
            var runmode = !!$('body').data('runmodePublish');
            return function() {
                return runmode;
            };
        })(),

        /**
         * Simple cross-browser dispatch
         * @param  {Element} elm Element to disptach on
         * @param  {String} type Element name
         */
        dispatchEvent = function(elm, type) {
            var event;

            if (document.createEvent) {
                event = document.createEvent('Event');
                event.initEvent(type, false, true);
                elm.dispatchEvent(event);
            } else if (document.createEventObject) {
                event = document.createEventObject();
                event.expando = true;
                elm.fireEvent('on' + type, event);
            } else {
                event = new Event(type, {cancelable: true});
                elm.dispatchEvent(event);
            }
        },

        getI18nMessage = function(key, def, messages) {
            if (Object.prototype.hasOwnProperty.call(messages,key)) {
                return messages[key];
            }
            return def || key;
        },

        /**
        * Initialises any functions
        *
        * @method  init
        * */
        init = function() {

            /**
             * If browser back button was used, flush cache
             * This ensures that user will always see an accurate, up-to-date view based on their state
             */
            (function () {
                window.onpageshow = function(event) {
                    if (event.persisted) {
                        window.location.reload();
                    }
                };
            })();

            var homePage = !!$('#main > .home').length;

            getActiveBreakpoint();
            emitBreakpointChanges();
        };

    init();

    return {
        supportsMq: supportsMq,
        externalizeUrl: externalizeUrl,
        getScreenWidth: getScreenWidth,
        getScreenHeight: getScreenHeight,
        getActiveBreakpoint : getActiveBreakpoint,
        debounce: debounce,
        syncHeights: syncHeights,
        isSmallViewportOrNarrower: isSmallViewportOrNarrower,
        isMediumViewportOrNarrower: isMediumViewportOrNarrower,
        isMediumViewport: isMediumViewport,
        isLargeViewportOrWider: isLargeViewportOrWider,
        isXLargeViewportOrWider: isXLargeViewportOrWider,
        historyAPI: historyAPI,
        isIE8: isIE8,
        getResultsPagePath: getResultsPagePath,
        isVisible: isVisible,
        getURLParam: getURLParam,
        isRunModePublish: isRunModePublish,
        getHashFragmentParamObject: getHashFragmentParamObject,
        getI18nMessage: getI18nMessage,
        dispatchEvent: dispatchEvent
    };

})(jQuery);

/**
 * @fileOverview Contact Mapping based on the contact model and the client context
 * @author: Robert Fleischmann <robert.fleischmann@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.timeHelpers = (function(){

    'use strict';

    // checks is time (represented as UTC ios string)
    // falls into British Summer Time (BST)
    // which starts at Last Sunday of March 01:00:00 UTC
    // and ends at Last Sunday of October 00:59:59 UTC
    var isTimeWithinBST = function(UTCtimeIsoString){

        // month = ['march', 'october']
        var lastSundayOf = function(year, month){

            var lastDay = [31,28,31,30,31,30,31,31,30,31,30,31];
            if (year % 4 === 0){
                lastDay[1] = 29;
            }

            if (month === 'march'){
                month = 2;
            } else if (month === 'october'){
                month = 9;
            } else {
                return false;
            }

            var date = new Date(year, month, lastDay[month] );
            date.setDate(date.getDate() - date.getDay());
            return date.getDate();
        };

        var year  = parseInt( (UTCtimeIsoString.split('-'))[0] , 10),
            month = parseInt( (UTCtimeIsoString.split('-'))[1] , 10),
            day   = parseInt( ((UTCtimeIsoString.split('T'))[0].split('-'))[2], 10),
            hour  = parseInt(((UTCtimeIsoString.split('T'))[1].split(':'))[0], 10);

        // if current month is (april, may, june, july, august or september) its BST
        if (month > 3 && month < 10 ){
            return true;
        }

        // if current month is (jan, feb, november or december) its NOT BST
        if (month < 3 || month > 10){
            return false;
        }

        if (month === 3){
            var lastSundayOfMarch = lastSundayOf(year, 'march');
            if (day < lastSundayOfMarch){
                return false;
            } else if (day > lastSundayOfMarch){
                return true;
            } else if (day === lastSundayOfMarch){

                if ( hour === 0){
                    return false;
                } else {
                    return true;
                }
            }
        }

        if (month === 10){
            var lastSundayOfOctober = lastSundayOf(year, 'october');
            if (day < lastSundayOfOctober){
                return true;
            } else if (day > lastSundayOfOctober){
                return false;
            } else if (day === lastSundayOfOctober){

                if (hour === 0){
                    return true;
                } else {
                    return false;
                }
            }
        }
    };

    return {
        isTimeWithinBST : isTimeWithinBST
    };

})();
/**
 * @fileOverview Context resolver helpers
 * @author: Max Cherniavskyi <maxim.chernyavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

(function($) {
    /**
     * Key to read the context value from the localstorage
     * @type {String}
     */
    var lsKey = 'clientContext';
   
	var getParameterByName = function(name) {
		 // This is to get Url params
	       var url = window.location.href;
	       var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(url);
	       if (!results) { 
	           return undefined;
	       }
	       return results[1] || '';
	   };
    /**
     * Combine various resolvers
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers = {};

    /**
     * Cookie matching helper
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers.cookieResolver = {
        /**
         * Resolve cookie to a segment based on the config
         * @param  {String}     key     Config property name
         * @param  {Object}     config  Config for the data
         * @return {Promise}            Segment name
         */

        resolve: function(key, config) {
            var q = $.Deferred(),
            // Go through each segment and resolve the first matched element
            matchedSegments = $.grep(config, function(v) {
                // Implementation details are here
                // https://extranet.akqa.com/display/BARCHS/Segment+Resolve+component
            	var result =false;
            	// Branch finder corporate Header change.
            	var queryParam ='';
            	if(getParameterByName('site')){
            		queryParam = getParameterByName('site').toLowerCase();
            	}
            	if((document.cookie.indexOf(v.evaluation) > -1) || (queryParam.indexOf(v.evaluation.toLowerCase()) > -1)){
            		result =true;
            	}
                return result;
            });

            if (matchedSegments.length > 0) {
                // If there are matched segments, select the first one
                q.resolve(this.output(key, matchedSegments[0].segmentName));
            } else {
                // No matched segments
                q.resolve(this.output(key, null));
            }

            return q;
        },
        /**
         * Generate segment state
         * @param  {String} key   Key to resolve
         * @param  {String} value Resolved value
         * @return {Object}       Generated object
         */
        output: function(key, value) {
            return {
                segment: key,
                value: value
            };
        }
    };

    bcpublic.helpandsupport.contextHelpers.contextFactory = {
        /**
         * Default creator. Noop
         * @return {Deferred} A promise resolved with an empty object
         */
        creator: function() {
            var q = $.Deferred();
            q.resolve({});
            return q;
        },

        /**
         * Invoke creator to generate a context object
         * @return {Deferred} A promise with a context object
         */
        generate: function() {
            return this.creator();
        },

        /**
         * Apply a strategy to generate the context object
         * @param {Function} strategy A strategy to apply
         */
        setStrategy: function(strategy) {
            this.creator = strategy;
        }
    };

    /**
     * Context property names
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS = {
        CUSTOMER_SEGMENT: 'customerSegment',
        NAV_SEGMENT: 'navigationSegment',
        SECURE: 'secure',
        TIME: 'currentTime',
        BMB: 'bmbSmartCall',
        WEBCHAT_ENABLED: 'webchatEnabled',
        WEBCHAT_SUPPORTED: 'supportsWebchat',
        TIME_OPTION: 'timeOption'
    };

    /**
     * Get time from the server
     * @return {Promise} Promise of the time object
     */
    bcpublic.helpandsupport.contextHelpers.getServerTime = function() {
        var timeq = $.Deferred();

        $.ajax({
            url: '/services/componentlibrary/time.json',
            cache: false
        }).done(function(response) {
            timeq.resolve({
                segment: 'time',
                value: response.time
            });
        }).fail(function() {
            timeq.resolve({
                segment: 'time',
                value: ''
            });
        });

        return timeq;
    };


    /**
     * Strategies to generate the context object
     * @type {Object}
     */
    bcpublic.helpandsupport.contextHelpers.contextFactoryStrategies = {
        /**
         * Read data from localStorage
         * @return {Promise} Resolved when data is available
         */
        useLocalStorage: function() {
            var q = $.Deferred(),
                CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS,
                context = JSON.parse(window.localStorage.getItem(lsKey)),
                resolvedObj = {},
                // Nulls are stored as strings in html
                parseNulls = function(v) {
                    return v === 'null' ? null : v;
                };

            resolvedObj[CP.CUSTOMER_SEGMENT] = parseNulls(context.segments['cookieSegment']);
            resolvedObj[CP.NAV_SEGMENT] = parseNulls(context.segments['cookieNav']);
            resolvedObj[CP.SECURE] = parseNulls(context.segments['cookieSecure']);
            resolvedObj[CP.TIME] = parseNulls(context.segments['time']);
            resolvedObj[CP.TIME_OPTION] = parseNulls(context.timeOption);

            q.resolve(resolvedObj);

            return q;
        },

        /**
         * Put the default values into localStorage
         * @return {Promise} Resolved when data is available
         */
        useLocalStorageDefaults: function() {
            var q = $.Deferred(),
                resolvedObj = {},
                CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS;

            bcpublic.helpandsupport.contextHelpers.getServerTime()
                .then(function(time) {
                    resolvedObj[CP.CUSTOMER_SEGMENT] = null;
                    resolvedObj[CP.NAV_SEGMENT] = null;
                    resolvedObj[CP.SECURE] = 'NoSecurePin';
                    resolvedObj[CP.TIME] = time.value;

                    q.resolve(resolvedObj);
                });

            return q;
        },

        /**
         * Read segments from cookies and real data sources
         * @return {Promise} With a
         */
        useCookies: function() {
            /**
             * Config comes from the root page tabs
             * @type {Object}
             */
            var rootConfig = bcpublic.helpandsupport.rootConfig || [],

            /**
             * List of deferreds. Context is resolved when all of them are.
             * @type {Array}
             */
            deferredList = [],

            /**
             * Segments resolved with appropriate naming
             * @type {Deferred}
             */
            resolvedSegments = $.Deferred();

            // Resolve cookies
            $.each(rootConfig, function(key, config) {
                // Set a cookie resolver
                var type = bcpublic.helpandsupport.contextHelpers.cookieResolver;
                // Add a deferred to the list
                deferredList.push(type.resolve(key, config));
            });

            // Resolve time
            deferredList.push(bcpublic.helpandsupport.contextHelpers.getServerTime());

            $.when.apply($, deferredList)
            .then(function(/*q1,q2...qn*/) {
                var segments = {},
                    CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS,
                    resolvedObj = {};

                // Assemble an array of arguments into an object
                $.each(arguments, function(i, v) {
                    segments[v.segment] = v.value;
                });

                // Map config properties to the expected context properties
                resolvedObj[CP.CUSTOMER_SEGMENT] = segments['cookieSegment'];
                resolvedObj[CP.NAV_SEGMENT] = segments['cookieNav'];
                resolvedObj[CP.SECURE] = segments['cookieSecure'];
                resolvedObj[CP.TIME] = segments['time'];
                resolvedObj[CP.WEBCHAT_ENABLED] = segments['cookieWebchat'];

                resolvedSegments.resolve(resolvedObj);
            });

            return resolvedSegments;
        }
    };

    /**
     * Strategy selector
     * @return {Function} Selected strategy
     */
    bcpublic.helpandsupport.contextHelpers.chooseStrategy = function() {
        var strats = bcpublic.helpandsupport.contextHelpers.contextFactoryStrategies,
            strategyMap = {
                'ls': strats.useLocalStorage,
                'cookies': strats.useCookies,
                'lsDefaults': strats.useLocalStorageDefaults
            };

        // If publish
        if (bcpublic.helpandsupport.global.isRunModePublish()) {
            return strategyMap['cookies'];
        }

        // If LS not supported / empty
        if (!Modernizr.localstorage) {
            return strategyMap['cookies'];
        }

        var context = window.localStorage.getItem(lsKey);

        // If item is not available,
        // Use the defaults
        if (context === null) {
            return strategyMap['lsDefaults'];
        }

        try {
            context = JSON.parse(context);
        } catch (e) {
            context = {};
        }
        // useLocalStorage is a key to check if to use localStorage
        if (typeof context === 'object' && context.useLocalStorage === false) {
            return strategyMap['cookies'];
        }

        // If use custom LS
        // useLocalStorage is a key to check if to use localStorage
        if (typeof context === 'object' && context.useLocalStorage === true) {

            var differentHash = false;

            if (String.prototype.hashCode){
                var hash = JSON.stringify(document.location.pathname).hashCode();

                if (context && context.timeOptionAgainstGroup && context.timeOptionAgainstGroup !== hash){
                    differentHash = true;
                }
            }

            if (differentHash === true){
                return strategyMap['lsDefaults'];
            }

            return strategyMap['ls'];
        }

        return strategyMap['cookies'];
    };
})(jQuery);
/**
 * @fileOverview Maps and configs for the context resolve component
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

(function($) {
    /**
     * Collection of maps for context ui
     * @type {Object}
     */
    bcpublic.helpandsupport.contextMaps = {};

    /**
     * Set up the data for the Navigation and Segment cookie configs
     * @param {Array} options List of objects of the cookie config
     * @return {Array} List of segments for UI
     */
    var setNavSegRadioButtons = function(options) {
            var segments = $.map(options, function(config) {
                return {
                    id: config.segmentName,
                    radioLabel: config.segmentName,
                    resolvedSegment: config.segmentName,
                    checked: false
                };
            });
            // Add the unknown
            segments.unshift({
                id: 'Unknown',
                radioLabel: 'Unknown',
                resolvedSegment: 'null',
                checked: true
            });
            return segments;
        },

        /**
         * Set up the data for the Secure cookie configs
         * @param {Array} options List of objects of the cookie config
         * @return {Array} List of segments for UI
         */
        setSecureRadios = function(options) {
            var segments = $.map(options, function(config) {
                switch (config.segmentName) {
                    case 'NoSecurePin':
                        return {
                            id: config.segmentName,
                            radioLabel: 'No',
                            resolvedSegment: config.segmentName,
                            checked: true
                        };
                    case 'HasSecurePin':
                        return {
                            id: config.segmentName,
                            radioLabel: 'Yes',
                            resolvedSegment: config.segmentName,
                            checked: false
                        };
                    default:
                        return {
                            id: config.segmentName,
                            radioLabel: config.segmentName,
                            resolvedSegment: config.segmentName,
                            checked: false
                        };
                }
            });
            return segments;
        };

    /**
     * List of options for different content on the page
     * @type {Object}
     */
    bcpublic.helpandsupport.contextMaps.mapContextualizedElements = {
        generic: {
            root: ['cookieNav'],
            time: null
        },
        contactus: {
            root: ['cookieNav', 'cookieSegment', 'cookieSecure' ,'cookieColleague'],
            time: ['current-time']
        }
    };

    /**
     * Radio button builders for the fields
     * @type {Object}
     */
    bcpublic.helpandsupport.contextMaps.mapRadioSet = {
        cookieNav: setNavSegRadioButtons,
        cookieSegment: setNavSegRadioButtons,
        cookieSecure: setSecureRadios,
        cookieColleague: setSecureRadios        
    };

    /**
     * Dom mapping for the cookie configs
     * @type {Object}
     */
    bcpublic.helpandsupport.contextMaps.fieldsetMap = {
        cookieNav: {
            selector: '[data-name="navigation-segment"]',
            columnNumber: 2
        },
        cookieSegment: {
            selector: '[data-name="customer-segment"]',
            columnNumber: 2
        },
        cookieSecure: {
            selector: '[data-name="secure"]',
            columnNumber: 1
        },
        cookieColleague: {
            selector: '[data-name="colleague-segment"]',
            columnNumber: 2
        }
    };
})(jQuery);
/**
 * @fileOverview Context-UI Component Time Options
 * @author: Remi Rynkiewicz <remi.rynkiewicz@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};
bcpublic.helpandsupport.contextUI = bcpublic.helpandsupport.contextUI || {};

bcpublic.helpandsupport.contextUI.timeOptions = function(context, $el, $){

    var
        $el                     = $el || $('#clientcontext-box'),
        $timeSection            = $el.find('fieldset[data-name="time"]'),
        $timeOptionsTabs        = $('#time-options-tabs'),
        $timeOptionsTabsEls     = $timeOptionsTabs.find('input[type="radio"]'),
        $timeOptionsTabsContent = $('#time-options-tabs-content > ul'),
        $datePicker             = $timeOptionsTabsContent.find('input#time-segment-custom-time-date'),
        $datePickerHour         = $timeOptionsTabsContent.find('#time-segment-custom-time-hour'),
        $datePickerMinute       = $timeOptionsTabsContent.find('#time-segment-custom-time-minute'),
        timeOptionsInitialised  = false,

        changeEvent = function(){
            $timeOptionsTabsEls.on('change', function(e){
                $timeOptionsTabs.trigger('select-tab', [selectedRadio()]);
            });
        },

        events = function(){

            $el.on('runTimeOptions', function(){
                if (timeOptionsInitialised === false){
                    init(context);
                    timeOptionsInitialised = true;
                }
            });


        },

        populateHoursAndMinutes = function(){

            var d = new Date();
            var ft2d = barclays.bcpublic.edit.formatToTwoDigits;

            $datePickerHour.empty();
            $datePickerMinute.empty();

            for (var value=0;value<=23;value++){
                var label = value.toString();
                if (label.length == 1){
                    label = "0" + label;
                }
                $datePickerHour.append('<option value="'+value+'">'+label+'</option>');
            }

            for (var value=0;value<=3;value++){
                $datePickerMinute.append('<option value="'+value*15+'">'+ ft2d(value*15) +'</option>');
            }

            // systems datetime (might be wrong) to populate custom time/date                    
            $datePicker.val( ft2d(d.getDate()) + '/' + ft2d(d.getMonth() + 1)  + '/' + d.getFullYear() );
            $datePickerHour.val( ft2d(d.getHours()) );
            
            if (d.getMinutes() >= 15){
                var minutes = 15;
                if (d.getMinutes() >= 30){
                    minutes = 30;
                    if (d.getMinutes() >= 45){
                        minutes = 45;
                    }
                }
                $datePickerMinute.val( minutes );
            }

        },

        defaultTab = function(){
            return selectedRadio();
        },

        selectedRadio = function(){
            return ( $timeOptionsTabsEls.filter(':checked'));
        },

        addTimePermutations = function(MappingData, callback){
            //Mapping = new MappingMock(mmd.allowedInputs, mmd.resultsScenarios);
            var Mapping = {
                mapping      : bcpublic.helpandsupport.contactMapping,
                openingHours : function(ohString) {
                                  return new opening_hours(ohString, { address: { country_code: 'gb' } });
                               }
            };

            var $weekly  =  $timeOptionsTabsContent.find('[data-name="time-segment-standard-weekly"]'),
                $holiday = $timeOptionsTabsContent.find('[data-name="time-segment-holiday-variations"]');

            // No group data available hide the permutation radio buttons
            var noGroupDataAvailable = function(MappingData){

                if (!MappingData || !MappingData.group){
                    return true;
                }

                var objLength = function(obj){
                    var i = 0;
                    $.each(obj,function(){
                        i++;
                    });
                    return i;
                }

                if (MappingData.group.channels && MappingData.group.channels.length > 0){
                    return false;
                }

                if (MappingData.group.groups !== undefined){

                    if (objLength( MappingData.group.groups ) === 0){
                        return true;
                    } else {
                        return false;
                    }

                } 
            }

            if (noGroupDataAvailable(MappingData)) {
                $timeSection.removeClass('with-permutations');
                return;
            }
            
            var populateSection = function($where, timeSpan){

                var $select = $where.find('select'),
                    labels = bcpublic.helpandsupport.timePermutations.createTimePermutations(MappingData.group, MappingData.context, timeSpan, Mapping);
                    
                $select.empty();
                $where.find('.variations span').html(labels.length);

                $.each(labels, function(i,j){
                    $select.append(
                        $('<option />', {
                            value : j.timestamp,
                            text : j.label
                        })
                    );
                });
            };

            $timeSection
                .removeClass('with-permutations')
                .addClass('loading-permutations');

            setTimeout(function(){
                
                populateSection($weekly, "week");
                populateSection($holiday, "bank-holiday");

                $timeSection
                    .removeClass('loading-permutations')
                    .addClass('with-permutations');

                if (callback !== undefined){
                    callback();
                }

            }, 500);
        },

        getTimeOption = function(){
            return $timeOptionsTabs.find('input[name="time-segment"]:checked').val();
        },

        setTimeOption = function(option){

            $timeOptionsTabs.find('input[value="'+option+'"]').trigger('click');

            var $container    = $timeOptionsTabsContent.find('>li[data-name="time-segment-'+option+'"]'),
                UTCdateStr    = context.currentTime,
                isBST         = bcpublic.helpandsupport.timeHelpers.isTimeWithinBST(UTCdateStr),

                a=UTCdateStr.split('T'),
                d=a[0].split('-'),
                t=a[1].split(':'),
                D = new Date(d[0],(d[1]-1),d[2],t[0],t[1]),
                timestamp  = D.getTime();

            if (isBST){
                var ukTimestamp = timestamp +  60 * 60 * 1000;
                D = new Date(ukTimestamp);
            } else {
                ukTimestamp = timestamp;
            }

            switch (option) {

                case 'standard-weekly' :
                case 'holiday-variations' :
                    $container.find('select').val(ukTimestamp);
                    break;
                case 'custom-time' :
                    
                    var month = barclays.bcpublic.edit.formatToTwoDigits(parseInt(D.getMonth(),10) + 1),
                        day   = barclays.bcpublic.edit.formatToTwoDigits(D.getDate()),
                        year  = D.getFullYear(),
                        date  = day + '/' + month + '/' + year;

                    $container.find('#time-segment-custom-time-date').val(date);
                    $container.find('#time-segment-custom-time-hour').val(D.getHours());
                    $container.find('#time-segment-custom-time-minute').val(D.getMinutes());

                break;
            }
        },

        getRequestedTimeOptionTimestamp = function(){

            var selectedTimeOption = getTimeOption(),
                $container = $timeOptionsTabsContent.find('>li[data-name="time-segment-'+selectedTimeOption+'"]'),
                timestamp;

            switch (selectedTimeOption) {

                case 'standard-weekly' :
                case 'holiday-variations' :
                    timestamp = $container.find('select').val();
                    break;
                case 'custom-time' :
                    
                    var date = $container.find('#time-segment-custom-time-date').val().split('/'),
                        hours = $container.find('#time-segment-custom-time-hour').val(),
                        minutes = $container.find('#time-segment-custom-time-minute').val();

                    timestamp = (new Date(date[2], date[1]-1, date[0], hours, minutes)).getTime();
                break;
            }

            return timestamp;
        },

        selectCurrentTimeOption = function(){
            var timeOption = context.timeOption;
            setTimeOption(timeOption);



            $el.trigger('data-populated');
            $timeOptionsTabsEls.trigger('change');
        },

        init = function(context){

            bcpublic.helpandsupport.contextUI.tabs($timeOptionsTabs, $timeOptionsTabsEls, $timeOptionsTabsContent, changeEvent, defaultTab );
            //$datePicker.datepicker({dateFormat: 'dd/mm/yy'});
            populateHoursAndMinutes();

            if (bcpublic.helpandsupport.groupData !== undefined){

                // Insta resolve. Update with the real data
                // Available options are generic, contactus
                var contextBasedContent = null,
                    cMaps = bcpublic.helpandsupport.contextMaps;

                if (Modernizr.localstorage) {
                    contextBasedContent = window.localStorage.getItem('temp:contextBasedContent');
                }

                // Default to contactus
                if (contextBasedContent === null || !cMaps.mapContextualizedElements[contextBasedContent]) {
                    contextBasedContent = 'contactus';
                }
                bcpublic.helpandsupport.contextContent.resolve(cMaps.mapContextualizedElements[contextBasedContent]);

                var MappingData = {
                    group   : bcpublic.helpandsupport.groupData ? $.extend({}, bcpublic.helpandsupport.groupData) : null,
                    context : $.extend({}, context)
                };

                setTimeout(function(){
                    addTimePermutations(MappingData, function(){
                        selectCurrentTimeOption();
                    });
                }, 50);
            }
        };

    events();

    return {
        getTimeOption  : getTimeOption,
        setTimeOption  : setTimeOption,
        addTimePermutations : addTimePermutations,
        populateHoursAndMinutes : populateHoursAndMinutes,
        getRequestedTimeOptionTimestamp : getRequestedTimeOptionTimestamp
    }
};
/**
 * @fileOverview Context-UI Component Tabs
 * @author: Remi Rynkiewicz <remi.rynkiewicz@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};
bcpublic.helpandsupport.contextUI = bcpublic.helpandsupport.contextUI || {};

bcpublic.helpandsupport.contextUI.tabs = function($nav, $navEls, $content, changeEvent, defaultTab) {

    var $navEls,
        $contentEls = $content.find('> li'),

        defaults = {
            changeEvent : function(){
                $navEls.on('click', function(e) {
                    e.preventDefault();
                    if (!$(this).hasClass('active')){
                        $nav.trigger('select-tab', [$(this)]);
                    }
                });
            },

            defaultTab : function(){
                return $navEls.first();
            }
        },

        mapTabToContent = function($tab) {
            return $contentEls.filter('[data-name="' + $tab.data('name') + '"]');
        },
        selectTab = function($tab) {

            $navEls.removeClass('active');
            $tab.addClass('active');
            selectContent(mapTabToContent($tab));
        },

        selectContent = function($tabContent) {
            $contentEls.removeClass('active');
            $tabContent.addClass('active');
        },

        events = function() {

            if (changeEvent === undefined){
                defaults.changeEvent();
            } else {
                changeEvent();
            }

            $nav.on('select-tab', function(e, $tab) {
                selectTab($tab);
            });
        },
        init = function() {
            events();

            if (defaultTab === undefined){
                $nav.trigger('select-tab', [defaults.defaultTab()] );
            } else {
                $nav.trigger('select-tab', [defaultTab()]);
            }
        };

    init();
};
/**
 * @fileOverview Context-UI Component 
 * @author: Remi Rynkiewicz <remi.rynkiewicz@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};


(function($) {
    /**
     * Deferred status of context contact us on the page
     * @type {Deferred}
     */
    bcpublic.helpandsupport.contextContent = $.Deferred();

    var $el,
        $elResizable,
        $header,
        $content,
        $btnCollapse,
        $tabNav,
        $tabNavContent,
        $tabNavContent1,
        $tabNavContent2,
        
        $customerSegment,
        customerSegmentVal,

        $form,

        toggleTimeout,
        toggleCollapseInitialized = false,

        $btnPreview, $btnPreviewLive,

        state = {},
        initialFormData,
        overwriteCustomerSegment,

        context,

        /**
         * Stores the list of available fieldsets for root config and time sections
         * May vary depending on the availability of contact us
         * @type {Object}
         */
        listAvailableFieldsets = {
            root: [],
            time: []
        },

        /**
         * Collected data for the new config
         * @type {Object}
         */
        configForSetup = {},

        /**
         * Key to use for the localstorage value
         * @type {String}
         */
        lsKey = 'clientContext',

        cacheElements = function() {
            $el = $('#clientcontext-box');
            $elResizable = $el.find('>.resizable');
            $header = $el.find('#clientcontext-box-header');
            $tabNav = $el.find('#clientcontext-tabs');
            $content = $el.find('#clientcontext-box-content');

            $tabNavContent = $content.find('#clientcontext-tabs-content > ul');
            $tabNavContent1 = $content.find('#clientcontext-tabs-content > ul > li[data-name="tab-one"]');
            $tabNavContent2 = $content.find('#clientcontext-tabs-content > ul > li[data-name="tab-two"]');

            $btnCollapse = $header.find('.collapse');
            $btnPreview = $tabNavContent1.find('button.submit');
            $btnPreviewLive = $tabNavContent2.find('button.submit');

            $form = $tabNavContent1.find('form');
        },

        toggleCollapse = function(requestedState) {
            var init = function() {
                    $el.data('min-height', parseInt($el.css('min-height'), 10));
                    toggleCollapseInitialized = true;
                },

                expand = function() {
                    $el.trigger('collapsed', [false]);
                    $el.trigger('apply-selection');

                    $elResizable.height($el.data('cached-height'));
                    $el.removeClass('collapsed');

                    $el.on('transitionend', function() {

                        $el.removeClass('animate-height');
                        $el.off('transitionend');
                    });
                },

                collapse = function() {
                    $el.trigger('collapsed', [true]);

                    var heightToBeCashed = function() {
                        var currentHeight = $el.outerHeight();
                        if (currentHeight < $el.data('min-height')) {
                            return $el.data('min-height');
                        } else {
                            return currentHeight;
                        }
                    };

                    $el.data('cached-height', heightToBeCashed());

                    toggleTimeout = setTimeout(function() {
                        $el.addClass('collapsed');
                    }, 100);
                },

                toggle = function() {

                    clearTimeout(toggleTimeout);
                    if (requestedState !== 'startFromCollapsed') {
                        $el.addClass('animate-height');
                    }

                    if ((!$el.hasClass('collapsed')) && requestedState !== 'open') {
                        collapse();
                    } else if (requestedState !== 'close') {
                        expand();
                    }
                };

            $elResizable.height($el.outerHeight());
            if (toggleCollapseInitialized === false) {
                init();
            }
            toggle();
        },

        onBtnPreviewClick = function() {
            /**
             * Client context object.
             * Set it to true, because the Preview button was clicked
             * @type {Object}
             */
            var context = generateClientContext(true);
            toggleCollapse('close');

            if (Modernizr.localstorage) {
                window.localStorage.setItem(lsKey, JSON.stringify(context));
            }
            window.location.reload();
        },

        onBtnPreviewLiveClick = function(e) {
            e.preventDefault();
            toggleCollapse('close');

            /**
             * Client context object.
             * Set it to false, because the live settings button was clicked
             * @type {Object}
             */
            var context = generateClientContext(false);

            if (Modernizr.localstorage) {
                window.localStorage.setItem(lsKey, JSON.stringify(context));
            }
            window.location.reload();
        },

        stateHelpers = {
            updataDimensionsAndPosition: function() {
                if (state.collapsed === false) {
                    state.height = $elResizable.outerHeight();
                } else {
                    state.height = undefined;
                }

                state.position = state.position || {};

                var left = parseInt($el.css('left'), 10);
                var top  = parseInt($el.css('top'), 10);

                if (left < 0) {
                    state.position.left = 0;
                    setTimeout(function(){
                        $el.css('left', 0);
                    }, 100);
                } else {
                    state.position.left = left;
                }

                if (top  < 0) {
                    state.position.top = 0;
                    setTimeout(function(){
                        $el.css('top', 0);
                    }, 100);
                } else {
                    state.position.top = top;
                }

                state.window = state.window || {};
                state.window.width = parseInt($(window).outerWidth(), 10);
                state.window.height = parseInt($(window).outerHeight(), 10);
                this.saveState();
            },

            saveState: function() {
                if (Modernizr.localstorage) {
                    window.localStorage.setItem('resolveContextComponentState', JSON.stringify(state));
                }
            },

            loadState: function() {
                if (Modernizr.localstorage) {
                    var loadedState = window.localStorage.getItem('resolveContextComponentState');
                    if (loadedState) {
                        loadedState = JSON.parse(loadedState);
                        this.applyState(loadedState);
                    } else {
                        $el.trigger('runTimeOptions');
                    }
                }
            },

            applyState: function(lState) {
                var windowWidth = parseInt($(window).outerWidth(), 10),
                    windowHeight = parseInt($(window).outerHeight(), 10);

                if (lState.collapsed === true) {
                    toggleCollapse('startFromCollapsed');
                } else {
                    // Temporarily always start from collapsed, to see if that's part of an acceptable workaround for the permutations performance issues
                    toggleCollapse('open');
                    //toggleCollapse('startFromCollapsed');
                }

                var noMoreDifferenceThen = function(a, b, then) {
                    if (Math.abs(a - b) <= then) {
                        return true;
                    } else {
                        return false;
                    }
                };

                // apply dimensions and position only when window dimensions do match
                if (lState.window && lState.window.width && lState.window.height && noMoreDifferenceThen(windowWidth, lState.window.width, 30) && noMoreDifferenceThen(windowHeight, lState.window.height, 30)) {
                    $el.css('left', lState.position.left);
                    $el.css('top', lState.position.top);

                    if (lState.collapsed === false) {
                        $elResizable.height(lState.height);
                    }
                    this.updataDimensionsAndPosition();
                }
            }

        },

        events = function() {

            var self = this;

            if (Modernizr.localstorage) {
                var clientContext = window.localStorage.getItem(lsKey);
                clientContext = (clientContext !== null && clientContext.trim()!=='') ? JSON.parse(clientContext) : {};
            }

            $btnCollapse.on('click', toggleCollapse);

            $btnPreview.on('click', function(e) {
                e.preventDefault();
                if (!$(this).hasClass('disabled')) {
                    onBtnPreviewClick();
                }
            });

            $btnPreviewLive.on('click', onBtnPreviewLiveClick);

            $el.on('collapsed', function(e, isIt) {
                if (isIt === true) {
                    state.collapsed = true;
                } else {
                    state.collapsed = false;
                    setTimeout(function(){
                        $el.trigger('runTimeOptions');
                    }, 1000);
                }
                stateHelpers.saveState();
            });

            $el.on('openedTab', function(e, tabName) {
                state.openedTab = tabName;
            });

            $form.on('change', function(e) {

                var context = self.context,
                    newCustomerSegment = getCustomerSegment();

                if (newCustomerSegment && newCustomerSegment !== customerSegmentVal){

                    customerSegmentVal = newCustomerSegment;

                    if (newCustomerSegment === 'null'){
                        newCustomerSegment = null;
                    }

                    var MappingData = {
                        group   : bcpublic.helpandsupport.groupData ? $.extend({}, bcpublic.helpandsupport.groupData) : null,
                        context : $.extend({}, context, {customerSegment : newCustomerSegment} )
                    };

                    setTimeout(function(){
                        timeOptions.addTimePermutations(MappingData);
                    }, 50);
                }

                if (clientContext.useLocalStorage === false || isFormModified() === true) {
                    $btnPreview.removeClass('disabled');
                } else {
                    $btnPreview.addClass('disabled');
                }
            });

            $el.on('data-populated', function() {
                saveInitialFormData();
                $form.trigger('change');
            });

            $el.on('apply-selection', function(){
                applySelection();
                timeOptions.populateHoursAndMinutes();
                timeOptions.setTimeOption(self.context.timeOption);
                $form.trigger('change');
            });
        },

        saveInitialFormData = function(){
            initialFormData = $form.serialize();
        },

        isFormModified = function() {
            return (initialFormData !== $form.serialize());
        },

        /**
         * Generate a group name to identify the radio buttons
         * @param  {String} name   ID to base it on
         * @return {String}        Group name
         */
        generateGroupName = function(name) {
            return name + '-' + 'segment';
        },

        /**
         * Read data from the radio buttons and store new value to localStorage
         * @param {Boolean} useLocalStorage True to use localStorage values
         */
        generateClientContext = function(useLocalStorage) {
            /**
             * Collect the client context
             * @type {Object}
             */
            var clientContext = {},
                timestamp,
                timeOption,
                returnTimeString = function(timestamp){

                    var ft2d = bcpublic.helpandsupport.timePermutations.formatToTwoDigits;

                    var d = new Date(timestamp);
                    var timeString = d.getFullYear() + '-' + ft2d(d.getMonth() + 1) + '-' + ft2d(d.getDate()) + 'T' + ft2d(d.getHours()) +
                                     ':' + ft2d(d.getMinutes()) + ':' + ft2d(d.getSeconds()) + '.000Z';
                    return timeString;
                };

            // Collect data from the each available fieldset
            $.each(listAvailableFieldsets.root, function(mapIndex, mapValue) {
                var groupName = generateGroupName(mapValue);
                clientContext[mapValue] = $('[name="' + groupName + '"]:checked').val();
            });
            clientContext['colleague_business_channel'] = $('[name="business_channel"]').val();
            clientContext['colleague_business_area'] = $('[name="business_area"]').val();
            
            if (listAvailableFieldsets.time !== null){
                
                var timestamp   = timeOptions.getRequestedTimeOptionTimestamp();
                timeOption      = timeOptions.getTimeOption(); 

                if (timestamp){
                    timestamp = parseInt(timestamp, 10);
                    var isBST = bcpublic.helpandsupport.timeHelpers.isTimeWithinBST;

                    var ukTime = returnTimeString(timestamp);

                    if (isBST(ukTime)){
                        clientContext.time = returnTimeString(timestamp - 60 * 60 * 1000);
                    } else {
                        clientContext.time = ukTime;
                    }
                }
            }

            var hash = JSON.stringify(document.location.pathname).hashCode();

            return {
                useLocalStorage : useLocalStorage,
                segments        : clientContext,
                timeOption      : timeOption,
                timeOptionAgainstGroup : hash
            };
        },

        addConfigRadioButtons = function(fieldsetList, fieldsetDomMap, segmentConfig) {
            // Set each section
            $.each(fieldsetList, function(mapIndex, mapValue) {
                var fieldDomConfig = fieldsetDomMap[mapValue],
                    $createdFields = $('<div/>');

                // The radio buttons may be split in one or two columns
                // based on the map
                if (fieldDomConfig.columnNumber === 2) {
                    var $leftWrapper = $('<div class="wrapper left"></div>'),
                        $rightWrapper = $('<div class="wrapper right"></div>');

                    $createdFields.append($leftWrapper, $rightWrapper);
                }

                // Go through each item to make a radio button
                var itemList = segmentConfig[mapValue];
                $.each(itemList, function(storeIndex, storeValue) {
                    var groupName = generateGroupName(mapValue),
                        singleName = groupName + '-' + storeValue.id,
                        $label = $('<label/>', {
                            'for': singleName,
                            'text': storeValue.radioLabel
                        }),
                        $radio = $('<input/>', {
                            'type': 'radio',
                            'name': groupName,
                            'id': singleName,
                            'value': storeValue.resolvedSegment,
                            'checked': storeValue.checked ? 'checked' : null
                        });

                    if (fieldDomConfig.columnNumber === 2) {
                        if (storeIndex >= parseInt(itemList.length / 2, 10)) {
                            $rightWrapper.append($radio, $label);
                        } else {
                            $leftWrapper.append($radio, $label);
                        }
                    } else {
                        $createdFields.append($radio, $label);
                    }
                });

                // Find a fieldset with a selector in the config
                var $dest = $form.find(fieldDomConfig.selector).find('.content');
                $dest.append($createdFields.find('> *'));

                // Remove context based message
                $form.find(fieldDomConfig.selector).addClass('populated');
            });
        },

        addTimeRadioButtons = function(fieldsetList) {
            var $dest = $form.find('[data-name="time"]'),
                timeFields = fieldsetList;

            if (Object.prototype.toString.call(timeFields) !== '[object Array]') {
                // fieldsetList is not an array
                timeFields = [];
            }

            if (timeFields.length === 0) {
                // time based content not available
                return;
            }

            // Remove context based message
            $dest.addClass('populated');
            $dest.find('.empty-section').remove();

            // Reveal the checkboxes
            $.each(timeFields, function(i, fieldName) {
                $dest.find('[data-time-segment="' + fieldName + '"]').addClass('available');
            });
        },

        /**
         * Apply selection from the context
         */
        applySelection = function() {
            var clientContext,
                tabToOpen,
                // Nulls are stored as strings in html
                encodeNulls = function(v) {
                    return v === null ? 'null' : v;
                };

            if (Modernizr.localstorage) {
                clientContext = window.localStorage.getItem(lsKey);

                // If clientContext is not available, use the defaults
                if (clientContext === null) {
                    // Apply defaults
                    return;
                }

                clientContext = (clientContext !== null && clientContext.trim()!=='') ? JSON.parse(clientContext) : {};
              
                tabToOpen = '[data-name="tab-one"]';
                // If we ended up with setting saved in local storage
                // load second tab
                if (clientContext.useLocalStorage === false) {
                    tabToOpen = '[data-name="tab-two"]';
                    $tabNav.trigger('select-tab', [$tabNav.find(tabToOpen)]);
                }

                // Apply segments
                $.each(listAvailableFieldsets.root, function(i, segment) {
                    if (clientContext.segments[segment]) {
                        var groupName = generateGroupName(segment),
                            inputValue = encodeNulls(clientContext.segments[segment]);

                        $('[name="' + groupName + '"]').filter('[value="' + inputValue + '"]')
                            .prop('checked', 'checked');
                    }
                });

                //Apply colleague segment
                if (clientContext.segments['colleague_business_channel']) {
                        var inputValue = encodeNulls(clientContext.segments['colleague_business_channel']);
                        $('[name="business_channel"]').val(inputValue);
                        $("#business_channel").on("change", bcpublic.helpandsupport.contextUI.updateSelects).change();
                }
                if (clientContext.segments['colleague_business_area']) {
                        var inputValue = encodeNulls(clientContext.segments['colleague_business_area']);
                        $('[name="business_area"]').val(inputValue);
                }
                
                // overwrite customer segment if needed
                if (overwriteCustomerSegment){
                    setCustomerSegment(overwriteCustomerSegment);
                }
            }
        },

        setCustomerSegment = function(segment){

            overwriteCustomerSegment = segment;
            
            if (getCustomerSegment() === undefined || getCustomerSegment() === segment){
                return false;
            }

            $customerSegment.filter('[value="' + segment + '"]').prop('checked', 'checked');
            $form.trigger('change');
        },

        getCustomerSegment = function(segment){
            if ($customerSegment === undefined) {
                return undefined;
            }
            return $customerSegment.filter(':checked').val();
        },

        init = function(context) {

            this.context = context;

            cacheElements();
            if($el.length >0 && $elResizable.length >0 ){

            	$el.draggable({
	                handle: $header,
	                containment: 'window',
	                stop: function() {
	                    stateHelpers.updataDimensionsAndPosition();
	                }
	            });

            	$elResizable.resizable({
	                handles: 's',
	                stop: function() {
	                    stateHelpers.updataDimensionsAndPosition();
	                }
	            });

            	$elResizable.height(parseInt(1000 * 0.3, 10));

            }

            events();
            bcpublic.helpandsupport.contextUI.tabs($tabNav, $tabNav.find('li'), $tabNavContent);
            timeOptions = bcpublic.helpandsupport.contextUI.timeOptions(context, $el, $);
        };


    bcpublic.helpandsupport.contextUI.setCustomerSegment = function(segment){
        setCustomerSegment(segment);
        saveInitialFormData();
    };

    bcpublic.helpandsupport.contextUI.updateSelects =  function() {
    	var selectedVal = this.value;
    	if(bcpublic.helpandsupport.rootConfig.cookieColleague){
			 $.each(bcpublic.helpandsupport.rootConfig.cookieColleague.channels, function(i, state) {
				 if(selectedVal === state.value ){
			 	     var tempObj = $.map(state.areas, function (tempOption) {
				            return $("<option value =\""+tempOption.value+"\" />").text(tempOption.label);
				     });
				     $("#business_area").empty().append(tempObj);
				     return false; 
				 }				 
			 });
    	}   	
    };
 
    var $states;

    $(document).ready(function() {
        // Run only when context resolve component is available
        // Prevents running twice on content finder
        if (bcpublic.helpandsupport.context && bcpublic.helpandsupport.rootConfig) {
            bcpublic.helpandsupport.context.then(function(context) {

                // Init the UI
                init(context);
                stateHelpers.loadState();

                // Resolved with a contact us status
                // See bcpublic.helpandsupport.contextMaps.mapContextualizedElements
                bcpublic.helpandsupport.contextContent.then(function(contextType) {

                    /**
                     * Shortcut to contextMaps
                     * @type {Object}
                     */
                    var cMaps = bcpublic.helpandsupport.contextMaps;

                    // Save available fieldsets
                    listAvailableFieldsets = contextType;

                    // Generate data for the each tab
                    $.each(listAvailableFieldsets.root, function(i, name) {

                    	if(name !== 'cookieColleague'){
                            // Config comes from the root tab
                            var rootConfig = bcpublic.helpandsupport.rootConfig;
                            // Apply map radio set for the given config
                            configForSetup[name] = cMaps.mapRadioSet[name](rootConfig[name]);                    		
                    	}

                    });

                    // Add radio buttons for root sections
                    addConfigRadioButtons(listAvailableFieldsets.root, cMaps.fieldsetMap, configForSetup);

                    var state ;
                    // Start of Colleague Code
                    var url = window.location.protocol+'//'+window.location.host + '/bin/service/profilepage.json',
                        $businesschannel = $("#business_channel").on("change", bcpublic.helpandsupport.contextUI.updateSelects);

                    $.ajax({
        				'async': false,
        				'global': false,
        				'url': url,
        				'dataType': 'json',
        				'success': function (data) {

        					bcpublic.helpandsupport.rootConfig.cookieColleague = data;  
        					
        					 $.each(bcpublic.helpandsupport.rootConfig.cookieColleague.channels, function(i, state) {
        						 $("<option value =\""+state.value+"\" />").text(state.label).appendTo($businesschannel);
        					 });
                            
        				}
        			});

                    $businesschannel.change(); 
                    // End of colleague Code
                    $customerSegment = $el.find("[name='cookieSegment-segment']");
                    customerSegmentVal = getCustomerSegment();

                    applySelection();
                    

                    $el.trigger('data-populated');

                });
            });
        }
    });
})(jQuery);

/**
 * @fileOverview Time Permutations based on Contact Mapping utilising group model and client context
 * @author: Remi Rynkiewicz <remi.rynkiewicz@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.timePermutations = (function(){

    var
    intervalInMins = 30,

    /**
     * format date or month to two digits by adding zero in front single digit string
     * @param  {Mixed} month or day
     * @return {String}
     */
    formatToTwoDigits = function(s){
        s = s.toString();
        if (s.length === 1){
            s = '0' + s;
        }
        return s;
    },

    /**
     * Parse dateTime string
     * @param  {String} dateStr    date string
     * @return {Object} Date Object
     */
    parseDateTime = function(dateStr){
        var a=dateStr.split('T');
        var d=a[0].split('-');
        var t=a[1].split(':');
        var date = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
        return date;
    },

    /**
     * converts minutes to milliseconds
     * @param  {Number} mins   amount of minutes
     * @return {Number}
     */
    minutesToMs = function(mins){
        return mins * 60 * 1000;
    },

    /**
     * converts days to milliseconds
     * @param  {Number} days   amount of days
     * @return {Number}
     */
    daysToMs = function(days){
        return days * 24 * minutesToMs(60);
    },

    dateToStr = function(d){
        var str = '',
            Y = d.getFullYear(),
            M = formatToTwoDigits( d.getMonth() + 1 ),
            D = formatToTwoDigits( d.getDate() ),
            H = formatToTwoDigits( d.getHours() ),
            MM = formatToTwoDigits( d.getMinutes() ),
            SS = ":00",
            str = Y +'-'+ M +'-'+ D +'T'+H +':'+ MM + SS;

        return str;
    },

    /**
     * creates 30 minutes time samples array for entire week (2nd week of current year) or bank holiday (25th of December)
     * @param  {String} timeSpan    either 'week' or 'bank-holiday'
     * @return {Array}
     */
    createTimeSamples = function(timeSpan){

        var
            /**
             * creates Array of date Strings, spanning from (including) startStamp (timestamp) till finishStamp (excluding) based on span (in milliseconds)
             * @param  {Number} startStamp   start time (timestamp)
             * @param  {Number} finishStamp  finish time (timestamp)
             * @param  {Number} span         distance between samples
             * @return {Array}
             */
            iterate = function(startStamp, finishStamp, span){

                var dates = [];

                for (var stamp=startStamp; stamp < finishStamp; stamp=stamp+span){

                    var
                        d = new Date(stamp),
                        str = dateToStr(d);

                    dates.push(str);
                }
                return dates;
            },

            /**
             * Calculates number of days between date and next Monday
             * @param  {Date Object} date   Date
             * @return {Number}
             */
            daysTillNextMonday = function(date){

                var startStamp  = date.getTime(),
                    currentDay  = date.getDay(),
                    daysToAdd;    // till 2nd week

                if (currentDay === 0){
                    daysToAdd = 1;
                } else {
                    daysToAdd = 8 - currentDay;
                }
                return daysToAdd;
            },
            span;

        if (timeSpan === 'week' || timeSpan === 'bank-holiday'){

            var currentYear      = (new Date()).getFullYear();

            if (timeSpan === 'week'){

                var startDate        = new Date(currentYear, 0, 1),
                    startStamp       = startDate.getTime(),
                    daysTillNextMon  = daysTillNextMonday(startDate),
                    msTillNextMonday = daysToMs(daysTillNextMon);

                startStamp  = startStamp + msTillNextMonday;
                finishStamp = startStamp + daysToMs(7);

            } else if (timeSpan === 'bank-holiday'){

                var startDate   = new Date(currentYear, 11, 25),
                    startStamp  = startDate.getTime(),
                    finishStamp = startStamp + daysToMs(1); // startStamp + 24h
            }

            var interval = intervalInMins;

            span = minutesToMs( interval ); // our sampling timespan
            return ( iterate(startStamp, finishStamp, span) );

        } else {

            //console.log( 'error: timeSpan should be either "week" or "bank-holiday"' );
            return false;
        }
    },

    /**
     * Extracts values of 'path' properties from passed object, excluding one in root node, utilising recursion deep search
     * @param  {Object} obj   js object
     * @return {Array}
     */
    extractPaths = function(obj){

        var extractedIds = [],
        propertyName = 'path',

        getObject = function(theObject) {

            if(theObject instanceof Array) {
                for(var i = 0; i < theObject.length; i++) {
                    getObject(theObject[i]);
                }
            } else {
                for(var prop in theObject) {
                    if (theObject.hasOwnProperty(prop)) {
                        if(prop == propertyName && theObject[prop] !== obj[prop]) {
                            extractedIds.push( theObject.isOpen + ',' + theObject[prop] );
                        }
                        if(theObject[prop] instanceof Object || theObject[prop] instanceof Array){
                            getObject(theObject[prop]);
                        }
                    }
                }
            }
        };

        getObject(obj);
        return extractedIds;
    },

    /**
     * Creates a 'map' with all contact paths (returned from Mapping f() ) for all timeSamples times indexed by timeSamples values
     * @param  {Array}   timeSamples  time samples array returned from createTimeSamples f()
     * @param  {Object}  group        group object or multiple groups inside groups property
     * @param  {Object}  context      client context object
     * @param  {Object}  Mapping      Mapping.mapping -> mapping function, Mapping.openingHours -> opening hours library
     * @return {Object}
     */
    createTimeMap = function(timeSamples, group, context, Mapping){

        var timeMap = {},

            getPathsFromMappingResults = function(group, context){
                var result = Mapping.mapping(group, context, Mapping.openingHours );
                return extractPaths(result);
            },

            concatWithoutDuplicates = function(arr1, arr2){

                var result = arr1.slice(0);
                // filter duplicates
                for (var k=0; k < arr2.length; k++){
                    if (arr1.indexOf(arr2[k]) === -1){
                        result.push(paths[k]);
                    }
                }
                return result;
            };

        for (var i=0; i<timeSamples.length; i++){

            var currentTime = timeSamples[i],
                allPaths = [];

            // update context with time
            context.currentTime = currentTime;

            // multi group ?
            if (group.groups && group.groups.length){

                for (var j=0; j < group.groups.length; j++){

                    var singleGroup = group.groups[j];
                    var paths = getPathsFromMappingResults(singleGroup, context );
                    allPaths = concatWithoutDuplicates(allPaths, paths);
                }

            } else {
                allPaths = getPathsFromMappingResults(group, context );
            }

            timeMap[currentTime] = allPaths;
        };

        return timeMap;
    },

    /**
     * Creates time permutations map indexed by paths permutations, based on timeMap
     * @param  {Object} timeMap    time map object returned by createTimeMap()
     * @return {Object}
     */
    createContactsMap = function(timeMap){

        var i,
            output = {},
            keyMap = {},
            keyMapIndex = 0;

        for (i in timeMap){
            if (timeMap.hasOwnProperty(i)) {
            
                var v = timeMap[i],
                    key = v.join();

                output[key] = output[key] || [];
                output[key].push(i);
            }
        }
        return output;
    },

    /**
    */
    cutTimes = function(obj){
        for (var i in obj){
            if (obj.hasOwnProperty(i)) {
                obj[i] = obj[i].slice(',')[0];
            }
        }
        return obj;
    },

    /*
        shorten scenarios names
    */
    shortenScenariosNames = function(contactsMap){

        var keyMap = {},
            keyMapIndex = 1,
            findKeyMap = function(str){

                if (keyMap[str] === undefined){

                    keyMap[str] = keyMapIndex;
                    keyMapIndex++;
                }
                return keyMap[str];
            },

            transformStr = function(s){

                var z = s.split(','),
                    str = '';

                for (var i=0; i < z.length; i++){
                    if (z[i] === 'true'){
                        str += 'o';
                    } else if (z[i] === 'false'){
                        str += 'c';
                    } else {
                        str += findKeyMap(z[i]) + ( i + 1 === z.length ? '' : '+')
                    }
                }

                return str;
            },

            scenariosMap = {};
        
        for (var i in contactsMap){
            if (contactsMap.hasOwnProperty(i)) {
                scenariosMap[ transformStr(i) ] = contactsMap[i];
            }
        }

        return scenariosMap;
    },

    createIntervals = function(scenariosMap){
        
        var intervalsMap = {};

        var splitIntervalsByDays = function(intervals){

            var newIntervals = [];

            for (var i in intervals) {
                if (intervals.hasOwnProperty(i)) {

                    interval = intervals[i];
                    interval[0] = parseDateTime(interval[0]);
                    interval[1] = parseDateTime(interval[1]);

                    var daysSpan =  interval[1].getDate() - interval[0].getDate(),
                        addNextDay;

                    var f = interval[0];

                    if (daysSpan > 0){

                        var newSingleInterval = [];
                        newSingleInterval.push(dateToStr(interval[0]));

                        for (var day=1; day <= daysSpan; day++){

                            var newDay = new Date(f.getFullYear(),f.getMonth(),f.getDate() +day, 0, 0, 0);

                            newSingleInterval.push( dateToStr(newDay) );
                            newIntervals.push(newSingleInterval);
                            newSingleInterval = [];

                            addNextDay = !(day === daysSpan && newDay.getTime() === interval[1].getTime() );

                            if (addNextDay === true){
                                newSingleInterval.push( dateToStr(newDay) );
                            }
                        }

                        if (addNextDay === true){
                            newSingleInterval.push(dateToStr(interval[1]));
                            newIntervals.push(newSingleInterval);
                        }

                    } else {
                        interval[0] = dateToStr(interval[0]);
                        interval[1] = dateToStr(interval[1]);
                        newIntervals.push(interval);
                    }
                }
            }

            return newIntervals;
        };


        for (var i in scenariosMap){
            if (scenariosMap.hasOwnProperty(i)) {

                var scenarioTimes = scenariosMap[i],
                    intervals     = [],
                    interval      = [],
                    intervalNo    = 0,
                    t0, time0;
                
                for (var j=0; j < scenarioTimes.length; j++){

                    var time     = scenarioTimes[j],
                        t        = parseDateTime(time),
                        lastTime = j + 1 === scenarioTimes.length;

                    if (j === 0){
                        
                        interval[0] = time;
                        if (lastTime){
                            interval[1] = time;
                            intervals.push(interval);
                        }

                    } else {

                        // if time is different than interval or we are at the end of times
                        // close interval

                        var timeNotWithinInterval = ( t0.getTime() + minutesToMs(intervalInMins) !== t.getTime() );
                            

                        if ( timeNotWithinInterval ) {

                            interval[1] = time0;
                            intervals.push(interval);
                            interval = [];

                            // if theres a next time open new interval
                            if (j + 1 < scenarioTimes.length){
                                interval[0] = time;
                                //console.log('theres a new one so ' + time + ' added to interval[0]');
                            } else {
                                interval[0] = time;
                                interval[1] = time;
                                intervals.push(interval);
                            }
                        } else if (lastTime){
                            interval[1] = time;
                            //console.log(time + ' added to interval[1] coz last time');
                            intervals.push(interval);
                            interval = [];
                        }
                    }

                    time0 = time;
                    t0 = t;
                }
                
                intervalsMap[i] = splitIntervalsByDays(intervals);
            }
        }

        return intervalsMap;
    },


    /**
     * Creates Array of human readable labels based on contactsMap time values
     * @param  {Object} contactsMap    contactsMap created by createContactsMap()
     * @return {Array}
     */
    createLabels = function(contactsMap){

         var labels = [],
            copy = {
                days : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                publicholiday : CQ.I18n.getMessage('segment.author.ui.segments.time.permutations.publicholiday'),
                midnight : CQ.I18n.getMessage('segment.author.ui.segments.time.permutations.midnight') 
            };

         for (var i in contactsMap){
            if (contactsMap.hasOwnProperty(i)) {

                var l = contactsMap[i];
                var d = parseDateTime(l);

                l = {
                    label : '',
                    timestamp : d.getTime()
                }

                var hours = d.getHours();
                var minutes = d.getMinutes();
                var am_pm = hours < 12 ? 'am' : 'pm';
                if (hours > 12) {
                    hours = hours-12;
                }

                if (hours === 0 && minutes === 0) {
                    var time = copy.midnight;
                }
                else {
                    var time = hours + ':' + formatToTwoDigits(minutes) + am_pm;
                }

                if (d.getDate() == 25 && d.getMonth() == 11){
                    l.label = copy.publicholiday + ' ' + time;
                } else {
                    l.label = copy.days[d.getDay()] + ' ' + time;
                }

                labels.push(l);
            }
         }

         return labels;
    },
    
    /**
    * createLabelsNew()
    * accepts scenario-intervals as input:
    * 
        [[ "2015-01-05T00:00:00", "2015-01-05T08:45:00" ],
         [ "2015-01-05T21:00:00", "2015-01-06T00:00:00" ],
         [ "2015-01-06T00:00:00", "2015-01-06T08:45:00" ],
         [ "2015-01-06T21:00:00", "2015-01-07T00:00:00" ],
         [ "2015-01-07T00:00:00", "2015-01-07T08:45:00" ],
         [ "2015-01-07T21:00:00", "2015-01-08T00:00:00" ],
         [ "2015-01-08T00:00:00", "2015-01-08T08:45:00" ],
         [ "2015-01-08T21:00:00", "2015-01-09T00:00:00" ],
         [ "2015-01-09T00:00:00", "2015-01-09T08:45:00" ],
         [ "2015-01-09T21:00:00", "2015-01-10T00:00:00" ],
         [ "2015-01-10T00:00:00", "2015-01-11T00:00:00" ],
         [ "2015-01-11T00:00:00", "2015-01-11T23:45:00" ] ]
    */

    createLabelsNew = function(){
        var 
            dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'PH'],
            daysOrder = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su', 'PH'],

            addInterval = function(date){
                return new Date( date.getTime() + minutesToMs(intervalInMins) );
            },

            isSameDay = function(d1,d2){
                return d1.getDate() === d2.getDate();
            },

            isMidnight = function(input){
                return (input.getHours() === 0 && input.getMinutes() === 0 );
            },

            hasMinutes = function(d1, d2){
                return (d1.getMinutes() !== 0 || d2.getMinutes() !== 0);
            },

            getDayName = function(d){
                if (d.getDate() === 25 && d.getMonth() == 11){
                    return dayNames[7]
                }
                return dayNames[ d.getDay() ]
            },

            /**
            * returns a 'week' Object
            * {   Mo: '0-9, 21-24',
                  Tu: '0-9, 21-24',
                  We: '0-9, 21-24',
                  Th: '0-9, 21-24',
                  Fr: '0-9, 21-24',
                  Sa: '0-24',
                  Su: '0-24',
                  PH: '' }
            */

            groupByDays = function(scenario){

                var week = {
                    'Mo' : '','Tu' : '','We' : '','Th' : '','Fr' : '','Sa' : '','Su' : '','PH' : ''
                };

                for (var i=0; i<scenario.length; i++){

                    var interval = scenario[i],
                        start    = interval[0],
                        end      = interval[1],

                        startDate= parseDateTime(start),
                        endDate = parseDateTime(end),

                        endsOnMidnight = false,
                        withMinutes    = true,

                        output = '',
                        startHours,
                        endHours,
                        startMinutes,
                        endMinutes;

                    // if same day
                    // lets add interval to end
                    if (isSameDay(startDate, endDate)){
                        endDate = addInterval(endDate);
                    }

                    startHours = startDate.getHours();
                    endHours = endDate.getHours();
                    startMinutes = startDate.getMinutes();
                    endMinutes = endDate.getMinutes();

                    endsOnMidnight = isMidnight(endDate);
                    withMinutes = hasMinutes(startDate, endDate);

                    if (withMinutes){

                        startMinutes = formatToTwoDigits( startMinutes );
                        
                        output = startHours + ':' + startMinutes + '-';

                        if (!endsOnMidnight){
                            output += endHours + ':' + endMinutes;
                        } else {
                            output += '24:00';
                        }

                    } else {
                        output = startHours + '-';

                        if (!endsOnMidnight){
                            output += endHours;
                        } else {
                            output += '24';
                        }
                    }

                    var weekDay = getDayName(startDate);

                    // add to the approp day
                    week[ weekDay ] += (week[ weekDay ] !== '' ? ', ' : '') + output;
                }

                return week;
            },

            groupByHours = function(week){
                var byHours   = {};

                // go thru days from Mon (1) till Sun + PH
                for (var i=0; i < daysOrder.length; i++ ){

                    var dayName = daysOrder[ i ],
                        hours   = week[ dayName ];

                    if (hours === ''){
                        continue;
                    }

                    byHours[ hours ] = byHours[ hours ] || [];
                    byHours[ hours ].push(dayName);
                }

                return byHours;
            },

            createDaysIntervals = function(daysArr){
                var str = '',
                    consecutiveDays = 0,
                    day = undefined,
                    isLastDay = false,

                    areDaysConsecutive = function(day1, day2){

                        var dayIndex = function(day){
                                return daysOrder.indexOf(day);
                            },
                            day1Index = dayIndex(day1),
                            day2Index = dayIndex(day2);

                        if (day1 === 'PH' || day2 === 'PH'){
                            return false;
                        }

                        if (day1Index === -1 || day2Index === -1){
                            return false;
                        }

                        if (day1Index === day2Index -1){
                            return true;
                        } else {
                            return false;
                        }
                    },

                    closeWithDay = function(consecutiveDays, day){

                        if (consecutiveDays === 0){
                            return '';
                        }

                        if (consecutiveDays > 1){
                            return ( '-' + day );
                        } else {
                            return ( str = ', ' + day );
                        }
                    }

                for (var i=0; i<daysArr.length; i++){

                    day = daysArr[i];
                    isLastDay = (i === daysArr.length - 1);

                    if (i > 0){
                        
                        var dayBefore = daysArr[i-1];
                        if (areDaysConsecutive(dayBefore, day)){
                            consecutiveDays++;
                        } else {

                            str += closeWithDay(consecutiveDays, dayBefore);
                            str += ', ' + day;
                            consecutiveDays = 0;
                        }

                        if (isLastDay){
                            str += closeWithDay(consecutiveDays, day);
                        }

                    } else {
                        str += day;
                    }
                }

                return str;
            },

            /**
            * Generate label based on opening times groupped by hours:
            *   { 0-9, 21-24 : [ 'Mo', 'Tu', 'We', 'Th', 'Fr' ], 
                 0-24 : [ 'Sa', 'Su' ] } 
            */

            generateLabel = function(byHours){

                var 
                    getHoursForDay = function(day){
                        for (var i in byHours){
                            if (byHours.hasOwnProperty(i)) {

                                var days = byHours[i];

                                if (days.indexOf(day) !== -1){
                                    return i;
                                }
                            }
                        }
                        return undefined;
                    },

                    label = '',
                    hoursUsed = {};


                for (var i=0; i < daysOrder.length; i++){
                    var dayName = daysOrder[i];

                    var hours = getHoursForDay(dayName);
                    if (hours !== undefined && hours != 'X'){

                        var days = byHours[hours];
                        var daysStr = createDaysIntervals(days);
                        byHours[hours] = 'X';

                        if (label !== ''){
                            label += '; ';
                        }

                        label += daysStr + ' ' + hours;
                    }
                }
                return label;
            },

            singleScenario = function(scenario){
                var week    = groupByDays(scenario);
                var byHours = groupByHours(week);
                var label   = generateLabel(byHours);

                return label;
            },

            init = function(scenariosMapIntervals){

                var labels = [],
                    no = 0;

                for (var i in scenariosMapIntervals){
                    if (scenariosMapIntervals.hasOwnProperty(i)){

                        var scenario = scenariosMapIntervals[i];
                        var label    = singleScenario(scenario);
                        var d        = parseDateTime(scenario[0][0]);
                        var timestamp = d.getTime();
                        var utcTimestamp = (new Date(timestamp - d.getTimezoneOffset() * 60 * 1000)).getTime();

                        labels.push({
                            label       :   label,
                            timestamp   :   utcTimestamp
                        });
                    }
                }

                return labels;

            };

        return {

            init             : init,
            groupByDays      : groupByDays,
            groupByHours     : groupByHours,
            singleScenario   : singleScenario,
            createDaysIntervals : createDaysIntervals,
        }
    },

    cachedPermutations = (function(){

        var

        getId = function(group, clientContext, timeSpan){

            var 
                groupBit         = JSON.stringify(group),
                clientContextBit = $.extend({}, clientContext),
                hash;

            delete clientContextBit.currentTime;
            delete clientContextBit.navigationSegment;
            delete clientContextBit.timeOption;

            clientContextBit = JSON.stringify(clientContextBit);
            hash = (groupBit + clientContextBit ).hashCode();
            
            return 'permutations_' + hash + '_' + timeSpan;
        },

        get = function(group, clientContext, timeSpan){

            if (bcpublic.helpandsupport.isNode){
                return undefined;
            }
            
            if (Modernizr.localstorage){
                var 
                    permutationsId = getId(group, clientContext, timeSpan),
                    result = window.localStorage.getItem(permutationsId);

                if (result){
                    return JSON.parse(result);
                }

                return undefined;
            }
            return undefined;
        },

        set = function(group, clientContext, timeSpan, result){

            if (bcpublic.helpandsupport.isNode){
                return undefined;
            }

            if (Modernizr.localstorage){

                var permutationsId = getId(group, clientContext, timeSpan);
                window.localStorage.setItem(permutationsId, JSON.stringify(result) );
                return true;
            }

            return undefined;
        };

        return {
            get : get,
            set : set
        }

    })(),

    /**
     * Entry point for creating contactsMap (time permutations) that can be later fed into createLabels()
     * @param  {Object}  group              group object
     * @param  {Object}  clientContext      client context object
     * @param  {String}  timeSpan           either 'week' or 'bank-holiday'
     * @return {Object}
     */
    createTimePermutations = function(group, clientContext, timeSpan, Mapping){

        // returned cashed permutations if exists
        var cached = cachedPermutations.get(group, clientContext, timeSpan);
        if (cached !== undefined){
            return cached;
        }

        var timeSamples             = createTimeSamples(timeSpan);
        var timeMap                 = createTimeMap(timeSamples, group, clientContext, Mapping);

        var contactsMap             =  createContactsMap(timeMap);
        var scenariosMap            = shortenScenariosNames(contactsMap);
        var scenariosMapIntervals   = createIntervals(scenariosMap);
        var labels                  = (new createLabelsNew()).init(scenariosMapIntervals);

        cachedPermutations.set(group, clientContext, timeSpan, labels);

        return labels;
        //return cutContactsMap;
    };

    return {
        createTimePermutations  : createTimePermutations,
        createContactsMap       : createContactsMap,
        shortenScenariosNames   : shortenScenariosNames,
        createTimeMap           : createTimeMap,
        extractPaths            : extractPaths,
        createTimeSamples       : createTimeSamples,
        createLabels            : createLabels,
        createLabelsNew         : createLabelsNew,
        formatToTwoDigits       : formatToTwoDigits
    }

})();


(function () {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = bcpublic.helpandsupport.timePermutations;
        bcpublic.helpandsupport.isNode = true;
    }
})();

String.prototype.hashCode = function(){
    var hash = 0;
    if (this.length == 0) return hash;
    for (var i = 0; i < this.length; i++) {
        var selectedChar = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+selectedChar;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
};
/* jshint shadow:true */
/**
 * @fileOverview Customer type context store logic.
 * @author: Maxim Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport.edit
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};
bcpublic.helpandsupport.edit = bcpublic.helpandsupport.edit || {};

bcpublic.helpandsupport.edit.storeCustomerType = (function($) {
    var init = function() {
        var $customerTypeList = $('.bhs-client-context--customer-type-list'),

            // Set customer type
            setType = function(evaluation) {
                if (evaluation.indexOf(';path=') > -1) {
                    // If evaluation string contains path, then use it as is
                    document.cookie = evaluation;
                } else {
                    // ... otherwise add a path fragment to add to the cookie
                    // so it is applied globally
                    document.cookie = evaluation + ';path=/';
                }
            },
            unknownSegmentSelected = 'checked="checked"';

        // Leave if segmentData is not available
        if (!bcpublic.helpandsupport.segmentData) {
            return;
        }

        // Add segments from JSON
        $.each(bcpublic.helpandsupport.segmentData, function(i, v) {
            // Prevent breaking of the markup if wrong data is used
            // Encode "
            var sanitizeEvaluation = v.evaluation.replace(/"/g, '&quot;'),
                prefix = 'segment-',
                name = v.name,
                checked = '';

            if (document.cookie.indexOf(v.evaluation) > -1) {
                checked = 'checked="checked"';
                unknownSegmentSelected = '';
            }
            
            $customerTypeList.append('<li><input '+ checked +' class="bhs-client-context--customer-type-item" type="radio" name="segment"' +
             ' id="' + prefix + name + '" value="' + sanitizeEvaluation + '"><label for="' + prefix + name + '">' + name + '</label></li>');
        });

        // Add the unknown segment
        $('<li><input class="bhs-client-context--customer-type-item-unknown" type="radio" name="segment"' +
            ' id="segment-unknown" ' + unknownSegmentSelected + ' value=""><label for="segment-unknown">Unknown</label></li>')
            .prependTo($customerTypeList)
            .click(function() {
                // Remove every cookie available in the list
                $.each(bcpublic.helpandsupport.segmentData, function(i, v) {
                    var evaluation = v.evaluation;

                    // Remove this cookie as is
                    document.cookie = evaluation + ';expires=Thu, 01 Jan 1970 00:00:00 GMT';
                    // Remove this cookie as a global path
                    document.cookie = evaluation + ';path=/;expires=Thu, 01 Jan 1970 00:00:00 GMT';
                    window.location.reload();
                });
            });


        // Update the cookie on a click and update the selected type
        $customerTypeList.find('.bhs-client-context--customer-type-item').click(function() {
            var $this = $(this),
                customerType = $this.val();

            setType(customerType);
            window.location.reload();
        });
    };

    $(function() {
        init();
    });
})(jQuery);
/* jshint -W069 */
/**
 * @fileOverview Segment resolve component
 * @author: Max Cherniavskyi <maxim.cherniavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

// bcpublic.helpandsupport.segment
bcpublic.helpandsupport.context = (function($) {
	/**
	 * Resolves to the client context
	 * @type {Deferred}
	 */
	var resolvedContext = $.Deferred(),
	
	/**
	 * Choose where to get context info from: either from cookies or from localStorage value
	 * @type {Function}
	 */
	strategy = bcpublic.helpandsupport.contextHelpers.chooseStrategy(),
	
	/**
	 * Shortcut
	 * @type {Object}
	 */
	contextFactory = bcpublic.helpandsupport.contextHelpers.contextFactory,

	/**
	 * Helper function to apply default value if prop is undefined
	 * @param  {Mixed} prop         Property value
	 * @param  {Mixed} defaultValue Default value
	 * @return {Mixed}              Applied value
	 */
	applyDefault = function(prop, defaultValue) {
		if (typeof prop === 'undefined') {
			return defaultValue;
		} else {
			return prop;
		}
	};

	// Apply strategy
	contextFactory.setStrategy(strategy);

	// Generate the context object
	contextFactory.generate()
	.then(function(generatedObj) {
		var CP = bcpublic.helpandsupport.contextHelpers.CONTEXT_PROPS;

		// Add R1 hardcoded properties
		generatedObj[CP.BMB] = null;
		generatedObj[CP.WEBCHAT_SUPPORTED] = null;

		// Use data coming from contextFactory, but fallback to defaults if anything is undefined
		generatedObj[CP.CUSTOMER_SEGMENT] = applyDefault(generatedObj[CP.CUSTOMER_SEGMENT], null);
		generatedObj[CP.NAV_SEGMENT] = applyDefault(generatedObj[CP.NAV_SEGMENT], null);
		generatedObj[CP.SECURE] = applyDefault(generatedObj[CP.SECURE], null);
		generatedObj[CP.TIME] = applyDefault(generatedObj[CP.TIME], (new Date()).toISOString());
		generatedObj[CP.WEBCHAT_ENABLED] = applyDefault(generatedObj[CP.WEBCHAT_ENABLED], null);
		generatedObj[CP.TIME_OPTION] = applyDefault(generatedObj[CP.TIME_OPTION], null);
		resolvedContext.resolve(generatedObj);
	});

	return resolvedContext;
})(jQuery);
/* jshint shadow:true, -W069*/
/**
 * @fileOverview Custom teaser implementation
 * @author: Max Cherniavskyi <maxim.chernyavskyi@akqa.com>
 * @namespace bcpublic.helpandsupport
 */
'use strict';

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/**
 * Custom teaser implementation
 */
bcpublic.helpandsupport.teaser = (function ($) {
    /**
     * Applies to teaser components.
     *
     * <div class="js-teaser"
     *    data-default-experience="/content/helpsupportpublic/home/jcr:content/navigation"
     *    data-experiences='[{"segmentName":"Personal","experience":"/content/helpsupportpublic/navigation/personal/jcr:content/navigation"},{"segmentName":"Premier","experience":"/content/helpsupportpublic/navigation/premier/jcr:content/navigation"}]'>
     * </div>
     *
     * @param  {String} context Context object
     * @return {jQuery}             jQuery object for chaining
     */
    $.fn.teaser = function (context) {
        var segmentName = context.navigationSegment,
            /**
             * Prefix for sessionStorage keys
             * @type {String}
             */
            sessionPrefix = 'cache:',

            /**
             * Checks if sessionStorage is available and loads data from it
             * @param  {String} path Path to fetch data for
             * @return {Object}      Null if sessionStorage is not available or there's not match for the path
             */
            loadSessionStorage = function (path) {
                // we are not using session storage when user is in CQ mode ( edit / preview )
                if (Modernizr.sessionstorage && ( window.CQ === undefined )) {
                    return sessionStorage.getItem(sessionPrefix + path);
                }

                return null;
            },

            /**
             * Save html to sessionStorage
             * @param  {String} path Keyname
             * @param  {String} html Markup
             */
            saveSessionStorage = function (path, html) {
                // we are not using session storage when user is in CQ mode ( edit / preview )
                if (Modernizr.sessionstorage && ( window.CQ === undefined )) {
                    sessionStorage.setItem(sessionPrefix + path, html);
                }
            },

            /**
             * Retrieve html for the teaser
             * @param  {String} path Path to the experience
             * @return {Deferred}      Resolved when html for the teaser is available
             */
            fetchExperience = function (path) {
                var deferred = $.Deferred(),
                    storageData = loadSessionStorage(path);

                if (storageData === null) {
                    $.get(path)
                        .done(function (data) {
                            deferred.resolve(data);
                            saveSessionStorage(path, data);
                        })
                        .fail(function () {
                            deferred.resolve('');
                        });
                } else {
                    deferred.resolve(storageData);
                }

                return deferred;
            },

            /**
             * Select name and a path to the experience based on the segment
             * @param  {jQuery} $teaser The teaser element
             * @return {Object}         Path to the experience to load and its name
             */
            matchSegmentExperience = function ($teaser) {
                var experiences = $teaser.data('experiences') || [],
                    defaultExperience = $teaser.data('defaultExperience'),
                    matches = $.grep(experiences, function (v) {
                    	//segmentName is never set and so this will never match. The defaultExperience as a result will always be used.
                        return segmentName === v.segmentName;
                    });

                // Use the first match or default if not matched
                return {
                    path: matches.length > 0 ? matches[0].experience : defaultExperience,
                    name: matches.length > 0 ? matches[0].segmentName : 'Default'
                };
            },

            matchColleagueExperience = function ($teaser) {
                var colleagueExperiences = $teaser.data('experiences') || [],
                    defaultColleagueExperience = $teaser.data('default-colleague-experience'),
                    colleagueExperienceName = getProfileCookie(),
                    matches = $.grep(colleagueExperiences, function (v) {
                        return v.segmentName === colleagueExperienceName;
                    });

                // Use the first match or default if not matched
                return {
                    path: matches.length > 0 ? matches[0].experience : defaultColleagueExperience,
                    name: matches.length > 0 ? matches[0].segmentName : 'Default'
                };
            },
            
            matchCountryCodeExperience = function ($teaser) {
                var countryCodeExperiences = $teaser.data('experiences') || [],
                    defaultCCExperience = $teaser.data('default-experience'),
                    countryCodeExperienceName = getContextHubCountryCode(),
                    matches = $.grep(countryCodeExperiences, function (v) {
                        return v.segmentName === countryCodeExperienceName;
                    });

                // Use the first match or default if not matched
                return {
                    path: matches.length > 0 ? matches[0].experience : defaultCCExperience,
                    name: matches.length > 0 ? matches[0].segmentName : 'Default'
                };
            },

            /**
             * Update the path for fetching
             * @param  {String} path CQ path
             * @return {String}      An updated path for ajax and storing
             */
            transformPath = function (path) {
                // wcmmode=disabled shouldn't be appended for the dispatcher
                var wcmDisabled = !bcpublic.helpandsupport.global.isRunModePublish() ? '?wcmmode=disabled' : '';
                // for toggle
                var currLocation = window.location.pathname;
                if ( currLocation.indexOf(".customer-view") !== -1 ) {
                    return path ? bcpublic.helpandsupport.global.externalizeUrl(path + '.teaser.colleague.html' + wcmDisabled) : '';
                } else {
                    return path ? bcpublic.helpandsupport.global.externalizeUrl(path + '.teaser.html' + wcmDisabled) : '';
                }
                // toggle - over
            },

            getProfileCookie = function () {
                var cookieName = 'CTF',
                    name = cookieName + "=",
                    cookieValue = null,
                    cookies = document.cookie.split(';');
                for ( var i = 0; i <cookies.length; i++ ) {
                    var cookie = cookies[i];
                    while ( cookie.charAt(0)==' ' ) {
                        cookie = cookie.substring(1);
                    }
                    if ( cookie.indexOf(name) === 0 ) {
                        cookieValue = cookie.substring(name.length,cookie.length) ;
                    }
                }
                var data,
                    profileCookie = cookieValue,
                    businessChannelDropdownSelectedOption = null ,
                    businessAreaDropdownSelectedOption = null;

                if ( ( profileCookie !== undefined ) && ( profileCookie !== null) ) {
                    data = JSON.parse(profileCookie) ;
                    businessChannelDropdownSelectedOption = data.businessChannelDropdownSelectedOption ;
                    businessAreaDropdownSelectedOption = data.businessAreaDropdownSelectedOption ;
                }
                var cookieSegmentName = businessChannelDropdownSelectedOption + '|' + businessAreaDropdownSelectedOption;
                return cookieSegmentName;
            },
            
            getContextHubCountryCode = function () {
                var lContextHub = localStorage.getItem("ContextHubPersistence");
                if (lContextHub) {
                    var cHub = JSON.parse(lContextHub);
                    var profile = cHub.store.profile;
                    if (profile !== undefined) {
                        return profile.CountryCode
                    }
                }
		        return "";
		        
            },

            /**
             * Resolve teasers html
             * @param  {DOM} teaser DOM element of the teaser
             */
            resolveTeaser = function (teaser) {
                var $this = $(teaser),
                    experience = matchSegmentExperience($this),
                    isColleague = $('.js-teaser.colleague-teaser'),
                    queryPath = '',
                    isContextHubEnabled =  $this.data('contexthub');
				if (isColleague.length > 0 ) {
                    var colleagueExperience = matchColleagueExperience($this);
                    queryPath = transformPath(colleagueExperience.path);
                    isColleague.attr('data-default-experience', queryPath);
                } else if (isContextHubEnabled) {
                    var countryCodeExperience = matchCountryCodeExperience($this);
                    queryPath = transformPath(countryCodeExperience.path);
                    $('.js-teaser').attr('data-default-experience', queryPath);
                } else {
                    queryPath = transformPath(experience.path);
                }


                if (!queryPath) {
                    // No experiences available
                    return;
                }

                fetchExperience(queryPath).then(function (html) {
                    $this.append(html);
                    // Label the fetched experience
                    if (!bcpublic.helpandsupport.global.isRunModePublish()) {
                        $this.prev('.component-label-wrapper')
                            .find('.js-teaser--resolved-experience')
                            .text(experience.name);
                    }


                    // Initalises the header once teaser loaded as teaser is used to load in header
                    $(document).on('teaserLoad', function (e, teaser) {
                        if ("undefined" !== typeof bdlf) {
                            bdlf.controller.init();
                            // if Search exists in Navagation run SearchBarNavigation init function.
                            if ($('.utilities li.search').length > 0){
                              bcpublic.helpandsupport.searchBarNavigation.init();
                            }
                        }
                    });

                    $(document).trigger('teaserLoad', [teaser]);
                });
            };

        // If no .js-teaser elements then run bdlf controller and searchBarNavigation initializers
        if (0 === $(this).length){
            if ("undefined" !== typeof bdlf) {
                bdlf.controller.init();

                // if Search exists in Navagation run SearchBarNavigation init function.
                if ($('.utilities li.search').length > 0){
                  bcpublic.helpandsupport.searchBarNavigation.init();
                }
            }
        }

        return this.each(function () {
            resolveTeaser(this);
        });
    };

    $(function () {
        bcpublic.helpandsupport.context.then(function (context) {
            $('.js-teaser').teaser(context);
        });
    });
})(jQuery);


$(document).on('ready', function() {
    "use strict";
    function addAriaHeading(jQueryObject,level){
        jQueryObject.attr('role','heading').attr('aria-level',level);
    }

    $('.h2, .h3, .h4, .h5, .h6').each(function(){
            if ($(this).is('span:first-child')){
                // if Hx class is applied to SPAN and this SPAN is a first-child of another tag then we bump the H2 class to the parent and remove this span.
                var spanText = $(this).text(),
                    spanClass = $(this).attr("class");
                $(this).parent().addClass(spanClass);
                //replace span with just content
                $(this).replaceWith(spanText);

            }
    });
    // Reselecting as DOM nodes may have changed
    $('p').each(function(){
        if ($(this).hasClass('h2')){
            addAriaHeading($(this),'2');
        } else if ($(this).hasClass('h3')){
            addAriaHeading($(this),'3');
        } else if ($(this).hasClass('h4')){
            addAriaHeading($(this),'4');
        } else if ($(this).hasClass('h5')){
            addAriaHeading($(this),'5');
        } else if ($(this).hasClass('h6')){
            addAriaHeading($(this),'6');
        }
    });
});
$(document).on('ready', function() {
    
    $('[data-rte-role="button"]').each(function(){
        $(this).attr('role', 'button');
    });
});
var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

bcpublic.helpandsupport.quickSearchBar = (function ($) {
    'use strict';

    var searchResultsVisible,
        desktopBreakpoint = 800,
        resultCountMobile = 4,
        resultCountDesktop = 10,
        colleagueResultCountDesktop = 5,
        resultCount,
        barclaysResults = '',
        suggestedResults = '',
        questionTerms = ['why', 'when', 'what', 'how'],
        helpandsupportResults = '',
        openClass = 'headersearch-open',
        searchBarFacets = '',


        isQueryAQuestion = function (query) {
            var arrayLength = questionTerms.length,
                i;
            for (i = 0; i < arrayLength; i++) {
                if (query.indexOf(questionTerms[i]) !== -1) {
                    return true;
                }
            }
            return false;
        },

        /**
         *
         * @param value - a raw html that you wish to add into DOM
         * @returns {string} a encoded safe HTML string which will be free of CVE-80 XSS attacks
         */
        vcEncodeHtml = function (value) {
            var text = document.createTextNode(value);
            var div = document.createElement('div');
            div.appendChild(text);
            return div.innerText;
        },

        insertSearchResults = function (query) {
            var isQuestion = isQueryAQuestion(query),
                primaryResultslistItems = '';


            if (document.location.pathname.indexOf("/help/") !== 0 && !isQuestion) {
                if (barclaysResults.length > 0) {
                    primaryResultslistItems = barclaysResults;
                }
                if (helpandsupportResults.length > 0) {
                    primaryResultslistItems += helpandsupportResults;
                }
            } else {
                if (helpandsupportResults.length > 0) {
                    primaryResultslistItems = helpandsupportResults;
                }
                if (barclaysResults.length > 0) {
                    primaryResultslistItems += barclaysResults;
                }
            }

            $('#primary-results, #primary-results-nav').html(vcEncodeHtml('<ul id="quick-search--list">' + primaryResultslistItems + '</ul>'));
        },

        /**
         * addiing suggested tag results into quick search results list
         * @param query
         */
        insertSuggestedSearchResults = function (query) {
            var isQuestion = isQueryAQuestion(query),
                primarySuggestedResultslistItems = '';

            if (document.location.pathname.indexOf("/help/") !== 0 && !isQuestion) {
                if (barclaysResults.length > 0) {
                    primarySuggestedResultslistItems = barclaysResults;
                }
                if (suggestedResults.length > 0) {
                    primarySuggestedResultslistItems += suggestedResults;
                }
            } else {
                if (suggestedResults.length > 0) {
                    primarySuggestedResultslistItems = suggestedResults;
                }
                if (barclaysResults.length > 0) {
                    primarySuggestedResultslistItems += barclaysResults;
                }
            }

            $('#primary-suggested-tags-results-nav').html(vcEncodeHtml('<ul>' + primarySuggestedResultslistItems + '</ul>'));
        },

        /**
         * Replace title with predefine span element
         * @param queryRegex - query with regex
         * @param title
         * @return {String} span element with title
         */
        getStringReplace = function(queryRegex,title){
            return title.replace(queryRegex, '<span class="headersearch-highlight">$&</span>');
        },

        /**
         * Organise the results into barclays.co.uk and help and support arrays
         * New change for colleague
         * added new suggested tags result with quick results for colleague site
         *
         * @method  generateResultsList
         * @param  {Object} results - object of results returned from search query.
         * @param  {String} rawquery - search query.
         * @param  {boolean} isSuggestedTags - flag true/false for generate result for suggested tags or quick result
         * @param  {boolean} isHasSuggestedResults - flag true/false for quick results display based on suggested tags result available
         * */
        generateResultsList = function (results, rawquery,isSuggestedTags,isHasSuggestedResults) {
            var query = $.trim(rawquery),

                highlightQuery = function (query, title) {

                    var queryRegex = new RegExp(query, 'gi'),
                        regexdTitle = isSuggestedTags ? getStringReplace(queryRegex,title.term):getStringReplace(queryRegex,title.title);

                    if (regexdTitle.indexOf('<span') === -1 && query.length > 2) {
                        query = query.slice(0, query.length - 1);
                        regexdTitle = highlightQuery(query, title);
                    }

                    return regexdTitle;
                },
                i,
                listTemplate,
                title;
                var resultsCount = getColleagueResultCount(isSuggestedTags,results,isHasSuggestedResults);
            for (i = 0; i <= resultsCount - 1; i++) {
                if (results[i] !== undefined) {
                    title = highlightQuery(query, results[i]);
                    listTemplate = '<li role="option" class="headersearch-item"><a role="link" tabindex="-1" class="headersearch-link" data-list-index="' + (i + 1) + '" href="' + results[i].url + '">' + title + '</a></li>';

                    if (results[i].source === 'www.barclays.co.uk') {
                        if(isSuggestedTags){
                            suggestedResults += listTemplate;
                        }else {
                            barclaysResults += listTemplate;
                        }
                    } else {
                        if(isSuggestedTags){
                            suggestedResults += listTemplate;
                        }else {
                            helpandsupportResults += listTemplate;
                        }
                    }
                }
            }

            isSuggestedTags ? insertSuggestedSearchResults(query): insertSearchResults(query);
        },
        /**
         * Get results count based on suggested tag available for quick search result if suggested tags available then only 5 quick results display
         * @param  {boolean} isSuggestedTags - flag true/false to check suggested tag results for set result count
         * @param results
         * @param  {boolean} isHasSuggestedResults - flag true/false to check suggested tag result available  for quick results count
         * @return {Integer}
         */
        getColleagueResultCount = function(isSuggestedTags,results,isHasSuggestedResults){

            if(resultCount < 5){
               return isSuggestedTags ? results.length : resultCount;
            }else {
                return isSuggestedTags ? results.length : ( isHasSuggestedResults && results[0].source === "colleague-barclays-intranet")?colleagueResultCountDesktop:resultCount;
            }
        },

        /**
         * Hide search results
         **/
        hideSearchResults = function () {
            $('#quicksearch-body').removeClass(openClass).attr('aria-hidden', 'true');
            searchResultsVisible = false;
        },

        /**
         * Show search results
         **/
        showSearchResults = function () {
            $('#quicksearch-body').addClass(openClass).attr('aria-hidden', 'false');
            $('#search-input').attr("aria-controls","quicksearch-body");
            searchResultsVisible = true;
        },

        personalizeQuickSearch = function(queryString){
        	var $searchBar = $('#search-bar');
	        if(!$searchBar.data('contexthub')){
	        	queryString = queryString.replace('&facets={facets}', '');
	        	return queryString;
	        }
       		if( searchBarFacets.length > 0){
       			queryString = queryString.replace('{facets}', searchBarFacets);
       		}else{
	            var lContextHub = localStorage.getItem("ContextHubPersistence");
	            if (lContextHub) {
	                var cHub = JSON.parse(lContextHub),
	                 	profile = cHub.store.profile;
	                if (profile !== undefined) {
	                    var countryCode = profile.CountryCode;
	                    //store the facets as a data attribute for re-use ...
	                    if(countryCode !== undefined && countryCode.length > 0 ){
	                    	searchBarFacets = "family-" + countryCode.toLowerCase();
	                    	queryString = queryString.replace('{facets}', searchBarFacets);
	                    }
	                }
	            }
            }
            if(queryString.indexOf('{facets}') > -1){
            	queryString = queryString.replace('&facets={facets}', '');
            }
			return queryString;
        },


        /**
         * AJAX call to the results end point
         *
         * @method  getSearchResults
         * @param  query - query searching for in the search box.
         */
        getSearchResults = function (query) {
            var searchBarResultsUrl = (document.getElementById('search-bar')) !== null ?
            			document.getElementById('search-bar').getAttribute('data-quick-search-path') :
            			'https://www.barclays.co.uk/help/results.quick-search.json?q={query}&origin={origin}&_charset_=UTF-8';

            if(!searchBarResultsUrl){
				hideSearchResults();
                return;
            }

            var fullQueryUrl = searchBarResultsUrl.replace('{query}', encodeURIComponent(query)).replace('{origin}', encodeURIComponent('www.barclays.co.uk'));
            fullQueryUrl = personalizeQuickSearch(fullQueryUrl);





            // Required for < IE9
            $.support.cors = true;

            $.ajax({
                    url: fullQueryUrl,
                    crossDomain: true,
                    dataType: 'json'
                })
                .done(function (data) {
                    var results = data['quick-search-results'];
                    var showSearchResultFlag = false;
                    var isHasSuggestedResults = false;
                    barclaysResults = '';
                    helpandsupportResults = '';
                    suggestedResults ='';
                    $('.headersearch-results>.headersearch-heading').show();

                    if (data.hasOwnProperty("suggestions")) {
                        showSearchResultFlag = true;
                        $('.headersearch-results .suggested-results').show();
                        var suggestedTagsResultElement = $('.headersearch-results .suggested-results .suggested-tags-results');
                        var suggestionJson = data['suggestions'];
                        var suggestedTagsJson = suggestionJson.hasOwnProperty('suggested-tags') ? suggestionJson['suggested-tags'] : [];
                        suggestedTagsResultElement.hide();
                        if(suggestedTagsJson.length > 0) {
                            isHasSuggestedResults = true;
                            suggestedTagsResultElement.show();
                        }
                        generateResultsList(suggestedTagsJson, query,true,isHasSuggestedResults);
                    } else {
                        $('.headersearch-results .suggested-results').hide();
                    }

                    if (results) {
                        if (results.length === 0) {
                            $('.headersearch-results>.headersearch-heading').hide();
                        }
                        generateResultsList(results, query,false,isHasSuggestedResults);
                        showSearchResultFlag = true;
                    }

                    if (showSearchResultFlag) {
                        showSearchResults();
                    } else {
                        hideSearchResults();
                    }
                });
        },


        /**
         * Binds event to the window to help determine the number of results to display .
         *
         * @method  calculateNumberResults
         */
        calculateNumberResults = function () {
            if (bcpublic.helpandsupport.global.getScreenWidth() < desktopBreakpoint) {
                resultCount = resultCountMobile;
            } else {
                resultCount = resultCountDesktop;
            }
        },

        init = function () {
            calculateNumberResults();
        };
    $(document).ready(function () {
        init();
    });

    return {
        init: init,
        getSearchResults: getSearchResults,
        hideSearchResults: hideSearchResults,
        showSearchResults: showSearchResults
    };
})(jQuery);
/**
 * @fileOverview Provides functionality for the accordion.
 * @author: Thomas Maton <thomas.maton@akqa.com>
 * @namespace bcpublic.commonlibs
 */

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/*
 * @class searchBarNavigation
 * @constructor
 */
bcpublic.helpandsupport.commonQuestionsBar = (function ($) {
    'use strict';

    var $searchBarInput = $('#search-input'),
        /**
         * Common questions drop down
         * @type {jQuery}
         */
        $commonQuestions = $('#commonquestions-body'),
        /**
         * should we display common questions
         * @type {Boolean}
         */
        displayCommonQuestions = $commonQuestions.data('displayCommonQuestions') === false ? false : true,
        /**
        * Is open state class to attach to commonquestions container
        * @type {String}
        */
        openClass = 'headersearch-open',

        showCommonQuestionsWithDelay = function (delay) {
            var showCommonQuestionsTimeout;

            if (delay === undefined) {
                delay = 1000 * 2;
            }

            showCommonQuestionsTimeout = setTimeout(showCommonQuestions, delay);

            $searchBarInput.one('keydown', function () {
                clearTimeout(showCommonQuestionsTimeout);
            });
        },
        /**
         * Hide common questions.
         */
        hideCommonQuestions = function () {
            if ($('#commonquestions-body').hasClass(openClass)) {
                $('#commonquestions-body').removeClass(openClass).attr('aria-hidden', 'true');
            }
        },
        /**
         *
         * @param value - a raw html that you wish to add into DOM
         * @returns {string} a encoded safe HTML string which will be free of CVE-80 XSS attacks
         */
        vcEncodeHtml = function (value) {
            var text = document.createTextNode(value);
            var div = document.createElement('div');
            div.appendChild(text);
            return div.innerText;
        },
        /**
         * Show common questions.
         */
        showCommonQuestions = function (data) {
            if (displayCommonQuestions) {
                $("#common-questions-list").html(vcEncodeHtml(data));
                $('#commonquestions-body').addClass(openClass).attr('aria-hidden', 'false');
                $('#search-input').attr("aria-controls","commonquestions-body");
            }
        };

    return {
        showCommonQuestions: showCommonQuestions,
        hideCommonQuestions: hideCommonQuestions,
        showCommonQuestionsWithDelay: showCommonQuestionsWithDelay
    };
})(jQuery);
/**
 * @fileOverview Provides functionality for the accordion.
 * @author: Peter Puzanovs
 * @namespace bcpublic.commonlibs
 */

var bcpublic = bcpublic || {};
bcpublic.helpandsupport = bcpublic.helpandsupport || {};

/*
 * @class searchBarNavigation
 * @constructor
 */
bcpublic.helpandsupport.searchBarNavigation = (function ($) {
    'use strict';
    /**
     * Search bar that triggers the dropdown
     * @type {jQuery}
     */
    var numberOfCharactersToBegin = 3,
        searchboxSelector = '#search-input',
        searchBarSearchBoxSelector = '.search-bar--searchbox',
        bcpublicGlobal = bcpublic.helpandsupport.global,
        delayTime = 60, //ms
        barclaysResults = '',
        isColleague = $('.js-teaser.colleague-teaser'),
        searchResultsUrl = '',
        searchBarResultsUrl,
        searchInputSelector = '.search-bar--searchbox',
        searchButtonLabel = '.search-bar--submit';

        /**
         * Binds events to the necessary DOM elements
         *
         * @method  bindEvents
         */
        var bindEvents = function () {
            searchBarResultsUrl = (document.getElementById('search-bar')) !== null ?
                    document.getElementById('search-bar').getAttribute('data-top-search-path') :
                    '/content/barclayscouk/help/results/jcr:content/search_bar.topanswers.json';
            if (isColleague.length > 0 ) {
                searchResultsUrl = "/content/colleague-barclays-intranet/en/results/_jcr_content/search_bar.topanswers.json";
            } else {
                searchResultsUrl = searchBarResultsUrl;
            }

            $.ajax({
                url: searchResultsUrl,
                crossDomain: true,
                dataType: 'json'
            })
            .done(function (data) {
                barclaysResults = '';
                for (var i = 0; i <= 10 - 1; i++) {
                    if (data[i] !== undefined) {
                        var listTemplate = '<li role="option" class="headersearch-item"><a role="link" tabindex="-1" class="headersearch-link" data-list-index="' + (i+1) + '" href="' + data[i].url + '">' + data[i].title + '</a></li>';
                        barclaysResults += listTemplate;
                    }
                }
            });
            $('body').on('focus',searchboxSelector,function () {
                if ($(searchboxSelector).val().length >= numberOfCharactersToBegin) {
                    bcpublic.helpandsupport.quickSearchBar.showSearchResults();
                } else {
                    bcpublic.helpandsupport.commonQuestionsBar.showCommonQuestions(barclaysResults);
                }
            });

            $('body').on('keyup', searchboxSelector, bcpublicGlobal.debounce(function (e) {
                var searchQuery = this.value;
                // Enter
                if (e.keyCode === 13) {
                    if (searchQuery !== '') {
                        $(this).closest('form').submit();
                    }
                }
                // Del or Backspace
                else if ((e.keyCode === 46 || e.keyCode === 8) && searchQuery.length < numberOfCharactersToBegin) {
                    bcpublic.helpandsupport.commonQuestionsBar.showCommonQuestions(barclaysResults);
                    bcpublic.helpandsupport.quickSearchBar.hideSearchResults();
                } else if ((e.keyCode !== 40 && e.keyCode !== 38) && searchQuery.length >= numberOfCharactersToBegin) {
                    // Don't trigger on up and down arrow
                    bcpublic.helpandsupport.commonQuestionsBar.hideCommonQuestions();
                    bcpublic.helpandsupport.quickSearchBar.getSearchResults(searchQuery);
                }
            }, delayTime))
                .on('blur', searchboxSelector, function () {
                // Timeout for IE8
                setTimeout(function () {
                    bcpublic.helpandsupport.quickSearchBar.hideSearchResults();
                    bcpublic.helpandsupport.commonQuestionsBar.hideCommonQuestions();
                }, 200);
            }).on('cssClassChange','.headersearch-item, UL#common-questions-list > LI',function(){
                $(searchboxSelector).val($(this).text()).trigger('change');
            }).on('cssClassChange','.quick-search--results-item, UL.common-questions--list > LI',function(){
                $(searchBarSearchBoxSelector).val($(this).text()).trigger('change');
            });

            $(searchButtonLabel).removeAttr("tabindex");
            $(searchInputSelector).removeAttr("tabindex");
         },

        /**
         * Initialise the JavaScript for the searchBar
         *
         * @method  init
         */
        init = function () {
            bindEvents();
        };

    return {
        init: init,
        bindEvents: bindEvents
    };
})(jQuery);
(function ($, window, document, undefined) {

    var init = function () {

        var COUNTRY_TAG_PREFIX = "family-";

        var getCountryCode = function(){
            var lContextHub = localStorage.getItem("ContextHubPersistence");
            if (lContextHub) {
                var cHub = JSON.parse(lContextHub);
                var profile = cHub.store.profile;
                if (profile !== undefined) {
                    return profile.CountryCode
                }
            }
            return "";
        }


        $(".search-bar").each(function () {
        
        	//Only proceed if contexthub is enabled ...
            if(!$(this).data('contexthub')){
				return;
            }
            
            var form = $(this).children('form');
            var countryValue = getCountryCode();

            if (form.length > 0 && countryValue !== undefined && countryValue.length > 0) {
                var facets = form.find('input[name=facets]');

                //if facets input field does not exist append it to form.
                if (facets.length === 0) {
                    form.append('<input type="hidden" name="facets" value="" />');
                    facets = form.find('input[name=facets]');
                }

                facets.attr('value', COUNTRY_TAG_PREFIX + countryValue.toLowerCase());
            }
        });
    };

    $(document).ready(function () {
        init();

        $('body').on('focus', '#search-input', function () {
            init();
        });
    });
})(jQuery, window, document);

(function ( $, window, document, undefined) {

    'use strict';

    var $target = $("#countryList");

    var getCountryCode = function(){
        var lContextHub = localStorage.getItem("ContextHubPersistence");
        if (lContextHub) {
            var cHub = JSON.parse(lContextHub);
            var profile = cHub.store.profile;
            if (profile !== undefined) {
                return profile.CountryCode
            }
        }
        return "";
    }

    var updateCountryList = function () {
        var countryValue = getCountryCode();
        if (countryValue) {
            $target.val(countryValue);
        }
    }

    $(document).ready(function () {
        updateCountryList();
        if ($target.length > 0) {
            var cntxHub = window.ContextHub;
            if (cntxHub) {
                var profileStore = cntxHub.getStore("profile");
                if (profileStore) {
                    profileStore.eventing.on(ContextHub.Constants.EVENT_DATA_UPDATE, updateCountryList, "countrycode");
                }
            }
        }

    });
})(jQuery, window,document)

$(window).on('load', function() {
    var firstParBaseInPromo = $('.promo-wrapper-V2 article.promo ').find(':first.parbase') ;
    firstParBaseInPromo.each( function() {
        $(this).parent().html($(this).html());
    });
    $('.promo-wrapper-V2').addClass('wrapper');
});
