var wms_layers = [];


        var lyr_GooglecnSatellite_0 = new ol.layer.Tile({
            'title': 'Google.cn Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.com/intl/zh-CN_cn/permissions/geoguidelines/attr-guide.html">地图数据 ©2016 Google</a>',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var lyr_testdrones_transparent_mosaic_group1_modificado_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "test-drones_transparent_mosaic_group1_modificado",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/testdrones_transparent_mosaic_group1_modificado_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-12025451.532374, 4692130.295852, -12024575.697921, 4692724.854881]
                            })
                        });

lyr_GooglecnSatellite_0.setVisible(true);lyr_testdrones_transparent_mosaic_group1_modificado_1.setVisible(true);
var layersList = [lyr_GooglecnSatellite_0,lyr_testdrones_transparent_mosaic_group1_modificado_1];
