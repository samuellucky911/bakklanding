if (!branchFinder) {
    var branchFinder = {};
}
branchFinder.analyticsEventFired = false;
branchFinder.analytics = {

    // Analytics to be fired when branch finder search button is clicked
    trigger: function (obj) {
        if (s) {
            s.prop16 = window.location.pathname;
            s.prop17 = s.pageName;
            s.tl(true, 'o', s.pageName + obj.text);
        }
    },
    clickSearchButton: function (obj) {
        if (s) {
            s.linkTrackVars = 'pageName,prop16,prop17,prop23,prop24,prop34,eVar25,prop21,prop22,prop60,prop63';
            s.prop21 = s.pageName + ':Search';
            s.prop23 = obj.searchTerm;
            this.trigger(obj);
        }
    },
    resultsPageLoad: function (obj) {
        if (s) {
            s.pageName = branchFinder.analyticsPageHeader + ':Results' + obj.filterActive;
            s.prop3 = branchFinder.analyticsPageHeader + ':Results';
            s.prop17 = s.pageName;
            s.prop40 = obj.count;
            s.events = obj.eventType;
            s.t();
        }
    },
    resultsClicked: function (obj) {
        if (s) {
            s.linkTrackVars = 'prop16,prop17,prop22,events';
            s.linkTrackEvents = s.events = 'event27';
            s.prop22 = obj.prop22;
            this.trigger(obj);
        }
    },
    filtersClicked: function (obj) {
        if (s) {
            s.linkTrackVars = 'prop16,prop17,prop22,events';
            s.linkTrackEvents = s.events = 'event29';
            this.trigger(obj);
        }
    }

};

