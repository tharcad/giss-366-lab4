// Build your map here!
// Create the map between Mason Addition Road and Greenway Elementary.
let map = L.map("map", {
    center: [31.4195, -109.8873],
    zoom: 14
});

// Add the OpenStreetMap basemap.
L.tileLayer(
    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
    {
        attribution: "&copy; OpenStreetMap contributors"
    }
).addTo(map);

// Add a marker at Greenway Elementary School.
let firstGradeMarker = L.marker(
    [31.41688, -109.88142]
).addTo(map);

firstGradeMarker.bindPopup(
    "<b>First Grade Class</b><br>Greenway Elementary School, where I attended my first-grade class, before moving to New Mexico."
);

// Create an approximate polygon around the Mason Addition Road area.
let childhoodHome = L.polygon(
    [
        [31.423, -109.8920],
        [31.423, -109.8918],
        [31.4228, -109.8918],
        [31.4228, -109.8920]
    ],
    {
        color: "darkred",
        weight: 3,
        fillColor: "orange",
        fillOpacity: 0.35
    }
).addTo(map);

childhoodHome.bindPopup(
    "<b>Childhood Home</b><br>Not to be confused with the location of my current residence. Lived here from 2001 to 2008."
);

// Automatically adjust the view so both features appear on screen.
let childhoodLocations = L.featureGroup([
    firstGradeMarker,
    childhoodHome
]);

map.fitBounds(childhoodLocations.getBounds(), {
    padding: [40, 40]
});

// Part 5, Option D: Add a scale bar.
L.control.scale({
    metric: false,
    imperial: true
}).addTo(map);
