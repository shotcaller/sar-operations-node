M.AutoInit();

var mymap = L.map('mapid').setView([22, 78], 5);

var layerControl = L.control.layers();
layerControl.addTo(mymap);

var dark_v10 = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
  maxZoom: 18,
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors,' +
    '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/dark-v10'
});

var googleSat = L.tileLayer('http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);

var ESRI_Terrain = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

var OpenStreetMap_HOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
});

var CartoDB_VoyagerOnlyLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_only_labels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
});

var NASA_World_At_Night = L.tileLayer('https://map1.vis.earthdata.nasa.gov/wmts-webmerc/VIIRS_CityLights_2012/default/{time}/{tilematrixset}{maxZoom}/{z}/{y}/{x}.{format}', {
  attribution: 'Imagery provided by services from the Global Imagery Browse Services (GIBS), operated by the NASA/GSFC/Earth Science Data and Information System (<a href="https://earthdata.nasa.gov">ESDIS</a>) with funding provided by NASA/HQ.',
  bounds: [
    [-85.0511287776, -179.999999975],
    [85.0511287776, 179.999999975]
  ],
  minZoom: 1,
  maxZoom: 8,
  format: 'jpg',
  time: '',
  tilematrixset: 'GoogleMapsCompatible_Level'
});

var STADIA_SmoothDarkStreets = L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});

layerControl.addBaseLayer(dark_v10, "Dark Street+Borders");
layerControl.addBaseLayer(ESRI_Terrain, "Terrain");
layerControl.addBaseLayer(STADIA_SmoothDarkStreets, "Default Dark Borders");
layerControl.addBaseLayer(OpenStreetMap_HOT, "Light Topographical Borders");
layerControl.addBaseLayer(googleSat, "Google Satellite");

//add controls for geoman
mymap.pm.addControls({
  position: 'topleft',
  color: 'orange',
  fillColor: 'green',
  fillOpacity: 0.4,
});

mymap.pm.setPathOptions({
  color: '#900000',
  fillColor: '#a00',
  fillOpacity: 0.2,
});

L.control.fullscreen({
  position: 'topleft', // change the position of the button can be topleft, topright, bottomright or bottomleft, defaut topleft
  title: 'Enter Fullscreen mode.', // change the title of the button, default Full Screen
  titleCancel: 'Exit fullscreen mode.', // change the title of the button when fullscreen is on, default Exit Full Screen
  content: null, // change the content of the button, can be HTML, default null
  forceSeparateButton: true, // force seperate button to detach from zoom buttons, default false
  forcePseudoFullscreen: true, // force use of pseudo full screen even if full screen API is available, default false
  fullscreenElement: false // Dom element to render in full screen, false by default, fallback to map._container
}).addTo(mymap);


L.control.mouseCoordinate({
  gpsLong: true,
  gps: true
}).addTo(mymap);

