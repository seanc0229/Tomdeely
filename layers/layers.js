ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-1002208.346815, 6911733.050638, -1001166.876661, 6912511.258927]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_MergedDSM_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Merged DSM<br />\
    <img src="styles/legend/MergedDSM_1_0.png" /> 0<br />\
    <img src="styles/legend/MergedDSM_1_1.png" /> 50.232<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MergedDSM_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002381.775819, 6908800.718005, -999004.440804, 6915436.515704]
        })
    });
var lyr_MergedDTM_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Merged DTM<br />\
    <img src="styles/legend/MergedDTM_2_0.png" /> 0<br />\
    <img src="styles/legend/MergedDTM_2_1.png" /> 18.8249<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MergedDTM_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002381.775819, 6908800.718005, -999004.440804, 6915436.515704]
        })
    });
var lyr_ClippedextentDSM_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (extent) DSM<br />\
    <img src="styles/legend/ClippedextentDSM_3_0.png" /> 0.610712<br />\
    <img src="styles/legend/ClippedextentDSM_3_1.png" /> 14.7284<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ClippedextentDSM_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_ClippedextentDTM_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (extent) DTM<br />\
    <img src="styles/legend/ClippedextentDTM_4_0.png" /> 0.611895<br />\
    <img src="styles/legend/ClippedextentDTM_4_1.png" /> 12.2747<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ClippedextentDTM_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });

        var lyr_GoogleSatelliteHybrid_5 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TomdeelyExtent_6 = new ol.format.GeoJSON();
var features_TomdeelyExtent_6 = format_TomdeelyExtent_6.readFeatures(json_TomdeelyExtent_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TomdeelyExtent_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TomdeelyExtent_6.addFeatures(features_TomdeelyExtent_6);
var lyr_TomdeelyExtent_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TomdeelyExtent_6, 
                style: style_TomdeelyExtent_6,
                popuplayertitle: 'Tomdeely Extent',
                interactive: true,
                title: '<img src="styles/legend/TomdeelyExtent_6.png" /> Tomdeely Extent'
            });

        var lyr_1InchOutline18601878NLS_7 = new ol.layer.Tile({
            'title': '1 Inch Outline 1860-1878 (NLS)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mapseries-tilesets.s3.amazonaws.com/os/ireland_1inch_1st_outline/{z}/{x}/{y}.png'
            })
        });
var lyr_OUTPUT_SLOPEtif_8 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SLOPE.tif<br />\
    <img src="styles/legend/OUTPUT_SLOPEtif_8_0.png" /> 0<br />\
    <img src="styles/legend/OUTPUT_SLOPEtif_8_1.png" /> 27.6696<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SLOPEtif_8.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_ClippedextentDTM_Archaeological_VATtif_9 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (extent) DTM_Archaeological_(VAT).tif<br />\
    <img src="styles/legend/ClippedextentDTM_Archaeological_VATtif_9_0.png" /> 0.185054<br />\
    <img src="styles/legend/ClippedextentDTM_Archaeological_VATtif_9_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ClippedextentDTM_Archaeological_VATtif_9.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_ClippedextentDSM_Archaeological_VATtif_10 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Clipped (extent) DSM_Archaeological_(VAT).tif<br />\
    <img src="styles/legend/ClippedextentDSM_Archaeological_VATtif_10_0.png" /> 0<br />\
    <img src="styles/legend/ClippedextentDSM_Archaeological_VATtif_10_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/ClippedextentDSM_Archaeological_VATtif_10.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_HS_A315_H35tif_11 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_HS_A315_H35.tif<br />\
    <img src="styles/legend/OUTPUT_HS_A315_H35tif_11_0.png" /> 0.257828<br />\
    <img src="styles/legend/OUTPUT_HS_A315_H35tif_11_1.png" /> 0.874746<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_HS_A315_H35tif_11.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_MULTIHS_D10_H25tif_12 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_MULTI-HS_D10_H25.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_MULTIHS_D10_H25tif_12.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911737.971322, -1001170.686322, 6912513.463343]
        })
    });
