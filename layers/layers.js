ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32632").setExtent([516322.592241, 5035272.312919, 519389.917056, 5036862.918238]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_waste_basket_OSM_MAPPED_1 = new ol.format.GeoJSON();
var features_waste_basket_OSM_MAPPED_1 = format_waste_basket_OSM_MAPPED_1.readFeatures(json_waste_basket_OSM_MAPPED_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_waste_basket_OSM_MAPPED_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_waste_basket_OSM_MAPPED_1.addFeatures(features_waste_basket_OSM_MAPPED_1);
cluster_waste_basket_OSM_MAPPED_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_waste_basket_OSM_MAPPED_1
});
var lyr_waste_basket_OSM_MAPPED_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_waste_basket_OSM_MAPPED_1, 
                style: style_waste_basket_OSM_MAPPED_1,
                popuplayertitle: 'waste_basket_OSM_MAPPED',
                interactive: true,
                title: '<img src="styles/legend/waste_basket_OSM_MAPPED_1.png" /> waste_basket_OSM_MAPPED'
            });
var format_QField_Acquisitions_2 = new ol.format.GeoJSON();
var features_QField_Acquisitions_2 = format_QField_Acquisitions_2.readFeatures(json_QField_Acquisitions_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32632'});
var jsonSource_QField_Acquisitions_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QField_Acquisitions_2.addFeatures(features_QField_Acquisitions_2);
cluster_QField_Acquisitions_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_QField_Acquisitions_2
});
var lyr_QField_Acquisitions_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_QField_Acquisitions_2, 
                style: style_QField_Acquisitions_2,
                popuplayertitle: 'QField_Acquisitions',
                interactive: true,
                title: '<img src="styles/legend/QField_Acquisitions_2.png" /> QField_Acquisitions'
            });

lyr_OSMStandard_0.setVisible(true);lyr_waste_basket_OSM_MAPPED_1.setVisible(true);lyr_QField_Acquisitions_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_waste_basket_OSM_MAPPED_1,lyr_QField_Acquisitions_2];
lyr_waste_basket_OSM_MAPPED_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'colour': 'colour', 'material': 'material', 'indoor': 'indoor', 'covered': 'covered', 'wheelchair': 'wheelchair', 'level': 'level', 'waste': 'waste', 'check_date': 'check_date', });
lyr_QField_Acquisitions_2.set('fieldAliases', {'fid': 'fid', 'stato': 'stato', 'capacita': 'capacita', 'Note': 'Note', 'Waste': 'Waste', });
lyr_waste_basket_OSM_MAPPED_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'amenity': '', 'colour': '', 'material': '', 'indoor': '', 'covered': '', 'wheelchair': '', 'level': '', 'waste': '', 'check_date': '', });
lyr_QField_Acquisitions_2.set('fieldImages', {'fid': 'TextEdit', 'stato': 'TextEdit', 'capacita': 'TextEdit', 'Note': 'TextEdit', 'Waste': 'TextEdit', });
lyr_waste_basket_OSM_MAPPED_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'header label - visible with data', 'osm_type': 'no label', 'amenity': 'no label', 'colour': 'no label', 'material': 'no label', 'indoor': 'no label', 'covered': 'no label', 'wheelchair': 'no label', 'level': 'no label', 'waste': 'header label - always visible', 'check_date': 'header label - visible with data', });
lyr_QField_Acquisitions_2.set('fieldLabels', {'fid': 'header label - visible with data', 'stato': 'header label - visible with data', 'capacita': 'header label - visible with data', 'Note': 'header label - visible with data', 'Waste': 'header label - visible with data', });
lyr_QField_Acquisitions_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});