/*
 *  jquery.scrollTo.min.js
 *  Copyright (c) 2007-2015 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 *  Licensed under MIT
 *  @author Ariel Flesler
 *  @version 2.1.1
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);if(!e.length)return;case "object":if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});;
/*global $, google, moment */
$(document).ready(function () {
  $("BODY").addClass("initialView showMap");

  /*
   *  GLOBAL VARIABLES
   */
  // Internal
  var base_path = "/etc/designs/branchfinder/",
      g_locationDistances = {}, // distances to all results, if we have a geolocated position
      g_currentData = false, // current search results. thrown away on every search
      g_idleCenter = {lat: 54.5, lng: -4}, // we should never use this initial number, but just in case...
      g_filterTimer = false, // slight delay on doing the next filter search
      g_lastSearch = false,
      g_searchFromFilter = false,
      g_viewingLocation = false,
      g_focusFirstBranch = false, // used to force focus if you came in from a direct branch call
      // Maps
      g_map = null, // the map itself
      g_markers = [], // current map markers
      g_geoLocation = false, // user location as reported by browser
      g_geoLocationAccuracy = false,
      g_geoLocationAccuracyMiles = false,
      // Streetview
      g_myPano = false, // Streetview panel
      g_svs = false, // Streetview Service
      g_svs_wobbleCount = 0, // Number of wobble attempts
      g_curr_sv_lat = 0, // Streetview wobble initial location
      g_curr_sv_lng = 0, // Streetview wobble initial location
      // Directions
      g_directionsService = false,
      g_directionsDisplay = false,
      g_preferedTransport = 3,
      g_directionsTimeout = null,
      // Debug vars
      g_forceTime = false,
      /*
       *  PSEUDO CONSTS
       */
      KM2MILES = 0.62,
      DEBUG = false,
      DAYS = [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
        "publicHoliday"
      ],
      LONGDAYS = [
        {
          key: "monday",
          value: "Monday"
        },
        {
          key: "tuesday",
          value: "Tuesday"
        },
        {
          key: "wednesday",
          value: "Wednesday"
        },
        {
          key: "thursday",
          value: "Thursday"
        },
        {
          key: "friday",
          value: "Friday"
        },
        {
          key: "saturday",
          value: "Saturday"
        },
        {
          key: "sunday",
          value: "Sunday"
        },
        {
          key: "publicHoliday",
          value: "Public holiday"
        }
      ],
      MAP_INITIAL_CENTER = {lat: 54.492706091022065, lng: -3.9448242187500093},
      MAP_INITIAL_ZOOM = 6,
      MAP_BRANCH_ZOOM = 14,
      BRANCH = "Branch",
      ATM = "ATM",
      newBranchOpenIcon,
      newBranchClosedIcon,
      newBranchActiveIcon,
      newAtmOpenIcon,
      newAtmClosedIcon,
      newAtmActiveIcon,
      url,
      isOfficeFinder = $("MAIN[data-component-type='OfficeFinder']").length > 0;
  var isAnalyticsenabled = (digitalData.adobeAnalyticsDisabled === "true");

  if ("undefined" !== typeof branchFinder.defaultZoomLevel) {
    MAP_INITIAL_ZOOM = parseInt(branchFinder.defaultZoomLevel);
    if (MAP_INITIAL_ZOOM <= 2) {
      MAP_INITIAL_CENTER = {lat: 25, lng: 17.5};
    }
  }

  if (branchFinder.btnBranchOpen !== "") {
    newBranchOpenIcon = branchFinder.btnBranchOpen;
  } else {
    newBranchOpenIcon = base_path + "jsimages/btn_branch_open.png";
  }

  if (branchFinder.btnBranchClosed !== "") {
    newBranchClosedIcon = branchFinder.btnBranchClosed;
  } else {
    newBranchClosedIcon = base_path + "jsimages/btn_branch_closed.png";
  }

  if (branchFinder.btnBranchActive !== "") {
    newBranchActiveIcon = branchFinder.btnBranchActive;
  } else {
    newBranchActiveIcon = base_path + "jsimages/btn_branch_active.png";
  }

  if (branchFinder.btnAtmOpen !== "") {
    newAtmOpenIcon = branchFinder.btnAtmOpen;
  } else {
    newAtmOpenIcon = base_path + "jsimages/btn_atm_open.png";
  }

  if (branchFinder.btnAtmClosed !== "") {
    newAtmClosedIcon = branchFinder.btnAtmClosed;
  } else {
    newAtmClosedIcon = base_path + "jsimages/btn_atm_closed.png";
  }

  if (branchFinder.btnAtmActive !== "") {
    newAtmActiveIcon = branchFinder.btnAtmActive;
  } else {
    newAtmActiveIcon = base_path + "jsimages/btn_atm_active.png";
  }

  // gMaps markers
  var MARKER_BRANCH_OPEN = {
        url: newBranchOpenIcon,
        size: new google.maps.Size(32, 39),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 39)
      },
      MARKER_BRANCH_CLOSED = {
        url: newBranchClosedIcon,
        size: new google.maps.Size(32, 39),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 39)
      },
      MARKER_BRANCH_ACTIVE = {
        url: newBranchActiveIcon,
        size: new google.maps.Size(32, 39),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 39)
      },
      MARKER_ATM_OPEN = {
        url: newAtmOpenIcon,
        size: new google.maps.Size(32, 39),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 39)
      },
      MARKER_ATM_CLOSED = {
        url: newAtmClosedIcon,
        size: new google.maps.Size(32, 39),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 39)
      },
      MARKER_ATM_ACTIVE = {
        url: newAtmActiveIcon,
        size: new google.maps.Size(32, 39),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 39)
      },
      MARKER_SHAPE = {
        coords: [0, 0, 32, 0, 32, 34, 23, 34, 17, 39, 11, 34, 0, 34],
        type: "poly"
      },
      MAP_OPTIONS = {
        zoom: MAP_INITIAL_ZOOM,
        center: MAP_INITIAL_CENTER,
        mapTypeControl: false,
        navigationControlOptions: {
          style: google.maps.NavigationControlStyle.SMALL
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: true,
        panControlOptions: {
          position: google.maps.ControlPosition.RIGHT_TOP
        },
        scaleControl: true,
        streetViewControl: false,
        scrollwheel: true,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL,
          position: google.maps.ControlPosition.LEFT_TOP
        }
      },
      DIRECTIONS_FROMSEARCHCENTER = 1,
      DIRECTIONS_FROMGEOLOCATION = 2,
      DIRECTIONS_FROMOTHER = 3,
      DIRECTIONS_TRANSPORT_CAR = 11,
      DIRECTIONS_TRANSPORT_FOOT = 12,
      DIRECTIONS_TRANSPORT_BIKE = 13;

  g_preferedTransport = DIRECTIONS_TRANSPORT_CAR;


  // Read a page's GET URL variables and return them as an associative array.
  function getUrlVars() {
    var vars = [],
        hash,
        hashes = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"),
        i;

    for (i = 0; i < hashes.length; i++) {
      hash = hashes[i].split("=");
      vars.push(hash[0]);
      vars[hash[0]] = hash[1];
    }
    return vars;
  }

  /*
   * EVENTS
   */

  // google internal events
  google.maps.event.addDomListener(window, "load", mapInit);

  $("#oldbrowserwarning span").on("click", function () {
    $(this).hide();
  });

  // Branch / ATM toggle
  $("#selectorBranch button").on("click", function () {
    $("#selectorBranch button")
        .removeClass("btn-primary")
        .addClass("btn-secondary")
        .attr("aria-selected", "false");
    $(this)
        .removeClass("btn-secondary")
        .addClass("btn-primary")
        .attr("aria-selected", "true");

    // Start analytics code
    // Check if Adobe Analytics is enabled
    if(isAnalyticsenabled) {
      if (!branchFinder.analyticsEventFired) {
        branchFinder.analyticsEventFired = true;
      }
      var analyticsObj = {};
      analyticsObj.text = ":Tab:" + $("#selectorBranch button.btn-primary").text();
      branchFinder.analytics.trigger(analyticsObj);
    }
    // End analytics code

    stateResultsView();
  });
  //End

  $(".streetview").on("click", function () {
    g_curr_sv_lat = parseFloat($(this).data("lat"));
    g_curr_sv_lng = parseFloat($(this).data("lng"));
    if (!g_myPano) {
      g_myPano = new google.maps.StreetViewPanorama(document.getElementById("pano-canvas"));
    }
    if (!g_svs) {
      g_svs = new google.maps.StreetViewService();
    }
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    $("body").addClass("showMap");
    // Set the initial Street View camera to the center of the map
    g_svs.getPanoramaByLocation(new google.maps.LatLng(g_curr_sv_lat, g_curr_sv_lng), 50, processSVData);
  });

  $(".bankHolidayHoursLink").on("click", function (e) {
    e.preventDefault();
    $("body")
        .addClass("showBankHolidayHours")
        .removeClass("showMap");
  });
  $("#closeFilters a").on("click", function (e) {
    e.preventDefault();
    $("body").removeClass("filterView showMap");
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    scrollEverythingToTheTop();
  });
  $("#closeDetails a").on("click", function (e) {
    e.preventDefault();
    if (g_map && g_map.getZoom() === MAP_BRANCH_ZOOM) mapRebound();
    $("body").removeClass("atmDetails branchDetails showMap");
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    scrollEverythingToTheTop();
  });
  $("#closeStreetview a").on("click", function (e) {
    e.preventDefault();
    $("body").removeClass("pano showMap");
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    scrollEverythingToTheTop();
  });

  $("#closeBack a").on("click", function (e) {
    e.preventDefault();
    if (!$("body").hasClass("showBankHolidayHours")) {
      clearDirections();
      mapRebound();
    }
    $("body").removeClass("call directions showMap showBankHolidayHours");
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    scrollEverythingToTheTop();
  });

  // FILTERS
  $(".filter > a").on("click", function (e) {
    e.preventDefault();
    refreshFilterCounts();
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    $("body").removeClass("atmDetails branchDetails showMap showBankHolidayHours").toggleClass("filterView");
  });

  $("ul.filter li").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("selected");
    //start analytics code
    // Check if Adobe Analytics is enabled
    if(isAnalyticsenabled) {
      var isSelected = $(this).hasClass("selected");
      if (!branchFinder.analyticsEventFired && isSelected) {
        var analyticsObj = {};
        var text = ":FilterOn:" + $(this).text();
        analyticsObj.text = text.replace(/\s/g, "");
        branchFinder.analytics.filtersClicked(analyticsObj);
      }
    }
    //end of analytics code
    filterChanged();


  });
  $("ul.filter li a").on("click", function (e) {
    //start analytics code
    // Check if Adobe Analytics is enabled
    if(isAnalyticsenabled) {
      var isSelected = $(this).parent().hasClass("selected");
      if (!branchFinder.analyticsEventFired && isSelected) {
        branchFinder.analyticsEventFired = true;
        var analyticsObj = {};
        var text = ":FilterOn:" + $(this).text();
        analyticsObj.text = text.replace(/\s/g, "");
        branchFinder.analytics.filtersClicked(analyticsObj);
      }
    }
    //end of analytics code
    e.preventDefault();
  });
  $(".clearFilter").on("click", function (e) {
    e.preventDefault();
    $("ul.filter li ").removeClass("selected");
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    filterChanged();
  });
  $(".resultBtm .directions").on("click", function () {
    if (!branchFinder.analyticsClickEventFired) {
      branchFinder.analyticsClickEventFired = true;
    }
    getDirections(
        $("#location").val().length === 0
            ? DIRECTIONS_FROMGEOLOCATION
            : DIRECTIONS_FROMSEARCHCENTER
    );
  });


  // events on list entries
  $(".results .resultScroll")
      .on("mouseover mouseout", "a", function (e) {
        if (!$(this).attr("target")) {
          $(this)
              .parent()
              .toggleClass("hover", e.type === "mouseover");
          var data = getDataForResultsItem($(this));
          if (!data) return;
          g_markers[data.index].setIcon(
              data.icon[e.type === "mouseover" ? "active" : "rest"]
          );
        }
      })
      .on("click", "a", function (e) {
        if (!$(this).attr("target")) {
          scrollEverythingToTheTop();
          $("body").removeClass("pano call directions filterView");
          e.preventDefault();
          var data = getDataForResultsItem($(this));
          g_markers[data.index].setIcon(data.icon.active);
          if ($("body").hasClass("resultsAtm")) {
            $("body").addClass("atmDetails");
            renderAtmDetails($(this).data("myindex"));
          } else {
            renderBranchDetails($(this).data("myindex"));
          }

          //Start analytics code
          // Check if Adobe Analytics is enabled
          if(isAnalyticsenabled) {
            if (!branchFinder.analyticsEventFired) {
              branchFinder.analyticsEventFired = true;
              var analyticsObj = {};
              var text = "";
              if (branchFinder.analytics.mapClicked) {
                text =
                    ":Map:" +
                    data.address.buildingNameNumber +
                    data.address.line1 +
                    data.address.postCode;
              } else {
                text =
                    ":List:" +
                    data.address.buildingNameNumber +
                    data.address.line1 +
                    data.address.postCode;
                analyticsObj.prop22 = $(this).data("myindex");
              }
              analyticsObj.text = text.replace(/\s/g, "");
              branchFinder.analytics.mapClicked = false;
              branchFinder.analytics.resultsClicked(analyticsObj);
            }
          }
          //End analytics code
        }
      });


  /* Search from search bar */
  $("#searchForm").on("submit", function(e) {
    e.preventDefault();
    searchFormSubmit();

    //Start Analytics code
    // Check if Adobe Analytics is enabled
    if(isAnalyticsenabled) {
      var analyticsObj = {};
      analyticsObj.searchTerm = $("#location").val();
      analyticsObj.text = ":button:Search";
      branchFinder.analytics.clickSearchButton(analyticsObj);
    }
    //End Analytics
  });

  $("#views .mapView").on("click", function() {
    $("body").removeClass("filterView").addClass("showMap");
  });

  $("#views .listView").on("click", function() {
    $("body").removeClass("showMap");
  });

  function scrollEverythingToTheTop() {
    if ($.isFunction($.fn.scrollTo)) {
      $(".resultScroll").scrollTo(0, 0);
      window.scrollTo(0, 0);
      window.parent.scrollTo(0, 0);
    }
  }

  function getDataForResultsItem($resultsItem) {
    var index = $resultsItem.data("myindex");
    var branchid = $resultsItem.data("branchid");
    var type = $resultsItem.data("type") === BRANCH ? "branches" : "atms";
    if (!g_currentData[type] && !g_currentData[type][index]) {
      return false;
    }
    var record = g_currentData[type][index];
    record.index = index;
    return record;
  }

  function stateResultsView() {
    scrollEverythingToTheTop();
    if (!g_searchFromFilter)
      $("body").removeClass("resultsAtm resultsBranch initialView showMap branchDetails atmDetails locationOptions"); //removes any active class
    g_searchFromFilter = false;
    if ($("button.atm").hasClass("btn-primary")) {
      $("body").addClass("resultsAtm");  //adds current class
      renderAtms();
    } else {
      $("body").addClass("resultsBranch");  //adds current class
      renderBranches();
    }
    refreshFilterCounts();
  }

  function searchFormSubmit() {
    $("#searchError").remove();
    var searchTerm = $("#location").val();

    if (searchTerm.substr(0, 7) === "SETTIME") {
      return setTime(searchTerm);
    }

    if ((searchTerm.length === 0) && ("undefined" === typeof branchFinder.defaultMap) || ("" === branchFinder.defaultMap)) {
      if (g_geoLocation) {
        doSearch(g_geoLocation, true);
      } else {
        if (g_map) {
          g_map.setZoom(MAP_INITIAL_ZOOM);
          g_map.setCenter(MAP_INITIAL_CENTER);
        }
        scrollEverythingToTheTop();
        if($("body").hasClass("desktop")){
          targetClass = "desktop";
        }else if($("body").hasClass("mobile")){
          targetClass = "mobile";
        }
        $("body").removeClass().addClass(`initialView ${targetClass}`);
      }
      return;
    }

    var geocoder = new google.maps.Geocoder(),
        geocoderOptions;

    if ((searchTerm.length === 0) && ("undefined" !== typeof branchFinder.defaultMap) && ("" !== branchFinder.defaultMap) && ("global" !== branchFinder.defaultMap.toLowerCase())) {

      geocoderOptions = {
        address: branchFinder.defaultMap
      };
    } else {
      var address = searchTerm;
      var southWest = new google.maps.LatLng(49.6, -7.65);
      var northEast = new google.maps.LatLng(61.0, 1.7);
      var bounds = new google.maps.LatLngBounds(southWest, northEast);
      geocoderOptions = {
        address: address,
        bounds: bounds,
        region: "GB"
      };
      $("#location").addClass("searching");
    }
    geocoder.geocode(geocoderOptions, function (results, status) {
      $("#location").removeClass("searching");
      if (status === google.maps.GeocoderStatus.OK) {
        mapClear();
        if (results.length === 1) {
          doSearch({
            "lat": results[0].geometry.location.lat(),
            "lng": results[0].geometry.location.lng()
          }, false);
        } else {
          refineSearch(results)
        }
      } else if (status === google.maps.GeocoderStatus.ZERO_RESULTS) {
        $div = $('<div id="searchError"></div>');
        $div.text("No matches for \"" + $("#location").val() + "\" found in UK.");
        $("div.search").append($div);
      } else {
        $div = $('<div id="searchError"></div>');
        $div.text("There was an error with the Google Geocoder. Please try again in a few minutes.");
        $("div.search").append($div);
      }
      setTimeout(function () {
        $("div#searchError").hide(200);
      }, 3000);

    });

  }

  function resetBodyClassList() {
    var immutableClasses = ["desktop", "mobile", "minimised", "segment-visible", "has-touch", "skiplinks-hidden"];
    var currentClasses = $("body").attr("class").split(/\s+/);

    $.each(currentClasses, function (index, className) {
      if (immutableClasses.indexOf(className) < 0) {
        $("body").removeClass(className);
      }
    });
  }

  function refineSearch(results) {
    if (g_geoLocation !== false) {
      results = results.sort(function (a, b) {
        var distA = distanceToCurrent(a);
        var distB = distanceToCurrent(b);
        return distA - distB;
      });
    }
    scrollEverythingToTheTop();
    resetBodyClassList();
    $("body").addClass("locationOptions");
    $div = $("#locationOptions .resultPanel-wrapper").empty();
    $div.append($("<p>Multiple results found for " + $("#location").val() + ":</p>"));
    $ol = $("<ol></ol>");
    for (var i = 0; i < results.length; i++) {
      var lat = results[i].geometry.location.lat();
      var lng = results[i].geometry.location.lng();
      $ol.append($('<li><a href="#" data-lat="' + lat + '" data-lng="' + lng + '" data-searchaddress="' + results[i].formatted_address.replace('"', '') + '">' + results[i].formatted_address + ' ' + displayDistance(results[i]) + '</a></li>'));
      mapAddLocationOption({lat: lat, lng: lng}, results[i]);
    }
    $div.append($ol);
    mapRebound();
    setTimeout(mapAddUserLocation, 200);
    $ol.find("a").on("click", function(e) {
      e.preventDefault();
      $("#location").val($(this).data("searchaddress"));
      $("#locationOptions .resultPanel-wrapper").empty();
      doSearch({ lat: $(this).data("lat"), lng: $(this).data("lng") }, false);
    });
  }

  function hasGeolocation(position) {
    g_geoLocationAccuracy = position.coords.accuracy;
    g_geoLocationAccuracyMiles = (g_geoLocationAccuracy * KM2MILES) / 1000;
    g_geoLocation = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    doSearch(g_geoLocation, true);
    multiplier = Math.floor(Math.min(1000 / g_geoLocationAccuracy, 1000) / 100) + 1;

    var populationOptions = {
      strokeColor: "#0000FF",
      strokeOpacity: Math.min(0.1 * multiplier, 1),
      strokeWeight: 1,
      fillColor: "#0000FF",
      fillOpacity: Math.min(0.05 * multiplier, 0.5),
      map: g_map,
      center: g_geoLocation,
      radius: g_geoLocationAccuracy
    };
    g_locationCircle = new google.maps.Circle(populationOptions);

  }

  function hasNoGeolocation(data) {
    if (data.code != 1) {
      alert("Your browser was unable to provide valid Geolocation data.");
    }
  }

  function refreshFilterCounts() {
    var type = $("body").hasClass("resultsBranch") ? "branch" : "atm";
    var $selectedFilters = $("#resultsFilters ul.filter li." + type + ".selected");
    var count = $selectedFilters.length;
    var $textField = $("#resultsBranch, #resultsATM, #resultsFilters").find(".resultsTopText p");
    $(".filtNumb").text(count);

    if (count === 0) {
      $textField.text("No filters applied");
    } else if (count === 1) {
      $textField.text("1 filter applied");
    } else {
      $textField.text(count + " filters applied");
    }

  }

  function filterChanged() {
    refreshFilterCounts();
    clearTimeout(g_filterTimer);
    g_filterTimer = setTimeout(repeatSearch, 250);
  }

  function repeatSearch() {
    if (g_lastSearch) {
      g_searchFromFilter = true;
      doSearch(g_lastSearch, false);
    }
  }

  function doSearch(latlng, fromGeo) {
    g_lastSearch = latlng;
    $("#location").addClass("searching");
    var type = $("body").hasClass("resultsBranch") ? "branch" : "atm";
    var url = branchFinder.dataURL;
    url += "?lat=" + encodeURIComponent(latlng.lat);
    url += "&lng=" + encodeURIComponent(latlng.lng);
    url += "&facilities=";
    var filterSelector = "#filterResult li.selected." + type;
    $(filterSelector).each(function () {
      url += $(this).text().trim().replace(/ /g, "_") + ",";
    });

    // For testing
    // url = "/etc/designs/branchfinder/testJSON.json";

    $.ajax({
      url: url,
      dataType: "json",
      context: document.body,
      cache: false
    })
        .done(doSearchSuccess)
        .fail(doSearchFail);
  }

  function doSearchSuccess(data) {
    $("#location").removeClass("searching");
    g_currentData = data;
    stateResultsView();


    // Check user using filters
    var count = 0;
    var type = $("body").hasClass("resultsBranch") ? "branch" : "atm";
    if (type === "branch") {
      count = data.branches.length;
    } else {
      count = data.atms.length;
    }
    var filterText = "",
        filterActive = "";
    var filterSelector = "#filterResult li.selected." + type;
    $(filterSelector).each(function () {
      filterText += $(this).text().replace(/ /g, "_") + ",";
    });
    if (filterText) {
      filterActive = ":Filtered";
    }
    //Start Analytics code
    // Check if Adobe Analytics is enabled
    if(isAnalyticsenabled) {
      var analyticsObj = {};
      analyticsObj.eventType = 'event1';
      analyticsObj.count = count;
      analyticsObj.filterActive = filterActive;
      analyticsObj.text = filterActive;
      branchFinder.analytics.resultsPageLoad(analyticsObj);
    }
    //End of Analytics Code
  }

  function doSearchFail(data) {
    $("#location").removeClass("searching");

    //Start Analytics code
    // Check if Adobe Analytics is enabled
    if(isAnalyticsenabled) {
      var analyticsObj = {};
      analyticsObj.eventType = "event2";
      analyticsObj.count = 0;
      branchFinder.analytics.resultsPageLoad(analyticsObj);
    }
    //End of Analytics Code
  }

  /* Render various views */
  function renderDisclaimer($list) {
    $list.prepend('<div class="inaccurateGeolocation">There are multiple results within your current geolocation error margin (' + (Math.floor(g_geoLocationAccuracyMiles * 100) / 100) + '<span aria-label="miles">mi</span>).</div>');
  }

  function renderBranches() {
    var innaccurateCount = 0,
        $list = $("#resultsBranch .resultScroll .resultsGroup").empty(),
        dataSet = [];
    if (!g_currentData)
      return;

    if (!isOfficeFinder) {
      if (!(g_currentData.branches[0] && g_currentData.branches[0].item) || g_forceTime) {
        dataSet = g_currentData.branches;
        setMarkersForCurrentData();
      }
    } else {
      if (!(g_currentData.offices[0] && g_currentData.offices[0].item) || g_forceTime) {
        dataSet = g_currentData.offices;
        setMarkersForCurrentData();
      }
    }
    mapClear();

    $.each(dataSet, function (i, item) {
      var {distance,address:{postCode,buildingNameNumber,line1,line2,town},outletId,hideOpeningHours} = item;
      var open = hideOpeningHours === "true" ? "hideOpenClose" : isOpen(item);
      var calculatedDistance = "X";
      if (distance) {
        distance = (Math.floor(distance * 100) / 100);
        if (g_geoLocationAccuracy && (calculatedDistance < g_geoLocationAccuracyMiles))
          innaccurateCount++;
      }
      var str = "";
      var postcode = "";
      if (postCode) {
        postcode = postCode;
      }
      var builingNumber = "";
      if (buildingNameNumber) {
        builingNumber = buildingNameNumber + " ";
      }
      str += '<li class="resultsItem">';

      var url = setUrl(branchFinder,item);
      str += `<a href=${url ? url : "#"} data-dbid=${outletId} data-myindex=${i} data-type=${BRANCH}>`;
      str += `<p>`;
      str += `<span class="address">${builingNumber}${line1}</span>`;
      var addressLine2 = (line2.length > 0 && town !== line2) ? line2 + '<br />' : '';
      str += `<span class="postcode">${addressLine2}${town} ${postcode}</span>`;
      str += `<span class="distance">${distance} <span aria-label="miles ">mi</span></span>`;
      if(open !== "hideOpenClose") {
        str += `<span class="hours ${open ? '' : 'closed'}" >${open ? 'Open' : 'Closed'}</span>`;
      }
      str += `</p>`;
      str += `</a>`;
      str += `</li>`;


      $list.append(str);
      mapAddBarclaysLocation(item, item.icon.rest, BRANCH);
    });
    mapRebound();
    setTimeout(mapAddUserLocation, 200);
    if (innaccurateCount > 1)
      renderDisclaimer($list);
    if (g_focusFirstBranch) {
      g_focusFirstBranch = false;
      renderBranchDetails(0);
      if (g_map) {
        g_map.setZoom(MAP_BRANCH_ZOOM);
        g_map.setCenter({
          lat: parseFloat(g_currentData.branches[0].latitude),
          lng: parseFloat(g_currentData.branches[0].longitude)
        });
      }
    }
    $(".noOfBranches").text(g_currentData.branches.length);
  }

  function renderAtms() {
    var innaccurateCount = 0;
    var $list = $("#resultsATM .resultScroll .resultsGroup").empty();

    if (!g_currentData)
      return;
    if (!(g_currentData.branches[0].item) || g_forceTime)
      setMarkersForCurrentData();
    mapClear();

    $.each(g_currentData.atms, function (i, item) {
      var externalAtm = false;
      var {facilities,distance,address:{postCode,buildingNameNumber,line1,line2,town},outletId} = item;
      if (facilities.toString().toLowerCase().indexOf("external atm") > -1) {
        externalAtm = true;
      }
      if (typeof item["temporarilyClosed"] !== "undefined" && item["temporarilyClosed"].toLowerCase() === "true" ) {
        externalAtm = false;
      }
      var open = isOpen(item) || externalAtm;
      var calculatedDistance = (Math.floor(distance * 100) / 100);
      if (g_geoLocationAccuracy && (calculatedDistance < g_geoLocationAccuracyMiles))
        innaccurateCount++;
      var str = "";
      var postcode = "";
      if (postCode) {
        postcode = postCode;
      }
      var builingNumber = "";
      if (buildingNameNumber) {
        builingNumber = buildingNameNumber + " ";
      }

      var url = setUrl(branchFinder,item);
      var address = line1.length > 0 ? `${builingNumber}${line1}` : line2;
      var addressLine2 = ((line2.length > 0 && town !== line2) ? line2 + '<br />' : '');
      var townPostCode = line1.length > 0 ? `${addressLine2}${town} ${postcode}` : `${town} ${postcode}`;
      str += '<li class="resultsItem">';
      str += `<a href=${url ? url : "#"} data-dbid=${outletId} data-myindex=${i} data-type=${ATM}>`;
      str += '<p>';
      str += `<span class="address">${address}</span>`;
      str += `<span class="postcode">${townPostCode}</span>`;
      str += `<span class="distance">${calculatedDistance}<span aria-label="miles ">mi</span></span>`;
      str += `<span class="hours  ${open ? '' : 'closed'}">${open ? 'Open' : 'Closed'}</span>`;
      str += `</p>`;
      str += `</a>`;
      str += `</li>`;

      $list.append(str);
      mapAddBarclaysLocation(item, item.icon.rest, ATM);
    });
    mapRebound();
    setTimeout(mapAddUserLocation, 200);
    if (innaccurateCount > 1)
      renderDisclaimer($list);

    $('.noOfATMs').text(g_currentData.branches.length);

  }

  function renderAtmDetails(index) {
    var item = g_currentData.atms[index];

    var url = setUrl(branchFinder,item);
    if(url){
      window.location.href = url;
    } else {
      clearDirections();
      var distance = (Math.floor(item.distance * 100) / 100);
      var str = '';
      var postcode = '';
      if (item.address.postCode) {
        postcode = item.address.postCode;
      }
      var builingNumber = '';
      if (item.address.buildingNameNumber) {
        builingNumber = item.address.buildingNameNumber + ' ';
      }

      str += '<span class="icon icon-Branch"></span>';
      str += '<p>';
      if (item.address.line1.length > 0) {
        str += '<span class="address">' + builingNumber + item.address.line1 + '</span>';
        str += '<span class="postcode">' + ((item.address.line2.length > 0 && item.address.town != item.address.line2) ? item.address.line2 + '<br />' : '') + item.address.town + ' ' + postcode + '</span>';
      } else {
        str += '<span class="address">' + item.address.line2 + '</span>';
        str += '<span class="postcode">' + item.address.town + ' ' + postcode + '</span>';
      }
      str += '<span class="distance">' + distance + ' <span aria-label="miles">mi</span></span>';
      str += '</p>';
      str += '<span class="divider"></span>';
      str += '<h5 class="accessibilityHeader"> Facilities</h5>';
      str += '<div class="accessibility">';
      str += '<ul>';
      if (item.facilities) {
        item.facilities = facilitiesATMfilter(item.facilities);

        $.each(item.facilities, function (key, val) {
          str += '<li class="hasFacility">' + val + '</li>';
        });
      }
      str += '</ul>';
      str += '</div>';

      scrollEverythingToTheTop();
      $("body").addClass('atmDetails').removeClass('showMap');
      $('#atmDetails .resultPanel-wrapper .resultDetails').empty().append(str);
      $('#atmDetails .resultBtm .streetview').data('lat', item.latitude).data('lng', item.longitude);
      g_viewingLocation = {lat: item.latittude, lng: item.longitude};
    }
  }

  function getDayOpeningHtml(dayText, day, cssClass) {
    // Html template mechanism for opening times
    var time,
        isToday = cssClass ? ' (today)' : '';
    if (day.openTimeFormatted && day.closeTimeFormatted) {
      time = day.openTimeFormatted + ' to ' + day.closeTimeFormatted;
    } else {
      time = 'Closed';
    }

    if (day.comment !== "") {
      var result = '<li class="openingHours ' + cssClass + ' "><span class="day">' + dayText + isToday + '</span><span class="time">' + time + '<span class="notes">(' + day.comment + ')</span></span></li>';
    }
    else {
      var result = '<li class="openingHours ' + cssClass + ' "><span class="day">' + dayText + isToday + '</span><span class="time">' + time + '</span></li>';
    }
    return result;
  }

  function renderBranchDetails(index) {
    var item = isOfficeFinder ? g_currentData.offices[index] : g_currentData.branches[index];

    var url = setUrl(branchFinder,item);
    if(url){
      window.location.href = url;
    } else {
      clearDirections();
      var distance = (Math.floor(item.distance * 100) / 100);
      var open = isOpen(item);
      var str = '';
      var postcode = '';
      if (item.address.postCode) {
        postcode = item.address.postCode;
      }
      var builingNumber = '';
      if (item.address.buildingNameNumber) {
        builingNumber = item.address.buildingNameNumber + ' ';
      }
      str += '<p>';
      if (item.imageUrl.length > 0) {
        str += '<img src="' + item.imageUrl + '" class="branch" />';
      }

      str += '<span class="address">' + builingNumber + item.address.line1 + '</span>';
      str += '<span class="postcode">' + ((item.address.line2.length > 0 && item.address.town != item.address.line2) ? item.address.line2 + '<br />' : '') + item.address.town + ' ' + postcode + '</span>';
      str += '<span class="distance">' + distance + ' <span aria-label="miles ">mi</span></span>';
      str += '<span class="hours ' + (open ? '' : 'closed') + '">' + (open ? 'Open' : 'Closed') + '</span>';
      str += '</p>';
      str += '<span class="divider"></span>';

      if (isOfficeFinder) {
        if (item.headshot.length > 0) {
          str += '<img src="' + item.headshot + '" class="headshot" />';
        }
        str += '<p><span class="navy">Office manager</span><br />' + item.officeHead + '</p>';
        str += '<p><span class="navy">Email</span><br />' + item.officeEmail + '</p>';
        str += '<span class="divider"></span>';
      }


      str += '<h5 class="phoneHeading">Phone numbers</h5>';
      str += '<ul>';
      if (isOfficeFinder) {
        str += '<li class="phonenumbers">';
        str += '<span class="phoneTitle">Local number</span>';
        str += '<span class="phoneNumber">';
        item.officePhones.forEach(function (phoneNumber) {
          str += phoneNumber + '<br />'
        });

        str += '</span>';
        str += '</li>';
      }
      str += '<li class="phonenumbers">';
      str += '<span class="phoneTitle">General enquiries</span>';
      str += '<span class="phoneNumber">' + branchFinder.genPhoneNo + '</span>';
      str += '</li>';
      if (item.WMA === 'Y' || (item.facilities.toString().toLowerCase().indexOf("mortgage") != -1)) {
        str += '<li class="phonenumbers">';
        str += '<span class="phoneTitle">Mortgage appointment</span>';
        str += '<span class="phoneNumber">' + branchFinder.mabPhoneNo + '</span>';
        str += '</li>';
      }
      str += '</ul>';
      str += '<p><a class="standalone" href="' + branchFinder.callChargesPath + '" target="' + branchFinder.callChargesTarget + '" title="' + branchFinder.callChargesLinkTitle + '">' + branchFinder.callChargesLinkText + '</a></p>';
      str += '<span class="divider"></span>';

      if ((item['additionalInfoTitle']) && (item['additionalInfoTitle'] !== "")) {
        var aditionalNotificationStyle = "info";
        if ((typeof item['temporarilyClosed'] !== "undefined") && (item['temporarilyClosed'].toLowerCase() === "true")) {
          aditionalNotificationStyle = "alert";
        }
        str += '<div class="message-region notification ' + aditionalNotificationStyle + ' promoArea" role="alert">';
        str += '<p class="i-msg-' + aditionalNotificationStyle + ' h4">' + item['additionalInfoTitle'] + '</p>';

        if ((item['additionalInfoRte']) && (item['additionalInfoRte'] !== "")) {
          str += item['additionalInfoRte'];
        }else if ((item['additionalInfo']) && (item['additionalInfo'] !== "")) {
          str += '<p>' + item['additionalInfo'] + '</p>';
        }

        str += '</div>';

        str += '<span class="divider"></span>';
      }
      var openingHoursSpecial = item.openingHours.specialOpeningHours;
      if ((openingHoursSpecial || branchFinder.bankHolidayJson) && ((typeof item['temporarilyClosed'] === "undefined") || (item['temporarilyClosed'].toLowerCase() != "true"))) {
        var filteredOpeningHoursSpecial = [];
        var ohsArray = [];
        var today = new Date();
        today.setHours(0, 0, 0, 0);
        var maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + (branchFinder.ohswia * 7));

        for (var i = 0; i < openingHoursSpecial.length; i++) {
          var ohsDate = moment(openingHoursSpecial[i].date, "DD-MMM-YY");
          if ((ohsDate >= today) && (ohsDate <= maxDate)) {
            filteredOpeningHoursSpecial.push(openingHoursSpecial[i]);
            ohsArray.push(openingHoursSpecial[i].date);
          }
        }

        //check today is bank holiday
        var bankHolidayJson = [];
        if ((typeof branchFinder.bankHolidayJson != "undefined") && (branchFinder.bankHolidayJson != "")) {
          bankHolidayJson = JSON.parse(branchFinder.bankHolidayJson);
        }
        bankHolidayJson.forEach(function (e, i) {
          var ohsDate = moment(e.date, "DD-MMM-YY");
          if ((ohsDate >= today) && (ohsDate <= maxDate) && ($.inArray(e.date, ohsArray) === -1)) {
            if (isHolidayForBranch(item.address.postCode, e)) {
              filteredOpeningHoursSpecial.push(e);
            }
          }
        });

        if ((filteredOpeningHoursSpecial.length > 0)) {
          str += '<h5 class="openingHeader">Special opening hours</h5>';
          str += '<ul class="ohs">';

          filteredOpeningHoursSpecial.forEach(function (e, i) {
            var date = moment(e.date, "DD-MMM-YY");
            var ohsOpeningHours;
            var isToday = ((moment(e.date, "DD-MMM-YY")._d).toString().indexOf(today.toDateString()) > -1);
            var extraClass = (isToday) ? "current" : "";
            var isCurrent = (isToday) ? " (today)" : "";
            var formattedDate = date.format("DD/MM/YYYY");

            if (e.specialOpeningHours) {
              ohsOpeningHours = e.specialOpeningHours;
            } else {
              ohsOpeningHours = 'Closed';
            }

            str += '<li class="openingHours ' + extraClass + '" data-date="' + (e.date) + '">';
            str += '<span class="day">' + formattedDate + isCurrent + '</span>';
            str += '<span class="time">' + ohsOpeningHours;
            if ((typeof e.comment !== "undefined") && (e.comment !== "")) {
              str += '<span class="notes">(' + e.comment + ')</span>';
            }
            str += '</span>';
            str += '</li>';
          });

          str += '</ul>';
          str += '<span class="divider"></span>';
        }
      }
      var openingHours = item['openingHours'];
      var hideOpeningHours = item['hideOpeningHours'];
      if (openingHours && (typeof openingHours === 'object') && hideOpeningHours === 'false') {

        str += '<h5 class="openingHeader">Regular opening hours</h5>';
        str += '<ul class="oh">';
        $.each(LONGDAYS, function (index, obj) {
          var day = openingHours[obj.key];
          if (day) {
            var today = DAYS[new Date().getDay()];
            var cssClass = '';
            if (obj.key === today) {
              cssClass = 'current';
            }
            //TBD to push for handlebar.js/something similar
            str += getDayOpeningHtml(obj.value, day, cssClass);
          }
        });

        str += '</ul>';
        str += '<span class="divider"></span>';
      }

      if (isOfficeFinder) {
        if (('undefined' !== item.expertise) && (item.expertise.length > 0)) {
          str += '<h5 class="accessibilityHeader">Expertise</h5>';
          str += '<div class="accessibility">';
          str += '<ul>';

          $.each(item.expertise, function (key, val) {
            str += '<li class="hasFacility">' + val + '</li>';
          });

          str += '</ul>';
          str += '</div>';
          str += '<span class="divider"></span>';
        }
      }


      if (('undefined' !== item.accessibilityFeatures) && (item.accessibilityFeatures.length > 0)) {
        str += '<h5 class="accessibilityHeader">Accessibility</h5>';
        str += '<div class="accessibility">';
        str += '<ul>';

        $.each(item.accessibilityFeatures, function (key, val) {
          str += '<li class="hasFacility">' + val + '</li>';
        });

        str += '</ul>';
        str += '</div>';
        str += '<span class="divider"></span>';
      }


      if (('undefined' !== item.facilities) && (item.facilities.length > 0)) {
        str += '<h5 class="accessibilityHeader">Facilities</h5>';
        str += '<div class="accessibility">';
        str += '<ul>';

        item.facilities = facilitiesATMfilter(item.facilities);
        $.each(item.facilities, function (key, val) {
          str += '<li class="hasFacility">' + val + '</li>';
        });

        str += '</ul>';
        str += '</div>';
      }


      scrollEverythingToTheTop();
      $("body").addClass('branchDetails').removeClass('showMap');
      $('#branchDetails .resultPanel-wrapper .resultDetails').empty().append(str);
      $('#branchDetails .resultBtm .directions').data('lat', item.latitude).data('lng', item.longitude);
      $('#branchDetails .resultBtm .streetview').data('lat', item.latitude).data('lng', item.longitude);

      g_viewingLocation = {lat: item.latitude, lng: item.longitude};

      // sort dates in Opening Hours Special
      $(".ohs li").sort(sort_li).appendTo('.ohs');

      function sort_li(a, b) {
        return ($(b).data('date')) < ($(a).data('date')) ? 1 : -1;
      }

      // if Opening Hours Special date is today remove today (current) indicator from regular opening hours
      if ($(".ohs li.current").length > 0) {
        $(".oh li.current").removeClass("current");
      }
    }
  }


  /* helpers */
  function isOpen(record) {
    if ((typeof record['temporarilyClosed'] !== "undefined") && (record['temporarilyClosed'].toLowerCase() === "true")) {
      return false;
    } else {
      var date = new Date();
      var dateString = date.toDateString();
      var now;
      if (g_forceTime && (g_forceTime.length === 2))
        now = (g_forceTime[0] * 100) + g_forceTime[1];
      else
        now = (date.getHours() * 100) + date.getMinutes();
      var today = DAYS[date.getDay()];
      var openingHoursObj = record['openingHours'];
      var globalSpecialHolidayIsToday = -1;
      var bankHolidayJson = [];

      //check today is bank holiday
      if ((typeof branchFinder.bankHolidayJson !== "undefined") && (branchFinder.bankHolidayJson !== "")) {
        bankHolidayJson = JSON.parse(branchFinder.bankHolidayJson);
      }
      bankHolidayJson.forEach(function (e, i) {
        if ((moment(e.date, "DD-MMM-YY")._d).toString().indexOf(dateString) > -1) {
          if (isHolidayForBranch(record.address.postCode, e)) {
            globalSpecialHolidayIsToday = i;
          }
        }
      });

      // check is there any overrides for bank holiday
      var openingHoursSpecialObj = openingHoursObj.specialOpeningHours;
      var openingHoursSpecialIsToday = -1;
      if (typeof openingHoursSpecialObj !== "undefined") {
        openingHoursSpecialObj.forEach(function (e, i) {
          if ((moment(e.date, "DD-MMM-YY")._d).toString().indexOf(dateString) > -1) {
            openingHoursSpecialIsToday = i;
          }
        });
      }

      if (openingHoursObj && openingHoursObj[today]) {
        var splitHoursComments = [];
        if (openingHoursSpecialIsToday > -1) {
          // bank holiday override from branch takes precedence
          var hour = openingHoursSpecialObj[openingHoursSpecialIsToday].specialOpeningHours;
          if (hour) {
            hour = hour.trim().split(' to ');
          }
          if (hour.length > 1) {
            splitHoursComments.openTime = htmlDecode(hour[0]);
            splitHoursComments.closeTime = htmlDecode(hour[1]);
          } else {
            splitHoursComments.openTime = '0000';
            splitHoursComments.closeTime = '0000';
          }
        } else if (globalSpecialHolidayIsToday > -1) {
          // apply bank holiday
          splitHoursComments.openTime = '0000';
          splitHoursComments.closeTime = '0000';

        } else {
          splitHoursComments = openingHoursObj[today];
        }

        // Start: To find open time and close time - changing it to 24 hour format
        var open = splitHoursComments.openTime.replace(':', '').replace('.', '');
        var openTimePm = 0;
        if (open.toLowerCase().indexOf('pm') > -1) {
          openTimePm = 1200;
        }
        open = open.replace('am', '').replace('AM', '').replace('pm', '').replace('PM', '').trim();

        var close = splitHoursComments.closeTime.replace(':', '').replace('.', '');
        var closeTimePm = 0;
        if (close.toLowerCase().indexOf('pm') > -1) {
          closeTimePm = 1200;
        }
        close = close.replace('pm', '').replace('PM', '').replace('am', '').replace('AM', '').trim();

        open = parseInt(open) + openTimePm;
        close = parseInt(close) + closeTimePm;
        // End: To find open time and close time - changing it to 24 hour format

        return ((now >= open) && (now < close));
      }
    }
  }

  function htmlDecode(input) {
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

  function isHolidayForBranch(postCode, holidayJson) {
    var region = postCode.substring(0, 2);
    if (!postCode) {
      return false;
    }

    if (branchFinder.scotlandPostCodes.indexOf(region) != -1) {
      return holidayJson.scotland === "true";
    } else if (branchFinder.irelandPostCodes.indexOf(region) != -1) {
      return holidayJson.ireland === "true";
    } else {
      return holidayJson.england === "true";
    }
  }

  function displayDistance(location) {
    if (!g_geoLocation) {
      return '';
    }
    var dist = g_locationDistances[location.place_id];
    if (dist < 5) {
      return '<span class="distanceWrapper">( ~' + (Math.floor(dist * 10) / 10) + ' miles )</span>';
    } else {
      return '<span class="distanceWrapper">( ~' + Math.floor(dist) + ' miles )</span>';
    }
  }

  function distanceToCurrent(location) {
    if (g_locationDistances[location.place_id]) {
      return g_locationDistances[location.place_id];
    }
    var lat = location.geometry.location.lat();
    var lng = location.geometry.location.lng();
    g_locationDistances[location.place_id] = (3959 * Math.acos(Math.cos(g_geoLocation.lat.toRad()) * Math.cos(lat.toRad()) * Math.cos(lng.toRad() - g_geoLocation.lng.toRad()) + Math.sin(g_geoLocation.lat.toRad()) * Math.sin(lat.toRad())));
    return g_locationDistances[location.place_id];
  }

  function setMarkersForCurrentData() {
    $.each(g_currentData, function (dataType, dataSet) {
      if (dataType !== 'branches' && dataType !== 'atms' && dataType !== 'offices')
        return;

      var open,
          icon,
          hoverIcon;

      $.each(dataSet, function (index, item) {
        if (dataType === 'branches') {  // Branches
          open = isOpen(item);
          g_currentData[dataType][index].icon = {};
          g_currentData[dataType][index].icon.rest = open ? MARKER_BRANCH_OPEN : MARKER_BRANCH_CLOSED;
          g_currentData[dataType][index].icon.active = MARKER_BRANCH_ACTIVE;
        } else if (dataType === 'offices') {  // Offices
          open = isOpen(item);
          g_currentData[dataType][index].icon = {};
          g_currentData[dataType][index].icon.rest = open ? MARKER_BRANCH_OPEN : MARKER_BRANCH_CLOSED;
          g_currentData[dataType][index].icon.active = MARKER_BRANCH_ACTIVE;
        } else {                        // ATMs
          icon = MARKER_ATM_CLOSED;
          open = isOpen(item) || (item.externalatm === 'Y');  //TBD update internal or external ATM
          if (item.type.toLowerCase() === BRANCH.toLowerCase()) {
            if (open) {
              icon = MARKER_BRANCH_OPEN;
              hoverIcon = MARKER_BRANCH_ACTIVE;
            } else {
              // They way we determine ATM is internal or external got changed .
              //waiting to be fixed in solr .Leaving TBD in places to update it later.
              if (item.externalatm === 'Y') {             //TBD update internal or external ATM
                icon = MARKER_ATM_OPEN;
                hoverIcon = MARKER_ATM_ACTIVE;
              } else {
                icon = MARKER_BRANCH_CLOSED;
                hoverIcon = MARKER_BRANCH_ACTIVE;
              }
            }
          } else {
            if (item.internalatm === 'Y') {                 //TBD update internal or external ATM
              if (open) {
                icon = MARKER_ATM_OPEN;
              } else {
                icon = MARKER_ATM_CLOSED;
              }
            } else {
              icon = MARKER_ATM_OPEN;
              hoverIcon = MARKER_ATM_ACTIVE;
            }
          }
          g_currentData[dataType][index].icon = {};
          g_currentData[dataType][index].icon.rest = icon;
          g_currentData[dataType][index].icon.active = hoverIcon;
        }
      });
    });
  }

  function facilitiesATMfilter(array) {
    if (($.inArray("ATM", array) != -1) && (array.toString().toLowerCase().indexOf(" atm ") != -1)) {
      var filteredArray = [];
      filteredArray = array.filter(function (elem) {
        return elem != "ATM";
      });
      return filteredArray;
    } else {
      return array;
    }
  }

  /* map functions */
  function mapInit() {
    g_map = new google.maps.Map(document.getElementById('map-canvas'), MAP_OPTIONS);

    if (('undefined' !== typeof branchFinder.defaultMap) && ('' !== branchFinder.defaultMap) && ('global' !== branchFinder.defaultMap.toLowerCase())) {

      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({'address': branchFinder.defaultMap}, function (results, status) {
        if (g_map) {
          if (status === 'OK') {
            g_map.setCenter(results[0].geometry.location);
          } else {
            console.log("Geocode was not successful for the following reason: " + status);
            g_map.setCenter(MAP_INITIAL_CENTER);
          }
        }
      });
    }

    google.maps.event.addDomListener(g_map, 'idle', function () {
      g_idleCenter = g_map.getCenter();
    });
    google.maps.event.addDomListener(window, 'resize', function () {
      g_map.setCenter(g_idleCenter);
    });
    google.maps.event.addListenerOnce(g_map, 'idle', function () {
      $('#map-canvas').find('iframe').prop('title', 'Google maps content may not be accessible');
    });

    var options = {
      enableHighAccuracy: true,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
            hasGeolocation(position);
          },
          function (data) {
            hasNoGeolocation(data);
          },
          options
      );
    }
  }

  function mapClear() {
    for (var i = 0; i < g_markers.length; i++) {
      g_markers[i].setMap(null);
    }
    g_markers = [];
    clearDirections();
  }

  function mapAddBarclaysLocation(location, icon, list) {
    var open = isOpen(location);
    var location = location;
    var marker = new google.maps.Marker({
      position: {'lat': parseFloat(location.latitude), 'lng': parseFloat(location.longitude)},
      map: g_map,
      shape: MARKER_SHAPE,
      icon: icon,
      title: location.address1
    });
    location.outletId = location.outletId.toString();

    g_markers.push(marker);
    google.maps.event.addListener(marker, 'click', function () {
      $('#results' + list + ' .resultsItem a').each(function () {
        if ($(this).data('dbid') === decodeValue(location.outletId)) {
          branchFinder.analytics.mapClicked = true;
          $(this).trigger('click');
        }
      });
    });
    google.maps.event.addListener(marker, 'mouseover', function () {
      $('#results' + list + ' .resultsItem a').each(function () {
        if ($(this).data('dbid') === decodeValue(location.outletId))
          $(this).mouseover();
      });
    });
    google.maps.event.addListener(marker, 'mouseout', function () {
      $('#results' + list + ' .resultsItem a').each(function () {
        if ($(this).data('dbid') === decodeValue(location.outletId))
          $(this).mouseout();
      });
    });
  }

  function decodeValue(outletId) {
    var decoded = $('<div/>').text(outletId).text();
    return decoded;
  }

  function mapAddLocationOption(location, locationDetails) {
    var locationDetails = locationDetails;
    var marker = new google.maps.Marker({
      position: {'lat': parseFloat(location.lat), 'lng': parseFloat(location.lng)},
      map: g_map,
      title: locationDetails.formatted_address
    });
    google.maps.event.addListener(marker, 'click', function () {
      $("#location").val(locationDetails.formatted_address);
      mapClear();
      doSearch({lat: parseFloat(location.lat), lng: parseFloat(location.lng)}, false);
    });
    g_markers.push(marker);
  }

  function mapRebound() {
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0; i < g_markers.length; i++) {
      bounds.extend(g_markers[i].getPosition());
    }
    if (g_map) {
      g_map.fitBounds(bounds);
    }
  }

  function mapAddUserLocation() {
    if (g_geoLocation) {
      var viewport;
      if (g_map) {
        viewport = g_map.getBounds();
      }
      if (viewport) {
        var ne = viewport.getNorthEast();
        var sw = viewport.getSouthWest();
        if ((g_geoLocation.lat > sw.lat()) && (g_geoLocation.lat < ne.lat()) && (g_geoLocation.lng > sw.lng()) && (g_geoLocation.lng < ne.lng())) {
          var marker = new google.maps.Marker({
            position: g_geoLocation,
            map: g_map,
            shape: MARKER_SHAPE,
            icon: '//maps.google.com/mapfiles/ms/icons/blue-dot.png',
            title: 'My (approximate) location'
          });
          g_markers.push(marker);
        }
      }
    }
  }


  //Streetview
  function processSVData(data, status) {
    if (status === google.maps.StreetViewStatus.OK && data.copyright.indexOf("Google") > 0) {
      scrollEverythingToTheTop();
      $("body").removeClass('directions').addClass('pano');
      var panoramaOptions = {
        position: data.location.latLng,
        pov: {
          heading: google.maps.geometry.spherical.computeHeading(data.location.latLng, new google.maps.LatLng(g_curr_sv_lat, g_curr_sv_lng)),
          pitch: 0
        },
        zoom: 1
      };
      var myPano = new google.maps.StreetViewPanorama(
          document.getElementById('pano-canvas'),
          panoramaOptions);
      myPano.setVisible(true);
      g_svs_wobbleCount = 0;
    } else {
      if (g_svs_wobbleCount >= 10) {
        g_svs_wobbleCount = 0;
        alert('Sorry. We can\'t find any Street View images for this location.');
      } else {
        g_svs_wobbleCount++;
        var lat = g_curr_sv_lat + ((Math.floor((Math.random() * 4)) - 2) / 10000);
        var lng = g_curr_sv_lng + ((Math.floor((Math.random() * 4)) - 2) / 10000);
        g_svs.getPanoramaByLocation(new google.maps.LatLng(lat, lng), 50, processSVData);
      }
    }
  }

  function getDirections() {
    var otherLocation = otherLocation || '';
    clearDirections();
    $("body").removeClass('pano');
    scrollEverythingToTheTop();
    $("body").addClass('directions');
    $('#directions-response').empty();
    $canvas = $('#directions-canvas').empty();
    var $select = $('<div />')
        .attr({'class': 'select-field'})
        .append(
            $('<select />')
                .attr({'id': 'mode-of-transport_select'})
                .append(
                    $('<option value="' + DIRECTIONS_TRANSPORT_CAR + '"  ' + (g_preferedTransport === DIRECTIONS_TRANSPORT_CAR ? 'selected="selected"' : '') + '  >Car</option>'))
                .append(
                    $('<option value="' + DIRECTIONS_TRANSPORT_FOOT + '" ' + (g_preferedTransport === DIRECTIONS_TRANSPORT_FOOT ? 'selected="selected"' : '') + '  >Foot</option>'))
                .append(
                    $('<option value="' + DIRECTIONS_TRANSPORT_BIKE + '" ' + (g_preferedTransport === DIRECTIONS_TRANSPORT_BIKE ? 'selected="selected"' : '') + '  >Bike</option>'))
                .on('change', function () {
                      g_preferedTransport = $(this).val();
                      getDirectionsStart();
                    }
                )
        )
        .append(
            $('<span />')
        );
    $canvas.append($('<label class="direction_controls" for="mode-of-transport_select">Mode of transport</label>')).append($select);

    var startingPointOptions = $('<div />')
        .attr('class', 'field-row message-region')
        .append();

    if (g_geoLocation) {
      startingPointOptions
          .append(
              $('<input />')
                  .attr({
                    id: 'starting-gps',
                    'name': 'starting',
                    'type': 'radio',
                    'class': 'directions-start',
                    "value": DIRECTIONS_FROMGEOLOCATION
                  })
          )
          .append(
              $('<label />')
                  .attr({
                    'class': 'start_controls',
                    'for': 'starting-gps'
                  })
                  .text("My GPS location")
          );
    }
    if ($('#location').val().length > 0) {
      startingPointOptions
          .append(
              $('<input />')
                  .attr({
                    id: 'starting-search-center',
                    'name': 'starting',
                    'type': 'radio',
                    'class': 'directions-start',
                    "value": DIRECTIONS_FROMSEARCHCENTER
                  })
          )
          .append(
              $('<label />')
                  .attr({
                    'class': 'start_controls',
                    'for': 'starting-search-center'
                  })
                  .text($('#location').val().split(',')[0])
          );
    }

    startingPointOptions
        .append(
            $('<input />')
                .attr({
                  id: 'starting-other',
                  'name': 'starting',
                  'type': 'radio',
                  'class': 'directions-start',
                  "value": DIRECTIONS_FROMOTHER
                })
        )
        .append(
            $('<label />')
                .attr({
                  'class': 'start_controls label-input',
                  'for': 'starting-other'
                })
                .append(
                    $('<input />')
                        .attr({
                          id: 'directions-start-other',
                          'type': 'text',
                          'placeholder': 'Another location',
                          "value": otherLocation
                        })
                )
        );

    var startingPointWrapper = $('<fieldset />')
        .attr('class', 'label')
        .append(
            $('<legend />')
                .attr('class', 'start_controls start_controls_title')
                .text("Starting point")
        )
        .append(startingPointOptions);


    $canvas.append(startingPointWrapper);
    $canvas.append($('<div id="directions-response"></div>'));
    $canvas.find('input.directions-start').eq(0).prop('checked', true);
    $canvas.find('input.directions-start').change(function () {
      getDirectionsStart();
    });
    $canvas.find('input#directions-start-other').on('focus', function () {
      $('input.directions-start').each(function () {
        if ($(this).val() === DIRECTIONS_FROMOTHER) {
          $(this).prop('checked', true).change();
        }
      });
    }).on('focus blur change', function () {
      clearTimeout(g_directionsTimeout);
      g_directionsTimeout = setTimeout(function () {
        getDirectionsStart();
      }, 500);
    });
    getDirectionsStart();
  }

  function getDirectionsStart() {
    $startLocation = $('input.directions-start:checked');
    if (!$startLocation)
      return;

    switch (parseInt($startLocation.val(), 10)) {
      case DIRECTIONS_FROMGEOLOCATION:
        var start = new google.maps.LatLng(g_geoLocation.lat, g_geoLocation.lng);
        doDirectionsSearch(start);
        break;
      case DIRECTIONS_FROMSEARCHCENTER:
        var start = new google.maps.LatLng(g_lastSearch.lat, g_lastSearch.lng);
        doDirectionsSearch(start);
        break;
      case DIRECTIONS_FROMOTHER:
        var address = $('#directions-start-other').val();
        if (address.length < 3)
          return;
        var southWest = new google.maps.LatLng(49.6, -7.65);
        var northEast = new google.maps.LatLng(61.0, 1.7);
        var bounds = new google.maps.LatLngBounds(southWest, northEast);
        var geocoder = new google.maps.Geocoder();
        var geocoderOptions = {
          address: address,
          bounds: bounds,
          region: "GB"
        };
        $('#location').addClass('searching');
        geocoder.geocode(geocoderOptions, function (results, status) {
          $('#location').removeClass('searching');
          if (status === google.maps.GeocoderStatus.OK) {
            if (results.length > 0) {
              doDirectionsSearch(results[0].geometry.location);
            }
          }
        });
        break;
      default:
        break;
    }
    return;
  }

  function doDirectionsSearch(startLocation) {
    clearDirections();
    var end = new google.maps.LatLng(g_viewingLocation.lat, g_viewingLocation.lng);
    var travelMode;
    switch (parseInt(g_preferedTransport, 10)) {
      case DIRECTIONS_TRANSPORT_CAR:
        travelMode = google.maps.TravelMode.DRIVING;
        break;
      case DIRECTIONS_TRANSPORT_BIKE:
        travelMode = google.maps.TravelMode.BICYCLING;
        break;
      default:
        travelMode = google.maps.TravelMode.WALKING;
        break;
    }
    var request = {
      origin: startLocation,
      destination: end,
      travelMode: travelMode,
      unitSystem: google.maps.UnitSystem.IMPERIAL
    };
    if (!g_directionsService) {
      g_directionsService = new google.maps.DirectionsService();
    }
    g_directionsDisplay = new google.maps.DirectionsRenderer();
    g_directionsService.route(request, function (result, status) {
      g_directionsDisplay.setOptions({suppressMarkers: true, suppressBicyclingLayer: true});
      g_directionsDisplay.setMap(g_map);
      g_directionsDisplay.setPanel(document.getElementById('directions-response'));
      if (status === google.maps.DirectionsStatus.OK) {
        g_directionsDisplay.setDirections(result);
      } else {
        $('#directions-response').html("<p>No route could be found.</p>");
      }
    });
  }

  function clearDirections() {
    $('#directions-response').empty();
    if (!g_directionsDisplay)
      return;
    g_directionsDisplay.setMap(null);
    g_directionsDisplay = false;
  }

  /* END map functions */


  /* DEBUG AND MAGIC */
  function setTime(searchTerm) {
    $("#location").val("");
    if (!DEBUG)
      return false;
    searchTerm = searchTerm.split(' ');
    if (searchTerm.length === 3) {
      g_forceTime = [parseInt(searchTerm[1], 10), parseInt(searchTerm[2], 10)];
    } else {
      g_forceTime = false;
    }
    if ($("body").hasClass('results-branch')) {
      renderBranches();
    } else {
      renderAtms();
    }
  }


  if (typeof(Number.prototype.toRad) === "undefined") {
    Number.prototype.toRad = function () {
      return this * Math.PI / 180;
    }
  }

  function setUrl(branchFinder,item) {
    var addressType = item.address.line1;
    var solrPath = item.locationUrl;
    if (addressType.startsWith("Branch") || addressType.startsWith("Local") || addressType.startsWith("Van") || addressType.startsWith("Bank Hub") || addressType.startsWith("Banking Hub")) {
        //to check
        return branchFinder.siteName + solrPath;
      }
    else {
      return "";
    }
  }

  /*
   * INIT
   */
  var facilities = {};
  var splitFacilities = (typeof getUrlVars()["facilities"] === "undefined") ? [] : getUrlVars()["facilities"].split(',');
  $.each(splitFacilities, function (index, value) {
    var idConvertion = value.toLowerCase().replace(/ /g, "-").replace(/_/g, "-").replace(/%20/g, "-");
    $("LI#" + idConvertion + " A").trigger("click");
  });

});
