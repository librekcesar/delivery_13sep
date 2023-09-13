var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_cdmx_dos_columnas_1 = new ol.format.GeoJSON();
var features_cuadricula_cdmx_dos_columnas_1 = format_cuadricula_cdmx_dos_columnas_1.readFeatures(json_cuadricula_cdmx_dos_columnas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_cdmx_dos_columnas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_cdmx_dos_columnas_1.addFeatures(features_cuadricula_cdmx_dos_columnas_1);
var lyr_cuadricula_cdmx_dos_columnas_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_cdmx_dos_columnas_1, 
                style: style_cuadricula_cdmx_dos_columnas_1,
                interactive: true,
    title: 'cuadricula_cdmx_dos_columnas<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_0.png" /> 0 - 6<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_1.png" /> 6 - 19<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_2.png" /> 19 - 37<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_3.png" /> 37 - 61<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_4.png" /> 61 - 87<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_5.png" /> 87 - 118<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_6.png" /> 118 - 149<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_7.png" /> 149 - 186<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_8.png" /> 186 - 280<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_9.png" /> 280 - 357<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_10.png" /> 357 - 521<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_1_11.png" /> 521 - 638<br />'
        });
var format_p99_13sep_2 = new ol.format.GeoJSON();
var features_p99_13sep_2 = format_p99_13sep_2.readFeatures(json_p99_13sep_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_p99_13sep_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_p99_13sep_2.addFeatures(features_p99_13sep_2);
var lyr_p99_13sep_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_p99_13sep_2, 
                style: style_p99_13sep_2,
                interactive: false,
                title: '<img src="styles/legend/p99_13sep_2.png" /> p99_13sep'
            });
var format_buffers_sept_3 = new ol.format.GeoJSON();
var features_buffers_sept_3 = format_buffers_sept_3.readFeatures(json_buffers_sept_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffers_sept_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffers_sept_3.addFeatures(features_buffers_sept_3);
var lyr_buffers_sept_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffers_sept_3, 
                style: style_buffers_sept_3,
                interactive: false,
                title: '<img src="styles/legend/buffers_sept_3.png" /> buffers_sept'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_cdmx_dos_columnas_1.setVisible(true);lyr_p99_13sep_2.setVisible(true);lyr_buffers_sept_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_cdmx_dos_columnas_1,lyr_p99_13sep_2,lyr_buffers_sept_3];
lyr_cuadricula_cdmx_dos_columnas_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_p99_13sep_2.set('fieldAliases', {'ID': 'ID', 'Estación': 'Estación', 'Zonificación': 'Zonificación', 'Nombre del punto99': 'Nombre del punto99', 'Dirección': 'Dirección', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Colonia': 'Colonia', 'Correo electrónico': 'Correo electrónico', 'CP': 'CP', 'Estado': 'Estado', 'Nombre del responsable': 'Nombre del responsable', 'Número celular del responsable': 'Número celular del responsable', 'layer': 'layer', 'path': 'path', });
lyr_buffers_sept_3.set('fieldAliases', {'ID': 'ID', 'Estación': 'Estación', 'Zonificación': 'Zonificación', 'Nombre del punto99': 'Nombre del punto99', 'Dirección': 'Dirección', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Colonia': 'Colonia', 'Correo electrónico': 'Correo electrónico', 'CP': 'CP', 'Estado': 'Estado', 'Nombre del responsable': 'Nombre del responsable', 'Número celular del responsable': 'Número celular del responsable', 'layer': 'layer', 'path': 'path', });
lyr_cuadricula_cdmx_dos_columnas_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_p99_13sep_2.set('fieldImages', {'ID': 'Range', 'Estación': 'TextEdit', 'Zonificación': 'TextEdit', 'Nombre del punto99': 'TextEdit', 'Dirección': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Colonia': 'TextEdit', 'Correo electrónico': 'TextEdit', 'CP': 'Range', 'Estado': 'TextEdit', 'Nombre del responsable': 'TextEdit', 'Número celular del responsable': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_buffers_sept_3.set('fieldImages', {'ID': 'Range', 'Estación': 'TextEdit', 'Zonificación': 'TextEdit', 'Nombre del punto99': 'TextEdit', 'Dirección': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Colonia': 'TextEdit', 'Correo electrónico': 'TextEdit', 'CP': 'Range', 'Estado': 'TextEdit', 'Nombre del responsable': 'TextEdit', 'Número celular del responsable': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_cuadricula_cdmx_dos_columnas_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_p99_13sep_2.set('fieldLabels', {'ID': 'no label', 'Estación': 'no label', 'Zonificación': 'no label', 'Nombre del punto99': 'no label', 'Dirección': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Colonia': 'no label', 'Correo electrónico': 'no label', 'CP': 'no label', 'Estado': 'no label', 'Nombre del responsable': 'no label', 'Número celular del responsable': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_buffers_sept_3.set('fieldLabels', {'ID': 'no label', 'Estación': 'no label', 'Zonificación': 'no label', 'Nombre del punto99': 'no label', 'Dirección': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Colonia': 'no label', 'Correo electrónico': 'no label', 'CP': 'no label', 'Estado': 'no label', 'Nombre del responsable': 'no label', 'Número celular del responsable': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_buffers_sept_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});