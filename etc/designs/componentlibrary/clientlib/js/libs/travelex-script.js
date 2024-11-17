/**
 * Adapted from the Travelex Currency site
 */
    // preloader
    // make live URL
    // config start

var btnLabel = $('.btntxt').text();
var Config_Order_HideAddCurrencyButton = false;
var messages = messages || {};
var Config_Token_noOfAttemps = 2;
var Config_Token_ErrorTimeout = 30000;
var Config_Token_CpsUrlPrepaid = "https://sit.cpsmt.mhshosting.com/travelex/token/prepaidCard";
var i18nConfig = {
    "countryCode": "GB",
    "currencyCode": "GBP",
    "language": "en-GB",
    "distanceUnit": "Miles",
    "dps": {"BHD": 3, "CLP": 0, "IDR": 0, "ISK": 0, "JOD": 3, "JPY": 0, "KRW": 0, "KWD": 3, "LBP": 0, "OMR": 3},
    "groupSeparator": ",",
    "decimalSeparator": "."
};

// var __ApiKeyConfig = {"key":"Travelex","site":"/barclaysuk","url":"https://uat-api.travelex-dev.net/salt"};
var __ApiKeyConfig = {"key": "Travelex", "site": "/barclaysuk", "url": "https://api.travelex.net/salt/"};

// var __Host = "uat.travelex-dev.net";
var __Host = "travelmoney.travelex.co.uk";

// var __PurchaseUrl = "https://uat.travelex-dev.net/barclaysuk/purchase";
var __PurchaseUrl = "https://travelmoney.travelex.co.uk/barclaysuk/purchase?noheader=true";

var __IsTopRatesVisible = true;
var __IsCompetitorRatesVisible = true;
var Config_Order_HidePrePaidCardSaleWhenDisabled = true;

messages["UI3_Currency_Widget:BuyButtonCash"] = btnLabel;
messages["UI3_Currency_Widget:BuyButtonCashPassport"] = "BUY CASH PASSPORT";
messages["UI3_Currency_Widget:DropdownNoMatchesFound"] = "No matches found";
messages["UI3_Currency_Widget:CompetitorsRatesPartnerName"] = "Travelex.co.uk";
messages["UI3_Funnel_General:MonthNamesShort"] = "\u0027Jan\u0027,\u0027Feb\u0027,\u0027Mar\u0027,\u0027Apr\u0027,\u0027May\u0027,\u0027Jun\u0027,\u0027Jul\u0027,\u0027Aug\u0027,\u0027Sep\u0027,\u0027Oct\u0027,\u0027Nov\u0027,\u0027Dec\u0027";

// config end


