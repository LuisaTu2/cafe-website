function initMap() {   
    var loc_center = { lat: 37.7749, lng: -122.4194 };
    var map = new google.maps.Map(document.getElementById('mapppp'), {
        zoom: 4,
        center: loc_center
    });
    var marker = new google.maps.Marker({
                position: loc_center,
                map: map
    });
};