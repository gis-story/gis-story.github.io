var map2 = {
    container: 'map2',
    style: JSONstyle,

    center: [98.339734, 7.907950],
    zoom: 13,
    preserveDrawingBuffer: true,

}

var map1 = {

    container: 'map',
    style: JSONstyle,

    center: [98.339734, 7.907950],
    zoom: 13,
    preserveDrawingBuffer: true,

}

url = 'https://kathumap.i-bitz.co.th/geoserver/KathuMap/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&Styles=point2&layers=';
url2 = 'https://kathumap.i-bitz.co.th/geoserver/KathuMap/wms?&bbox={bbox-epsg-3857}&format=image/png&service=WMS&version=1.1.1&request=GetMap&srs=EPSG:3857&transparent=true&width=256&height=256&layers=';

var layers1 = {
    'type': 'raster',
    'tiles': [
        url2 + 'Hexagon_TH830201_2017'
    ],
    'tileSize': 256
}

var style1 = {
    'id': 'อุบัติเหตุ-พ.ศ.2560',
    'type': 'raster',
    'source': 'wms-2017',
    'paint': {},
    'layout': { 'visibility': 'none' },
}

var layers2 = {
    'type': 'raster',
    'tiles': [
        url2 + 'Hexagon_TH830201_2018'
    ],
    'tileSize': 256
}

var style2 = {
    'id': 'อุบัติเหตุ-พ.ศ.2561',
    'type': 'raster',
    'source': 'wms-2018',
    'paint': {},
    'layout': { 'visibility': 'none' },
}

var layers3 = {
    'type': 'raster',
    'tiles': [
        url2 + 'Hexagon_TH830201_2019'
    ],
    'tileSize': 256
}

var style3 = {
    'id': 'อุบัติเหตุ-พ.ศ.2562',
    'type': 'raster',
    'source': 'wms-2019',
    'paint': {},
    'layout': { 'visibility': 'none' },
}

var layers4 = {
    'type': 'raster',
    'tiles': [
        url2 + 'Hexagon_TH830201_2020'
    ],
    'tileSize': 256
}

var style4 = {
    'id': 'อุบัติเหตุ-พ.ศ.2563',
    'type': 'raster',
    'source': 'wms-2020',
    'paint': {},
    'layout': { 'visibility': 'none' },
}
