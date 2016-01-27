$( document ).on( "pagecreate", ".jqm-demos", function( event ) {
	var RoundHeight = parseInt($('.round_fond').height()-3);
	$(".round_fond").css({ top: '-'+RoundHeight+'px' });
	
	var search,
		page = $( this ),
		that = this,
		searchUrl = ( $( this ).hasClass( "jqm-home" ) ) ? "_search/" : "../_search/",
		searchContents = $( ".jqm-search ul.jqm-list" ).find( "li:not(.ui-collapsible)" ),
		version = $.mobile.version || "dev",
		words = version.split( "-" ),
		ver = words[0],
		str = words[1] || "",
		text = ver;
		
	// Global navmenu panel
	$( ".jqm-navmenu-panel ul" ).listview();
	
	$( ".jqm-navmenu-link" ).on( "click", function() {
		page.find( ".jqm-navmenu-panel:not(.jqm-panel-page-nav)" ).panel( "open" );
	});

});

/*
* Google Maps documentation: http://code.google.com/apis/maps/documentation/javascript/basics.html
* Geolocation documentation: http://dev.w3.org/geo/api/spec-source.html
*/
$( document ).on( "pagecreate", "#map-page", function() {
	
	
	var defaultLatLng = new google.maps.LatLng(48.828558, 2.357990);  // Default to Hollywood, CA when no geolocation support
    if ( navigator.geolocation ) {
        function success(pos) {
            // Location found, show map with these coordinates
            drawMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function fail(error) {
            drawMap(defaultLatLng);  // Failed to find location, show default map
        }
        // Find the users current position.  Cache the location for 5 minutes, timeout after 6 seconds
        navigator.geolocation.getCurrentPosition(success, fail, {maximumAge: 500000, enableHighAccuracy:true, timeout: 6000});
    } else {
        drawMap(defaultLatLng);  // No geolocation support, show default map
    }
    function drawMap(latlng) {
        var myOptions = {
            zoom: 10,
            center: latlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
        // Add an overlay to the map of current lat/lng
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "Greetings!"
        });
    }
	
});


$(document).ready(function () {
	var RoundHeight = parseInt($('.round_fond').height()-3);
	$(".round_fond").css({ top: '-'+RoundHeight+'px' });
	
	var search,
		page = $( this ),
		that = this,
		searchUrl = ( $( this ).hasClass( "jqm-home" ) ) ? "_search/" : "../_search/",
		searchContents = $( ".jqm-search ul.jqm-list" ).find( "li:not(.ui-collapsible)" ),
		version = $.mobile.version || "dev",
		words = version.split( "-" ),
		ver = words[0],
		str = words[1] || "",
		text = ver;
		
	// Global navmenu panel
	$( ".jqm-navmenu-panel ul" ).listview();
	
	$( ".jqm-navmenu-link" ).on( "click", function() {
		page.find( ".jqm-navmenu-panel:not(.jqm-panel-page-nav)" ).panel( "open" );
	});
});

$(window).resize(function(){
    $(".round_fond").css({ top: '-'+parseInt($('.round_fond').height()-3)+'px' });
});

