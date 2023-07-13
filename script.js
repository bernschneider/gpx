// Load the Mapbox GL library
mapboxgl.accessToken = 'INCLUDE_HERE_YOUR_MAPBOX_ACCESS_TOKEN';

// Create a map
var map = new mapboxgl.Map({
    container: 'map',
    center: [0, 0],
    zoom: 1,
    style: 'mapbox/streets-v12'
});

// Add a control to add GPX tracks
var addTrackButton = document.getElementById('add-track');
addTrackButton.addEventListener('click', addTrack);

// Add a track to the map
function addTrack(event) {
    // Get the GPX file from the user
    var fileInput = document.getElementById('file-input');
    var file = fileInput.files[0];

    // If no file was selected, return
    if (!file) {
        return;
    }

    // Load the GPX file into a GeoJSON object
    var geojson = mapboxgl.GeoJSON.fromGeoJSON(file);

    // Add the tracks to the map
    map.addLayer(new mapboxgl.Layer('tracks', {
        data: geojson,
        type: 'line',
        color: '#0000ff',
        width: 2
    }));
}
