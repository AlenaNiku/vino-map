// Initialize the map
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpbmlrdWwiLCJhIjoiY2tiY28xbHd4MDNyMzJybnR0czZqYW1xbSJ9.z_-zeSM0wGBIMbwTVT9J-A';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alinikul/ckbgqayzy32fk1io1siz59ypg', // stylesheet location
    center: [-96, 37.8], // starting position [lng, lat]
    zoom: 3.5 // starting zoom
});