var optionsForPolyLineMeasure = {
  position: 'topleft', // Position to show the control. Values: 'topright', 'topleft', 'bottomright', 'bottomleft'
  unit: 'metres', // Show imperial or metric distances. Values: 'metres', 'landmiles', 'nauticalmiles'
  clearMeasurementsOnStop: false, // Clear all the measurements when the control is unselected
  showBearings: true, // Whether bearings are displayed within the tooltips
  bearingTextIn: 'In', // language dependend label for inbound bearings
  bearingTextOut: 'Out', // language dependend label for outbound bearings
  tooltipTextFinish: 'Click to <b>finish line</b><br>',
  tooltipTextDelete: 'Press SHIFT-key and click to <b>delete point</b>',
  tooltipTextMove: 'Click and drag to <b>move point</b><br>',
  tooltipTextResume: '<br>Press CTRL-key and click to <b>resume line</b>',
  tooltipTextAdd: 'Press CTRL-key and click to <b>add point</b>',
  // language dependend labels for point's tooltips
  measureControlTitleOn: 'Turn on PolylineMeasure', // Title for the control going to be switched on
  measureControlTitleOff: 'Turn off PolylineMeasure', // Title for the control going to be switched off
  measureControlLabel: '&#8614;', // Label of the Measure control (maybe a unicode symbol)
  measureControlClasses: [], // Classes to apply to the Measure control
  showClearControl: true, // Show a control to clear all the measurements
  clearControlTitle: 'Clear Measurements', // Title text to show on the clear measurements control button
  clearControlLabel: '&times', // Label of the Clear control (maybe a unicode symbol)
  clearControlClasses: [], // Classes to apply to clear control button
  showUnitControl: true, // Show a control to change the units of measurements
  distanceShowSameUnit: true, // Keep same unit in tooltips in case of distance less then 1 km/mi/nm
  unitControlTitle: { // Title texts to show on the Unit Control button
    text: 'Change Units',
    metres: 'metres',
    landmiles: 'land miles',
    nauticalmiles: 'nautical miles'
  },
  unitControlLabel: {
    nauticalmiles: 'nm', // Unit symbols to show in the Unit Control button and measurement labels
    metres: 'm',
    kilometres: 'km',
    feet: 'ft',
    landmiles: 'mi'
  },
  tempLine: { // Styling settings for the temporary dashed line
    color: '#D01', // Dashed line color
    weight: 2 // Dashed line weight
  },
  fixedLine: { // Styling for the solid line
    color: '#0AA', // Solid line color
    weight: 2 // Solid line weight
  },
  startCircle: { // Style settings for circle marker indicating the starting point of the polyline
    color: '#000', // Color of the border of the circle
    weight: 1, // Weight of the circle
    fillColor: '#0f0', // Fill color of the circle
    fillOpacity: 1, // Fill opacity of the circle
    radius: 3 // Radius of the circle
  },
  intermedCircle: { // Style settings for all circle markers between startCircle and endCircle
    color: '#000', // Color of the border of the circle
    weight: 1, // Weight of the circle
    fillColor: '#fff', // Fill color of the circle
    fillOpacity: 1, // Fill opacity of the circle
    radius: 3 // Radius of the circle
  },
  currentCircle: { // Style settings for circle marker indicating the latest point of the polyline during drawing a line
    color: '#000', // Color of the border of the circle
    weight: 1, // Weight of the circle
    fillColor: '#f0f', // Fill color of the circle
    fillOpacity: 1, // Fill opacity of the circle
    radius: 3 // Radius of the circle
  },
  endCircle: { // Style settings for circle marker indicating the last point of the polyline
    color: '#000', // Color of the border of the circle
    weight: 1, // Weight of the circle
    fillColor: '#f00', // Fill color of the circle
    fillOpacity: 1, // Fill opacity of the circle
    radius: 3 // Radius of the circle
  },
};

let polylineMeasure = L.control.polylineMeasure(optionsForPolyLineMeasure);
polylineMeasure.addTo(mymap), {
  fixedLine: {
    color: '#A00'
  }
};

function debugevent(e) {
  console.debug(e.type, e, polylineMeasure._currentLine)
}

mymap.on('polylinemeasure:toggle', debugevent);
mymap.on('polylinemeasure:start', debugevent);
mymap.on('polylinemeasure:resume', debugevent);
mymap.on('polylinemeasure:finish', debugevent);
mymap.on('polylinemeasure:clear', debugevent);
mymap.on('polylinemeasure:add', debugevent);
mymap.on('polylinemeasure:insert', debugevent);
mymap.on('polylinemeasure:move', debugevent);
mymap.on('polylinemeasure:remove', debugevent);

function addCircle(lat, lon, radiusOfCircle = 5000) {
  var circle = L.circle([lat, lon], {
    color: '#A00',
    stroke: 1,
    fillColor: '#111',
    fillOpacity: 0.4,
    radius: radiusOfCircle
  }).addTo(mymap);
}


$.getJSON('json/wind_10m.json', function (data) {
  var velocityLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: 'Global Wind [10m]',
      displayPosition: 'bottomleft',
      displayEmptyString: 'No wind data',
      speedUnit: 'm/s',
    },
    data: data,
    maxVelocity: 30,
    minVelocity: 0,
    velocityScale: 0.02,
    opacity: 0.1 
  });
  layerControl.addOverlay(velocityLayer, 'Wind [Ground+10m]');
});

$.getJSON('json/wind_6000m.json', function (data) {
  var velocityLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: 'Global Wind [6000m]',
      displayPosition: 'bottomleft',
      displayEmptyString: 'No wind data',
      speedUnit: 'm/s',
    },
    data: data,
    maxVelocity: 30,
    minVelocity: 0,
    velocityScale: 0.02,
    opacity: 0.1
  });
  layerControl.addOverlay(velocityLayer, 'Wind [Ground+6000m]');
});

$.getJSON('json/oscar_grib.json', function (data) {
  var velocityLayer = L.velocityLayer({
    displayValues: true,
    displayOptions: {
      velocityType: 'Global Ocean Current',
      displayPosition: 'bottomleft',
      displayEmptyString: 'No current data',
      speedUnit: 'm/s',
    },
    data: data,
    maxVelocity: 1,
    velocityScale: 0.5,
  });
  layerControl.addOverlay(velocityLayer, 'Ocean currents [Experimental]');
});

var sidebar = L.control.sidebar({
  container: "sidebar",
  position: "left",
  closeButton: true,
  autopan: true
}).addTo(mymap);