var lyr_OUTPUT_SLRM_R20tif_13 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SLRM_R20.tif<br />\
    <img src="styles/legend/OUTPUT_SLRM_R20tif_13_0.png" /> -2.96975<br />\
    <img src="styles/legend/OUTPUT_SLRM_R20tif_13_1.png" /> 1.85035<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SLRM_R20tif_13.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_SVF_R10_D16tif_14 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SVF_R10_D16.tif<br />\
    <img src="styles/legend/OUTPUT_SVF_R10_D16tif_14_0.png" /> 0.601299<br />\
    <img src="styles/legend/OUTPUT_SVF_R10_D16tif_14_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SVF_R10_D16tif_14.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_SVFA_R10_D16_A315_ALlowtif_15 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SVF-A_R10_D16_A315_ALlow.tif<br />\
    <img src="styles/legend/OUTPUT_SVFA_R10_D16_A315_ALlowtif_15_0.png" /> 0.582406<br />\
    <img src="styles/legend/OUTPUT_SVFA_R10_D16_A315_ALlowtif_15_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SVFA_R10_D16_A315_ALlowtif_15.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_OPENPOS_R10_D16tif_16 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_OPEN-POS_R10_D16.tif<br />\
    <img src="styles/legend/OUTPUT_OPENPOS_R10_D16tif_16_0.png" /> 66.1955<br />\
    <img src="styles/legend/OUTPUT_OPENPOS_R10_D16tif_16_1.png" /> 94.1664<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_OPENPOS_R10_D16tif_16.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_OPENNEG_R10_D16tif_17 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_OPEN-NEG_R10_D16.tif<br />\
    <img src="styles/legend/OUTPUT_OPENNEG_R10_D16tif_17_0.png" /> 76.1528<br />\
    <img src="styles/legend/OUTPUT_OPENNEG_R10_D16tif_17_1.png" /> 96.888<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_OPENNEG_R10_D16tif_17.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_MSRM_F_M00200_S2tif_18 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_MSRM_F_M0.0-20.0_S2.tif<br />\
    <img src="styles/legend/OUTPUT_MSRM_F_M00200_S2tif_18_0.png" /> -0.783694<br />\
    <img src="styles/legend/OUTPUT_MSRM_F_M00200_S2tif_18_1.png" /> 0.432821<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_MSRM_F_M00200_S2tif_18.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_SLOPEtif_19 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SLOPE.tif<br />\
    <img src="styles/legend/OUTPUT_SLOPEtif_19_0.png" /> 0.00797379<br />\
    <img src="styles/legend/OUTPUT_SLOPEtif_19_1.png" /> 74.1574<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SLOPEtif_19.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_HS_A315_H35tif_20 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_HS_A315_H35.tif<br />\
    <img src="styles/legend/OUTPUT_HS_A315_H35tif_20_0.png" /> 0<br />\
    <img src="styles/legend/OUTPUT_HS_A315_H35tif_20_1.png" /> 0.999793<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_HS_A315_H35tif_20.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_MULTIHS_D10_H25tif_21 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_MULTI-HS_D10_H25.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_MULTIHS_D10_H25tif_21.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911737.971322, -1001170.686322, 6912513.463343]
        })
    });
var lyr_OUTPUT_SLRM_R20tif_22 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SLRM_R20.tif<br />\
    <img src="styles/legend/OUTPUT_SLRM_R20tif_22_0.png" /> -2.42873<br />\
    <img src="styles/legend/OUTPUT_SLRM_R20tif_22_1.png" /> 14.0325<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SLRM_R20tif_22.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_SVF_R10_D16tif_23 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SVF_R10_D16.tif<br />\
    <img src="styles/legend/OUTPUT_SVF_R10_D16tif_23_0.png" /> 0.150336<br />\
    <img src="styles/legend/OUTPUT_SVF_R10_D16tif_23_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SVF_R10_D16tif_23.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_SVFA_R10_D16_A315_ALlowtif_24 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_SVF-A_R10_D16_A315_ALlow.tif<br />\
    <img src="styles/legend/OUTPUT_SVFA_R10_D16_A315_ALlowtif_24_0.png" /> 0.144588<br />\
    <img src="styles/legend/OUTPUT_SVFA_R10_D16_A315_ALlowtif_24_1.png" /> 1<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_SVFA_R10_D16_A315_ALlowtif_24.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_OPENPOS_R10_D16tif_25 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_OPEN-POS_R10_D16.tif<br />\
    <img src="styles/legend/OUTPUT_OPENPOS_R10_D16tif_25_0.png" /> 30.351<br />\
    <img src="styles/legend/OUTPUT_OPENPOS_R10_D16tif_25_1.png" /> 116.965<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_OPENPOS_R10_D16tif_25.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_OUTPUT_OPENNEG_R10_D16tif_26 = new ol.layer.Image({
        opacity: 1,
        
    title: 'OUTPUT_OPEN-NEG_R10_D16.tif<br />\
    <img src="styles/legend/OUTPUT_OPENNEG_R10_D16tif_26_0.png" /> 21.5192<br />\
    <img src="styles/legend/OUTPUT_OPENNEG_R10_D16tif_26_1.png" /> 94.5179<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/OUTPUT_OPENNEG_R10_D16tif_26.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067823, 6911731.381082, -1001164.021793, 6912513.554185]
        })
    });
