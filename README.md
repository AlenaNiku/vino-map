# Welcome to Vino map with **mapbox.js**!
### *mapbox.js* is a JavaScript library that uses WebGL to render interactive maps from vector tiles and Mapbox styles. 

![vino map gif](https://github.com/AlenaNiku/vino-map/blob/master/vino-giphy.gif)

**Vino map** is an interactive map of the most beautiful and delicious wineries in America🍷 </br>
This app was built for my **first ever hackathon** in under 4 hours and it brought me **3rd place** 🤩</br>
This Hackathon was organized by **Mintbean** - a software developer talent incubator. Learn more about [Mintbean](https://www.mintbean.io/)</br>

#### Check out my blog post 👉 &nbsp;  <a href="https://medium.com/@alenanikulina0/custom-map-with-mapbox-how-i-built-my-vino-map-bb97a36865fa" target="_blank">Custom Map with Mapbox (How I built Vino Map)</a>

#### Check it out live 👉 &nbsp; <a href="https://alenaniku.github.io/vino-map/" target="_blank">Vino Map</a>

## Installation
### Clone

- Clone this repo to your local machine using `https://github.com/AlenaNiku/vino-map.git`

### Setup

> install as npm package

- npm install --save mapbox-gl

> Include the CSS file in the `<head>` of your HTML file
  
- `<link href='https://api.mapbox.com/mapbox-gl-js/v1.11.1/mapbox-gl.css' rel='stylesheet' />`

> Include the following code in the `<body>` of your HTML file

```
import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpbmlrdWwiLCJhIjoiY2tiY28xbHd4MDNyMzJybnR0czZqYW1xbSJ9.z_-zeSM0wGBIMbwTVT9J-A';
const map = new mapboxgl.Map({
    container: '<your HTML element id>',
    style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});
```


#### I recommend checking the documentation <a href="https://docs.mapbox.com/mapbox-gl-js/api/" target="_blank">mapbox GL JS</a>

## Contributing

> To get started...

### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine using `https://github.com/AlenaNiku/vino-map.git`

### Step 2

- **HACK AWAY!** 🔨🔨🔨

## License

[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

- **[MIT license](http://opensource.org/licenses/mit-license.php)**
