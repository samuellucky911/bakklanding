/*
 * barclays Retail - Mobi Cookie Management
 * @version 1.1
 * @author LBi - http://www.lbi.com/en
 * @requires jQuery Core 1.7+ - http://www.jquery.com/
 */
var barclays = window.barclays || {};
barclays.privacy = {
    userId: "",
    cookieSet: false,
    cookieDateCheck: true,
    cookieMatch: false,
    latestCookieData: "",
    latestUserCookieData: "",
    tbWindowHeight: "",
    tbWindowMargin: "",
    cookieReset: false,
    refreshPage: false,
    newCCPObject:{ publicuser: {}},
    trustedDomainRegex: "https:\/\/(www)?([a-z0-9.]+)?(barclays|barclaycard|rise)(.*)?",
    getDomainName: function(){

        var domain = document.domain;
        var domainSplit = domain.split('.');

        // .co.uk domain
        if(domain.indexOf(".co.uk") !== -1){
            return '.' + domainSplit[domainSplit.length-3] + '.' + domainSplit[domainSplit.length-2] + '.' + domainSplit[domainSplit.length-1];
        }
        // .com domain
        else if(domain.indexOf(".com") !== -1){
            return '.' + domainSplit[domainSplit.length-2] + '.' + domainSplit[domainSplit.length-1];
        }
        else {
            return domain;
        }

    },
    URLEncode: function(a) {
        var b = "",
            c = 0;
        a = a.toString();
        for (var d = /(^[a-zA-Z0-9_.]*)/; c < a.length;) {
            var e = d.exec(a.substr(c));
            if (null != e && e.length > 1 && "" != e[1]) b += e[1], c += e[1].length;
            else {
                if (" " == a[c]) b += "+";
                else {
                    var f = a.charCodeAt(c),
                        g = f.toString(16);
                    b += "%" + (g.length < 2 ? "0" : "") + g.toUpperCase()
                }
                c++
            }
        }
        return b
    },
    URLDecode: function(a) {
        for (var c, d = a, e = /(%[^%]{2})/; null != (m = e.exec(d)) && m.length > 1 && "" != m[1];) b = parseInt(m[1].substr(1), 16), c = String.fromCharCode(b), d = d.replace(m[1], c);
        return d
    },
    management: {
        dynamicEventListeners: function () {
            $("#submitCookiePermissions").bind({
                click: function (B) {

                    B.preventDefault ? B.preventDefault() : B.returnValue = false;
                    var A = $(".categoryChecks");
                    var C = [];
                    A.each(function () {
                        if ($(this)[0].checked === true) {
                            C.push("on")
                        } else {
                            C.push("off")
                        }
                    });
                    barclays.privacy.refreshPage = true;
                    if (!barclays.privacy.management.checkCookie("CCP_OTM")) {
                        barclays.privacy.management.buildCcpOTMCookieData()
                    }
                    barclays.privacy.management.buildCcpCookieData(C)
                }
            });
            $("#cookieChecks input").bind({
                click: function () {
                    barclays.privacy.management.ecnCookieInfo()
                }
            });
            $(".button-back, .cancel-button").click(function () {
                if (document.referrer !== "") {
                    history.back();
                }else{
                    window.location = 'https://www.barclays.co.uk';
                }
            });
        },
        ecnCookieInfo: function () {
            $("#cookieCategoryInfo").html("");
            var B = [],
                F = [];
            for (i = 0; i < cookieInfo.cat1.length; i++) {
                B.push(cookieInfo.cat1[i])
            }
            var A = $(".categoryChecks");
            A.each(function (J) {
                var M = "cat" + (J + 2);
                for (var K in cookieInfo) {
                    if (cookieInfo.hasOwnProperty(K)) {
                        if (K === M) {
                            var L = cookieInfo[K];
                            for (i = 0; i < L.length; i++) {
                                if ($(this)[0].checked === true) {
                                    B.push(L[i])
                                } else {
                                    F.push(L[i])
                                }
                            }
                        }
                    }
                }
            });
            var E = $('<table id="cookieInfoTable"><tr><th class="first">We will</th><th>We will not</th></tr></table>');
            var G = B.length;
            if (F.length > G) {
                G = F.length
            }
            for (i = 0; i < G; i++) {
                var I = $("<tr></tr>");
                if (i % 2 !== 0) {
                    I.addClass("odd")
                }
                if (typeof B[i] === "undefined") {
                    B[i] = "";
                    I.append($('<td class="first">' + B[i] + "</td>"))
                } else {
                    I.append($('<td class="ticked first">' + B[i] + "</td>"))
                }
                if (typeof F[i] === "undefined") {
                    F[i] = "";
                    I.append($("<td>" + F[i] + "</td>"))
                } else {
                    I.append($('<td class="crossed">' + F[i] + "</td>"))
                }
                E.append(I)
            }
            $("#cookieCategoryInfo").append(E);
            var C = $("#editCookiePermissionsContent").closest("#TB_ajaxContent");
            C.css({
                height: "auto"
            });
            var D = C.width();
            var H = C.height();
            C.parents("#TB_window").css({
                marginLeft: parseInt((($(window).width() - D) / 2), 10) + "px",
                width: "775px"
            })
        },
        autoSetCookies: function () {
            var categoryPermissions = ["on", "on", "on", "on"];
            barclays.privacy.management.buildCcpCookieData(categoryPermissions);
            barclays.privacy.management.buildCcpOTMCookieData()
        },
        timeStamp: function () {
            var G = new Date();
            var B = G.getDate().toString();
            if (B.length === 1) {
                B = "0" + B
            }
            var F = (G.getMonth() + 1).toString();
            if (F.length === 1) {
                F = "0" + F
            }
            var E = B + "/" + F + "/" + G.getFullYear();
            var A = (G.getUTCHours() + 1).toString();
            if (A.length === 1) {
                A = "0" + A
            }
            var C = G.getUTCMinutes().toString();
            if (C.length === 1) {
                C = "0" + C
            }
            var D = A + ":" + C;
            return (timeStampString = E + " " + D)
        },
        checkDate: function () {
            var B = (barclays.privacy.latestUserCookieData.catStamp).split(" ")[0],
                G = B.split("/")[0],
                E = B.split("/")[1],
                F = B.split("/")[2];
            var A = (barclays.privacy.latestUserCookieData.catStamp).split(" ")[1],
                H = A.split(":")[0],
                D = A.split(":")[1];
            var I = new Date(parseInt(F, 10), parseInt(E - 1, 10), parseInt(G, 10), parseInt(H, 10), parseInt(D, 10), 0);
            I.setMonth(I.getMonth() + barclays.privacy.config.cookieCheckMonths);
            var C = new Date();
            if ((I < C) && ((barclays.privacy.latestUserCookieData.cat2 === "off") || (barclays.privacy.latestUserCookieData.cat3 === "off") || (barclays.privacy.latestUserCookieData.cat4 === "off"))) {
                barclays.privacy.cookieDateCheck = false
            }
        },
        buildCcpOTMCookieData: function () {
            var B = "CCP_OTM";
            var A = {
                name: B,
                value: barclays.privacy.URLEncode("1"),
                domain: barclays.privacy.getDomainName(),
                path: "/"
            };
            this.setCookie(A)
        },
        resetCookie: function (C) {
            var A;
            if (C.cookieName === "CCP") {
                A = new Date();
                A.setFullYear(A.getFullYear() + 20);
                A = A.toUTCString()
            } else {
                A = "session"
            }
            var B = {
                name: C.cookieName,
                value: barclays.privacy.URLEncode(C.cookieData),
                expires: A,
                domain: barclays.privacy.getDomainName(),
                path: "/"
            };
            this.setCookie(B)
        },
        buildCcpCookieData: function (K) {
            var E = "CCP",
                G = {};
            var D = this.timeStamp();
            if (barclays.privacy.cookieSet === true) {
                G = jQuery.parseJSON(this.getCookie("CCP"))
            }
            if (barclays.privacy.cookieMatch === false) {
                G[barclays.privacy.userId] = {}
            }
            G[barclays.privacy.userId].cat2 = K[0], G[barclays.privacy.userId].cat3 = K[1], G[barclays.privacy.userId].cat4 = K[2], G[barclays.privacy.userId].catStamp = D;
            if ((barclays.privacy.cookieSet === false) || (typeof G[barclays.privacy.userId].createStamp === "undefined")) {
                G[barclays.privacy.userId].createStamp = D
            }
            var A = JSON.stringify(G);
            var C = 0;
            for (property in G) {
                if (G.hasOwnProperty(property)) {
                    C++
                }
            }
            var I = 0,
                F = 600;
            if (A.length > F) {
                for (var H in G) {
                    if (G.hasOwnProperty(H)) {
                        if (I === C - 2) {
                            delete G[H];
                            A = JSON.stringify(G)
                        }
                        I++
                    }
                }
            }
            var B = new Date();
            B.setFullYear(B.getFullYear() + 20);
            B = B.toUTCString();
            var J = {
                name: E,
                value: barclays.privacy.URLEncode(A),
                expires: B,
                domain: barclays.privacy.getDomainName(),
                path: "/"
            };
            this.setCookie(J)
        },
        ifValidLink: function (link) {
            var regex = new RegExp(barclays.privacy.trustedDomainRegex);
            return regex.test(link);
        },
        refreshPage: function () {
            if (barclays.privacy.refreshPage) {
                var referrer = (document.referrer.indexOf(document.location.hostname) > -1)? encodeURI(document.referrer) : '';
                if (referrer !== "" && this.ifValidLink(referrer)) {
                    document.location.href = encodeURI(referrer);
                } else {
                    document.location.reload(true)
                }
            }
        },
        setCookie: function (B) {
            var C = B.value + ((B.expires == null) ? "" : "; expires=" + B.expires) + ";domain=" + B.domain + ";path=" + B.path;
            var decodedValueOfB = barclays.privacy.URLDecode(B.value);
            if (B.name === "CCP") {
                try {
                    var BValueObject  = JSON.parse(decodedValueOfB)
                    var cookieObjectKeys = Object.keys(BValueObject);
                    	if(cookieObjectKeys[0] === ""){
                        barclays.privacy.newCCPObject.publicuser = BValueObject[cookieObjectKeys[0]]; 
                        var newCCPObjectStringFromB = JSON.stringify(barclays.privacy.newCCPObject);
                        C = barclays.privacy.URLEncode(newCCPObjectStringFromB) + ((B.expires == null) ? "" : "; expires=" + B.expires) + ";domain=" + B.domain + ";path=" + B.path;
                    } 
                    this.refreshPage();
                }catch(e) {
                }
            }
            document.cookie = B.name + "=" +  C ;
        },
        getCookie: function (G) {
            var C, A, F, E = document.cookie.split(";"),
                B;
            for (C = 0; C < E.length; C++) {
                A = E[C].substr(0, E[C].indexOf("="));
                F = E[C].substr(E[C].indexOf("=") + 1);
                A = A.replace(/^\s+|\s+$/g, "");
                if (A == G) {
                    B = unescape(F)
                }
            }
            if (typeof B !== "undefined") {
                B = barclays.privacy.URLDecode(B);
                var D = /\+/g;
                B = B.replace(D, " ")
            }
            return B
        },


        checkCookie: function (D) {
            var A = this.getCookie(D);
            if (D === "CCP_CURRENT") {
                if (typeof A !== "undefined") {
                    barclays.privacy.userId = A
                } else {
                    barclays.privacy.userId = "publicuser"
                }
                this.checkCookie("CCP")
            } else {
                if (D === "CCP") {
                    if ((typeof A !== "undefined") && (A !== null)) {
                        var C = {
                            cookieName: "CCP",
                            cookieData: A
                        };
                        this.resetCookie(C);
                        A = jQuery.parseJSON(A);
                        barclays.privacy.latestCookieData = A;
                        barclays.privacy.cookieSet = true;
                        for (var B in A) {
                            if (A.hasOwnProperty(B)) {
                                if (B === barclays.privacy.userId) {
                                    barclays.privacy.cookieMatch = true;
                                    barclays.privacy.latestUserCookieData = barclays.privacy.latestCookieData[B]
                                }
                            }
                        }
                    } else {
                        barclays.privacy.cookieReset = true
                    }
                }
            }
        }
    },

    gateway: function (C) {
       var cookieContent = barclays.privacy.management.getCookie("CCP");
        if(cookieContent !== undefined){
            var cookieExpiresDate= new Date();
            cookieExpiresDate.setFullYear(cookieExpiresDate.getFullYear() + 20);
            cookieExpiresDate = cookieExpiresDate.toUTCString();
            try {
                var cookieContentObject = JSON.parse(cookieContent);
                var cookieObjectKeys = Object.keys(cookieContentObject);
                if (cookieObjectKeys[0] === "") {
                    barclays.privacy.newCCPObject.publicuser = cookieContentObject[cookieObjectKeys[0]]; 
                    var newCCPObjectString = JSON.stringify(barclays.privacy.newCCPObject);
                    document.cookie = "CCP="+barclays.privacy.URLEncode(newCCPObjectString) +';expires='+ cookieExpiresDate + "; path=/";
                    cookieContent = newCCPObjectString;   
                }
            }   catch (e) {
                }
            if (C.cat === "") {
                document.write(barclays.privacy.URLDecode(C.code))
            } else {
                if (jQuery.parseJSON(cookieContent).publicuser[C.cat] === "on") {
                    document.write(barclays.privacy.URLDecode(C.code))
                } else {
                    document.write(barclays.privacy.URLDecode(C.replace))
                }
            }
        }
    },
    messaging: function (A) {
        if (barclays.privacy.latestUserCookieData) {
            barclays.privacy.management.checkDate()
        }
        if (barclays.privacy.config.enabled === true) {
            if (A.cookieSet === false) {
                if (barclays.privacy.latestUserCookieData === "") {
                    document.write(barclays.privacy.URLDecode(A.code))
                } else {
                    if (barclays.privacy.cookieDateCheck === false) {
                        document.write(barclays.privacy.URLDecode(A.dateCheckCode));
                        var C = [];
                        for (var B in barclays.privacy.latestUserCookieData) {
                            if (barclays.privacy.latestUserCookieData.hasOwnProperty(B)) {
                                if (barclays.privacy.latestUserCookieData[B] === "on") {
                                    C.push("on")
                                } else {
                                    if (barclays.privacy.latestUserCookieData[B] === "off") {
                                        C.push("off")
                                    }
                                }
                            }
                        }
                        barclays.privacy.management.buildCcpCookieData(C)
                    }
                }
            } else {
                if (barclays.privacy.latestUserCookieData !== "") {
                    document.write(barclays.privacy.URLDecode(A.code));
                    if (barclays.privacy.config.cookiesLinkOnOff === true) {
                        if ((barclays.privacy.latestUserCookieData.cat2 === "on") || (barclays.privacy.latestUserCookieData.cat3 === "on") || (barclays.privacy.latestUserCookieData.cat4 === "on")) {
                            $("#editCookiePermissionsTrigger").html("Cookies on")
                        } else {
                            $("#editCookiePermissionsTrigger").html("Cookies off")
                        }
                    }
                }
            }
        }
        barclays.privacy.cookieDateCheck = true
    }
};

var cookieInfo = {
    cat1: ["Remember how far you are in a form", "Allow you to access secure areas"],
    cat2: ["Track and feedback your browsing session to make website improvements"],
    cat3: ["Remember your log-in details", "Remember preferences you set", "Ensure the Barclays onsite marketing and experiences are relevant to you"],
    cat4: ["Allow you to share pages on social networks", "Send information to other websites, making ads you see on non-Barclays sites more relevant"]
};

/**
 * Configuration object for global privacy settings
 */
barclays.privacy.config = {
    flashTrust: true,
    enabled: true,
    cookieCheckMonths: 6,
    cookiesLinkOnOff: false
};
