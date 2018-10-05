var locations = [
    ['<label>BLAIQMEDIA LTD Deutschland</label><br>Westring 1<br>33378 Rheda-WiedenbrÃ¼ck<br>NRW, Deutschland', 51.828552, 8.2992893, 2],
    ['<label>BLAIQMEDIA LTD England</label><br>Victoria House, Suite 41,<br>38 Surrey Quays Road<br>SE16 7DX London', 51.5194206, -0.124383, 2]
];
var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    scrollwheel: true,
    navigationControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    scaleControl: true,
    draggable: true,
    styles: [
        {
            "featureType": "administrative",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#444444"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "all",
            "stylers": [
                {
                    "saturation": -50
                },
                {
                    "lightness": 45
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "simplified"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "all",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#d6d6d6"
                },
                {
                    "visibility": "on"
                }
            ]
        }
    ],
    center: new google.maps.LatLng(52.128552, 4.2992893),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});
var infowindow = new google.maps.InfoWindow();
var marker, i;
for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map ,
        icon: 'assets/images/marker.png'
    });
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
        }
    })(marker, i));
}
