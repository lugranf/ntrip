ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5367").setExtent([238440.766591, 969347.173901, 699024.131770, 1230983.715712]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Cobertura50km_2 = new ol.format.GeoJSON();
var features_Cobertura50km_2 = format_Cobertura50km_2.readFeatures(json_Cobertura50km_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Cobertura50km_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cobertura50km_2.addFeatures(features_Cobertura50km_2);
var lyr_Cobertura50km_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cobertura50km_2, 
                style: style_Cobertura50km_2,
                interactive: true,
                title: '<img src="styles/legend/Cobertura50km_2.png" /> Cobertura 50 km'
            });
var format_Cobertura30km_3 = new ol.format.GeoJSON();
var features_Cobertura30km_3 = format_Cobertura30km_3.readFeatures(json_Cobertura30km_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Cobertura30km_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cobertura30km_3.addFeatures(features_Cobertura30km_3);
var lyr_Cobertura30km_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cobertura30km_3, 
                style: style_Cobertura30km_3,
                interactive: true,
                title: '<img src="styles/legend/Cobertura30km_3.png" /> Cobertura 30 km'
            });
var format_Cobertura20km_4 = new ol.format.GeoJSON();
var features_Cobertura20km_4 = format_Cobertura20km_4.readFeatures(json_Cobertura20km_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_Cobertura20km_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cobertura20km_4.addFeatures(features_Cobertura20km_4);
var lyr_Cobertura20km_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cobertura20km_4, 
                style: style_Cobertura20km_4,
                interactive: true,
                title: '<img src="styles/legend/Cobertura20km_4.png" /> Cobertura 20 km'
            });
var format_EstacionesNTRIP_5 = new ol.format.GeoJSON();
var features_EstacionesNTRIP_5 = format_EstacionesNTRIP_5.readFeatures(json_EstacionesNTRIP_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5367'});
var jsonSource_EstacionesNTRIP_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EstacionesNTRIP_5.addFeatures(features_EstacionesNTRIP_5);
var lyr_EstacionesNTRIP_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EstacionesNTRIP_5, 
                style: style_EstacionesNTRIP_5,
                interactive: true,
                title: '<img src="styles/legend/EstacionesNTRIP_5.png" /> Estaciones NTRIP'
            });

lyr_OpenTopoMap_0.setVisible(false);lyr_OSMStandard_1.setVisible(true);lyr_Cobertura50km_2.setVisible(true);lyr_Cobertura30km_3.setVisible(true);lyr_Cobertura20km_4.setVisible(true);lyr_EstacionesNTRIP_5.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_OSMStandard_1,lyr_Cobertura50km_2,lyr_Cobertura30km_3,lyr_Cobertura20km_4,lyr_EstacionesNTRIP_5];
lyr_Cobertura50km_2.set('fieldAliases', {'Num': 'Num', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Elev': 'Elev', 'Nombre': 'Nombre', });
lyr_Cobertura30km_3.set('fieldAliases', {'Num': 'Num', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Elev': 'Elev', 'Nombre': 'Nombre', });
lyr_Cobertura20km_4.set('fieldAliases', {'Num': 'Num', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Elev': 'Elev', 'Nombre': 'Nombre', });
lyr_EstacionesNTRIP_5.set('fieldAliases', {'Num': 'Num', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Elev': 'Elev', 'Nombre': 'Nombre', });
lyr_Cobertura50km_2.set('fieldImages', {'Num': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Elev': 'Hidden', 'Nombre': 'Hidden', });
lyr_Cobertura30km_3.set('fieldImages', {'Num': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Elev': 'Hidden', 'Nombre': 'Hidden', });
lyr_Cobertura20km_4.set('fieldImages', {'Num': 'Hidden', 'Latitud': 'Hidden', 'Longitud': 'Hidden', 'Elev': 'Hidden', 'Nombre': 'Hidden', });
lyr_EstacionesNTRIP_5.set('fieldImages', {'Num': 'Range', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Elev': 'TextEdit', 'Nombre': 'TextEdit', });
lyr_Cobertura50km_2.set('fieldLabels', {});
lyr_Cobertura30km_3.set('fieldLabels', {});
lyr_Cobertura20km_4.set('fieldLabels', {});
lyr_EstacionesNTRIP_5.set('fieldLabels', {'Num': 'inline label', 'Latitud': 'inline label', 'Longitud': 'inline label', 'Elev': 'inline label', 'Nombre': 'header label', });
lyr_EstacionesNTRIP_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});