(function () {

    function m(n) {
        return messages[n] || n;
    }

    function formatNumber(n, t, i, r, u) {
        var e = "\\d(?=(\\d{" + (i || 3) + "})+" + (t > 0 ? "\\D" : "$") + ")", f = n.toFixed(Math.max(0, ~~t));
        return (u ? f.replace(".", u) : f).replace(new RegExp(e, "g"), "$&" + r);
    }

    function init_i18n() {
        i18n = new I18n(i18nConfig);
    }

    function assoc_any(n, t) {
        for (var i in n) if (t(i, n[i])) return !0;
        return !1;
    }

    function luhnCheck(n) {
        var i, f;
        if (n === "" || /[^0-9 \-]+/.test(n)) return !1;
        var u = 0, t = 0, r = !1;
        for (n = n.replace(/\D/g, ""), i = n.length - 1; i >= 0; i--) f = n.charAt(i), t = parseInt(f, 10), r && (t *= 2) > 9 && (t -= 9), u += t, r = !r;
        return u % 10 == 0;
    }

    function GetAccessToken(n, t, i) {
        var r;
        if (n.partnerInfo.isPciEnabled) {
            r = t == -1 ? Config_Token_noOfAttemps : t;
            var f = $("#hdaccessToken"), u = $("#hderror"), e = {
                type: "POST",
                url: __ApiKeyConfig.url + "/CpsAccessToken/GetAccessToken?key=Travelex",
                contentType: "application/javascript",
                dataType: "jsonp",
                async: false,
                success: function (t) {
                    if (t.accessToken !== "") if (t.error === undefined) f.val(t.accessToken), u.val(""), i !== null && GetCardToken(i.url, i.requestData, i.config, i.pageType, i.noofAttempts, i.clickButton, i.prePaidCard, i.reloadInstance); else return u.val("Error Code: " + t.error + ", Error Description: " + t.error_description), i !== null && i.pageType == "reload" && putPanIntoLocker(i.requestData.card.accountNumber, "", n), GetAccessTokenResult(i); else r--, i !== null && i.pageType == "reload" && putPanIntoLocker(i.requestData.card.accountNumber, "", n), GetAccessToken(n, r, i)
                },
                error: function (n) {
                    return u.val("Error Code: Error Block, Error Description: " + JSON.stringify(n)), GetAccessTokenResult(i)
                },
                timeout: Config_Token_ErrorTimeout
            };

            if (r > 0) $.ajax(e); else return i !== null && i.pageType === "reload" && putPanIntoLocker(i.requestData.card.accountNumber, "", n), GetAccessTokenResult(i)
        }
    }

    function GetCardToken(n, t, i, r, u, f, e, o) {
        var s = !1, h, v;
        if (i.partnerInfo.isPciEnabled) {
            var c = $("#hdaccessToken").val(), l = $("#hdcardToken"), a = $("#hderror");
            if (r === "reload" ? l = $("#hdcardTokenReload") : f.css("opacity") === "1" && (s = !0, f.animate({opacity: .5}, 250)), h = u == -1 ? Config_Token_noOfAttemps : u, v = {
                url: n,
                contentType: "application/javascript",
                dataType: "jsonp",
                async: false,
                type: "POST",
                jsonp: "callback",
                jsonpCallback: "processTempTokenResult",
                crossDomain: !0,
                timeout: Config_Token_ErrorTimeout,
                data: "accessToken=" + encodeURIComponent(c) + "&payload=" + encodeURIComponent(JSON.stringify(t)),
                success: function (c) {
                    if (c.error === undefined) {
                        if (c.token !== null) return l.val(c.token), a.val(""), r === "reload" && (o.token = l.val(), OnCardTokensucessPrepaid(i, c.token)), GetCardTokenResult(r, e, o, s, f);
                        h--;
                        GetCardToken(n, t, i, r, h, f, e, o);
                    } else {
                        if (a.val("Error Code: " + c.error + ", Error Description: " + c.error_description), c.error === "401") {
                            var v = {
                                url: n,
                                requestData: t,
                                config: i,
                                pageType: r,
                                noofAttempts: u,
                                clickButton: f,
                                prePaidCard: e,
                                reloadInstance: o,
                                enableButton: s
                            };
                            GetAccessToken(i, u, v);
                        } else r === "reload" && putPanIntoLocker(t.card.accountNumber, "", i);
                        return GetCardTokenResult(r, e, o, s, f);
                    }
                },
                error: function (n) {
                    return a.val("Error Code: Error Block, Error Description: " + JSON.stringify(n)), GetCardTokenResult(r, e, o, s, f)
                },
                beforeSend: function (n) {
                    n.setRequestHeader("access_token", c)
                }
            }, h > 0) if (c !== "") $.ajax(v);
            else return r === "reload" && putPanIntoLocker(t.card.accountNumber, "", i), GetCardTokenResult(r, e, o, s, f);
            else return r === "reload" && putPanIntoLocker(t.card.accountNumber, "", i), GetCardTokenResult(r, e, o, s, f);
        } else return r === "reload" && putPanIntoLocker(t.card.accountNumber, "", i), GetCardTokenResult(r, e, o, s, f);
    }

    function GetCardTokenResult(n, t, i, r, u) {
        if (n === "reload") return ReloadWidget.prototype.afterCardTokenExecution(t, i);
        r && u.animate({opacity: 1}, 250);
    }

    function GetAccessTokenResult(n) {
        if (n !== null && n.pageType === "reload" && n.reloadInstance) return ReloadWidget.prototype.afterCardTokenExecution(n.prePaidCard, n.reloadInstance);
        n !== null && n.pageType === "payment" && n.enableButton && n.clickButton.animate({opacity: 1}, 250);
    }

    function format(n) {
        for (var t = [], u, r, f, i = 0; i < arguments.length - 1; i++) t[i] = arguments[i + 1];
        for (u = n, t.length == 1 && $.isArray(t[0]) && (t = t[0]), r = 0; r < t.length; r++) f = new RegExp("\\{" + r + "\\}", "gm"), u = u.replace(f, t[r]);
        return u;
    }

    function selectOnFocus(n) {
        n.each(function (n, t) {
            var i = $(t), r = !1;
            i.on('mousedown', function () {
                document.activeElement !== t && (r = !0)
            });
            i.on('mouseup', function (n) {
                r && (n.preventDefault(), r = !1);
            });
            i.focus(function () {
                return i.select(), this.setSelectionRange ? (this.setSelectionRange(0, 9999), !1) : void 0
            })
        })
    }

    function charactersOnly(n) {
        n.keypress(function (n) {
            var t = n.which || n.keyCode;
            return n.ctrlKey || n.altKey ? !0 : t === 8 || t === 9 || t === 13 || t === 46 || t === 32 || t === 45 || n.which && t === 39 || !n.which && t >= 35 && t <= 40 || t >= 65 && t <= 90 || t >= 97 && t <= 122
        })
    }

    function numericOnly(n) {
        n.keypress(function (n) {
            var t = n.which || n.keyCode;
            return n.ctrlKey || n.altKey ? !0 : t === 8 || t === 9 || t === 13 || t === 46 || t === 44 || t === 190 || t >= 48 && t <= 57
        });
        n.change(function () {
            var t = n.val();
            t.match(/[^0-9.,]/g) && (t = t.replace(/[^0-9.,]/g, ""), n.val(t))
        })
    }

    function templateReplace(n, t) {
        var i, r;
        for (i in t) r = new RegExp("\\[" + i + "\\]", "ig"), n = n.replace(r, t[i]);
        return n = n.replace(/\[\[/ig, "["), n.replace(/\]\]/ig, "]")
    }

    function makePath(n) {
        pathPrefix = $("#pathPrefix");
        var t = pathPrefix.attr("data-path");
        return n.replace("~", t)
    }

    function makeUrl(n) {
        return (n = makePath(n), typeof __Host !== "undefined") ? "//" + __Host + n : n
    }

    function generateUUID() {
        var n = (new Date).getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
            var i = (n + Math.random() * 16) % 16 | 0;
            return n = Math.floor(n / 16), (t === "x" ? i : i & 7 | 8).toString(16)
        })
    }

    function maskPAN(n) {
        return "xxxx-xxxx-xxxx-" + n.substring(n.length - 4)
    }

    function maskPAN2(n) {
        var t = n.split("_")[0], i, u = "", r;
        if (t.length < 16) {
            for (i = t.substr(0, 6), r = 0; r < t.length - 10; r++) u += "*";
            i += u;
            i += t.substr(t.length - 4)
        } else {
            for (i = t.substr(0, 6), r = 0; r < t.length - 10; r++) u += "*";
            i += u;
            i += t.substr(t.length - 4)
        }
        return i
    }

    function addUrlParams(n) {
        for (var r = [], i, t = 0; t < arguments.length - 1; t++) r[t] = arguments[t + 1];
        for (i = 0; i < r.length; i += 2) n += n.indexOf("?") === -1 ? "?" : "&", n += r[i] + "=" + encodeURIComponent(r[i + 1]);
        return n
    }

    function getUrlParam(n) {
        n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var i = new RegExp("[\\?&]" + n + "=([^&#]*)"), t = i.exec(location.search);
        return t == null ? null : decodeURIComponent(t[1].replace(/\+/g, " "))
    }

    function trimStart(n, t) {
        return t.substr(0, n.length) === n && (t = t.substring(n.length, t.length + 1)), t
    }

    function OnCardTokensucessPrepaid(n, t) {
        var i = $("#Prepaidcardnumber"), r = i.val(), u = maskPAN2(i.val());
        t ? putPanIntoLocker(u, t, n) : putPanIntoLocker(r, t, n);
        i.val(maskPAN(r));
        i.prop("disabled", !0)
    }

    function putPanIntoLocker(n, t, i) {
        var u = this, f = $("#Prepaidcardnumber"), r;
        f.val(maskPAN(n));
        r = {
            url: makeUrl("~/prePaidCard"),
            data: {partnerId: i.partnerInfo.partnerId, pan: n, token: t},
            error: function (n, t, i) {
                return u.onError(n, t, i)
            }
        };
        $.ajax(r)
    }

    function gotoPurchaseFunnelWhenPressAdd(n) {
        n.cashWidget && n.cashWidget.onClickAddEvent.addEventListener(__purchase);
        n.reloadWidget && n.reloadWidget.onClickAddEvent.addEventListener(__purchase)
    }

    function __purchase(n) {
        var t = addUrlParams(__PurchaseUrl, "productCode1", n.basketItem.productCode, "amount1", "" + i18n.formatNumber(n.basketItem.currencyCode, n.basketItem.domesticAmount), "reloadPAN", __btoa(n.reloadPAN || ""), "reloadToken", __btoa(n.reloadToken || ""));
        n.source.substituteProduct && (t += format("&subst={0}/{1}", n.source.currentItem.id, n.source.substituteProduct.productType));
        top.location = t
    }

    function __btoa(n) {
        n = String(n);
        var t = 0, o = [], r, u, f, s, h, e, i;
        if (/[^\x00-\xFF]/.test(n)) throw Error("InvalidCharacterError");
        while (t < n.length) r = n.charCodeAt(t++), u = n.charCodeAt(t++), f = n.charCodeAt(t++), s = r >> 2, h = (r & 3) << 4 | u >> 4, e = (u & 15) << 2 | f >> 6, i = f & 63, t === n.length + 2 ? (e = 64, i = 64) : t === n.length + 1 && (i = 64), o.push(B64_ALPHABET.charAt(s), B64_ALPHABET.charAt(h), B64_ALPHABET.charAt(e), B64_ALPHABET.charAt(i));
        return o.join("")
    }

    function initWidgets() {
        if (typeof i18nConfig !== "undefined") {
            init_i18n();
            initRateChart();
            var n = __ApiKeyConfig.url + "/config/multi";
            return $.ajax({
                type: "GET",
                url: n,
                data: {key: __ApiKeyConfig.key, site: __ApiKeyConfig.site, options: "abhikzl"},
                dataType: "jsonp",
                async: false,
                success: function (n) {
                    $(function () {
                        var t = new WidgetContext(n);
                        initCompetitorRates(t);
                        initConverter(t);
                        initCurrencyLookups(t);
                        initCurrencyWidget(t);
                        initExchangeRates(t);
                        initRateTracker(t);
                        __WidgetConfigCallback && __WidgetConfigCallback(n);
                        __WidgetContextLoadedEvent.dispatchEvent(t);
                    })
                },
                error: function () {
                    console.log("Could not load config: " + n)
                }
            });
        }
    }

    function initRateChart() {
        if ($("#historyGraph").length > 0) {
            //console.log("creating rate chart...");
            var n = null;
            typeof __ForeignCurrencyCode !== "undefined" && __ForeignCurrencyCode && (n = __ForeignCurrencyCode);
            __RateChart = new RateChart(i18nConfig.currencyCode, n, $(".graph"))
        }
    }

    function initConverter(n) {
        var i, r, t;
        $(".currency-converter").length > 0 && (console.log("creating converter..."), i = null, typeof __ForeignCurrencyCode !== "undefined" && __ForeignCurrencyCode && (i = __ForeignCurrencyCode), r = null, typeof __DomesticCurrencyLabel !== "undefined" && __DomesticCurrencyLabel && (r = __DomesticCurrencyLabel), t = new Widget(n, null, ProductTypes.Cash, i, $(".currency-converter"), ".buy-amount", ".cost", ".autocomplete,.autocomplete-w", ".cost-lbl", ".exrate", ".addCash,.buyCurrency", !1, [ProductTypes.Cash]), t.onClickAddEvent.addEventListener(__purchase), $(".switch").click(function (n) {
            n.preventDefault();
            var t = $("#container1").children().detach(), i = $("#container2").children().detach();
            return t.appendTo("#container2"), i.appendTo("#container1"), !1
        }), typeof __RateChart !== "undefined" && __RateChart && __RateChart.attach(t), t.initSelection())
    }

    function initCompetitorRates(n) {
        if ($("#competitorRates").length > 0 && n.config.competitorRates !== null) {
            //console.log("creating standalone competitor rates...");
            var t = new CompetitorRatesWidget(n, !1, $("#competitorRates"));
            t.selectDefaultCurrency();
            $("#competitorRates").show();
        } else $("#competitorRates").hide(), $(".hwc").hide(), $(".widget-mobile").hide()
    }

    function initCurrencyLookups(n) {
        $(".currency-lookup").each(function (t, i) {
            var r, u, f;
            //console.log("creating currency lookup...");
            r = $(i);
            u = new CurrencyLookupWidget(r, function (t) {
                return CurrencyLookupWidget.DefaultSearch(n.config, ProductTypes.Cash, t);
            });

            r.hasClass("auto-submit") && (console.log("...with auto submit"), u.onSelectItemEvent.addEventListener(function (n) {
                top.location = addUrlParams(__PurchaseUrl, "productCode1", n.currencyCode)
            }));
            r.attr("data-buy-btn") && (console.log("...with buy btn: " + r.attr("data-buy-btn")), f = $(r.attr("data-buy-btn")).click(function (n) {
                return n.preventDefault(), u.selectedItem && (top.location = addUrlParams(__PurchaseUrl, "productCode1", u.selectedItem.currencyCode)), !1
            }))
        })
    }

    function initCurrencyWidget(n) {
        var i = !1, t;
        typeof __IsTopRatesVisible !== "undefined" && __IsTopRatesVisible && (i = __IsTopRatesVisible);
        t = !1;
        typeof __IsCompetitorRatesVisible !== "undefined" && __IsCompetitorRatesVisible && (t = __IsCompetitorRatesVisible);
        $(".currency-widget").each(function (r, u) {
            var h, e, c;
            //console.log("creating currency widget...");
            var o = $(u), f = new CurrencyWidget(n, o.find(".widget-container")), s = o.find(".widget-rates");

            // temporary assignment ot get the rate table up
            i = true;
            i && n.config.topRates !== null && n.config.topRates.length > 0 ? (console.log("...with top rates"), h = new TopRatesWidget(n, s), h.attach(f.cashWidget), h.attach(f.reloadWidget), s.show()) : s.hide();
            i = false;
            e = o.find(".widget-compare");
            t && n.config.competitorRates !== null ? (console.log("...with competitors rates"), c = new CompetitorRatesWidget(n, !0, e), c.attach(f.cashWidget), c.attach(f.reloadWidget), e.show()) : e.hide();
            gotoPurchaseFunnelWhenPressAdd(f);
            GetAccessToken(n.config, -1, null);
            f.initSelection(!0)
        })
    }

    function initExchangeRates(n) {
        if ($(".exchange-rates").length > 0) {
            //console.log("creating exchange rates widget...");
            var t = new ExchangeRates(n)
        }
    }

    function initRateTracker(n) {
        if (typeof RateTrackerWidget !== "undefined") {
            //console.log("creating rate tracker widget...");
            var t = new RateTrackerWidget(n);
        }
    }

    var Accessibility, PageName, EventDispatcher, I18n, i18n, CurrencySymbol, MobileDetector, backgroundColorCache, pathPrefix, B64_ALPHABET;
    (function (n) {
        "use strict";
        n.fn.extend({
            customSelect: function (t) {
                if (typeof document.body.style.maxHeight === "undefined") return this;
                var t = n.extend({
                    customClass: "customSelect", mapClass: !0, mapStyle: !0
                }, t), u = t.customClass, r = function (t, r) {
                    var u = t.find(":selected"), f = r.children(":first"), e = u.html() || "&nbsp;";
                    f.html(e);
                    u.attr("disabled") ? r.addClass(i("DisabledOption")) : r.removeClass(i("DisabledOption"));
                    setTimeout(function () {
                        r.removeClass(i("Open"));
                        n(document).off("mouseup.customSelect")
                    }, 60)
                }, i = function (n) {
                    return u + n
                };
                return this.each(function () {
                    var e = n(this), o = n("<span />").addClass(i("Inner")), f = n("<span />");
                    e.after(f.append(o));
                    f.addClass(u);
                    t.mapClass && f.addClass(e.attr("class"));
                    t.mapStyle && f.attr("style", e.attr("style"));
                    e.addClass("hasCustomSelect").on("render.customSelect", function () {
                        r(e, f);
                    }).trigger("render.customSelect");
                })
            }
        })
    })(jQuery), function (n) {
        function i(n, t) {
            var r = n.data("ddslick"), e = n.find(".dd-selected"), h = e.siblings(".dd-selected-value"), l = n.find(".dd-options"), a = e.siblings(".dd-pointer"), o = n.find(".dd-option").eq(t), c = o.closest("li"), f = r.settings,
                i = r.settings.data[t];
            n.find(".dd-option").removeClass("dd-option-selected");
            o.addClass("dd-option-selected");
            r.selectedIndex = t;
            r.selectedItem = c;
            r.selectedData = i;
            f.showSelectedHTML ? e.html((i.text ? '<label class="dd-selected-text">' + i.text + "<\/label>" : "") + (i.description ? '<small class="dd-selected-description dd-desc' + (f.truncateDescription ? " dd-selected-description-truncated" : "") + '" >' + i.description + "<\/small>" : "")) : e.html(i.text);
            h.val(i.value);
            r.original.val(i.value);
            n.data("ddslick", r);
            u(n);
            s(n);
            typeof f.onSelected === "function" && f.onSelected.call(this, r)
        }

        function r(t) {
            var r = t.find(".dd-select"), i = r.siblings(".dd-options"), u = r.find(".dd-pointer"), f = i.is(":visible");
            n(".dd-click-off-close").not(i).slideUp(50);
            n(".dd-pointer").removeClass("dd-pointer-up");
            f ? (i.slideUp("fast"), u.removeClass("dd-pointer-up")) : (i.slideDown("fast"), u.addClass("dd-pointer-up"));
            h(t)
        }

        function u(n) {
            n.find(".dd-options").slideUp(50);
            n.find(".dd-pointer").removeClass("dd-pointer-up").removeClass("dd-pointer-up")
        }

        function s(n) {
            var t = n.find(".dd-select").css("height"), i = n.find(".dd-selected-description"), r = n.find(".dd-selected-image");
            i.length <= 0 && r.length > 0 && n.find(".dd-selected-text").css("lineHeight", t)
        }

        function h(t) {
            t.find(".dd-option").each(function () {
                var i = n(this), r = i.css("height"), u = i.find(".dd-option-description"), f = t.find(".dd-option-image");
                u.length <= 0 && f.length > 0 && i.find(".dd-option-text").css("lineHeight", r)
            })
        }

        n.fn.ddslick = function (i) {
            if (t[i]) return t[i].apply(this, Array.prototype.slice.call(arguments, 1));
            if (typeof i !== "object" && i) n.error("Method " + i + " does not exists."); else return t.init.apply(this, arguments)
        };
        var t = {}, f = {
            data: [],
            keepJSONItemsOnTop: !1,
            width: 260,
            height: null,
            background: "#f2f2f2",
            selectText: "",
            defaultSelectedIndex: null,
            truncateDescription: !0,
            imagePosition: "left",
            showSelectedHTML: !0,
            clickOffToClose: !0,
            onSelected: function () {
            }
        }, e = '<div class="dd-select"><input class="dd-selected-value" type="hidden" /><a class="dd-selected"><\/a><span class="dd-pointer dd-pointer-down"><\/span><\/div>', o = '<ul class="dd-options"><\/ul>';
        n("#css-ddslick").length <= 0 && n('<style id="css-ddslick" type="text/css">.dd-select{ border-radius:2px; border:solid 1px #ccc; position:relative; cursor:pointer; }.dd-desc { color:#aaa; display:block; overflow: hidden; font-weight:normal; line-height: 1.4em; }.dd-selected{ overflow:hidden; display:block; padding: 5px 10px; font-weight:normal; font-style: normal; font-size: 20px; color: #787874; font-family: "FS Me Web Regular",Helvetica,Arial,Verdana,sans-serif; }.dd-pointer{ width:0; height:0; position:absolute; right:4.3%; top:50%; margin-top:-3px;}.dd-options{ border:solid 1px #ccc; border-top:none; list-style:none; box-shadow:0px 1px 5px #ddd; display:none; position:absolute; z-index:10; margin:0; padding:0;background:#fff; overflow:auto;}.dd-option{ padding:10px; display:block; border-bottom:solid 1px #ddd; overflow:hidden; text-decoration:none; color:#333; cursor:pointer;-webkit-transition: all 0.25s ease-in-out; -moz-transition: all 0.25s ease-in-out;-o-transition: all 0.25s ease-in-out;-ms-transition: all 0.25s ease-in-out; }.dd-options > li:last-child > .dd-option{ border-bottom:none;}.dd-option:hover{ background:#f3f3f3; color:#000;}.dd-selected-description-truncated { text-overflow: ellipsis; white-space:nowrap; }.dd-option-selected { background:#f6f6f6; }.dd-option-image, .dd-selected-image { vertical-align:middle; float:left; margin-right:5px; max-width:45px;}.dd-image-right { float:right; margin-right:15px; margin-left:5px;}.dd-container{ position:relative;}? .dd-selected-text { font-weight:bold}?<\/style>').appendTo("head");
        t.init = function (t) {
            var t = n.extend({}, f, t);
            return this.each(function () {
                var u = n(this), v = u.data("ddslick"), y, c, h, f, s, l, a;
                if (!v) {
                    f = [];
                    y = t.data;
                    u.find("option").each(function () {
                        var t = n(this), i = t.data();
                        f.push({
                            text: n.trim(t.text()),
                            value: t.val(),
                            selected: t.is(":selected"),
                            description: i.description,
                            imageSrc: i.imagesrc
                        })
                    });
                    t.keepJSONItemsOnTop ? n.merge(t.data, f) : t.data = n.merge(f, t.data);
                    c = u;
                    h = n('<div id="' + u.attr("id") + '"><\/div>');
                    u.replaceWith(h);
                    u = h;
                    u.addClass("dd-container").append(e).append(o);
                    f = u.find(".dd-select");
                    s = u.find(".dd-options");
                    s.css({width: t.width});
                    f.css({width: t.width, background: t.background});
                    u.css({width: t.width});
                    t.height !== null && s.css({height: t.height, overflow: "auto"});
                    n.each(t.data, function (n, i) {
                        i.selected && (t.defaultSelectedIndex = n);
                        s.append('<li><a class="dd-option">' + (i.value ? ' <input class="dd-option-value" type="hidden" value="' + i.value + '" />' : "") + (i.imageSrc ? ' <img class="dd-option-image' + (t.imagePosition == "right" ? " dd-image-right" : "") + '" src="' + i.imageSrc + '" />' : "") + (i.text ? ' <label class="dd-option-text">' + i.text + "<\/label>" : "") + (i.description ? ' <small class="dd-option-description dd-desc">' + i.description + "<\/small>" : "") + "<\/a><\/li>")
                    });
                    l = {settings: t, original: c, selectedIndex: -1, selectedItem: null, selectedData: null};
                    u.data("ddslick", l);
                    t.selectText.length > 0 && t.defaultSelectedIndex == null ? u.find(".dd-selected").html(t.selectText) : (a = t.defaultSelectedIndex !== null && t.defaultSelectedIndex >= 0 && t.defaultSelectedIndex < t.data.length ? t.defaultSelectedIndex : 0, i(u, a));
                    u.find(".dd-select").on("click.ddslick", function () {
                        r(u)
                    });
                    u.find(".dd-option").on("click.ddslick", function () {
                        i(u, n(this).closest("li").index())
                    });
                    if (t.clickOffToClose) {
                        s.addClass("dd-click-off-close");
                        u.on("click.ddslick", function (n) {
                            n.stopPropagation()
                        });
                        n("body").on("click", function () {
                            n(".dd-click-off-close").slideUp(50).siblings(".dd-select").find(".dd-pointer").removeClass("dd-pointer-up")
                        })
                    }
                }
            })
        };
        t.select = function (t) {
            return this.each(function () {
                t.index && i(n(this), t.index)
            })
        };
        t.open = function () {
            return this.each(function () {
                var t = n(this), i = t.data("ddslick");
                i && r(t)
            })
        };
        t.close = function () {
            return this.each(function () {
                var t = n(this), i = t.data("ddslick");
                i && u(t)
            })
        };
        t.destroy = function () {
            return this.each(function () {
                var t = n(this), i = t.data("ddslick"), r;
                i && (r = i.original, t.removeData("ddslick").unbind(".ddslick").replaceWith(r))
            })
        }
    }(jQuery), function (n) {
        n.extend({
            debounce: function (n, t, i, r) {
                arguments.length === 3 && typeof i !== "boolean" && (r = i, i = !1);
                var u;
                return function () {
                    var f = arguments;
                    r = r || this;
                    i && !u && n.apply(r, f);
                    clearTimeout(u);
                    u = setTimeout(function () {
                        i || n.apply(r, f);
                        u = null
                    }, t)
                }
            }, throttle: function (n, t, i) {
                var r, f, u;
                return function () {
                    f = arguments;
                    u = !0;
                    i = i || this;
                    r || function () {
                        u ? (n.apply(i, f), u = !1, r = setTimeout(arguments.callee, t)) : r = null
                    }()
                }
            }
        })
    }(jQuery), function (n) {
        n.color = {};
        n.color.make = function (t, i, r, u) {
            var f = {};
            return f.r = t || 0, f.g = i || 0, f.b = r || 0, f.a = u !== null ? u : 1, f.add = function (n, t) {
                for (var i = 0; i < n.length; ++i) f[n.charAt(i)] += t;
                return f.normalize()
            }, f.scale = function (n, t) {
                for (var i = 0; i < n.length; ++i) f[n.charAt(i)] *= t;
                return f.normalize()
            }, f.toString = function () {
                return f.a >= 1 ? "rgb(" + [f.r, f.g, f.b].join(",") + ")" : "rgba(" + [f.r, f.g, f.b, f.a].join(",") + ")"
            }, f.normalize = function () {
                function n(n, t, i) {
                    return t < n ? n : t > i ? i : t;
                }

                return f.r = n(0, parseInt(f.r), 255), f.g = n(0, parseInt(f.g), 255), f.b = n(0, parseInt(f.b), 255), f.a = n(0, f.a, 1), f
            }, f.clone = function () {
                return n.color.make(f.r, f.b, f.g, f.a)
            }, f.normalize()
        };
        n.color.extract = function (t, i) {
            var r;
            do {
                if (r = t.css(i).toLowerCase(), r !== "" && r !== "transparent") break;
                t = t.parent()
            } while (!n.nodeName(t.get(0), "body"));
            return r === "rgba(0, 0, 0, 0)" && (r = "transparent"), n.color.parse(r)
        };
        n.color.parse = function (i) {
            var r, u = n.color.make, f;
            return (r = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(i)) ? u(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10)) : (r = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) ? u(parseInt(r[1], 10), parseInt(r[2], 10), parseInt(r[3], 10), parseFloat(r[4])) : (r = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(i)) ? u(parseFloat(r[1]) * 2.55, parseFloat(r[2]) * 2.55, parseFloat(r[3]) * 2.55) : (r = /rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(i)) ? u(parseFloat(r[1]) * 2.55, parseFloat(r[2]) * 2.55, parseFloat(r[3]) * 2.55, parseFloat(r[4])) : (r = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(i)) ? u(parseInt(r[1], 16), parseInt(r[2], 16), parseInt(r[3], 16)) : (r = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(i)) ? u(parseInt(r[1] + r[1], 16), parseInt(r[2] + r[2], 16), parseInt(r[3] + r[3], 16)) : (f = n.trim(i).toLowerCase(), f == "transparent" ? u(255, 255, 255, 0) : (r = t[f] || [0, 0, 0], u(r[0], r[1], r[2])))
        };
        var t = {
            aqua: [0, 255, 255],
            azure: [240, 255, 255],
            beige: [245, 245, 220],
            black: [0, 0, 0],
            blue: [0, 0, 255],
            brown: [165, 42, 42],
            cyan: [0, 255, 255],
            darkblue: [0, 0, 139],
            darkcyan: [0, 139, 139],
            darkgrey: [169, 169, 169],
            darkgreen: [0, 100, 0],
            darkkhaki: [189, 183, 107],
            darkmagenta: [139, 0, 139],
            darkolivegreen: [85, 107, 47],
            darkorange: [255, 140, 0],
            darkorchid: [153, 50, 204],
            darkred: [139, 0, 0],
            darksalmon: [233, 150, 122],
            darkviolet: [148, 0, 211],
            fuchsia: [255, 0, 255],
            gold: [255, 215, 0],
            green: [0, 128, 0],
            indigo: [75, 0, 130],
            khaki: [240, 230, 140],
            lightblue: [173, 216, 230],
            lightcyan: [224, 255, 255],
            lightgreen: [144, 238, 144],
            lightgrey: [211, 211, 211],
            lightpink: [255, 182, 193],
            lightyellow: [255, 255, 224],
            lime: [0, 255, 0],
            magenta: [255, 0, 255],
            maroon: [128, 0, 0],
            navy: [0, 0, 128],
            olive: [128, 128, 0],
            orange: [255, 165, 0],
            pink: [255, 192, 203],
            purple: [128, 0, 128],
            violet: [128, 0, 128],
            red: [255, 0, 0],
            silver: [192, 192, 192],
            white: [255, 255, 255],
            yellow: [255, 255, 0]
        }
    }(jQuery), function (n) {
        function t(t, i) {
            var r = i.children("." + t)[0];
            if (r == null && (r = document.createElement("canvas"), r.className = t, n(r).css({
                direction: "ltr",
                position: "absolute",
                left: 0,
                top: 0
            }).appendTo(i), !r.getContext)) if (window.G_vmlCanvasManager) r = window.G_vmlCanvasManager.initElement(r); else throw new Error("Canvas is not available. If you're using IE with a fall-back such as Excanvas, then there's either a mistake in your conditional include, or the page has no DOCTYPE and is rendering in Quirks Mode.");
            this.element = r;
            var u = this.context = r.getContext("2d"), f = window.devicePixelRatio || 1,
                e = u.webkitBackingStorePixelRatio || u.mozBackingStorePixelRatio || u.msBackingStorePixelRatio || u.oBackingStorePixelRatio || u.backingStorePixelRatio || 1;
            this.pixelRatio = f / e;
            this.resize(i.width(), i.height());
            this.text = {};
            this._textCache = {}
        }

        function u(i, r, u, e) {
            function nt(n, t) {
                t = [l].concat(t);
                for (var i = 0; i < n.length; ++i) n[i].apply(this, t)
            }

            function ri() {
                for (var u = {Canvas: t}, r, i = 0; i < e.length; ++i) r = e[i], r.init(l, u), r.options && n.extend(!0, o, r.options)
            }

            function ui(t) {
                var r, u, e, s, f;
                for (n.extend(!0, o, t), o.xaxis.color == null && (o.xaxis.color = n.color.parse(o.grid.color).scale("a", .22).toString()), o.yaxis.color == null && (o.yaxis.color = n.color.parse(o.grid.color).scale("a", .22).toString()), o.xaxis.tickColor == null && (o.xaxis.tickColor = o.grid.tickColor || o.xaxis.color), o.yaxis.tickColor == null && (o.yaxis.tickColor = o.grid.tickColor || o.yaxis.color), o.grid.borderColor == null && (o.grid.borderColor = o.grid.color), o.grid.tickColor == null && (o.grid.tickColor = n.color.parse(o.grid.color).scale("a", .22).toString()), s = {
                    style: i.css("font-style"),
                    size: Math.round(.8 * (+i.css("font-size").replace("px", "") || 13)),
                    variant: i.css("font-variant"),
                    weight: i.css("font-weight"),
                    family: i.css("font-family")
                }, e = o.xaxes.length || 1, r = 0; r < e; ++r) u = n.extend(!0, {}, o.xaxis, o.xaxes[r]), o.xaxes[r] = u, u.font && (u.font = n.extend({}, s, u.font), u.font.color || (u.font.color = u.color));
                for (e = o.yaxes.length || 1, r = 0; r < e; ++r) u = n.extend(!0, {}, o.yaxis, o.yaxes[r]), o.yaxes[r] = u, u.font && (u.font = n.extend({}, s, u.font), u.font.color || (u.font.color = u.color));
                for (o.xaxis.noTicks && o.xaxis.ticks == null && (o.xaxis.ticks = o.xaxis.noTicks), o.yaxis.noTicks && o.yaxis.ticks == null && (o.yaxis.ticks = o.yaxis.noTicks), o.x2axis && (o.xaxes[1] = n.extend(!0, {}, o.xaxis, o.x2axis), o.xaxes[1].position = "top"), o.y2axis && (o.yaxes[1] = n.extend(!0, {}, o.yaxis, o.y2axis), o.yaxes[1].position = "right"), o.grid.coloredAreas && (o.grid.markings = o.grid.coloredAreas), o.grid.coloredAreasColor && (o.grid.markingsColor = o.grid.coloredAreasColor), o.lines && n.extend(!0, o.series.lines, o.lines), o.points && n.extend(!0, o.series.points, o.points), o.bars && n.extend(!0, o.series.bars, o.bars), o.shadowSize !== null && (o.series.shadowSize = o.shadowSize), o.highlightColor !== null && (o.series.highlightColor = o.highlightColor), r = 0; r < o.xaxes.length; ++r) ft(y, r + 1).options = o.xaxes[r];
                for (r = 0; r < o.yaxes.length; ++r) ft(b, r + 1).options = o.yaxes[r];
                for (f in w) o.hooks[f] && o.hooks[f].length && (w[f] = w[f].concat(o.hooks[f]));
                nt(w.processOptions, [o])
            }

            function ht(n) {
                c = fi(n);
                oi();
                si()
            }

            function fi(t) {
                for (var u = [], r, i = 0; i < t.length; ++i) r = n.extend(!0, {}, o.series), t[i].data !== null ? (r.data = t[i].data, delete t[i].data, n.extend(!0, r, t[i]), t[i].data = r.data) : r.data = t[i], u.push(r);
                return u
            }

            function ut(n, t) {
                var i = n[t + "axis"];
                return typeof i === "object" && (i = i.n), typeof i !== "number" && (i = 1), i
            }

            function tt() {
                return n.grep(y.concat(b), function (n) {
                    return n
                })
            }

            function ct(n) {
                for (var i = {}, t, r = 0; r < y.length; ++r) t = y[r], t && t.used && (i["x" + t.n] = t.c2p(n.left));
                for (r = 0; r < b.length; ++r) t = b[r], t && t.used && (i["y" + t.n] = t.c2p(n.top));
                return i.x1 !== undefined && (i.x = i.x1), i.y1 !== undefined && (i.y = i.y1), i
            }

            function ei(n) {
                for (var u = {}, t, i, r = 0; r < y.length; ++r) if (t = y[r], t && t.used && (i = "x" + t.n, n[i] == null && t.n == 1 && (i = "x"), n[i] !== null)) {
                    u.left = t.p2c(n[i]);
                    break
                }
                for (r = 0; r < b.length; ++r) if (t = b[r], t && t.used && (i = "y" + t.n, n[i] == null && t.n == 1 && (i = "y"), n[i] !== null)) {
                    u.top = t.p2c(n[i]);
                    break
                }
                return u
            }

            function ft(t, i) {
                return t[i - 1] || (t[i - 1] = {
                    n: i,
                    direction: t === y ? "x" : "y",
                    options: n.extend(!0, {}, t === y ? o.xaxis : o.yaxis)
                }), t[i - 1]
            }

            function oi() {
                for (var f = c.length, e = -1, u, h, t, l, a, i = 0; i < c.length; ++i) u = c[i].color, u !== null && (f--, typeof u === "number" && u > e && (e = u));
                f <= e && (f = e + 1);
                var v, s = [], p = o.colors, w = p.length, r = 0;
                for (i = 0; i < f; i++) v = n.color.parse(p[i % w] || "#666"), i % w == 0 && i && (r = r >= 0 ? r < .5 ? -r - .2 : 0 : -r), s[i] = v.scale("rgb", 1 + r);
                for (h = 0, i = 0; i < c.length; ++i) {
                    if (t = c[i], t.color == null ? (t.color = s[h].toString(), ++h) : typeof t.color === "number" && (t.color = s[t.color].toString()), t.lines.show == null) {
                        a = !0;
                        for (l in t) if (t[l] && t[l].show) {
                            a = !1;
                            break
                        }
                        a && (t.lines.show = !0)
                    }
                    t.lines.zero == null && (t.lines.zero = !!t.lines.fill);
                    t.xaxis = ft(y, ut(t, "x"));
                    t.yaxis = ft(b, ut(t, "y"))
                }
            }

            function si() {
                function b(n, t, i) {
                    t < n.datamin && t !== -v && (n.datamin = t);
                    i > n.datamax && i !== v && (n.datamax = i)
                }

                var y = Number.POSITIVE_INFINITY, p = Number.NEGATIVE_INFINITY, v = Number.MAX_VALUE, f, l, e, r, t, u, s, i, h, ut, ft, o, et, ot, k, a;
                for (n.each(tt(), function (n, t) {
                    t.datamin = y;
                    t.datamax = p;
                    t.used = !1
                }), f = 0; f < c.length; ++f) t = c[f], t.datapoints = {points: []}, nt(w.processRawData, [t, t.data, t.datapoints]);
                for (f = 0; f < c.length; ++f) if (t = c[f], ft = t.data, o = t.datapoints.format, o || (o = [], o.push({
                    x: !0,
                    number: !0,
                    required: !0
                }), o.push({
                    y: !0,
                    number: !0,
                    required: !0
                }), (t.bars.show || t.lines.show && t.lines.fill) && (et = !!(t.bars.show && t.bars.zero || t.lines.show && t.lines.zero), o.push({
                    y: !0,
                    number: !0,
                    required: !1,
                    defaultValue: 0,
                    autoscale: et
                }), t.bars.horizontal && (delete o[o.length - 1].y, o[o.length - 1].x = !0)), t.datapoints.format = o), t.datapoints.pointsize == null) for (t.datapoints.pointsize = o.length, s = t.datapoints.pointsize, u = t.datapoints.points, ot = t.lines.show && t.lines.steps, t.xaxis.used = t.yaxis.used = !0, l = e = 0; l < ft.length; ++l, e += s) {
                    if (ut = ft[l], k = ut == null, !k) for (r = 0; r < s; ++r) i = ut[r], h = o[r], h && (h.number && i !== null && (i = +i, isNaN(i) ? i = null : i == Infinity ? i = v : i == -Infinity && (i = -v)), i == null && (h.required && (k = !0), h.defaultValue !== null && (i = h.defaultValue))), u[e + r] = i;
                    if (k) for (r = 0; r < s; ++r) i = u[e + r], i !== null && (h = o[r], h.x && b(t.xaxis, i, i), h.y && b(t.yaxis, i, i)), u[e + r] = null; else if (ot && e > 0 && u[e - s] !== null && u[e - s] !== u[e] && u[e - s + 1] !== u[e + 1]) {
                        for (r = 0; r < s; ++r) u[e + s + r] = u[e + r];
                        u[e + 1] = u[e - s + 1];
                        e += s
                    }
                }
                for (f = 0; f < c.length; ++f) t = c[f], nt(w.processDatapoints, [t, t.datapoints]);
                for (f = 0; f < c.length; ++f) {
                    t = c[f];
                    u = t.datapoints.points;
                    s = t.datapoints.pointsize;
                    o = t.datapoints.format;
                    var d = y, g = y, it = p, rt = p;
                    for (l = 0; l < u.length; l += s) if (u[l] !== null) for (r = 0; r < s; ++r) (i = u[l + r], h = o[r], h && h.autoscale !== !1 && i !== v && i !== -v) && (h.x && (i < d && (d = i), i > it && (it = i)), h.y && (i < g && (g = i), i > rt && (rt = i)));
                    if (t.bars.show) {
                        switch (t.bars.align) {
                            case"left":
                                a = 0;
                                break;
                            case"right":
                                a = -t.bars.barWidth;
                                break;
                            case"center":
                                a = -t.bars.barWidth / 2;
                                break;
                            default:
                                throw new Error("Invalid bar alignment: " + t.bars.align);
                        }
                        t.bars.horizontal ? (g += a, rt += a + t.bars.barWidth) : (d += a, it += a + t.bars.barWidth)
                    }
                    b(t.xaxis, d, it);
                    b(t.yaxis, g, rt)
                }
                n.each(tt(), function (n, t) {
                    t.datamin == y && (t.datamin = null);
                    t.datamax == p && (t.datamax = null)
                })
            }

            function hi() {
                i.css("padding", 0).children(":not(.flot-base,.flot-overlay)").remove();
                i.css("position") === "static" && i.css("position", "relative");
                a = new t("flot-base", i);
                it = new t("flot-overlay", i);
                s = a.context;
                v = it.context;
                d = n(it.element).unbind();
                var r = i.data("plot");
                r && (r.shutdown(), it.clear());
                i.data("plot", l)
            }

            function ci() {
                o.grid.hoverable && (d.mousemove(wt), d.on("mouseleave", bt));
                o.grid.clickable && d.click(kt);
                nt(w.bindEvents, [d])
            }

            function li() {
                rt && clearTimeout(rt);
                d.off("mousemove", wt);
                d.off("mouseleave", bt);
                d.off("click", kt);
                nt(w.shutdown, [d])
            }

            function ai(n) {
                function u(n) {
                    return n
                }

                var i, r, t = n.options.transform || u, f = n.options.inverseTransform;
                n.direction === "x" ? (i = n.scale = k / Math.abs(t(n.max) - t(n.min)), r = Math.min(t(n.max), t(n.min))) : (i = n.scale = p / Math.abs(t(n.max) - t(n.min)), i = -i, r = Math.max(t(n.max), t(n.min)));
                n.p2c = t === u ? function (n) {
                    return (n - r) * i
                } : function (n) {
                    return (t(n) - r) * i
                };
                n.c2p = f ? function (n) {
                    return f(r + n / i)
                } : function (n) {
                    return r + n / i
                }
            }

            function vi(n) {
                for (var t = n.options, o = n.ticks || [], r = t.labelWidth || 0, u = t.labelHeight || 0, s = n.direction + "Axis " + n.direction + n.n + "Axis", h = "flot-" + n.direction + "-axis flot-" + n.direction + n.n + "-axis " + s, c = t.font || "flot-tick-label tickLabel", f, e, i = 0; i < o.length; ++i) (f = o[i], f.label) && (e = a.getTextInfo(h, f.label, c), t.labelWidth == null && (r = Math.max(r, e.width)), t.labelHeight == null && (u = Math.max(u, e.height)));
                n.labelWidth = Math.ceil(r);
                n.labelHeight = Math.ceil(u)
            }

            function yi(t) {
                var r = t.labelWidth, u = t.labelHeight, e = t.options.position, f = t.options.tickLength, i = o.grid.axisMargin, s = o.grid.labelMargin, l = t.direction == "x" ? y : b, c, v = n.grep(l, function (n) {
                    return n && n.options.position == e && n.reserveSpace
                }), p;
                n.inArray(t, v) == v.length - 1 && (i = 0);
                f == null && (p = n.grep(l, function (n) {
                    return n && n.reserveSpace
                }), c = n.inArray(t, p) == 0, f = c ? "full" : 5);
                isNaN(+f) || (s += +f);
                t.direction === "x" ? (u += s, e === "bottom" ? (h.bottom += u + i, t.box = {
                    top: a.height - h.bottom,
                    height: u
                }) : (t.box = {
                    top: h.top + i,
                    height: u
                }, h.top += u + i)) : (r += s, e === "left" ? (t.box = {
                    left: h.left + i,
                    width: r
                }, h.left += r + i) : (h.right += r + i, t.box = {left: a.width - h.right, width: r}));
                t.position = e;
                t.tickLength = f;
                t.box.padding = s;
                t.innermost = c
            }

            function pi(n) {
                n.direction === "x" ? (n.box.left = h.left - n.labelWidth / 2, n.box.width = a.width - h.left - h.right + n.labelWidth) : (n.box.top = h.top - n.labelHeight / 2, n.box.height = a.height - h.bottom - h.top + n.labelHeight)
            }

            function wi() {
                var i = o.grid.minBorderMargin, t = {x: 0, y: 0}, r;
                if (i == null) for (i = 0, r = 0; r < c.length; ++r) i = Math.max(i, 2 * (c[r].points.radius + c[r].points.lineWidth / 2));
                t.x = t.y = Math.ceil(i);
                n.each(tt(), function (n, i) {
                    var r = i.direction;
                    i.reserveSpace && (t[r] = Math.ceil(Math.max(t[r], (r === "x" ? i.labelWidth : i.labelHeight) / 2)))
                });
                h.left = Math.max(t.x, h.left);
                h.right = Math.max(t.x, h.right);
                h.top = Math.max(t.y, h.top);
                h.bottom = Math.max(t.y, h.bottom)
            }

            function lt() {
                var r, e = tt(), u = o.grid.show, f, t, i;
                for (t in h) f = o.grid.margin || 0, h[t] = typeof f === "number" ? f : f[t] || 0;
                nt(w.processOffset, [h]);
                for (t in h) h[t] += typeof o.grid.borderWidth === "object" ? u ? o.grid.borderWidth[t] : 0 : u ? o.grid.borderWidth : 0;
                if (n.each(e, function (n, t) {
                    t.show = t.options.show;
                    t.show == null && (t.show = t.used);
                    t.reserveSpace = t.show || t.options.reserveSpace;
                    bi(t)
                }), u) {
                    for (i = n.grep(e, function (n) {
                        return n.reserveSpace
                    }), n.each(i, function (n, t) {
                        ki(t);
                        di(t);
                        gi(t, t.ticks);
                        vi(t)
                    }), r = i.length - 1; r >= 0; --r) yi(i[r]);
                    wi();
                    n.each(i, function (n, t) {
                        pi(t)
                    })
                }
                k = a.width - h.left - h.right;
                p = a.height - h.bottom - h.top;
                n.each(e, function (n, t) {
                    ai(t)
                });
                u && tr();
                er()
            }

            function bi(n) {
                var t = n.options, r = +(t.min !== null ? t.min : n.datamin), i = +(t.max !== null ? t.max : n.datamax), f = i - r, e, u;
                f === 0 ? (e = i === 0 ? 1 : .01, t.min == null && (r -= e), (t.max == null || t.min !== null) && (i += e)) : (u = t.autoscaleMargin, u !== null && (t.min == null && (r -= f * u, r < 0 && n.datamin !== null && n.datamin >= 0 && (r = 0)), t.max == null && (i += f * u, i > 0 && n.datamax !== null && n.datamax <= 0 && (i = 0))));
                n.min = r;
                n.max = i
            }

            function ki(t) {
                var i = t.options, s, r, u, o, e;
                if (s = typeof i.ticks === "number" && i.ticks > 0 ? i.ticks : .3 * Math.sqrt(t.direction === "x" ? a.width : a.height), t.delta = (t.max - t.min) / s, i.mode === "time" && !t.tickGenerator) throw new Error("Time mode requires the flot.time plugin.");
                t.tickGenerator || (t.tickGenerator = function (n) {
                    var r = i.tickDecimals, u = -Math.floor(Math.log(n.delta) / Math.LN10);
                    r !== null && u > r && (u = r);
                    var s = Math.pow(10, -u), o = n.delta / s, t, h = [], c, l = 0, e = Number.NaN, a;
                    o < 1.5 ? t = 1 : o < 3 ? (t = 2, o > 2.25 && (r == null || u + 1 <= r) && (t = 2.5, ++u)) : t = o < 7.5 ? 5 : 10;
                    t *= s;
                    i.minTickSize !== null && t < i.minTickSize && (t = i.minTickSize);
                    n.tickDecimals = Math.max(0, r !== null ? r : u);
                    n.tickSize = i.tickSize || t;
                    c = f(n.min, n.tickSize);
                    do a = e, e = c + l * n.tickSize, h.push(e), ++l; while (e < n.max && e !== a);
                    return h
                }, t.tickFormatter = function (n, t) {
                    var u = t.tickDecimals ? Math.pow(10, t.tickDecimals) : 1, i = "" + Math.round(n * u) / u, f, r;
                    return t.tickDecimals !== null && (f = i.indexOf("."), r = f == -1 ? 0 : i.length - f - 1, r < t.tickDecimals) ? (r ? i : i + ".") + ("" + u).substr(1, t.tickDecimals - r) : i
                });
                n.isFunction(i.tickFormatter) && (t.tickFormatter = function (n, t) {
                    return "" + i.tickFormatter(n, t)
                });
                i.alignTicksWithAxis !== null && (r = (t.direction === "x" ? y : b)[i.alignTicksWithAxis - 1], r && r.used && r !== t && (u = t.tickGenerator(t), u.length > 0 && (i.min == null && (t.min = Math.min(t.min, u[0])), i.max == null && u.length > 1 && (t.max = Math.max(t.max, u[u.length - 1]))), t.tickGenerator = function (n) {
                    for (var u = [], t, i = 0; i < r.ticks.length; ++i) t = (r.ticks[i].v - r.min) / (r.max - r.min), t = n.min + t * (n.max - n.min), u.push(t);
                    return u
                }, t.mode || i.tickDecimals !== null || (o = Math.max(0, -Math.floor(Math.log(t.delta) / Math.LN10) + 1), e = t.tickGenerator(t), e.length > 1 && /\..*0$/.test((e[1] - e[0]).toFixed(o)) || (t.tickDecimals = o))))
            }

            function di(t) {
                var i = t.options.ticks, e = [], o, u, f, r;
                for (i == null || typeof i === "number" && i > 0 ? e = t.tickGenerator(t) : i && (e = n.isFunction(i) ? i(t) : i), t.ticks = [], o = 0; o < e.length; ++o) f = null, r = e[o], typeof r == "object" ? (u = +r[0], r.length > 1 && (f = r[1])) : u = +r, f == null && (f = t.tickFormatter(u, t)), isNaN(u) || t.ticks.push({
                    v: u,
                    label: f
                })
            }

            function gi(n, t) {
                n.options.autoscaleMargin && t.length > 0 && (n.options.min == null && (n.min = Math.min(n.min, t[0].v)), n.options.max == null && t.length > 1 && (n.max = Math.max(n.max, t[t.length - 1].v)))
            }

            function at() {
                var n, t;
                for (a.clear(), nt(w.drawBackground, [s]), n = o.grid, n.show && n.backgroundColor && nr(), n.show && !n.aboveData && yt(), t = 0; t < c.length; ++t) nt(w.drawSeries, [s, c[t]]), ir(c[t]);
                nt(w.draw, [s]);
                n.show && n.aboveData && yt();
                a.render()
            }

            function vt(n, t) {
                for (var f, i, r, u, o = tt(), s, e = 0; e < o.length; ++e) if (f = o[e], f.direction == t && (u = t + f.n + "axis", n[u] || f.n !== 1 || (u = t + "axis"), n[u])) {
                    i = n[u].from;
                    r = n[u].to;
                    break
                }
                return n[u] || (f = t === "x" ? y[0] : b[0], i = n[t + "1"], r = n[t + "2"]), i !== null && r !== null && i > r && (s = i, i = r, r = s), {
                    from: i,
                    to: r,
                    axis: f
                }
            }

            function nr() {
                s.save();
                s.translate(h.left, h.top);
                s.fillStyle = ii(o.grid.backgroundColor, p, 0, "rgba(255, 255, 255, 0)");
                s.fillRect(0, 0, k, p);
                s.restore()
            }

            function yt() {
                var v, f, t, e, d, it, b;
                if (s.save(), s.translate(h.left, h.top), d = o.grid.markings, d) for (n.isFunction(d) && (f = l.getAxes(), f.xmin = f.xaxis.min, f.xmax = f.xaxis.max, f.ymin = f.yaxis.min, f.ymax = f.yaxis.max, d = d(f)), v = 0; v < d.length; ++v) {
                    var nt = d[v], i = vt(nt, "x"), r = vt(nt, "y");
                    (i.from == null && (i.from = i.axis.min), i.to == null && (i.to = i.axis.max), r.from == null && (r.from = r.axis.min), r.to == null && (r.to = r.axis.max), i.to < i.axis.min || i.from > i.axis.max || r.to < r.axis.min || r.from > r.axis.max) || (i.from = Math.max(i.from, i.axis.min), i.to = Math.min(i.to, i.axis.max), r.from = Math.max(r.from, r.axis.min), r.to = Math.min(r.to, r.axis.max), i.from !== i.to || r.from !== r.to) && (i.from = i.axis.p2c(i.from), i.to = i.axis.p2c(i.to), r.from = r.axis.p2c(r.from), r.to = r.axis.p2c(r.to), i.from == i.to || r.from == r.to ? (s.beginPath(), s.strokeStyle = nt.color || o.grid.markingsColor, s.lineWidth = nt.lineWidth || o.grid.markingsLineWidth, s.moveTo(i.from, r.from), s.lineTo(i.to, r.to), s.stroke()) : (s.fillStyle = nt.color || o.grid.markingsColor, s.fillRect(i.from, r.to, i.to - i.from, r.from - r.to)))
                }
                for (f = tt(), t = o.grid.borderWidth, it = 0; it < f.length; ++it) {
                    var u = f[it], rt = u.box, g = u.tickLength, c, a, y, w;
                    if (u.show && u.ticks.length !== 0) {
                        for (s.lineWidth = 1, u.direction === "x" ? (c = 0, a = g === "full" ? u.position === "top" ? 0 : p : rt.top - h.top + (u.position === "top" ? rt.height : 0)) : (a = 0, c = g === "full" ? u.position === "left" ? 0 : k : rt.left - h.left + (u.position === "left" ? rt.width : 0)), u.innermost || (s.strokeStyle = u.options.color, s.beginPath(), y = w = 0, u.direction === "x" ? y = k : w = p, s.lineWidth == 1 && (c = Math.floor(c) + .5, a = Math.floor(a) + .5), s.moveTo(c, a), s.lineTo(c + y, a + w), s.stroke()), s.strokeStyle = u.options.tickColor, s.beginPath(), v = 0; v < u.ticks.length; ++v) (b = u.ticks[v].v, y = w = 0, isNaN(b) || b < u.min || b > u.max || g === "full" && (typeof t === "object" && t[u.position] > 0 || t > 0) && (b === u.min || b === u.max)) || (u.direction === "x" ? (c = u.p2c(b), w = g === "full" ? -p : g, u.position === "top" && (w = -w)) : (a = u.p2c(b), y = g === "full" ? -k : g, u.position === "left" && (y = -y)), s.lineWidth == 1 && (u.direction === "x" ? c = Math.floor(c) + .5 : a = Math.floor(a) + .5), s.moveTo(c, a), s.lineTo(c + y, a + w));
                        s.stroke()
                    }
                }
                t && (e = o.grid.borderColor, typeof t === "object" || typeof e === "object" ? (typeof t !== "object" && (t = {
                    top: t,
                    right: t,
                    bottom: t,
                    left: t
                }), typeof e !== "object" && (e = {
                    top: e,
                    right: e,
                    bottom: e,
                    left: e
                }), t.top > 0 && (s.strokeStyle = e.top, s.lineWidth = t.top, s.beginPath(), s.moveTo(0 - t.left, 0 - t.top / 2), s.lineTo(k, 0 - t.top / 2), s.stroke()), t.right > 0 && (s.strokeStyle = e.right, s.lineWidth = t.right, s.beginPath(), s.moveTo(k + t.right / 2, 0 - t.top), s.lineTo(k + t.right / 2, p), s.stroke()), t.bottom > 0 && (s.strokeStyle = e.bottom, s.lineWidth = t.bottom, s.beginPath(), s.moveTo(k + t.right, p + t.bottom / 2), s.lineTo(0, p + t.bottom / 2), s.stroke()), t.left > 0 && (s.strokeStyle = e.left, s.lineWidth = t.left, s.beginPath(), s.moveTo(0 - t.left / 2, p + t.bottom), s.lineTo(0 - t.left / 2, 0), s.stroke())) : (s.lineWidth = t, s.strokeStyle = o.grid.borderColor, s.strokeRect(-t / 2, -t / 2, k + t, p + t)));
                s.restore()
            }

            function tr() {
                n.each(tt(), function (n, t) {
                    var e;
                    if (t.show && t.ticks.length !== 0) {
                        var i = t.box, l = t.direction + "Axis " + t.direction + t.n + "Axis", c = "flot-" + t.direction + "-axis flot-" + t.direction + t.n + "-axis " + l, v = t.options.font || "flot-tick-label tickLabel", r, u, f, o, s;
                        for (a.removeText(c), e = 0; e < t.ticks.length; ++e) (r = t.ticks[e], !r.label || r.v < t.min || r.v > t.max) || (t.direction === "x" ? (o = "center", u = h.left + t.p2c(r.v), t.position === "bottom" ? f = i.top + i.padding : (f = i.top + i.height - i.padding, s = "bottom")) : (s = "middle", f = h.top + t.p2c(r.v), t.position === "left" ? (u = i.left + i.width - i.padding, o = "right") : u = i.left + i.padding), a.addText(c, u, f, r.label, v, null, o, s))
                    }
                })
            }

            function ir(n) {
                n.lines.show && rr(n);
                n.bars.show && fr(n);
                n.points.show && ur(n)
            }

            function rr(n) {
                function u(n, t, i, r, u) {
                    var l = n.points, a = n.pointsize, v = null, y = null, c;
                    for (s.beginPath(), c = a; c < l.length; c += a) {
                        var f = l[c - a], e = l[c - a + 1], o = l[c], h = l[c + 1];
                        if (f !== null && o !== null) {
                            if (e <= h && e < u.min) {
                                if (h < u.min) continue;
                                f = (u.min - e) / (h - e) * (o - f) + f;
                                e = u.min
                            } else if (h <= e && h < u.min) {
                                if (e < u.min) continue;
                                o = (u.min - e) / (h - e) * (o - f) + f;
                                h = u.min
                            }
                            if (e >= h && e > u.max) {
                                if (h > u.max) continue;
                                f = (u.max - e) / (h - e) * (o - f) + f;
                                e = u.max
                            } else if (h >= e && h > u.max) {
                                if (e > u.max) continue;
                                o = (u.max - e) / (h - e) * (o - f) + f;
                                h = u.max
                            }
                            if (f <= o && f < r.min) {
                                if (o < r.min) continue;
                                e = (r.min - f) / (o - f) * (h - e) + e;
                                f = r.min
                            } else if (o <= f && o < r.min) {
                                if (f < r.min) continue;
                                h = (r.min - f) / (o - f) * (h - e) + e;
                                o = r.min
                            }
                            if (f >= o && f > r.max) {
                                if (o > r.max) continue;
                                e = (r.max - f) / (o - f) * (h - e) + e;
                                f = r.max
                            } else if (o >= f && o > r.max) {
                                if (f > r.max) continue;
                                h = (r.max - f) / (o - f) * (h - e) + e;
                                o = r.max
                            }
                            (f !== v || e !== y) && s.moveTo(r.p2c(f) + t, u.p2c(e) + i);
                            v = o;
                            y = h;
                            s.lineTo(r.p2c(o) + t, u.p2c(h) + i)
                        }
                    }
                    s.stroke()
                }

                function e(n, t, i) {
                    for (var c = n.points, o = n.pointsize, b = Math.min(Math.max(0, i.min), i.max), h = 0, l = !1, a = 1, p = 0, w = 0, v, y; ;) {
                        if (o > 0 && h > c.length + o) break;
                        h += o;
                        var r = c[h - o], u = c[h - o + a], f = c[h], e = c[h + a];
                        if (l) {
                            if (o > 0 && r !== null && f == null) {
                                w = h;
                                o = -o;
                                a = 2;
                                continue
                            }
                            if (o < 0 && h === p + o) {
                                s.fill();
                                l = !1;
                                o = -o;
                                a = 1;
                                h = p = w + o;
                                continue
                            }
                        }
                        if (r !== null && f !== null) {
                            if (r <= f && r < t.min) {
                                if (f < t.min) continue;
                                u = (t.min - r) / (f - r) * (e - u) + u;
                                r = t.min
                            } else if (f <= r && f < t.min) {
                                if (r < t.min) continue;
                                e = (t.min - r) / (f - r) * (e - u) + u;
                                f = t.min
                            }
                            if (r >= f && r > t.max) {
                                if (f > t.max) continue;
                                u = (t.max - r) / (f - r) * (e - u) + u;
                                r = t.max
                            } else if (f >= r && f > t.max) {
                                if (r > t.max) continue;
                                e = (t.max - r) / (f - r) * (e - u) + u;
                                f = t.max
                            }
                            if (l || (s.beginPath(), s.moveTo(t.p2c(r), i.p2c(b)), l = !0), u >= i.max && e >= i.max) {
                                s.lineTo(t.p2c(r), i.p2c(i.max));
                                s.lineTo(t.p2c(f), i.p2c(i.max));
                                continue
                            } else if (u <= i.min && e <= i.min) {
                                s.lineTo(t.p2c(r), i.p2c(i.min));
                                s.lineTo(t.p2c(f), i.p2c(i.min));
                                continue
                            }
                            v = r;
                            y = f;
                            u <= e && u < i.min && e >= i.min ? (r = (i.min - u) / (e - u) * (f - r) + r, u = i.min) : e <= u && e < i.min && u >= i.min && (f = (i.min - u) / (e - u) * (f - r) + r, e = i.min);
                            u >= e && u > i.max && e <= i.max ? (r = (i.max - u) / (e - u) * (f - r) + r, u = i.max) : e >= u && e > i.max && u <= i.max && (f = (i.max - u) / (e - u) * (f - r) + r, e = i.max);
                            r !== v && s.lineTo(t.p2c(v), i.p2c(u));
                            s.lineTo(t.p2c(r), i.p2c(u));
                            s.lineTo(t.p2c(f), i.p2c(e));
                            f !== y && (s.lineTo(t.p2c(f), i.p2c(e)), s.lineTo(t.p2c(y), i.p2c(e)))
                        }
                    }
                }

                var t, i, r, f;
                s.save();
                s.translate(h.left, h.top);
                s.lineJoin = "round";
                t = n.lines.lineWidth;
                i = n.shadowSize;
                t > 0 && i > 0 && (s.lineWidth = i, s.strokeStyle = "rgba(0,0,0,0.1)", r = Math.PI / 18, u(n.datapoints, Math.sin(r) * (t / 2 + i / 2), Math.cos(r) * (t / 2 + i / 2), n.xaxis, n.yaxis), s.lineWidth = i / 2, u(n.datapoints, Math.sin(r) * (t / 2 + i / 4), Math.cos(r) * (t / 2 + i / 4), n.xaxis, n.yaxis));
                s.lineWidth = t;
                s.strokeStyle = n.color;
                f = ot(n.lines, n.color, 0, p);
                f && (s.fillStyle = f, e(n.datapoints, n.xaxis, n.yaxis));
                t > 0 && u(n.datapoints, 0, 0, n.xaxis, n.yaxis);
                s.restore()
            }

            function ur(n) {
                function r(n, t, i, r, u, f, e, o) {
                    for (var a = n.points, v = n.pointsize, h, c, l = 0; l < a.length; l += v) (h = a[l], c = a[l + 1], h == null || h < f.min || h > f.max || c < e.min || c > e.max) || (s.beginPath(), h = f.p2c(h), c = e.p2c(c) + r, o == "circle" ? s.arc(h, c, t, 0, u ? Math.PI : Math.PI * 2, !1) : o(s, h, c, t, u), s.closePath(), i && (s.fillStyle = i, s.fill()), s.stroke())
                }

                var t;
                s.save();
                s.translate(h.left, h.top);
                var i = n.points.lineWidth, e = n.shadowSize, u = n.points.radius, f = n.points.symbol;
                i == 0 && (i = .0001);
                i > 0 && e > 0 && (t = e / 2, s.lineWidth = t, s.strokeStyle = "rgba(0,0,0,0.1)", r(n.datapoints, u, null, t + t / 2, !0, n.xaxis, n.yaxis, f), s.strokeStyle = "rgba(0,0,0,0.2)", r(n.datapoints, u, null, t / 2, !0, n.xaxis, n.yaxis, f));
                s.lineWidth = i;
                s.strokeStyle = n.points.strokeColor ? n.points.strokeColor : n.color;
                r(n.datapoints, u, ot(n.points, n.color), 0, !1, n.xaxis, n.yaxis, f);
                s.restore()
            }

            function pt(n, t, i, r, u, f, e, o, s, h, c, l) {
                var v, p, a, y, w, b, k, d, g;
                (c ? (d = b = k = !0, w = !1, v = i, p = n, y = t + r, a = t + u, p < v && (g = p, p = v, v = g, w = !0, b = !1)) : (w = b = k = !0, d = !1, v = n + r, p = n + u, a = i, y = t, y < a && (g = y, y = a, a = g, d = !0, k = !1)), p < o.min || v > o.max || y < s.min || a > s.max) || (v < o.min && (v = o.min, w = !1), p > o.max && (p = o.max, b = !1), a < s.min && (a = s.min, d = !1), y > s.max && (y = s.max, k = !1), v = o.p2c(v), a = s.p2c(a), p = o.p2c(p), y = s.p2c(y), e && (h.beginPath(), h.moveTo(v, a), h.lineTo(v, y), h.lineTo(p, y), h.lineTo(p, a), h.fillStyle = e(a, y), h.fill()), l > 0 && (w || b || k || d) && (h.beginPath(), h.moveTo(v, a + f), w ? h.lineTo(v, y + f) : h.moveTo(v, y + f), k ? h.lineTo(p, y + f) : h.moveTo(p, y + f), b ? h.lineTo(p, a + f) : h.moveTo(p, a + f), d ? h.lineTo(v, a + f) : h.moveTo(v, a + f), h.stroke()))
            }

            function fr(n) {
                function r(t, i, r, u, f, e, o) {
                    for (var c = t.points, l = t.pointsize, h = 0; h < c.length; h += l) c[h] !== null && pt(c[h], c[h + 1], c[h + 2], i, r, u, f, e, o, s, n.bars.horizontal, n.bars.lineWidth)
                }

                var t, i;
                s.save();
                s.translate(h.left, h.top);
                s.lineWidth = n.bars.lineWidth;
                s.strokeStyle = n.color;
                switch (n.bars.align) {
                    case"left":
                        t = 0;
                        break;
                    case"right":
                        t = -n.bars.barWidth;
                        break;
                    case"center":
                        t = -n.bars.barWidth / 2;
                        break;
                    default:
                        throw new Error("Invalid bar alignment: " + n.bars.align);
                }
                i = n.bars.fill ? function (t, i) {
                    return ot(n.bars, n.color, t, i)
                } : null;
                r(n.datapoints, t, t + n.bars.barWidth, 0, i, n.xaxis, n.yaxis);
                s.restore()
            }

            function ot(t, i, r, u) {
                var e = t.fill, f;
                return e ? t.fillColor ? ii(t.fillColor, r, u, i) : (f = n.color.parse(i), f.a = typeof e === "number" ? e : .4, f.normalize(), f.toString()) : null
            }

            function er() {
                var g, r, w, b, v, t, k;
                if (i.find(".legend").remove(), o.legend.show) {
                    var f = [], e = [], y = !1, d = o.legend.labelFormatter, s, p;
                    for (r = 0; r < c.length; ++r) s = c[r], s.label && (p = d ? d(s.label, s) : s.label, p && e.push({
                        label: p,
                        color: s.color
                    }));
                    for (o.legend.sorted && (n.isFunction(o.legend.sorted) ? e.sort(o.legend.sorted) : o.legend.sorted === "reverse" ? e.reverse() : (g = o.legend.sorted !== "descending", e.sort(function (n, t) {
                        return n.label === t.label ? 0 : n.label < t.label !== g ? 1 : -1
                    }))), r = 0; r < e.length; ++r) w = e[r], r % o.legend.noColumns == 0 && (y && f.push("<\/tr>"), f.push("<tr>"), y = !0), f.push('<td class="legendColorBox"><div style="border:1px solid ' + o.legend.labelBoxBorderColor + ';padding:1px"><div style="width:4px;height:0;border:5px solid ' + w.color + ';overflow:hidden"><\/div><\/div><\/td><td class="legendLabel">' + w.label + "<\/td>");
                    if (y && f.push("<\/tr>"), f.length !== 0) if (b = '<table style="font-size:smaller;color:' + o.grid.color + '">' + f.join("") + "<\/table>", o.legend.container !== null) n(o.legend.container).html(b); else {
                        var l = "", a = o.legend.position, u = o.legend.margin;
                        u[0] == null && (u = [u, u]);
                        a.charAt(0) === "n" ? l += "top:" + (u[1] + h.top) + "px;" : a.charAt(0) === "s" && (l += "bottom:" + (u[1] + h.bottom) + "px;");
                        a.charAt(1) === "e" ? l += "right:" + (u[0] + h.right) + "px;" : a.charAt(1) === "w" && (l += "left:" + (u[0] + h.left) + "px;");
                        v = n('<div class="legend">' + b.replace('style="', 'style="position:absolute;' + l + ";") + "<\/div>").appendTo(i);
                        o.legend.backgroundOpacity !== 0 && (t = o.legend.backgroundColor, t == null && (t = o.grid.backgroundColor, t = t && typeof t == "string" ? n.color.parse(t) : n.color.extract(v, "background-color"), t.a = 1, t = t.toString()), k = v.children(), n('<div style="position:absolute;width:' + k.width() + "px;height:" + k.height() + "px;" + l + "background-color:" + t + ';"> <\/div>').prependTo(v).css("opacity", o.legend.backgroundOpacity))
                    }
                }
            }

            function or(n, t, i) {
                for (var p = o.grid.mouseActiveRadius, it = p * p + 1, a = null, r, h, f, s, k, tt, u = c.length - 1; u >= 0; --u) if (i(c[u])) {
                    var e = c[u], w = e.xaxis, b = e.yaxis, l = e.datapoints.points, v = w.c2p(n), y = b.c2p(t), g = p / w.scale, nt = p / b.scale;
                    if (h = e.datapoints.pointsize, w.options.inverseTransform && (g = Number.MAX_VALUE), b.options.inverseTransform && (nt = Number.MAX_VALUE), e.lines.show || e.points.show) for (r = 0; r < l.length; r += h) if ((f = l[r], s = l[r + 1], f !== null) && !(f - v > g) && !(f - v < -g) && !(s - y > nt) && !(s - y < -nt)) {
                        var rt = Math.abs(w.p2c(f) - n), ut = Math.abs(b.p2c(s) - t), ft = rt * rt + ut * ut;
                        ft < it && (it = ft, a = [u, r / h])
                    }
                    if (e.bars.show && !a) for (k = e.bars.align === "left" ? 0 : -e.bars.barWidth / 2, tt = k + e.bars.barWidth, r = 0; r < l.length; r += h) {
                        var f = l[r], s = l[r + 1], d = l[r + 2];
                        f !== null && (c[u].bars.horizontal ? v <= Math.max(d, f) && v >= Math.min(d, f) && y >= s + k && y <= s + tt : v >= f + k && v <= f + tt && y >= Math.min(d, s) && y <= Math.max(d, s)) && (a = [u, r / h])
                    }
                }
                return a ? (u = a[0], r = a[1], h = c[u].datapoints.pointsize, {
                    datapoint: c[u].datapoints.points.slice(r * h, (r + 1) * h),
                    dataIndex: r,
                    series: c[u],
                    seriesIndex: u
                }) : null
            }

            function wt(n) {
                o.grid.hoverable && st("plothover", n, function (n) {
                    return n.hoverable !== !1
                })
            }

            function bt(n) {
                o.grid.hoverable && st("plothover", n, function () {
                    return !1
                })
            }

            function kt(n) {
                st("plotclick", n, function (n) {
                    return n.clickable !== !1
                })
            }

            function st(n, t, r) {
                var e = d.offset(), l = t.pageX - e.left - h.left, a = t.pageY - e.top - h.top, c = ct({
                    left: l,
                    top: a
                }), u, s, f;
                if (c.pageX = t.pageX, c.pageY = t.pageY, u = or(l, a, r), u && (u.pageX = parseInt(u.series.xaxis.p2c(u.datapoint[0]) + e.left + h.left, 10), u.pageY = parseInt(u.series.yaxis.p2c(u.datapoint[1]) + e.top + h.top, 10)), o.grid.autoHighlight) {
                    for (s = 0; s < g.length; ++s) f = g[s], f.auto !== n || u && f.series == u.series && f.point[0] == u.datapoint[0] && f.point[1] == u.datapoint[1] || ni(f.series, f.point);
                    u && gt(u.series, u.datapoint, n)
                }
                i.trigger(n, [c, u])
            }

            function et() {
                var n = o.interaction.redrawOverlayInterval;
                if (n == -1) {
                    dt();
                    return
                }
                rt || (rt = setTimeout(dt, n))
            }

            function dt() {
                rt = null;
                v.save();
                it.clear();
                v.translate(h.left, h.top);
                for (var n, t = 0; t < g.length; ++t) n = g[t], n.series.bars.show ? hr(n.series, n.point) : sr(n.series, n.point);
                v.restore();
                nt(w.drawOverlay, [v])
            }

            function gt(n, t, i) {
                var r, u;
                typeof n === "number" && (n = c[n]);
                typeof t === "number" && (r = n.datapoints.pointsize, t = n.datapoints.points.slice(r * t, r * (t + 1)));
                u = ti(n, t);
                u == -1 ? (g.push({series: n, point: t, auto: i}), et()) : i || (g[u].auto = !1)
            }

            function ni(n, t) {
                n == null && t == null && (g = [], et());
                typeof n === "number" && (n = c[n]);
                typeof t === "number" && (t = n.data[t]);
                var i = ti(n, t);
                i !== -1 && (g.splice(i, 1), et())
            }

            function ti(n, t) {
                for (var r, i = 0; i < g.length; ++i) if (r = g[i], r.series == n && r.point[0] == t[0] && r.point[1] == t[1]) return i;
                return -1
            }

            function sr(t, i) {
                var r = i[0], u = i[1], f = t.xaxis, e = t.yaxis, h = typeof t.highlightColor === "string" ? t.highlightColor : n.color.parse(t.color).scale("a", .5).toString(), o, s;
                r < f.min || r > f.max || u < e.min || u > e.max || (o = t.points.radius + t.points.lineWidth / 2, v.lineWidth = o, v.strokeStyle = h, s = 1.5 * o, r = f.p2c(r), u = e.p2c(u), v.beginPath(), t.points.symbol == "circle" ? v.arc(r, u, s, 0, 2 * Math.PI, !1) : t.points.symbol(v, r, u, s, !1), v.closePath(), v.stroke())
            }

            function hr(t, i) {
                var r = typeof t.highlightColor === "string" ? t.highlightColor : n.color.parse(t.color).scale("a", .5).toString(), f = r, u = t.bars.align == "left" ? 0 : -t.bars.barWidth / 2;
                v.lineWidth = t.bars.lineWidth;
                v.strokeStyle = r;
                pt(i[0], i[1], i[2] || 0, u, u + t.bars.barWidth, 0, function () {
                    return f
                }, t.xaxis, t.yaxis, v, t.bars.horizontal, t.bars.lineWidth)
            }

            function ii(t, i, r, u) {
                var h, e, c, f, o;
                if (typeof t === "string") return t;
                for (h = s.createLinearGradient(0, r, 0, i), e = 0, c = t.colors.length; e < c; ++e) f = t.colors[e], typeof f !== "string" && (o = n.color.parse(u), f.brightness !== null && (o = o.scale("rgb", f.brightness)), f.opacity !== null && (o.a *= f.opacity), f = o.toString()), h.addColorStop(e / (c - 1), f);
                return h
            }

            var c = [], o = {
                colors: ["#edc240", "#afd8f8", "#cb4b4b", "#4da74d", "#9440ed"],
                legend: {
                    show: !0,
                    noColumns: 1,
                    labelFormatter: null,
                    labelBoxBorderColor: "#ccc",
                    container: null,
                    position: "ne",
                    margin: 5,
                    backgroundColor: null,
                    backgroundOpacity: .85,
                    sorted: null
                },
                xaxis: {
                    show: null,
                    position: "bottom",
                    mode: null,
                    timezone: null,
                    font: null,
                    color: null,
                    tickColor: null,
                    transform: null,
                    inverseTransform: null,
                    min: null,
                    max: null,
                    autoscaleMargin: null,
                    ticks: null,
                    tickFormatter: null,
                    labelWidth: null,
                    labelHeight: null,
                    reserveSpace: null,
                    tickLength: null,
                    alignTicksWithAxis: null,
                    tickDecimals: null,
                    tickSize: null,
                    minTickSize: null,
                    monthNames: null,
                    timeformat: null,
                    twelveHourClock: !1
                },
                yaxis: {autoscaleMargin: .02, position: "left"},
                xaxes: [],
                yaxes: [],
                series: {
                    points: {
                        show: !1,
                        radius: 3,
                        lineWidth: 2,
                        fill: !0,
                        fillColor: "#ffffff",
                        strokeColor: null,
                        symbol: "circle"
                    },
                    lines: {lineWidth: 2, fill: !1, fillColor: null, steps: !1},
                    bars: {
                        show: !1,
                        lineWidth: 2,
                        barWidth: 1,
                        fill: !0,
                        fillColor: null,
                        align: "left",
                        horizontal: !1,
                        zero: !0
                    },
                    shadowSize: 3,
                    highlightColor: null
                },
                grid: {
                    show: !0,
                    aboveData: !1,
                    color: "#545454",
                    backgroundColor: null,
                    borderColor: null,
                    tickColor: null,
                    margin: 0,
                    labelMargin: 5,
                    axisMargin: 8,
                    borderWidth: 2,
                    minBorderMargin: null,
                    markings: null,
                    markingsColor: "#f4f4f4",
                    markingsLineWidth: 2,
                    clickable: !1,
                    hoverable: !1,
                    autoHighlight: !0,
                    mouseActiveRadius: 10
                },
                interaction: {redrawOverlayInterval: 1e3 / 60},
                hooks: {}
            }, a = null, it = null, d = null, s = null, v = null, y = [], b = [], h = {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }, k = 0, p = 0, w = {
                processOptions: [],
                processRawData: [],
                processDatapoints: [],
                processOffset: [],
                drawBackground: [],
                drawSeries: [],
                draw: [],
                bindEvents: [],
                drawOverlay: [],
                shutdown: []
            }, l = this, g, rt;
            l.setData = ht;
            l.setupGrid = lt;
            l.draw = at;
            l.getPlaceholder = function () {
                return i
            };
            l.getCanvas = function () {
                return a.element
            };
            l.getPlotOffset = function () {
                return h
            };
            l.width = function () {
                return k
            };
            l.height = function () {
                return p
            };
            l.offset = function () {
                var n = d.offset();
                return n.left += h.left, n.top += h.top, n
            };
            l.getData = function () {
                return c
            };
            l.getAxes = function () {
                var t = {};
                return n.each(y.concat(b), function (n, i) {
                    i && (t[i.direction + (i.n !== 1 ? i.n : "") + "axis"] = i)
                }), t
            };
            l.getXAxes = function () {
                return y
            };
            l.getYAxes = function () {
                return b
            };
            l.c2p = ct;
            l.p2c = ei;
            l.getOptions = function () {
                return o
            };
            l.highlight = gt;
            l.unhighlight = ni;
            l.triggerRedrawOverlay = et;
            l.pointOffset = function (n) {
                return {
                    left: parseInt(y[ut(n, "x") - 1].p2c(+n.x) + h.left, 10),
                    top: parseInt(b[ut(n, "y") - 1].p2c(+n.y) + h.top, 10)
                }
            };
            l.shutdown = li;
            l.resize = function () {
                var n = i.width(), t = i.height();
                a.resize(n, t);
                it.resize(n, t)
            };
            l.hooks = w;
            ri(l);
            ui(u);
            hi();
            ht(r);
            lt();
            at();
            ci();
            g = [];
            rt = null
        }

        function f(n, t) {
            return t * Math.floor(n / t)
        }

        var i = Object.prototype.hasOwnProperty, r = [".flot-tick-label {font-size:smaller;color:#545454;}"];
        n(function () {
            n("head").prepend("<style id='flot-default-styles'>" + r.join("") + "<\/style>")
        });
        t.prototype.resize = function (n, t) {
            if (n <= 0 || t <= 0) throw new Error("Invalid dimensions for plot, width = " + n + ", height = " + t);
            var i = this.element, u = this.context, r = this.pixelRatio;
            this.width !== n && (i.width = n * r, i.style.width = n + "px", this.width = n);
            this.height !== t && (i.height = t * r, i.style.height = t + "px", this.height = t);
            u.restore();
            u.save();
            u.scale(r, r)
        };
        t.prototype.clear = function () {
            this.context.clearRect(0, 0, this.width, this.height)
        };
        t.prototype.render = function () {
            var o = this._textCache, r, u, f, s, t, e, n;
            for (r in o) if (i.call(o, r)) {
                u = this.getTextLayer(r);
                f = o[r];
                u.hide();
                for (s in f) if (i.call(f, s)) {
                    t = f[s];
                    for (e in t) i.call(t, e) && (n = t[e], n.active ? n.rendered || (u.append(n.element), n.rendered = !0) : (delete t[e], n.rendered && n.element.detach()))
                }
                u.show()
            }
        };
        t.prototype.getTextLayer = function (t) {
            var i = this.text[t];
            return i == null && (i = this.text[t] = n("<div><\/div>").addClass("flot-text " + t).css({
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0
            }).insertAfter(this.element)), i
        };
        t.prototype.getTextInfo = function (t, i, r) {
            var o, f, e, s, u;
            return i = "" + i, o = typeof r === "object" ? r.style + " " + r.variant + " " + r.weight + " " + r.size + "px " + r.family : r, f = this._textCache[t], f == null && (f = this._textCache[t] = {}), e = f[o], e == null && (e = f[o] = {}), s = e[i], s == null && (u = n("<div><\/div>").html(i).css({
                position: "absolute",
                top: -9999
            }).appendTo(this.getTextLayer(t)), typeof r === "object" ? u.css({
                font: o,
                color: r.color
            }) : typeof r === "string" && u.addClass(r), s = e[i] = {
                active: !1,
                rendered: !1,
                element: u,
                width: u.outerWidth(!0),
                height: u.outerHeight(!0)
            }, u.detach()), s
        };
        t.prototype.addText = function (n, t, i, r, u, f, e, o) {
            var s = this.getTextInfo(n, r, u, f);
            s.active = !0;
            e === "center" ? t -= s.width / 2 : e === "right" && (t -= s.width);
            o === "middle" ? i -= s.height / 2 : o === "bottom" && (i -= s.height);
            s.element.css({top: parseInt(i, 10), left: parseInt(t, 10)})
        };
        t.prototype.removeText = function (n, t, r, u) {
            var f, o, e, s;
            if (t == null) {
                if (f = this._textCache[n], f !== null) for (o in f) if (i.call(f, o)) {
                    e = f[o];
                    for (s in e) i.call(e, s) && (e[s].active = !1)
                }
            } else this.getTextInfo(n, t, r, u).active = !1
        };
        n.plot = function (t, i, r) {
            return new u(n(t), i, r, n.plot.plugins)
        };
        n.plot.version = "0.8.0-beta";
        n.plot.plugins = [];
        n.fn.plot = function (t, i) {
            return this.each(function () {
                n.plot(this, t, i)
            })
        }
    }(jQuery), function (n) {
        function i(n, t) {
            return t * Math.floor(n / t)
        }

        function r(n, t, i, r) {
            var c, o, u;
            if (typeof n.strftime === "function") return n.strftime(t);
            var f = function (n, t) {
                return n = "" + n, t = "" + (t == null ? "0" : t), n.length == 1 ? t + n : n
            }, s = [], h = !1, e = n.getHours(), l = e < 12;
            for (i == null && (i = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]), r == null && (r = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]), c = e > 12 ? e - 12 : e == 0 ? 12 : e, o = 0; o < t.length; ++o) if (u = t.charAt(o), h) {
                switch (u) {
                    case"a":
                        u = "" + r[n.getDay()];
                        break;
                    case"b":
                        u = "" + i[n.getMonth()];
                        break;
                    case"d":
                        u = f(n.getDate());
                        break;
                    case"e":
                        u = f(n.getDate(), " ");
                        break;
                    case"H":
                        u = f(e);
                        break;
                    case"I":
                        u = f(c);
                        break;
                    case"l":
                        u = f(c, " ");
                        break;
                    case"m":
                        u = f(n.getMonth() + 1);
                        break;
                    case"M":
                        u = f(n.getMinutes());
                        break;
                    case"q":
                        u = "" + (Math.floor(n.getMonth() / 3) + 1);
                        break;
                    case"S":
                        u = f(n.getSeconds());
                        break;
                    case"y":
                        u = f(n.getFullYear() % 100);
                        break;
                    case"Y":
                        u = "" + n.getFullYear();
                        break;
                    case"p":
                        u = l ? "am" : "pm";
                        break;
                    case"P":
                        u = l ? "AM" : "PM";
                        break;
                    case"w":
                        u = "" + n.getDay()
                }
                s.push(u);
                h = !1
            } else u === "%" ? h = !0 : s.push(u);
            return s.join("")
        }

        function u(n) {
            function u(n, t, i, r) {
                n[t] = function () {
                    return i[r].apply(i, arguments)
                }
            }

            var i = {date: n}, r, t;
            for (n.strftime !== undefined && u(i, "strftime", n, "strftime"), u(i, "getTime", n, "getTime"), u(i, "setTime", n, "setTime"), r = ["Date", "Day", "FullYear", "Hours", "Milliseconds", "Minutes", "Month", "Seconds"], t = 0; t < r.length; t++) u(i, "get" + r[t], n, "getUTC" + r[t]), u(i, "set" + r[t], n, "setUTC" + r[t]);
            return i
        }

        function f(n, t) {
            if (t.timezone === "browser") return new Date(n);
            if (t.timezone && t.timezone !== "utc") {
                if (typeof timezoneJS !== "undefined" && typeof timezoneJS.Date !== "undefined") {
                    var i = new timezoneJS.Date;
                    return i.setTimezone(t.timezone), i.setTime(n), i
                }
                return u(new Date(n))
            }
            return u(new Date(n))
        }

        function h(u) {
            u.hooks.processDatapoints.push(function (u) {
                n.each(u.getAxes(), function (n, u) {
                    var e = u.options;
                    e.mode === "time" && (u.tickGenerator = function (n) {
                        var k = [], r = f(n.min, e), d = 0, l = e.tickSize && e.tickSize[1] === "quarter" || e.minTickSize && e.minTickSize[1] === "quarter" ? s : o, c, y, u, w, p, h, a, b, v, g, nt, tt;
                        for (e.minTickSize !== null && (d = typeof e.tickSize === "number" ? e.tickSize : e.minTickSize[0] * t[e.minTickSize[1]]), c = 0; c < l.length - 1; ++c) if (n.delta < (l[c][0] * t[l[c][1]] + l[c + 1][0] * t[l[c + 1][1]]) / 2 && l[c][0] * t[l[c][1]] >= d) break;
                        y = l[c][0];
                        u = l[c][1];
                        u === "year" && (e.minTickSize !== null && e.minTickSize[1] === "year" ? y = Math.floor(e.minTickSize[0]) : (w = Math.pow(10, Math.floor(Math.log(n.delta / t.year) / Math.LN10)), p = n.delta / t.year / w, y = (p < 1.5 ? 1 : p < 3 ? 2 : p < 7.5 ? 5 : 10) * w), y < 1 && (y = 1));
                        n.tickSize = e.tickSize || [y, u];
                        h = n.tickSize[0];
                        u = n.tickSize[1];
                        a = h * t[u];
                        u === "second" ? r.setSeconds(i(r.getSeconds(), h)) : u === "minute" ? r.setMinutes(i(r.getMinutes(), h)) : u === "hour" ? r.setHours(i(r.getHours(), h)) : u === "month" ? r.setMonth(i(r.getMonth(), h)) : u == "quarter" ? r.setMonth(3 * i(r.getMonth() / 3, h)) : u == "year" && r.setFullYear(i(r.getFullYear(), h));
                        r.setMilliseconds(0);
                        a >= t.minute ? r.setSeconds(0) : a >= t.hour ? r.setMinutes(0) : a >= t.day ? r.setHours(0) : a >= t.day * 4 ? r.setDate(1) : a >= t.month * 2 ? r.setMonth(i(r.getMonth(), 3)) : a >= t.quarter * 2 ? r.setMonth(i(r.getMonth(), 6)) : a >= t.year && r.setMonth(0);
                        b = 0;
                        v = Number.NaN;
                        do g = v, v = r.getTime(), k.push(v), u === "month" || u === "quarter" ? h < 1 ? (r.setDate(1), nt = r.getTime(), r.setMonth(r.getMonth() + (u === "quarter" ? 3 : 1)), tt = r.getTime(), r.setTime(v + b * t.hour + (tt - nt) * h), b = r.getHours(), r.setHours(0)) : r.setMonth(r.getMonth() + h * (u == "quarter" ? 3 : 1)) : u == "year" ? r.setFullYear(r.getFullYear() + h) : r.setTime(v + a); while (v < n.max && v !== g);
                        return k
                    }, u.tickFormatter = function (n, i) {
                        var l = f(n, i.options);
                        if (e.timeformat !== null) return r(l, e.timeformat, e.monthNames, e.dayNames);
                        var o = i.options.tickSize && i.options.tickSize[1] === "quarter" || i.options.minTickSize && i.options.minTickSize[1] === "quarter", u = i.tickSize[0] * t[i.tickSize[1]], s = i.max - i.min,
                            h = e.twelveHourClock ? " %p" : "", c = e.twelveHourClock ? "%I" : "%H", a;
                        return a = u < t.minute ? c + ":%M:%S" + h : u < t.day ? s < 2 * t.day ? c + ":%M" + h : "%b %d " + c + ":%M" + h : u < t.month ? "%b %d" : o && u < t.quarter || !o && u < t.year ? s < t.year ? "%b" : "%b %Y" : o && u < t.year ? s < t.year ? "Q%q" : "Q%q %Y" : "%Y", r(l, a, e.monthNames, e.dayNames)
                    })
                })
            })
        }

        var t = {
                second: 1e3,
                minute: 6e4,
                hour: 36e5,
                day: 864e5,
                month: 2592e6,
                quarter: 7776e6,
                year: 365.2425 * 864e5
            },
            e = [[1, "second"], [2, "second"], [5, "second"], [10, "second"], [30, "second"], [1, "minute"], [2, "minute"], [5, "minute"], [10, "minute"], [30, "minute"], [1, "hour"], [2, "hour"], [4, "hour"], [8, "hour"], [12, "hour"], [1, "day"], [2, "day"], [3, "day"], [.25, "month"], [.5, "month"], [1, "month"], [2, "month"]],
            o = e.concat([[3, "month"], [6, "month"], [1, "year"]]), s = e.concat([[1, "quarter"], [2, "quarter"], [1, "year"]]);
        n.plot.plugins.push({init: h, options: {}, name: "time", version: "1.0"});
        n.plot.formatDate = r
    }(jQuery), function (n, t) {
        n.fn.quicksearch = function (i, r) {
            var h, c, o, f, e = "", s = this, u = n.extend({
                delay: 100,
                selector: null,
                stripeRows: null,
                loader: null,
                noResults: "",
                matchedResultsCount: 0,
                bind: "keyup",
                onBefore: function () {
                    return
                },
                onAfter: function () {
                    return
                },
                show: function () {
                    this.style.display = ""
                },
                hide: function () {
                    this.style.display = "none"
                },
                prepareQuery: function (n) {
                    return n.toLowerCase().split(" ")
                },
                testQuery: function (n, t) {
                    for (var i = 0; i < n.length; i += 1) if (t.indexOf(n[i]) === -1) return !1;
                    return !0
                }
            }, r);
            return this.go = function () {
                for (var n = 0, t = 0, i = !0, f = u.prepareQuery(e), s = e.replace(" ", "").length === 0, n = 0, r = o.length; n < r; n++) s || u.testQuery(f, c[n], o[n]) ? (u.show.apply(o[n]), i = !1, t++) : u.hide.apply(o[n]);
                return i ? this.results(!1) : (this.results(!0), this.stripe()), this.matchedResultsCount = t, this.loader(!1), u.onAfter(), this
            }, this.search = function (n) {
                e = n;
                s.trigger()
            }, this.currentMatchedResults = function () {
                return this.matchedResultsCount
            }, this.stripe = function () {
                if (typeof u.stripeRows === "object" && u.stripeRows !== null) {
                    var t = u.stripeRows.join(" "), i = u.stripeRows.length;
                    f.not(":hidden").each(function (r) {
                        n(this).removeClass(t).addClass(u.stripeRows[r % i])
                    })
                }
                return this
            }, this.strip_html = function (t) {
                var i = t.replace(new RegExp("<[^<]+>", "g"), "");
                return n.trim(i.toLowerCase())
            }, this.results = function (t) {
                return typeof u.noResults === "string" && u.noResults !== "" && (t ? n(u.noResults).hide() : n(u.noResults).show()), this
            }, this.loader = function (t) {
                return typeof u.loader === "string" && u.loader !== "" && (t ? n(u.loader).show() : n(u.loader).hide()), this
            }, this.cache = function () {
                f = n(i);
                typeof u.noResults === "string" && u.noResults !== "" && (f = f.not(u.noResults));
                var t = typeof u.selector === "string" ? f.find(u.selector) : n(i).not(u.noResults);
                return c = t.map(function () {
                    return s.strip_html(this.innerHTML)
                }), o = f.map(function () {
                    return this
                }), e = e || this.val() || "", this.go()
            }, this.trigger = function () {
                return this.loader(!0), u.onBefore(), t.clearTimeout(h), h = t.setTimeout(function () {
                    s.go()
                }, u.delay), this
            }, this.cache(), this.results(!0), this.stripe(), this.loader(!1), this.each(function () {
                n(this).on(u.bind, function () {
                    e = n(this).val();
                    s.trigger()
                })
            })
        }
    }(jQuery, this, document);
    LazyLoad = function (n) {
        function o(t, i) {
            var u = n.createElement(t), r;
            for (r in i) i.hasOwnProperty(r) && u.setAttribute(r, i[r]);
            return u
        }

        function u(n) {
            var t = i[n], u, e;
            t && (u = t.callback, e = t.urls, e.shift(), r = 0, e.length || (u && u.call(t.context, t.obj), i[n] = null, f[n].length && s(n)))
        }

        function a() {
            var i = navigator.userAgent;
            t = {async: n.createElement("script").async === !0};
            (t.webkit = /AppleWebKit\//.test(i)) || (t.ie = /MSIE|Trident/.test(i)) || (t.opera = /Opera/.test(i)) || (t.gecko = /Gecko\//.test(i)) || (t.unknown = !0)
        }

        function s(r, s, h, v, y) {
            var it = function () {
                u(r)
            }, k = r === "css", g = [], w, b, p, nt, tt, d;
            if (t || a(), s) if (s = typeof s === "string" ? [s] : s.concat(), k || t.async || t.gecko || t.opera) f[r].push({
                urls: s,
                callback: h,
                obj: v,
                context: y
            }); else for (w = 0, b = s.length; w < b; ++w) f[r].push({
                urls: [s[w]],
                callback: w === b - 1 ? h : null,
                obj: v,
                context: y
            });
            if (!i[r] && (nt = i[r] = f[r].shift())) {
                for (e || (e = n.head || n.getElementsByTagName("head")[0]), tt = nt.urls.concat(), w = 0, b = tt.length; w < b; ++w) d = tt[w], k ? p = t.gecko ? o("style") : o("link", {
                    href: d,
                    rel: "stylesheet"
                }) : (p = o("script", {src: d}), p.async = !1), p.className = "lazyload", p.setAttribute("charset", "utf-8"), t.ie && !k && "onreadystatechange" in p && !("draggable" in p) ? p.onreadystatechange = function () {
                    /loaded|complete/.test(p.readyState) && (p.onreadystatechange = null, it())
                } : k && (t.gecko || t.webkit) ? t.webkit ? (nt.urls[w] = p.href, l()) : (p.innerHTML = '@import "' + d + '";', c(p)) : p.onload = p.onerror = it, g.push(p);
                for (w = 0, b = g.length; w < b; ++w) e.appendChild(g[w])
            }
        }

        function c(n) {
            var t;
            try {
                t = !!n.sheet.cssRules
            } catch (i) {
                r += 1;
                r < 200 ? setTimeout(function () {
                    c(n)
                }, 50) : t && u("css");
                return
            }
            u("css")
        }

        function l() {
            var n = i.css, t;
            if (n) {
                for (t = h.length; --t >= 0;) if (h[t].href === n.urls[0]) {
                    u("css");
                    break
                }
                r += 1;
                n && (r < 200 ? setTimeout(l, 50) : u("css"))
            }
        }

        var t, e, i = {}, r = 0, f = {css: [], js: []}, h = n.styleSheets;
        return {
            css: function (n, t, i, r) {
                s("css", n, t, i, r)
            }, js: function (n, t, i, r) {
                s("js", n, t, i, r)
            }
        }
    }(this.document);
    Accessibility = function () {
        function n() {
        }

        return n.prototype.tabIndexGenerator = function (n) {
            $("*:not([tabindex])").not('a').attr("tabindex", -1).addClass("t-index-added");
            switch (n) {
                case 0:
                    this.SetBasketPageAccessibility();
                    break;
                case 1:
                    this.SetPaymentPageAccessibility();
                    break;
                case 2:
                    this.SetReviewPageAccessibility();
                    break;
                case 3:
                    this.SetPOCPageAccessibility();
                    break;
                case 4:
                    this.SetPOCPageAccessibility();
                    break;
                case 5:
                    this.CurrencyWidgetPageAccessibility();
                    break;
                case 6:
                    this.ExchangeRateWidgetPageAccessibility();
                    break;
                default:
                    this.CompetitorRateWidgetPageAccessibility()
            }
            this.SetFooterAccessibility();
            $(".t-index-added").removeClass("t-index-added");
        }, n.prototype.SetHeaderAccessibility = function (n) {
            n ? ($(".logo").attr("tabindex", 1), $(".funnel-steps li").attr("tabindex", 1), $("#defaultCountdown").attr("tabindex", 1), $(".summary-bar").attr("tabindex", 1)) : ($(".logo").attr("tabindex", -1), $(".funnel-steps li").attr("tabindex", -1), $("#defaultCountdown").attr("tabindex", -1), $(".summary-bar").attr("tabindex", -1))
        }, n.prototype.SetBasketPageAccessibility = function () {
            $("#basket").css("display") === "none" ? this.SetHeaderAccessibility(!0) : this.SetHeaderAccessibility(!1);
            $(".order-page").length > 0 && ($(".tabnav a").attr("tabindex", 1), $(".autocomplete.ui-autocomplete-input").attr("tabindex", 2), $(".currency-buy-amount").attr("tabindex", 2), $(".currency-cost").attr("tabindex", 2), $(".closeDiv").attr("tabindex", 2), $(".add-buy-back-btn").attr("tabindex", 2), $(".info-tooltip").attr("tabindex", 2), $(".add-cash").attr("tabindex", 2), $(".add-prepaidcardsale").attr("tabindex", 2), $(".add-prepaidcardreload").attr("tabindex", 2), $("[for=noItems-cash] span").attr("tabindex", 2), $("[for=noItems-cash-passport] span").attr("tabindex", 2), $("[for=addCashWidget-cash] span").attr("tabindex", 2), $("[for=addCashWidget-cash-passport] span").attr("tabindex", 2), $(".addCash").attr("tabindex", 2), $("#basket").find("h1").attr("tabindex", 2), $(".fulfilment-ui h1").attr("tabindex", 2), $(".order-paymentItem-radio span").attr("tabindex", 5), $(".buying-options-tab").attr("tabindex", 6), $("#searchTerm").attr("tabindex", 7), $("#searchBtn").attr("tabindex", 7), $("a.ui-state-default").attr("tabindex", 7), $(".storerow-selector-name").attr("tabindex", 7), $(".storerow-selector-name+ul li").attr("tabindex", 7))
        }, n.prototype.SetPaymentPageAccessibility = function () {
            this.SetHeaderAccessibility(!0);
            $(".payment-page").length > 0 && ($("select").attr("tabindex", 2), $("input").attr("tabindex", 2), $("button").attr("tabindex", 2))
        }, n.prototype.SetReviewPageAccessibility = function () {
            this.SetHeaderAccessibility(!0);
            $(".review-page").length > 0 && ($(".js-promo-btn a").attr("tabindex", 2), $(".main-container a").attr("tabindex", 2), $(".newsletter span").attr("tabindex", 2), $(".newsletter input").attr("tabindex", 2), $(".terms span").attr("tabindex", 2), $("label[for='rr2']").attr("tabindex", 2), $("button").attr("tabindex", 2))
        }, n.prototype.SetPOCPageAccessibility = function () {
            this.SetHeaderAccessibility(!0);
            $(".payment-on-collection").length > 0 && ($(".main-container a").attr("tabindex", 2), $(".main-container input").attr("tabindex", 2), $(".main-container button").attr("tabindex", 2), $(".newsletter span").attr("tabindex", 2), $(".terms span").attr("tabindex", 2))
        }, n.prototype.SetFooterAccessibility = function () {
            $("#submitBtn").attr("tabindex", 17);
            $("#complete-order").attr("tabindex", 17);
            $(".faqs li").attr("tabindex", 18);
            $(".footer-links a").attr("tabindex", 19)
        }, n.prototype.CurrencyWidgetPageAccessibility = function () {
            $(".t-index-added").removeAttr("tabindex");
        }, n.prototype.ExchangeRateWidgetPageAccessibility = function () {
            this.SetHeaderAccessibility(!0);
            $(".exchange-rates").length > 0 && ($(".quicksearch").attr("tabindex", 1), $(".col").attr("tabindex", 2), $(".row").attr("tabindex", 2), $(".buyNow").attr("tabindex", 2), $(".buy-tier-amount").attr("tabindex", 3), $(".button").attr("tabindex", 3), $(".red-button").attr("tabindex", 3))
        }, n.prototype.CompetitorRateWidgetPageAccessibility = function () {
            $(".hwc").attr("tabindex", 1);
            $(".active a").attr("tabindex", 2);
            $("a").attr("tabindex", 2)
        }, n.prototype.IsEnterPressed = function (n) {
            var t = n.which || n.keyCode;
            t == 13
        }, n
    }(), function (n) {
        n[n.BasketPage = 0] = "BasketPage";
        n[n.PaymentPage = 1] = "PaymentPage";
        n[n.ReviewPage = 2] = "ReviewPage";
        n[n.POCPage = 3] = "POCPage";
        n[n.ConfirmPage = 4] = "ConfirmPage";
        n[n.CurrencyWidget = 5] = "CurrencyWidget";
        n[n.ExchangeRate = 6] = "ExchangeRate";
        n[n.CompetitorRate = 7] = "CompetitorRate"
    }(PageName || (PageName = {}));

    EventDispatcher = function () {
        function n(n) {
            this.listeners = [];
            this.eventName = n;
            this.accessibility = new Accessibility
        }

        return n.prototype.addEventListener = function (n) {
            this.listeners.push(n)
        }, n.prototype.dispatchEvent = function (n) {

            if (this.eventName === 'WidgetContextLoaded') {
                $('.currency-widget-wrapper').show();
                $('.loader-wrapper').hide();

                // fixes a bug in the input system on mob view
                $('#x-buy-amount, #x-cost').off('keydown').on('keydown', function (e) {
                    if (e.which === 9) {
                        setTimeout(function () {
                            lastKeyPress = 0;
                        }, 50);
                    }
                    lastKeyPress = e.which;

                });
            }

            if (console.log("Dispatching event: " + this.eventName), this.SetAccessibility(), typeof eventCallback !== "undefined") try {
                eventCallback.call(n, n)
            } catch (i) {
                //console.log(i);

            }
            for (var t = 0; t < this.listeners.length; t++) this.listeners[t].call(null, n)
        }, n.prototype.SetAccessibility = function () {
            $(".order-page").length > 0 ? this.accessibility.tabIndexGenerator(0) : $(".payment-page").length > 0 ? this.accessibility.tabIndexGenerator(1) : $(".review-page").length > 0 ? this.accessibility.tabIndexGenerator(2) : $(".payment-on-collection").length > 0 ? this.accessibility.tabIndexGenerator(3) : $(".confirmation-page").length > 0 ? this.accessibility.tabIndexGenerator(4) : $(".add-more-currency-widget").length > 0 ? this.accessibility.tabIndexGenerator(5) : $(".exchange-rates").length > 0 ? this.accessibility.tabIndexGenerator(6) : this.accessibility.tabIndexGenerator(7)
        }, n
    }();
    I18n = function () {
        function n(n) {
            this.translatedMonthNames = m("UI3_Funnel_General:MonthNamesShort").split(",");
            this.config = n;
            this.config.countryCode === "DG" && (this.config.countryCode = "DE");
            this.config.countryCode === "FE" && (this.config.countryCode = "FR");
            typeof moment !== "undefined" && moment.lang(n.language)
        }

        return n.prototype.getAmountDps = function (n) {
            return this.config.dps[n] ? this.config.dps[n] : 2
        }, n.prototype.formatDomesticAmount = function (n, t, i) {
            return typeof t === "undefined" && (t = !1), typeof i === "undefined" && (i = !0), this.formatAmount(this.config.currencyCode, n, t, i)
        }, n.prototype.formatNumber = function (n, t) {
            var i = this.getAmountDps(n);
            return formatNumber(t, i, 3, "", this.config.decimalSeparator)
        }, n.prototype.formatAmount = function (n, t, i, r) {
            if (typeof i === "undefined" && (i = !1), typeof r === "undefined" && (r = !0), t == 0 && i) return m("UI3_Funnel_General:Free");
            var u = this.getAmountDps(n);
            return r ? CurrencySymbol[n] + " " + formatNumber(t, u, 3, this.config.groupSeparator, this.config.decimalSeparator) : n + " " + formatNumber(t, u, 3, this.config.groupSeparator, this.config.decimalSeparator)
        }, n.prototype.formatRate = function (n) {
            return formatNumber(n, 4, 3, this.config.groupSeparator, this.config.decimalSeparator)
        }, n.prototype.formatDistance = function (n) {
            return n.toFixed(1) + " " + this.config.distanceUnit
        }, n
    }();
    typeof i18nConfig !== "undefined" && init_i18n();
    CurrencySymbol = {
        ALL: "&#76;&#101;&#107;",
        USD: "&#36;",
        AFN: "&#1547;",
        ARS: "&#36;",
        AWG: "&#402;",
        AUD: "&#36;",
        AZN: "&#1084;&#1072;&#1085;",
        BSD: "&#36;",
        BBD: "&#36;",
        BYR: "&#112;&#46;",
        BEF: "&#8355;",
        BZD: "&#66;&#90;&#36;",
        BMD: "&#36;",
        BOB: "&#36;&#98;",
        BAM: "&#75;&#77;",
        "BWP ": "&#80;",
        BGN: "&#1083;&#1074;",
        BRL: "&#82;&#36;",
        BRC: "&#8354;",
        BND: "&#36;",
        KHR: "&#6107;",
        CAD: "&#36;",
        KYD: "&#36;",
        CLP: "&#36;",
        CNY: "&#20803;",
        COP: "&#36;",
        CRC: "&#8353;",
        HRK: "&#107;&#110;",
        CUP: "&#8369;",
        CYP: "&#163;",
        CZK: "&#75;&#269;",
        DKK: "&#107;&#114;",
        DOP: "&#82;&#68;&#36;",
        XCD: "&#36;",
        EGP: "&#163;",
        SVC: "&#36;",
        GBP: "&#163;",
        EEK: "&#107;&#114;",
        EUR: "&#8364;",
        XEU: "&#8352;",
        FKP: "&#163;",
        FJD: "&#36;",
        FRF: "&#8355;",
        GHC: "&#162;",
        GIP: "&#163;",
        GRD: "&#8367;",
        GTQ: "&#81;",
        GGP: "&#163;",
        GYD: "&#36;",
        NLG: "&#402;",
        HNL: "&#76;",
        HKD: "&#72;&#75;&#36;",
        HUF: "&#70;&#116;",
        ISK: "&#107;&#114;",
        INR: "?",
        IDR: "&#82;&#112;",
        IRR: "&#65020;",
        IEP: "&#163;",
        IMP: "&#163;",
        ILS: "&#8362;",
        ITL: "&#8356;",
        JMD: "&#74;&#36;",
        JPY: "&#165;",
        JEP: "&#163;",
        KZT: "&#1083;&#1074;",
        KPW: "&#8361;",
        KGS: "&#1083;&#1074;",
        LAK: "&#8365;",
        LVL: "&#76;&#115;",
        LBP: "&#163;",
        LRD: "&#36;",
        CHF: "&#67;&#72;&#70;",
        LTL: "&#76;&#116;",
        LUF: "&#8355;",
        MKD: "&#1076;&#1077;&#1085;",
        MYR: "&#82;&#77;",
        MTL: "&#76;&#109;",
        MUR: "&#8360;",
        MXN: "&#36;",
        MNT: "&#8366;",
        MZN: "&#77;&#84;",
        NAD: "&#36;",
        NPR: "&#8360;",
        ANG: "&#402;",
        NZD: "&#36;",
        NIO: "&#67;&#36;",
        NGN: "&#8358;",
        NOK: "&#107;&#114;",
        OMR: "&#65020;",
        PKR: "&#8360;",
        PAB: "&#66;&#47;&#46;",
        PYG: "&#71;&#115;",
        PEN: "&#83;&#47;&#46;",
        PHP: "&#80;&#104;&#112;",
        PLN: "&#122;&#322;",
        QAR: "&#65020;",
        RON: "&#108;&#101;&#105;",
        RUB: "&#1088;&#1091;&#1073;",
        SHP: "&#163;",
        SAR: "&#65020;",
        RSD: "&#1044;&#1080;&#1085;&#46;",
        SCR: "&#8360;",
        SGD: "&#36;",
        SKK: "&#83;&#73;&#84;",
        SBD: "&#36;",
        SOS: "&#83;",
        ZAR: "&#82;",
        KRW: "&#8361;",
        ESP: "&#8359;",
        LKR: "&#8360;",
        SEK: "&#107;&#114;",
        SRD: "&#36;",
        SYP: "&#163;",
        TWD: "&#78;&#84;&#36;",
        THB: "&#3647;",
        TTD: "&#84;&#84;&#36;",
        TRY: "&#89;&#84;&#76;",
        TRL: "&#8356;",
        TVD: "&#36;",
        UAH: "&#8372;",
        UYU: "&#36;&#85;",
        UZS: "&#1083;&#1074;",
        VAL: "&#8356;",
        VEB: "&#66;&#115;",
        VND: "&#8363;",
        YER: "&#65020;",
        ZWD: "&#90;&#3;"
    };
    Array.prototype.first = function () {
        return this.length > 0 ? this[0] : null
    };
    Array.prototype.last = function () {
        return this.length > 0 ? this[this.length - 1] : null
    };
    Array.prototype.single = function (n) {
        for (var t = 0; t < this.length; t++) if (n(this[t])) return this[t];
        return null
    };
    Array.prototype.all = function (n) {
        for (var t = 0; t < this.length; t++) if (!n(this[t])) return !1;
        return !0
    };
    Array.prototype.any = function (n) {
        for (var t = 0; t < this.length; t++) if (n(this[t])) return !0;
        return !1
    };
    Array.prototype.min = function (n) {
        for (var t = null, r, i = 0; i < this.length; i++) r = n(this[i]), (t == null || r < t) && (t = r);
        return t
    };
    Array.prototype.max = function (n) {
        for (var t = null, r, i = 0; i < this.length; i++) r = n(this[i]), (t == null || r > t) && (t = r);
        return t
    };
    Array.prototype.sum = function (n) {
        for (var i = 0, t = 0; t < this.length; t++) i += n(this[t]);
        return i
    };
    Array.prototype.count = function (n) {
        for (var i = 0, t = 0; t < this.length; t++) n(this[t]) && i++;
        return i
    };
    Array.prototype.contains = function (n) {
        return this.indexOf(n) !== -1
    };
    Array.prototype.containsAny = function (n) {
        return this.any(function (t) {
            return n.contains(t)
        })
    };
    Array.prototype.remove = function (n) {
        var t = this.indexOf(n);
        this.splice(t, 1)
    };
    MobileDetector = function () {
        function n() {
        }

        return n.isMobile = function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        }, n
    }();
    this.console = this.console || {
        log: function () {
        }
    };
    backgroundColorCache = {};
    var ProductTypes = function () {
        function n() {
        }

        return n.Cash = "cash", n.PrePaidCardSale = "prePaidCardSale", n.PrePaidCardReload = "prePaidCardReload", n.TravellersCheque = "pravellersCheque", n.BuyBack = "buyBack", n.AdditionalCard = "additionalCard", n
    }(), WidgetContext = function () {
        function n(n) {
            this.config = n;
            this.rates = n.rates;
            for (var t = 0; t < this.config.widget.items.length; t++) this.config.widget.items[t].label = this.getWidgetListItemLabel(this.config.widget.items[t])
        }

        return n.prototype.getWidgetListItemLabel = function (n) {
            return typeof n.countryName === "undefined" ? format("{0} - ({1})", n.currencyName, n.currencyCode) : format("{0} - {1} ({2})", n.countryName, n.currencyName, n.currencyCode)
        }, n.prototype.getProduct = function (n, t) {
            return this.config.products.products.single(function (i) {
                return i.productType == n && i.currencyCode == t
            })
        }, n.prototype.getProductByCode = function (n) {
            return this.config.products.products.single(function (t) {
                return t.productCode == n
            })
        }, n.prototype.hasProductType = function (n) {
            return this.config.products.products.any(function (t) {
                return t.productType == n
            })
        }, n.prototype.getPrepaidProduct = function (n, t, i) {
            return this.config.products.products.single(function (r) {
                return r.productType == n && r.currencyCode == t && r.prePaidCardId == i
            })
        }, n.prototype.getPrePaidCard = function (n) {
            return this.config.products.prePaidCards.single(function (t) {
                return t.prePaidCardId == n
            })
        }, n.prototype.getPrePaidCardFromPAN = function (n) {
            return this.config.products.prePaidCards.single(function (t) {
                return t.bins.any(function (t) {
                    return n.substring(0, t.length) == t
                })
            })
        }, n.prototype.getAdditionalCardProductForPrepaidCard = function (n) {
            return this.config.products.products.single(function (t) {
                return t.productType == ProductTypes.AdditionalCard && t.prePaidCardId == n
            })
        }, n.prototype.getRate = function (n, t) {
            var i = this.getProduct(n, t);
            return this.rates.rates[i.productCode]
        }, n.prototype.getRateForProductCode = function (n) {
            return this.rates.rates[n]
        }, n.prototype.convertToDomestic = function (n, t) {
            return this.convert(n.productType, n.currencyCode, this.config.partnerInfo.currencyCode, t, n.rateDenomination)
        }, n.prototype.convertToForeign = function (n, t) {
            return this.convert(n.productType, this.config.partnerInfo.currencyCode, n.currencyCode, t, n.rateDenomination)
        }, n.prototype.convert = function (n, t, i, r, u, f) {
            if (typeof f === "undefined" && (f = null), t == this.config.partnerInfo.currencyCode) return f = f || this.getEffectiveRate(n, i, r, null).rate, this.__convert(r, !1, f, u);
            if (i == this.config.partnerInfo.currencyCode) return f = f || this.getEffectiveRate(n, t, null, r).rate, this.__convert(r, !0, f, u);
            throw new Error("Cross rates not implemented yet.");
        }, n.prototype.__convert = function (n, t, i, r) {
            return t ? this.config.partnerInfo.foreignCurrencyAsBase ? n / r * i : n * r / i : this.config.partnerInfo.foreignCurrencyAsBase ? n * r / i : n / r * i
        }, n.prototype.getDomesticAmountForRateFmt = function (n, t, i, r, u) {
            return this.config.partnerInfo.foreignCurrencyAsBase ? String(i18n.formatRate(n || this.getEffectiveRate(t, i, null, r).rate)) : String(u)
        }, n.prototype.getForeignAmountForRateFmt = function (n, t, i, r, u) {
            return this.config.partnerInfo.foreignCurrencyAsBase ? String(u) : String(i18n.formatRate(n || this.getEffectiveRate(t, i, null, r).rate))
        }, n.prototype.getRateTierGroup = function (n) {
            return this.config.products.rateTiers[n]
        }, n.prototype.isEffectiveRateThreshold = function (n, t, i, r) {
            if (t === this.config.partnerInfo.currencyCode) return this.__isEffectiveRateThreshold(n, i, r, null);
            if (i === this.config.partnerInfo.currencyCode) return this.__isEffectiveRateThreshold(n, t, null, r);
            throw new Error("Cross rates not implemented yet.");
        }, n.prototype.__isEffectiveRateThreshold = function (n, t, i, r) {
            var s = this.getRate(n, t), u = this.getProduct(n, t);
            if (!u.rateTiers) return !1;
            for (var h = this.getRateTierGroup(u.rateTiers), e = -1, o = s; ;) {
                var c = i || this.convert(n, t, this.config.partnerInfo.currencyCode, r, u.rateDenomination, o), l = r || this.convert(n, this.config.partnerInfo.currencyCode, t, i, u.rateDenomination, o), f = this.getRateTier(h, c, l),
                    a = this.getRateForTier(h, f, s);
                if (f == -1 && e > -1) return !0;
                if (f <= e) return !1;
                e = f;
                o = a
            }
        }, n.prototype.getEffectiveRate = function (n, t, i, r) {
            var u = this.getRate(n, t), f = this.getProduct(n, t);
            if (!f.rateTiers) return {rate: u, origRate: u};
            for (var s = this.getRateTierGroup(f.rateTiers), h = -1, e = u; ;) {
                var c = i || this.convert(n, t, this.config.partnerInfo.currencyCode, r, f.rateDenomination, e), l = r || this.convert(n, this.config.partnerInfo.currencyCode, t, i, f.rateDenomination, e), o = this.getRateTier(s, c, l),
                    a = this.getRateForTier(s, o, u);
                if (o <= h) return {
                    rate: e, origRate: this.getRateForTier(s, o - 1, u)
                };
                h = o;
                e = a
            }
        }, n.prototype.getRateTier = function (n, t, i) {
            for (var f = 0, e = -1, r, u = 0; u < n.length; u++) r = n[u], (r.domesticOrForeign == 0 && (!r.min || t >= r.min) && (!r.max || t < r.max) || r.domesticOrForeign == 1 && (!r.min || i >= r.min) && (!r.max || i < r.max)) && r.percentage > f && (f = r.percentage, e = u);
            return e
        }, n.prototype.getRateForTier = function (n, t, i) {
            return t < 0 ? i : +(i * (1 + n[t].percentage / 100)).toFixed(4)
        }, n
    }();
    $.widget("travelex.widgetListItemSelector", $.ui.autocomplete, {
        _renderItem: function (n, t) {
            var i, r, u;
            return t.countryCode === "NOT_FOUND" ?
                i = format("<span class='no-matches-found'>{0}<\/span>", t.label)
                :
                (r = new RegExp("(" + $.ui.autocomplete.escapeRegex(this.term) + ")", "gi"), u = t.label.replace(r, "<span class='auto-highlight'>$1<\/span>"), i = format("<a>{0}<\/a>", u)), $("<li>").append(i).appendTo(n)
        }
    });
    var CurrencyLookupWidget = function () {
        function n(n, t) {
            var i = this, r;
            this.onSelectItemEvent = new EventDispatcher("WidgetCurrencySelected");
            this.input = n;
            this.search = t;
            r = {
                minLength: 0, delay: 0, source: function (n, t) {
                    return t(i.search(n.term))
                }, select: function (n, t) {
                    return i.onSelectorSelect(n, t.item)
                }, change: function (n, t) {
                    return i.onSelectorChange(n, t.item)
                }
            };
            this.selector = this.input.widgetListItemSelector(r);

            this.selector.focus(function (n) {
                return i.onSelectorFocus(n)
            });
            this.selector.blur(function (n) {
                return i.onSelectorBlur(n)
            });
            selectOnFocus(this.input);
            charactersOnly(this.input)
        }

        return n.prototype.onSelectorFocus = function () {
            this.lastValue = this.input.val();
            this.selector.widgetListItemSelector("search", "")
        }, n.prototype.onSelectorBlur = function () {
        }, n.prototype.onSelectorSelect = function (n, t) {
            this.onSelectItem(t);
            this.input.blur()
        }, n.prototype.onSelectorChange = function (n, t) {
            if (t == null) this.input.val(this.lastValue); else this.onSelectItem(t)
        }, n.prototype.setText = function (n) {
            this.input.val(n);
            this.lastValue = n
        }, n.prototype.onSelectItem = function (n) {
            this.selectedItem = n;
            this.onSelectItemEvent.dispatchEvent(n)
        }, n.getSubstituteProduct = function (n, t) {
            var i;
            return n.substituteProducts && (i = n.substituteProducts.single(function (n) {
                return n.productType == t
            })) ? i : null
        }, n.DefaultSearch = function (t, i, r) {
            var u = t.widget.items.filter(function (r) {
                var u = !0, f;
                return u = u && r.productTypes.contains(i) && t.rates.rates[r.currencyCode] > 0, f = n.getSubstituteProduct(r, i), f !== null && (u = u && t.rates.rates[f.productCode] > 0), u
            }), e, f;
            return r && (u = u.filter(function (n) {
                return typeof n.displayOrder === "undefined" || n.displayOrder == null
            })), r !== null && (e = new RegExp($.ui.autocomplete.escapeRegex(r), "i"), u = $.grep(u, function (n) {
                return e.test(n.label)
            })), u.length == 0 && (f = t.widget.items.single(function (n) {
                return n.productTypes.contains(i)
            }), f = JSON.parse(JSON.stringify(f)), f.countryCode = "NOT_FOUND", f.label = m("UI3_Currency_Widget:DropdownNoMatchesFound"), u.push(f)), u
        }, n
    }(), Converter = function () {
        function n(n, t, i, r, u, f, e) {
            var o = this;
            this.setConversionEvent = new EventDispatcher("ConversionEvent");
            this.context = n;
            this.productType = t;
            this.fromCurrencyCode = i;
            this.toCurrencyCode = r;
            this.fromAmount = u.find(f);
            this.toAmount = u.find(e);
            this.fromAmount.on('keyup', function () {
                return o.onKeyUpAmount(o.fromAmount, o.toAmount, o.fromCurrencyCode, o.toCurrencyCode)
            });
            this.toAmount.on('keyup', function () {
                return o.onKeyUpAmount(o.toAmount, o.fromAmount, o.toCurrencyCode, o.fromCurrencyCode)
            });
            this.fromAmount.on('blur', function (n) {
                return o.onBlurAmount(n, o.fromAmount, o.fromCurrencyCode)
            });
            this.toAmount.on('blur', function (n) {
                return o.onBlurAmount(n, o.toAmount, o.toCurrencyCode)
            });
            this.$toRate = u.find(".js-to-rate");
            this.$fromRate = u.find(".js-from-rate");
            this.$toCurrency = u.find(".js-to-currency");
            this.$fromCurrency = u.find(".js-from-currency");
            this.$origRate = u.find(".js-original-rate");
            this.$origRate.hide();
            numericOnly(this.fromAmount);
            numericOnly(this.toAmount);
            MobileDetector.isMobile() && (selectOnFocus(this.fromAmount), selectOnFocus(this.toAmount))
        }

        return n.prototype.onKeyUpAmount = function (n, t, i, r) {
            this.updateAmount(n, t, i, r)
        }, n.prototype.onBlurAmount = function (n, t, i) {
            this.formatInput(t, i)
        }, n.prototype.formatInput = function (n, t) {
            var i = this.getValueAsNumber(n);
            $(n).val(i18n.formatNumber(t, i))
        }, n.prototype.setConversion = function (n, t, i) {
            this.productType = n;
            this.fromCurrencyCode = t;
            this.toCurrencyCode = i;
            this.formatInput(this.fromAmount, this.fromCurrencyCode);
            this.updateAmount(this.fromAmount, this.toAmount, this.fromCurrencyCode, this.toCurrencyCode);
            this.dispatchSetConversionEvent()
        }, n.prototype.dispatchSetConversionEvent = function () {
            this.setConversionEvent.dispatchEvent({
                productType: this.productType,
                fromCurrencyCode: this.fromCurrencyCode,
                toCurrencyCode: this.toCurrencyCode
            })
        }, n.prototype.setFromAmount = function (n) {
            $(this.fromAmount).val(i18n.formatNumber(this.fromCurrencyCode, n));
            this.updateAmount(this.fromAmount, this.toAmount, this.fromCurrencyCode, this.toCurrencyCode)
        }, n.prototype.setToAmount = function (n) {
            $(this.toAmount).val(i18n.formatNumber(this.toCurrencyCode, n));
            this.updateAmount(this.toAmount, this.fromAmount, this.toCurrencyCode, this.fromCurrencyCode)
        }, n.prototype.setAmount = function (n, t) {
            $(this.fromAmount).val(i18n.formatNumber(this.fromCurrencyCode, n));
            $(this.toAmount).val(i18n.formatNumber(this.toCurrencyCode, t));
            this.setExchangeRateText();
            this.onUpdateAmount()
        }, n.prototype.updateAmount = function (n, t, i, r) {
            for (var u = this.getValueAsNumber(n), f = !1, e = this.context.getProduct(this.productType, i), o; this.isEffectiveRateThreshold(this.productType, i, r, u);) e !== null && (u -= e.rateDenomination), f = !0;
            f && ($(this.toAmount).val(i18n.formatNumber(this.fromCurrencyCode, u)), f = !1);
            o = this.convert(this.productType, i, r, u);
            $(t).val(i18n.formatNumber(r, o));
            this.setExchangeRateText();
            this.onUpdateAmount()
        }, n.prototype.setExchangeRateText = function () {
            for (var n = this.getExchangeRate(), i = 1, t = 0; t < this.context.config.products.products.length; t++) if (this.context.config.products.products[t].currencyCode == this.toCurrencyCode) {
                i = this.context.config.products.products[t].rateDenomination;
                break
            }
            this.$fromCurrency.text(this.fromCurrencyCode);
            this.$toCurrency.text(this.toCurrencyCode);
            this.$fromRate.text(this.context.getDomesticAmountForRateFmt(n.rate, this.productType, this.toCurrencyCode, this.context.config.widget.defaultAmount, i));
            this.$toRate.text(this.context.getForeignAmountForRateFmt(n.rate, this.productType, this.toCurrencyCode, this.getValueAsNumber(this.toAmount), i));
            this.$origRate.length > 0 && n.rate !== n.origRate ? (this.$origRate.text(i18n.formatRate(n.origRate)), this.$origRate.fadeIn("fast")) : this.$origRate.fadeOut("fast")
        }, n.prototype.onUpdateAmount = function () {
        }, n.prototype.getFromAmount = function () {
            return this.getValueAsNumber(this.fromAmount)
        }, n.prototype.getToAmount = function () {
            return this.getValueAsNumber(this.toAmount)
        }, n.prototype.getExchangeRate = function () {
            var n = this.context.getEffectiveRate(this.productType, this.toCurrencyCode, null, this.getToAmount());
            return this.promoRate && this.promoRate > n.rate ? {
                rate: this.promoRate,
                origRate: this.context.getRate(this.productType, this.toCurrencyCode)
            } : n
        }, n.prototype.convert = function (n, t, i, r) {
            for (var f = 1, u = 0; u < this.context.config.products.products.length; u++) if (this.context.config.products.products[u].currencyCode == this.toCurrencyCode) {
                f = this.context.config.products.products[u].rateDenomination;
                break
            }
            return this.promoRate ? this.context.convert(this.productType, t, i, r, f, this.promoRate) : this.context.convert(this.productType, t, i, r, f)
        }, n.prototype.isEffectiveRateThreshold = function (n, t, i, r) {
            return this.context.isEffectiveRateThreshold(this.productType, t, i, r)
        }, n.prototype.setPromoRate = function (n) {
            this.promoRate = n
        }, n.prototype.getValueAsNumber = function (n) {
            var t = $(n).val() !== undefined ? this.normalizeFloat($(n).val(), [",", "."]) : 0;
            return isNaN(t) && (t = 0), t
        }, n.prototype.normalizeFloat = function (n, t) {
            for (var r = -1, e, u, f, i = 0; i < t.length; i++) formatNumber.length > 0 && (e = n.lastIndexOf(t[i])), e > r && (r = e);
            for (r == -1 && (r = n.length), u = n.substring(0, r), f = n.substring(r), i = 0; i < t.length; i++) u = u.replace(t[i], ""), f = f.replace(t[i], ".");
            return n = u + f, parseFloat(n)
        }, n
    }(), __extends = this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }

        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        r.prototype = t.prototype;
        n.prototype = new r
    }, Widget = function (n) {
        function t(t, i, r, u, f, e, o, s, h, c, l, a, v) {
            var y = this;
            n.call(this, t, r, t.config.partnerInfo.currencyCode, u, f, e, o);
            this.root = f;
            this.toCurrency = f.find(h);
            this.addButton = f.find(l);
            this.addButton.click(function (n) {
                return y.onClickAddButton(n)
            });
            this.$substituteProductMessage = this.root.find(".not-available-currency-tooltip");
            this.lookup = new CurrencyLookupWidget(this.root.find(s), function (n) {
                return y.getWidgetListItems(n, !0)
            });
            this.lookup.onSelectItemEvent.addEventListener(function (n) {
                y.selectItem(n);
                y.fromAmount.focus()
            });
            this.fromAmount.on('keydown', function (n) {
                return y.onKeyDown(n)
            });
            this.toAmount.on('keydown', function (n) {
                return y.onKeyDown(n)
            });
            this.fromAmount.on('keydown', function () {
                return y.hideSubstituteProductMessage()
            });
            this.toAmount.on('keydown', function () {
                return y.hideSubstituteProductMessage()
            });
            $(document).on('mousedown', function () {
                return y.hideSubstituteProductMessage()
            });
            this.onSelectItemEvent = new EventDispatcher("WidgetItemSelected");
            this.onClickAddEvent = new EventDispatcher("WidgetItemAdd");
            this.resetFor(i, r, a, v, u)
        }

        return __extends(t, n), t.prototype.resetFor = function (n, t, i, r, u) {
            this.prePaidCardId = n;
            this.productType = t;
            this.excludeBasketItemProducts = i;
            this.productTypes = r;
            this.setDefaultItem(u);
            this.setFromAmount(this.context.config.widget.defaultAmount)
        }, t.prototype.initSelection = function () {
            this.setDefaultItem(this.toCurrencyCode)
        }, t.prototype.setDefaultItem = function (n) {
            this.currentItem = this.selectInitialItem(n);
            this.selectItem(this.currentItem)
        }, t.prototype.reset = function () {
            this.setDefaultItem(null);
            this.setFromAmount(this.context.config.widget.defaultAmount)
        }, t.prototype.selectInitialItem = function (n) {
            var i = this.getWidgetListItems(null, !0), t;
            if (i.length == 0) throw new Error("No widget list items defined for productType: " + this.productType);
            return t = null, n !== null && (t = this.selectItemForCurrency(i, n)), t == null && (t = this.selectDefaultItem(i)), t == null && (t = i.first()), t !== null && (t.productTypes.contains(this.productType) || (this.productType = t.productTypes[0])), t
        }, t.prototype.selectItemForCurrency = function (n, t) {
            for (var i = 0; i < n.length; i++) if (n[i].currencyCode === t) return n[i];
            return null
        }, t.prototype.selectDefaultItem = function (n) {
            for (var t = 0; t < n.length; t++) if (n[t].isDefault) return n[t];
            return null
        }, t.prototype.getSubstituteProduct = function (n) {
            var i = this, t;
            return n.substituteProducts && (t = n.substituteProducts.single(function (n) {
                return n.productType === i.productType
            })) ? t : null
        }, t.prototype.getWidgetListItems = function (n, t) {
            var r = this, i = this.context.config.widget.items.filter(function (n) {
                var i = !0, u = !0, f = n.productTypes.containsAny(r.productTypes), t;
                return f ? (t = r.context.config.products.products.single(function (t) {
                    return t.currencyCode === n.currencyCode
                }), i = t !== null && r.context.config.rates.rates[t.productCode] > 0, u = n.substituteProducts !== null, i || u) : f
            }), f, u;
            return n && (i = i.filter(function (n) {
                return typeof n.displayOrder === "undefined" || n.displayOrder == null
            })), this.prePaidCardId !== null && (i = i.filter(function (n) {
                return r.context.config.products.products.any(function (t) {
                    return t.productType === r.productType && t.prePaidCardId === r.prePaidCardId && t.currencyCode === n.currencyCode
                })
            })), this.excludeBasketItemProducts && typeof __Order !== "undefined" && (i = i.filter(function (n) {
                return !__Order.basketItems.any(function (t) {
                    return t.productType === r.productType && t.currencyCode === n.currencyCode
                })
            })), n !== null && (f = new RegExp($.ui.autocomplete.escapeRegex(n), "i"), i = $.grep(i, function (n) {
                return f.test(n.label)
            })), i.length == 0 && t && (u = this.context.config.widget.items.single(function (n) {
                return n.productTypes.containsAny(r.productTypes)
            }), u = JSON.parse(JSON.stringify(u)), u.countryCode = "NOT_FOUND", u.label = m("UI3_Currency_Widget:DropdownNoMatchesFound"), i.push(u)), i
        }, t.prototype.selectItem = function (n) {
            var r = this, t, i;
            this.currentItem !== null && (this.currentItem = n, this.lookup.setText(n.label), n.substituteProducts && (t = n.substituteProducts.single(function (n) {
                return n.productType == r.productType
            })) ? (i = this.context.getProductByCode(t.productCode), this.setConversion(i.productType, this.fromCurrencyCode, i.currencyCode), this.substituteProduct = t, this.setSubstituteProductMessage(t)) : (this.setConversion(this.productType, this.fromCurrencyCode, this.currentItem.currencyCode), this.substituteProduct = null, this.hideSubstituteProductMessage()), this.updateLabels(), this.onSelectItemEvent.dispatchEvent(this.currentItem))
        }, t.prototype.updateLabels = function () {
            this.toCurrency.text(this.toCurrencyCode)
        }, t.prototype.onKeyDown = function (n) {
            if (n.keyCode == 13) return n.preventDefault(), this.addBasketItem(), !1
        }, t.prototype.onClickAddButton = function (n) {
            return n.preventDefault(), this.addBasketItem(), !1
        }, t.prototype.addBasketItem = function () {
            var n, t;
            n = this.prePaidCardId !== null ? this.getPrepaidProduct() : this.getProduct();
            t = {
                source: this,
                basketItem: {
                    basketItemId: generateUUID(),
                    productType: n.productType,
                    productCode: n.productCode,
                    currencyCode: n.currencyCode,
                    prePaidCardId: n.prePaidCardId,
                    exchangeRate: this.getExchangeRate().rate,
                    originalExchangeRate: this.context.getRateForProductCode(n.productCode),
                    domesticAmount: this.getFromAmount(),
                    foreignAmount: this.getToAmount(),
                    prepaidCardToken: "",
                    anyStorePickup: n.anyStorePickup
                },
                reloadPAN: this.getFullPAN(),
                reloadToken: this.getToken()
            };
            this.onClickAddEvent.dispatchEvent(t);
            typeof __Order !== "undefined" && OrderStatic.addBasketItem(t.basketItem, this.getPan())
        }, t.prototype.getPan = function () {
            return null
        }, t.prototype.getFullPAN = function () {
            return null
        }, t.prototype.getToken = function () {
            return null
        }, t.prototype.getProduct = function () {
            return this.context.getProduct(this.productType, this.toCurrencyCode)
        }, t.prototype.setSubstituteProductMessage = function (n) {
            var cleanedSubstituteProductMessages = (this.context.config.widget.substituteProductMessages[n.message]).replace(/[<>]/g, '');
            this.$substituteProductMessage.text(cleanedSubstituteProductMessages);
            this.showSubstituteProductMessage()
        }, t.prototype.showSubstituteProductMessage = function () {
            this.$substituteProductMessage.fadeIn("fast")
        }, t.prototype.hideSubstituteProductMessage = function () {
            this.$substituteProductMessage.fadeOut("fast")
        }, t.prototype.getPrepaidProduct = function () {
            return this.context.getPrepaidProduct(this.productType, this.toCurrencyCode, this.prePaidCardId)
        }, t
    }(Converter), __extends = this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }

        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        r.prototype = t.prototype;
        n.prototype = new r
    }, CashWidget = function (n) {
        function t(t, i, r) {
            var u = this;
            this.productTypeRadioGroup = i.find("input[name='productType']");
            this.productTypeRadioGroup.change(function (n) {
                return u.onChangeProductType(n)
            });
            n.call(this, t, null, ProductTypes.Cash, r, i, ".buy-amount,.currency-buy-amount", ".cost,.currency-cost", ".autocomplete,.autocomplete-w", ".cost-lbl", ".exchangeRateHolder,.exrate", ".addCash,.buyCurrency", !1, [ProductTypes.Cash, ProductTypes.PrePaidCardSale]);
            this.productTypeSelectedByUser = null
        }

        return __extends(t, n), t.prototype.selectItem = function (t) {
            this.updateProductType(t);
            n.prototype.selectItem.call(this, t);
            this.setButtonText()
        }, t.prototype.updateProductType = function (n) {
            this.setProductTypeEnabled(ProductTypes.Cash, n.productTypes.contains(ProductTypes.Cash));
            this.setProductTypeEnabled(ProductTypes.PrePaidCardSale, n.productTypes.contains(ProductTypes.PrePaidCardSale));
            this.productType = this.productTypeSelectedByUser || ProductTypes.Cash;
            n.productTypes.contains(this.productType) || (this.productType = n.productTypes[0]);
            this.getProductTypeRadio(this.productType).prop("checked", !0)
        }, t.prototype.setProductTypeEnabled = function (n, t) {
            var i = this.getProductTypeRadio(n), u = $("label[for='" + i.attr("id") + "']"), r;
            i.prop("disabled", !t);
            r = !t && this.getProductTypeConfig(n);
            u.toggle(!r)
        }, t.prototype.setButtonText = function () {
            switch (this.productType) {
                case ProductTypes.Cash:
                    this.addButton.find(".btntxt").html(m("UI3_Currency_Widget:BuyButtonCash"));
                    break;
                case ProductTypes.PrePaidCardSale:
                    this.addButton.find(".btntxt").html(m("UI3_Currency_Widget:BuyButtonCashPassport"));
                    break;
                default:
                    throw new Error("Not supported");
            }
        }, t.prototype.onChangeProductType = function () {
            this.productTypeSelectedByUser = this.getSelectedProductType();
            this.selectItem(this.currentItem)
        }, t.prototype.getProductTypeRadio = function (n) {
            return this.root.find(format("input[name='productType'][value='{0}']", n))
        }, t.prototype.getProductTypeConfig = function (n) {
            switch (n) {
                case ProductTypes.Cash:
                    return Config_Order_HideAddCurrencyButton;
                case ProductTypes.PrePaidCardSale:
                    return Config_Order_HidePrePaidCardSaleWhenDisabled;
                default:
                    return !1
            }
        }, t.prototype.getSelectedProductType = function () {
            var n = this.root.find("input[name='productType']:checked");
            return n.val()
        }, t
    }(Widget), __extends = this.__extends || function (n, t) {
        function r() {
            this.constructor = n
        }

        for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
        r.prototype = t.prototype;
        n.prototype = new r
    }, ReloadWidget = function (n) {
        function t(t, i, r) {
            var u = this;
            n.call(this, t, null, ProductTypes.PrePaidCardReload, r, i, ".buy-amount,.currency-buy-amount", ".cost,.currency-cost", ".autocomplete,.autocomplete-w", ".cost-lbl", ".exchangeRateHolder,.exrate", ".addCash,.buyCurrency,.add-rcp", !1, [ProductTypes.PrePaidCardReload]);
            this.$cardNumber = this.root.find(".rcp-validate");
            this.$error = this.root.find(".rcp-error");
            this.$checkCard = this.root.find(".check-card");
            this.$cardValidated = this.root.find(".card-validated");
            this.$form = this.root.find(".form");
            this.root.find(".check-card").click(function (n) {
                return u.onCheckCard(n)
            });
            this.root.find(".rcp-validate").keypress(function (n) {
                return u.IsEnterPressed(n)
            });
            this.setActive(!1);
            this.onShow()
        }

        return __extends(t, n), t.prototype.onShow = function () {
            this.$cardNumber.focus()
        }, t.prototype.reset = function () {
            n.prototype.reset.call(this);
            this.setActive(!1);
            this.showError(!1);
            this.showCardValidated(!1);
            this.$cardNumber.val("");
            this.$cardNumber.prop("disabled", !1);
            this.pan = this.fullPan = null;
            this.token = null
        }, t.prototype.IsEnterPressed = function (n) {
            var t = n.which || n.keyCode;
            if (t == 13) this.onCheckCard(n)
        }, t.prototype.onCheckCard = function (n) {
            if (n.preventDefault(), this.pan = this.fullPan = this.$cardNumber.val(), this.pan.length !== 16 || !luhnCheck(this.pan)) return this.showError(!0), !1;
            var t = this.context.getPrePaidCardFromPAN(this.pan);
            return t == null ? (this.showError(!0), !1) : GetCardToken(Config_Token_CpsUrlPrepaid, this.CpsCard(), this.context.config, "reload", -1, null, t, this)
        }, t.prototype.afterCardTokenExecution = function (n, t) {
            return t.prePaidCardId = n.prePaidCardId, t.setDefaultItem(null), t.setActive(!0), t.showError(!1), t.showCardValidated(!0), !1
        }, t.prototype.CpsCard = function () {
            return {card: {accountNumber: this.$cardNumber.val()}}
        }, t.prototype.showError = function (n) {
            this.$error.toggle(n)
        }, t.prototype.showCardValidated = function (n) {
            this.$checkCard.toggle(!n);
            this.$cardValidated.css("display", n ? "inline-block" : "none")
        }, t.prototype.setActive = function (n) {
            this.$cardNumber.prop("disabled", n);
            this.$form.animate({opacity: n ? 1 : .5}, 500);
            this.$form.find("input, select, button").prop("disabled", !n);
            this.$form.find("button").css("pointer-events", "visible")
        }, t.prototype.onError = function (n, t, i) {
            alert("Error: " + i)
        }, t.prototype.getPan = function () {
            return this.pan
        }, t.prototype.getFullPAN = function () {
            return this.context.config.partnerInfo.isPciEnabled && this.getToken() ? maskPAN2(this.fullPan) : this.fullPan
        }, t.prototype.getToken = function () {
            return this.token
        }, t
    }(Widget);
    var CurrencyWidget = function () {
        function n(t, i) {
            var o = this, f;
            this.context = t;
            this.root = i;
            this.$cashTab = i.find("." + n.CashName);
            this.$reloadTab = i.find("." + n.ReloadName);
            var e = getUrlParam("currencyCode"), r = t.config.products.products.any(function (n) {
                return n.productType == ProductTypes.Cash || n.productType == ProductTypes.PrePaidCardSale
            }), u = t.config.products.products.any(function (n) {
                return n.productType == ProductTypes.PrePaidCardReload
            });
            r && this.$cashTab.length > 0 && (this.cashWidget = new CashWidget(t, this.$cashTab, e));
            u && this.$reloadTab.length > 0 && (this.reloadWidget = new ReloadWidget(t, this.$reloadTab, e));
            this.$tabNav = i.find(".tabnav > a");
            this.$tabs = i.find(".tabs");
            f = r + u;
            this.showTabNav(n.CashName, r, f);
            this.showTabNav(n.ReloadName, u, f);
            this.$tabNav.click(function (n) {
                return o.onClickTabNav(n)
            });
            this.root.show()
        }

        return n.prototype.initSelection = function (t) {
            this.cashWidget && this.cashWidget.initSelection();
            this.reloadWidget && this.reloadWidget.initSelection();
            t && (this.showTab(n.CashName), this.getWidget(n.CashName).dispatchSetConversionEvent())
        }, n.prototype.onClickTabNav = function (n) {
            n.preventDefault();
            var t = $(n.currentTarget);
            return this.showTab(t.attr("href").substr(1)), !1
        }, n.prototype.getTabNav = function (n) {
            return this.root.find(format("a[href='#{0}']", n))
        }, n.prototype.showTabNav = function (n, t, i) {
            var r = this.getTabNav(n);
            r.toggle(t);
            r.addClass("tabnav-" + i)
        }, n.prototype.selectTab = function (n) {
            this.$tabNav && (this.$tabNav.removeClass("active"), this.getTabNav(n).addClass("active"))
        }, n.prototype.showTab = function (t) {
            this.selectTab(t);
            this.$tabs.show();
            this.$tabs.children().hide();
            this.root.find("." + t).show();
            t == n.ReloadName && this.reloadWidget && this.reloadWidget.onShow();
            this.root.find(".other").show()
        }, n.prototype.getWidget = function (t) {
            switch (t) {
                case n.CashName:
                    return this.cashWidget;
                case n.ReloadName:
                    return this.reloadWidget;
                default:
                    return null
            }
        }, n.prototype.uiHideTabs = function () {
            this.$tabs.hide()
        }, n.CashName = "buycurrency", n.ReloadName = "cashpassport", n
    }(), CompetitorRatesWidget = function () {
        function n(n, t, i) {
            this.context = n;
            this.includePartnerRow = t;
            this.root = i;
            this.tabsContainer = i.find(".hwc-tabnav");
            this.ratesSection = i.find(".ratesSection");
            this.ratesContainer = i.find(".ratesContainer");
            this.noRates = i.find(".noRates");
            this.partnerTextContainer = i.find(".partnerTextContainer");
            this.rateRowText = this.ratesContainer.html();
            this.partnerText = this.partnerTextContainer.html();
            var r = i.find(".buysAmountLabel").html();
            r = templateReplace(r, {BuysYouAmount: i18n.formatDomesticAmount(n.config.competitorRates.comparisonAmount)});
            i.find(".buysAmountLabel").html(r);
            this.tabsContainer.length > 0 && this.initTabs()
        }

        return n.prototype.initTabs = function () {
            var r = this, u = this.tabsContainer.html(), n, i, t;
            for (this.tabsContainer.children().remove(), n = 0; n < this.context.config.competitorRates.currencyCodes.length; n++) i = this.context.config.competitorRates.currencyCodes[n], t = $(templateReplace(u, {currencyCode: i})), this.tabsContainer.append(t), t.click(function (n) {
                return r.selectCurrency(trimStart("#", $(n.currentTarget).attr("href"))), n.preventDefault(), !1
            })
        }, n.prototype.attach = function (n) {
            var t = this;
            n && n.setConversionEvent.addEventListener(function (n) {
                t.selectCurrency(n.toCurrencyCode)
            })
        }, n.prototype.selectDefaultCurrency = function () {
            this.selectCurrency(this.context.config.competitorRates.currencyCodes[0])
        }, n.prototype.selectCurrency = function (n) {
            var r, u, e, f, t, o, i;
            if (this.ratesContainer.children().remove(), r = this.context.config.competitorRates.currencyCodes.indexOf(n), r == -1) this.showRates(!1); else {
                for (this.showRates(!0), u = this.createRateRows(this.includePartnerRow, n, r), t = 0; t < u.length; t++) i = templateReplace(this.rateRowText, u[t]), this.ratesContainer.append($(i));
                if (this.partnerTextContainer.length > 0) {
                    for (this.partnerTextContainer.children().remove(), e = this.context.config.competitorRates.comparisonAmount, f = 1, t = 0; t < this.context.config.products.products.length; t++) this.context.config.products.products[t].currencyCode == n && (f = this.context.config.products.products[t].rateDenomination);
                    o = i18n.formatAmount(n, this.context.convert(ProductTypes.Cash, this.context.config.partnerInfo.currencyCode, n, e, f), !1, !1);
                    i = templateReplace(this.partnerText, {
                        partnerName: m("UI3_Currency_Widget:CompetitorsRatesPartnerName"),
                        amount: o
                    });
                    this.partnerTextContainer.html(i)
                }
                this.tabsContainer.find(".active").removeClass("active");
                this.tabsContainer.find(format("[href=#{0}]", n)).addClass("active")
            }
        }, n.prototype.createRateRows = function (n, t, i) {
            for (var u = [], e = this.context.config.competitorRates.comparisonAmount, o, f, r = 0; r < this.context.config.competitorRates.competitorNames.length; r++) this.context.config.competitorRates.rates[i][r] !== null && this.context.config.competitorRates.rates[i][r] !== 0 && (o = this.context.config.competitorRates.rates[i][r], u.push({
                css: "",
                name: this.context.config.competitorRates.competitorNames[r],
                amount: i18n.formatAmount(t, e * o, !1, !1)
            }));
            if (n) {
                for (f = 1, r = 0;
                     r < this.context.config.products.products.length; r++) this.context.config.products.products[r].currencyCode == t && (f = this.context.config.products.products[r].rateDenomination);
                u.splice(0, 0, {
                    css: " active",
                    name: m("UI3_Currency_Widget:CompetitorsRatesPartnerName"),
                    amount: i18n.formatAmount(t, this.context.convert(ProductTypes.Cash, this.context.config.partnerInfo.currencyCode, t, e, f), !1, !1)
                })
            }
            return u
        }, n.prototype.showRates = function (n) {
            this.ratesSection.toggle(n);
            this.partnerTextContainer.toggle(n);
            this.noRates.toggle(!n)
        }, n
    }(), TopRatesWidget = function () {
        function n(n, t) {
            var u, f, e, i, r, o;
            for (this.context = n, this.root = t, u = [], i = 0; i < n.config.topRates.length; i++) f = n.getRateForProductCode(n.config.topRates[i]), f && u.push({
                name: n.config.topRates[i],
                value: i18n.formatRate(f)
            });
            for (this.container = t.find(".topRateContainer"), e = this.container.html(), this.container.children().remove(), i = 0; i < u.length; i++) r = {}, r.leftCurrencyCode = n.config.topRates[i], r.leftRate = i18n.formatRate(n.getRateForProductCode(n.config.topRates[i])), i++, i < u.length ? (r.rightCurrencyCode = n.config.topRates[i], r.rightRate = i18n.formatRate(n.getRateForProductCode(n.config.topRates[i]))) : (r.rightCurrencyCode = "&nbsp;", r.rightRate = ""), o = templateReplace(e, r), this.container.append($(o))
        }

        return n.prototype.attach = function (n) {
            var t = this;
            n && n.setConversionEvent.addEventListener(function (n) {
                t.selectCurrency(n.toCurrencyCode)
            })
        }, n.prototype.selectCurrency = function (n) {
            this.container.find(".active").removeClass("active");
            this.container.find("._" + n).addClass("active")
        }, n
    }();
    B64_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    var ExchangeRates = function () {
        function n(t) {
            var i = this, e, s, r, h, u, f, o, c;
            for (this.activeRow = null, e = $("#rows"), s = $(".rowTemplate").html(), $(".rowTemplate").remove(), r = 0, this.promo = new LoyaltySchemePromo(t), this.promo.loyaltySchemePromos = Config_ExchangeRate_Show_LoyaltySchemePromo || Config_ExchangeRate_ConvertCurrencybasedonLoyaltyScheme ? this.promo.getLoyaltySchemePromo(t) : null, h = this.getPredefinedBaseRates(), u = 0;
                 u < t.config.widget.items.length; u++) f = t.config.widget.items[u], f.productTypes.contains("cash") && (o = t.getProduct("cash", f.currencyCode), o && (c = new ExchangeRateRow(t, f, o, this, e, s, this.promo, h), r++, $(".currency-holder").show()));
            $("input.quicksearch").quicksearch("#rows > .currency-holder .row", {
                onBefore: function () {
                    i.showAll();
                    i.activeRow && i.activeRow.showRow(!1)
                }
            });
            this.loadAll = $("#loadAll");
            this.loadAll.toggle(r > n.InitialShownCount);
            this.loadAll.html(this.loadAll.html() + format(" ({0})", r));
            this.loadAll.click(function (n) {
                return i.onClickLoadAll(n)
            });
            e.find(format("> :gt({0})", n.InitialShownCount - 1)).hide();
            charactersOnly($("input.quicksearch"));
            MobileDetector.isMobile() && selectOnFocus($("input.quicksearch"))
        }

        return n.prototype.setActive = function (n) {
            this.activeRow && this.activeRow.showRow(!1);
            this.activeRow = n
        }, n.prototype.onClickLoadAll = function (n) {
            return n.preventDefault(), this.showAll(), !1
        }, n.prototype.showAll = function () {
            this.allVisible || ($("#rows").children().show(), this.loadAll.hide());
            this.allVisible = !0
        }, n.prototype.getPredefinedBaseRates = function () {
            var i = [500, 1e3, 1500], t, n;
            if (Config_ExchangeRate_MoreInfo_BaseCurrencyAmounts !== undefined && Config_ExchangeRate_MoreInfo_BaseCurrencyAmounts.trim().length > 0) for (t = Config_ExchangeRate_MoreInfo_BaseCurrencyAmounts.split(","), n = 0; n < t.length; n++) i[n] = parseInt(t[n]);
            return i
        }, n.InitialShownCount = 10, n
    }(), ExchangeRateRow = function () {
        function n(n, t, i, r, u, f, e, o) {
            var g = this, b = n.getEffectiveRate(i.productType, i.currencyCode, i.minSaleAmount, 1).rate, v = e.loyaltySchemePromos !== null ? e.applyPromoRate(e.loyaltySchemePromos, i.productType, t.currencyCode, b) : b, s = {
                domesticCurrencyCode: n.config.partnerInfo.currencyCode,
                countryCode: t.countryCode,
                countryName: t.countryCode === "EU" ? "European Union" : t.countryName,
                currencyCode: t.currencyCode,
                currencyName: t.currencyName,
                label: t.label,
                rate: i18n.formatRate(b),
                loyaltySchemeRate: i18n.formatRate(v),
                tiers: "notvisible",
                tier1: "notvisible",
                tier2: "notvisible",
                tier3: "notvisible",
                notiers: "visible",
                purchaseUrl: "",
                per: i.rateDenomination
            }, c, d, p, w;
            for (s.tiers = "visible", s.notiers = "notvisible", c = 0; c < o.length; c++) {
                var h = c + 1, l = o[c], a = t.currencyCode, k = n.config.partnerInfo.currencyCode, y = this.getforeignAmount(n, i, k, a, l, e, v);
                s["tier" + h] = "visible";
                s["domesticAmount" + h] = i18n.formatDomesticAmount(l, !1, !1);
                s["domesticAmountValue" + h] = this.formatAmountValue(k, l);
                s["foreignAmount" + h] = i18n.formatAmount(a, y, !1, !1);
                s["foreignAmountValue" + h] = this.formatAmountValue(a, y);
                s["domesticExchangeAmount" + h] = this.getDomesticExchangeAmount(n, i, a, y, l, e, v);
                s["foreignExchangeAmount" + h] = this.getForeignExchangeAmount(n, i, a, y, l, e, v)
            }
            d = templateReplace(f, s);
            this.context = n;
            this.item = t;
            this.parent = r;
            this.root = $(d);
            u.append(this.root);
            this.chart = this.root.find(".rate-chart");
            Config_ExchangeRate_Show_MoreInfo && this.root.find(".row").click(function (n) {
                return g.onClick(n)
            });
            p = this.root.find(".findOutMore");
            p.length && p.attr("href", format(p.attr("href"), t.currencyCode));
            w = this.root.find(".buyNow");
            w.attr("href", addUrlParams(w.attr("href"), "currencyCode", t.currencyCode));
            w.click(function (n) {
                return n.stopImmediatePropagation(), !0
            })
        }

        return n.prototype.getRateTierGroupForProduct = function () {
            return null
        }, n.prototype.formatAmountValue = function (n, t) {
            var i = i18n.getAmountDps(n);
            return formatNumber(t, i, 3, i18n.config.groupSeparator, i18n.config.decimalSeparator)
        }, n.prototype.getforeignAmount = function (n, t, i, r, u, f, e) {
            return f.convertCurrencybasedonPromo(t, r, u, f) ? n.convert(t.productType, i, r, u, t.rateDenomination, e) : n.convert(t.productType, i, r, u, t.rateDenomination)
        }, n.prototype.getDomesticExchangeAmount = function (n, t, i, r, u, f, e) {
            return f.convertCurrencybasedonPromo(t, i, u, f) ? n.getDomesticAmountForRateFmt(e, t.productType, i, r, t.rateDenomination) : n.getDomesticAmountForRateFmt(null, t.productType, i, r, t.rateDenomination)
        }, n.prototype.getForeignExchangeAmount = function (n, t, i, r, u, f, e) {
            return f.convertCurrencybasedonPromo(t, i, u, f) ? n.getForeignAmountForRateFmt(e, t.productType, i, r, t.rateDenomination) : n.getForeignAmountForRateFmt(null, t.productType, i, r, t.rateDenomination)
        }, n.prototype.onClick = function (n) {
            return n.preventDefault(), this.isActive() ? (this.showRow(!1), this.parent.setActive(null)) : (this.showRow(!0), this.parent.setActive(this)), !1
        }, n.prototype.isActive = function () {
            return this.root.find(".more-info").is(":visible");
        }, n.prototype.showRow = function (n) {
            var t = this.root.find(".row"), i = this.root.find(".more-info");
            n ? (i.slideDown(), t.addClass("active"), t.find("span.diagram-link").attr("data-icon", "x"), this.data || this.loadData()) : (i.slideUp(), t.removeClass("active"), t.find("span.diagram-link").attr("data-icon", "z"))
        }, n.prototype.loadData = function () {
            var r = this, n = new Date, t, i;
            n.setMonth(n.getMonth() - 3);
            t = new Date;
            i = {
                url: __ApiKeyConfig.url + "/rates/historical",
                data: {
                    key: __ApiKeyConfig.key,
                    site: __ApiKeyConfig.site,
                    currencyCode: this.item.currencyCode,
                    startDate: n.toISOString(),
                    endDate: t.toISOString()
                },
                async: false,
                dataType: "jsonp",
                success: function (n) {
                    return r.onData(n.rates);
                }
            };
            $.ajax(i)
        }, n.prototype.onData = function (n) {
            this.data = n;
            this.plot();
        }, n.prototype.plot = function () {
            if (this.data) {
                var n = this.data.min(function (n) {
                    return n[1];
                }), t = this.data.max(function (n) {
                    return n[1];
                }), i = n - (t - n) * .1, r = t + (t - n) * .1;

                $.plot(this.chart, [this.data], {
                    series: {
                        lines: {show: !0, fill: !0},
                        points: {
                            show: !0,
                            radius: 0,
                            fill: !0,
                            fillColor: "#004fa3",
                            lineWidth: 3,
                            strokeColor: "#fff"
                        }
                    },
                    colors: ["#004fa3"],
                    grid: {hoverable: !0, borderWidth: 1, borderColor: "#ccc"},
                    xaxis: {
                        mode: "time",
                        minTickSize: [1, "month"],
                        monthNames: i18n.translatedMonthNames,
                        timeformat: "%b",
                        points: {show: !0}
                    },
                    yaxis: {min: i, max: r, minTickSize: .0001}
                })
            }
        }, n
    }(), LoyaltySchemePromo = function () {
        function n(n) {
            this._context = n;
            this.context = n
        }

        return n.prototype.isValidLoyaltyScheme = function () {
            if (Config_ExchangeRate_LoyaltySchemeName === undefined && Config_ExchangeRate_LoyaltySchemeName.trim().length === 0) return !1;
            for (var n = 0; n < this.context.config.loyaltySchemes.length; n++) if (this.context.config.loyaltySchemes[n].name.trim() === Config_ExchangeRate_LoyaltySchemeName.trim()) return !0;
            return !1
        }, n.prototype.getLoyaltySchemePromo = function (n) {
            if (this.isValidLoyaltyScheme()) for (var t = 0; t < n.config.loyaltySchemes.length; t++) if (n.config.loyaltySchemes[t].name.trim() === Config_ExchangeRate_LoyaltySchemeName.trim()) return n.config.loyaltySchemes[t].loyaltySchemePromo;
            return console.log("Promotion setting mismatched..."), null
        }, n.prototype.applyPromoRate = function (n, t, i, r) {
            var u = n.single(function (n) {
                return n.productType === t && n.currencyCode === i && n.type == 0
            });
            return u !== null ? this.round(this.calculatePromoRate(r, u.percentage), 4) : r
        }, n.prototype.calculatePromoRate = function (n, t) {
            var i = n * (1 + t / 100);
            return i > n ? i : n
        }, n.prototype.round = function (n, t) {
            var i = Math.pow(10, t);
            return Math.round(n * i) / i
        }, n.prototype.convertCurrencybasedonPromo = function (n, t, i, r) {
            return this.isValidLoyaltyScheme() && Config_ExchangeRate_ConvertCurrencybasedonLoyaltyScheme && r.isMatchCriteria(r.loyaltySchemePromos, n.productType, t, i)
        }, n.prototype.isMatchCriteria = function (n, t, i, r) {
            var u = n.single(function (n) {
                return n.productType === t && n.currencyCode === i && n.type == 0
            });
            return u !== null ? this.isMatchAmount(u.min, u.max, r) : !1
        }, n.prototype.isMatchProduct = function (n, t, i) {
            return i.productCode == null && i.currencyCode == null || n === i.productCode || t === i.currencyCode
        }, n.prototype.isMatchAmount = function (n, t, i) {
            return (n == null || i >= n) && (t == null || i < t)
        }, n
    }(), RateChart = function () {
        function n(n, t, i) {
            var u = this, r;
            this.root = i;
            this.domesticCurrencyCode = n;
            this.foreignCurrencyCode = null;
            this.chart = i.find("#one-month-graph");
            this.params = [];
            this.params.push(this.createParams(1, [5, "day"], 5, 3));
            this.params.push(this.createParams(3, [7, "day"], 5, 3));
            this.params.push(this.createParams(6, [7, "day"], 4, 2));
            this.params.push(this.createParams(12, [7, "day"], 3, 1));
            i.find("#historyGraph").tabs({
                activate: function () {
                    var n = i.find("#historyGraph").tabs("option", "active");
                    u.setTab(n)
                }
            });
            r = $.debounce(this.onPlotHover, 200, this);
            this.setTab(i.find("#historyGraph").tabs("option", "active"));
            this.chart.bind("plothover", function (n, t, i) {
                return r(n, t, i)
            });
            t && this.setCurrency(t)
        }

        return n.prototype.updateLabel = function (n, t) {
            for (var f = this.root.find(".cc-from, .cc-to"), u, i, e, r = 0; r < f.length; r++) u = $(f.get(r)), i = u.data("TemplateHTML"), (typeof i == undefined || i == null) && (i = u.html(), u.data("TemplateHTML", i)), e = templateReplace(i, {
                FromCurrencyIso: n,
                ToCurrencyIso: t
            }), $(f.get(r)).html(e)
        }, n.prototype.attach = function (n) {
            var t = this;
            n.setConversionEvent.addEventListener(function (n) {
                t.setCurrency(n.toCurrencyCode)
            })
        }, n.prototype.createParams = function (n, t, i, r) {
            var u = new Date;
            return u.setMonth(u.getMonth() - n), {fromDate: u.getTime(), minTickSize: t, radius: i, linewidth: r}
        }, n.prototype.setTab = function (n) {
            this.param = this.params[n];
            this.plot()
        }, n.prototype.setCurrency = function (n) {
            this.foreignCurrencyCode !== n && this.loadData(n)
        }, n.prototype.loadData = function (n) {
            var t = this, i = {
                type: "GET",
                url: __ApiKeyConfig.url + "/rates/historical",
                data: {key: __ApiKeyConfig.key, site: __ApiKeyConfig.site, currencyCode: n},
                dataType: "jsonp",
                async: false,
                success: function (i) {
                    t.onData(n, i.rates)
                }
            };
            $.ajax(i)
        }, n.prototype.onData = function (n, t) {
            this.data = t;
            this.plot();
            this.foreignCurrencyCode = n;
            this.updateLabel(this.domesticCurrencyCode, n)
        }, n.prototype.plot = function () {
            var r = this;
            if (this.root.find("#NoDataMessage").toggle(!this.data || this.data.length === 0), this.data) {
                var i = this.data.filter(function (n) {
                    return n[0] >= r.param.fromDate
                }), n = i.min(function (n) {
                    return n[1]
                }), t = i.max(function (n) {
                    return n[1]
                }), u = n - (t - n) * .1, f = t + (t - n) * .1;
                $.plot(this.chart, [this.data], {
                    series: {
                        lines: {show: !0, fill: !0},
                        points: {
                            show: !0,
                            radius: this.param.radius,
                            fill: !0,
                            fillColor: "#004fa3",
                            lineWidth: this.param.linewidth,
                            strokeColor: "#fff"
                        }
                    },
                    colors: ["#004fa3"],
                    grid: {hoverable: !0, borderWidth: 1, borderColor: "#ccc"},
                    xaxis: {
                        mode: "time",
                        minTickSize: this.param.minTickSize,
                        monthNames: i18n.translatedMonthNames,
                        min: this.param.fromDate,
                        timeformat: "%d %b %y",
                        points: {show: !0}
                    },
                    yaxis: {min: u, max: f, minTickSize: .0001}
                })
            }
        }, n.prototype.onPlotHover = function (n, t, i) {
            if (this.tooltip && (i == null || this.currentDataPoint !== i.datapoint)) {
                var r = this.tooltip;
                this.tooltip.fadeOut(200, function () {
                    return r.remove()
                })
            }
            i && (this.currentDataPoint = i.datapoint, this.tooltip = this.createTooltip(i.pageX, i.pageY, format("{0}/{1} {2}", this.domesticCurrencyCode, this.foreignCurrencyCode, i18n.formatRate(i.datapoint[1]))))
        }, n.prototype.createTooltip = function (n, t, i) {
            return $('<div class="ex-tooltip">' + i + "<\/div>").css({
                position: "absolute",
                display: "none",
                top: t - 21,
                left: n + 12,
                padding: "2px",
                "background-color": "#faa",
                "z-index": 50
            }).appendTo("body").fadeIn(200)
        }, n.maxMonths = 12, n
    }();

    var SearchMode = function () {
        function n() {
        }

        return n.Pickup = "pickup", n.StoreLocator = "storeLocator", n
    }(), __WidgetConfigCallback, __RateChart, __ForeignCurrencyCode, __DomesticCurrencyLabel, __IsTopRatesVisible, __IsCompetitorRatesVisible, __WidgetContextLoadedEvent = new EventDispatcher("WidgetContextLoaded");
    $(function () {
        initWidgets().done(function () {
            window.barclays.foreignCurrency.buildCurrencyOptions();
        });
    });

})();