var lyr_MSRM_27 = new ol.layer.Image({
        opacity: 1,
        
    title: 'MSRM<br />\
    <img src="styles/legend/MSRM_27_0.png" /> -0.676811<br />\
    <img src="styles/legend/MSRM_27_1.png" /> 4.11086<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/MSRM_27.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-1002210.067808, 6911731.381045, -1001164.021777, 6912513.554148]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_MergedDSM_1.setVisible(true);lyr_MergedDTM_2.setVisible(true);lyr_ClippedextentDSM_3.setVisible(true);lyr_ClippedextentDTM_4.setVisible(true);lyr_GoogleSatelliteHybrid_5.setVisible(true);lyr_TomdeelyExtent_6.setVisible(true);lyr_1InchOutline18601878NLS_7.setVisible(true);lyr_OUTPUT_SLOPEtif_8.setVisible(true);lyr_ClippedextentDTM_Archaeological_VATtif_9.setVisible(true);lyr_ClippedextentDSM_Archaeological_VATtif_10.setVisible(true);lyr_OUTPUT_HS_A315_H35tif_11.setVisible(true);lyr_OUTPUT_MULTIHS_D10_H25tif_12.setVisible(true);lyr_OUTPUT_SLRM_R20tif_13.setVisible(true);lyr_OUTPUT_SVF_R10_D16tif_14.setVisible(true);lyr_OUTPUT_SVFA_R10_D16_A315_ALlowtif_15.setVisible(true);lyr_OUTPUT_OPENPOS_R10_D16tif_16.setVisible(true);lyr_OUTPUT_OPENNEG_R10_D16tif_17.setVisible(true);lyr_OUTPUT_MSRM_F_M00200_S2tif_18.setVisible(true);lyr_OUTPUT_SLOPEtif_19.setVisible(true);lyr_OUTPUT_HS_A315_H35tif_20.setVisible(true);lyr_OUTPUT_MULTIHS_D10_H25tif_21.setVisible(true);lyr_OUTPUT_SLRM_R20tif_22.setVisible(true);lyr_OUTPUT_SVF_R10_D16tif_23.setVisible(true);lyr_OUTPUT_SVFA_R10_D16_A315_ALlowtif_24.setVisible(true);lyr_OUTPUT_OPENPOS_R10_D16tif_25.setVisible(true);lyr_OUTPUT_OPENNEG_R10_D16tif_26.setVisible(true);lyr_MSRM_27.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_MergedDSM_1,lyr_MergedDTM_2,lyr_ClippedextentDSM_3,lyr_ClippedextentDTM_4,lyr_GoogleSatelliteHybrid_5,lyr_TomdeelyExtent_6,lyr_1InchOutline18601878NLS_7,lyr_OUTPUT_SLOPEtif_8,lyr_ClippedextentDTM_Archaeological_VATtif_9,lyr_ClippedextentDSM_Archaeological_VATtif_10,lyr_OUTPUT_HS_A315_H35tif_11,lyr_OUTPUT_MULTIHS_D10_H25tif_12,lyr_OUTPUT_SLRM_R20tif_13,lyr_OUTPUT_SVF_R10_D16tif_14,lyr_OUTPUT_SVFA_R10_D16_A315_ALlowtif_15,lyr_OUTPUT_OPENPOS_R10_D16tif_16,lyr_OUTPUT_OPENNEG_R10_D16tif_17,lyr_OUTPUT_MSRM_F_M00200_S2tif_18,lyr_OUTPUT_SLOPEtif_19,lyr_OUTPUT_HS_A315_H35tif_20,lyr_OUTPUT_MULTIHS_D10_H25tif_21,lyr_OUTPUT_SLRM_R20tif_22,lyr_OUTPUT_SVF_R10_D16tif_23,lyr_OUTPUT_SVFA_R10_D16_A315_ALlowtif_24,lyr_OUTPUT_OPENPOS_R10_D16tif_25,lyr_OUTPUT_OPENNEG_R10_D16tif_26,lyr_MSRM_27];
lyr_TomdeelyExtent_6.set('fieldAliases', {'id': 'id', 'Tomdeely': 'Tomdeely', });
lyr_TomdeelyExtent_6.set('fieldImages', {'id': 'TextEdit', 'Tomdeely': 'TextEdit', });
lyr_TomdeelyExtent_6.set('fieldLabels', {'id': 'no label', 'Tomdeely': 'no label', });
lyr_TomdeelyExtent_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});