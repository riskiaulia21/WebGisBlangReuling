var wms_layers = [];


        var lyr_Google_0 = new ol.layer.Tile({
            'title': 'Google',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Sungai_1 = new ol.format.GeoJSON();
var features_Sungai_1 = format_Sungai_1.readFeatures(json_Sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_1.addFeatures(features_Sungai_1);
var lyr_Sungai_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_1, 
                style: style_Sungai_1,
                popuplayertitle: 'Sungai',
                interactive: true,
                title: '<img src="styles/legend/Sungai_1.png" /> Sungai'
            });
var format_WCUmum_2 = new ol.format.GeoJSON();
var features_WCUmum_2 = format_WCUmum_2.readFeatures(json_WCUmum_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WCUmum_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WCUmum_2.addFeatures(features_WCUmum_2);
var lyr_WCUmum_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WCUmum_2, 
                style: style_WCUmum_2,
                popuplayertitle: 'WC Umum',
                interactive: true,
                title: '<img src="styles/legend/WCUmum_2.png" /> WC Umum'
            });
var format_Waduk_3 = new ol.format.GeoJSON();
var features_Waduk_3 = format_Waduk_3.readFeatures(json_Waduk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Waduk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waduk_3.addFeatures(features_Waduk_3);
var lyr_Waduk_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waduk_3, 
                style: style_Waduk_3,
                popuplayertitle: 'Waduk',
                interactive: true,
                title: '<img src="styles/legend/Waduk_3.png" /> Waduk'
            });
var format_Toko_4 = new ol.format.GeoJSON();
var features_Toko_4 = format_Toko_4.readFeatures(json_Toko_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Toko_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Toko_4.addFeatures(features_Toko_4);
var lyr_Toko_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Toko_4, 
                style: style_Toko_4,
                popuplayertitle: 'Toko',
                interactive: true,
                title: '<img src="styles/legend/Toko_4.png" /> Toko'
            });
var format_TabangPasir_5 = new ol.format.GeoJSON();
var features_TabangPasir_5 = format_TabangPasir_5.readFeatures(json_TabangPasir_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TabangPasir_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TabangPasir_5.addFeatures(features_TabangPasir_5);
var lyr_TabangPasir_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TabangPasir_5, 
                style: style_TabangPasir_5,
                popuplayertitle: 'Tabang Pasir',
                interactive: true,
                title: '<img src="styles/legend/TabangPasir_5.png" /> Tabang Pasir'
            });
var format_Sekolah_6 = new ol.format.GeoJSON();
var features_Sekolah_6 = format_Sekolah_6.readFeatures(json_Sekolah_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sekolah_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sekolah_6.addFeatures(features_Sekolah_6);
var lyr_Sekolah_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sekolah_6, 
                style: style_Sekolah_6,
                popuplayertitle: 'Sekolah',
                interactive: true,
                title: '<img src="styles/legend/Sekolah_6.png" /> Sekolah'
            });
var format_RumahWarga_7 = new ol.format.GeoJSON();
var features_RumahWarga_7 = format_RumahWarga_7.readFeatures(json_RumahWarga_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RumahWarga_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RumahWarga_7.addFeatures(features_RumahWarga_7);
var lyr_RumahWarga_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RumahWarga_7, 
                style: style_RumahWarga_7,
                popuplayertitle: 'Rumah Warga',
                interactive: true,
                title: '<img src="styles/legend/RumahWarga_7.png" /> Rumah Warga'
            });
var format_RawaRawa_8 = new ol.format.GeoJSON();
var features_RawaRawa_8 = format_RawaRawa_8.readFeatures(json_RawaRawa_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RawaRawa_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RawaRawa_8.addFeatures(features_RawaRawa_8);
var lyr_RawaRawa_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RawaRawa_8, 
                style: style_RawaRawa_8,
                popuplayertitle: 'Rawa Rawa',
                interactive: true,
                title: '<img src="styles/legend/RawaRawa_8.png" /> Rawa Rawa'
            });
var format_Rangkang_9 = new ol.format.GeoJSON();
var features_Rangkang_9 = format_Rangkang_9.readFeatures(json_Rangkang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rangkang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rangkang_9.addFeatures(features_Rangkang_9);
var lyr_Rangkang_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rangkang_9, 
                style: style_Rangkang_9,
                popuplayertitle: 'Rangkang',
                interactive: true,
                title: '<img src="styles/legend/Rangkang_9.png" /> Rangkang'
            });
var format_PosKambling_10 = new ol.format.GeoJSON();
var features_PosKambling_10 = format_PosKambling_10.readFeatures(json_PosKambling_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PosKambling_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PosKambling_10.addFeatures(features_PosKambling_10);
var lyr_PosKambling_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PosKambling_10, 
                style: style_PosKambling_10,
                popuplayertitle: 'Pos Kambling',
                interactive: true,
                title: '<img src="styles/legend/PosKambling_10.png" /> Pos Kambling'
            });
var format_Meunasah_11 = new ol.format.GeoJSON();
var features_Meunasah_11 = format_Meunasah_11.readFeatures(json_Meunasah_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Meunasah_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Meunasah_11.addFeatures(features_Meunasah_11);
var lyr_Meunasah_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Meunasah_11, 
                style: style_Meunasah_11,
                popuplayertitle: 'Meunasah',
                interactive: true,
                title: '<img src="styles/legend/Meunasah_11.png" /> Meunasah'
            });
var format_Masjid_12 = new ol.format.GeoJSON();
var features_Masjid_12 = format_Masjid_12.readFeatures(json_Masjid_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masjid_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masjid_12.addFeatures(features_Masjid_12);
var lyr_Masjid_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masjid_12, 
                style: style_Masjid_12,
                popuplayertitle: 'Masjid',
                interactive: true,
                title: '<img src="styles/legend/Masjid_12.png" /> Masjid'
            });
var format_Lapangan_13 = new ol.format.GeoJSON();
var features_Lapangan_13 = format_Lapangan_13.readFeatures(json_Lapangan_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lapangan_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lapangan_13.addFeatures(features_Lapangan_13);
var lyr_Lapangan_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lapangan_13, 
                style: style_Lapangan_13,
                popuplayertitle: 'Lapangan',
                interactive: true,
                title: '<img src="styles/legend/Lapangan_13.png" /> Lapangan'
            });
var format_Lampoh_14 = new ol.format.GeoJSON();
var features_Lampoh_14 = format_Lampoh_14.readFeatures(json_Lampoh_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lampoh_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lampoh_14.addFeatures(features_Lampoh_14);
var lyr_Lampoh_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lampoh_14, 
                style: style_Lampoh_14,
                popuplayertitle: 'Lampoh',
                interactive: true,
                title: '<img src="styles/legend/Lampoh_14.png" /> Lampoh'
            });
var format_LahanKosong_15 = new ol.format.GeoJSON();
var features_LahanKosong_15 = format_LahanKosong_15.readFeatures(json_LahanKosong_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LahanKosong_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LahanKosong_15.addFeatures(features_LahanKosong_15);
var lyr_LahanKosong_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LahanKosong_15, 
                style: style_LahanKosong_15,
                popuplayertitle: 'Lahan Kosong',
                interactive: true,
                title: '<img src="styles/legend/LahanKosong_15.png" /> Lahan Kosong'
            });
var format_Kuburan_16 = new ol.format.GeoJSON();
var features_Kuburan_16 = format_Kuburan_16.readFeatures(json_Kuburan_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kuburan_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kuburan_16.addFeatures(features_Kuburan_16);
var lyr_Kuburan_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kuburan_16, 
                style: style_Kuburan_16,
                popuplayertitle: 'Kuburan',
                interactive: true,
                title: '<img src="styles/legend/Kuburan_16.png" /> Kuburan'
            });
var format_Kios_17 = new ol.format.GeoJSON();
var features_Kios_17 = format_Kios_17.readFeatures(json_Kios_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kios_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kios_17.addFeatures(features_Kios_17);
var lyr_Kios_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kios_17, 
                style: style_Kios_17,
                popuplayertitle: 'Kios',
                interactive: true,
                title: '<img src="styles/legend/Kios_17.png" /> Kios'
            });
var format_KetamKayu_18 = new ol.format.GeoJSON();
var features_KetamKayu_18 = format_KetamKayu_18.readFeatures(json_KetamKayu_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KetamKayu_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KetamKayu_18.addFeatures(features_KetamKayu_18);
var lyr_KetamKayu_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KetamKayu_18, 
                style: style_KetamKayu_18,
                popuplayertitle: 'Ketam Kayu',
                interactive: true,
                title: '<img src="styles/legend/KetamKayu_18.png" /> Ketam Kayu'
            });
var format_Kantor_19 = new ol.format.GeoJSON();
var features_Kantor_19 = format_Kantor_19.readFeatures(json_Kantor_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kantor_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kantor_19.addFeatures(features_Kantor_19);
var lyr_Kantor_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kantor_19, 
                style: style_Kantor_19,
                popuplayertitle: 'Kantor',
                interactive: true,
                title: '<img src="styles/legend/Kantor_19.png" /> Kantor'
            });
var format_KantorGeuchiek_20 = new ol.format.GeoJSON();
var features_KantorGeuchiek_20 = format_KantorGeuchiek_20.readFeatures(json_KantorGeuchiek_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorGeuchiek_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorGeuchiek_20.addFeatures(features_KantorGeuchiek_20);
var lyr_KantorGeuchiek_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorGeuchiek_20, 
                style: style_KantorGeuchiek_20,
                popuplayertitle: 'Kantor Geuchiek',
                interactive: true,
                title: '<img src="styles/legend/KantorGeuchiek_20.png" /> Kantor Geuchiek'
            });
var format_GudangPinang_21 = new ol.format.GeoJSON();
var features_GudangPinang_21 = format_GudangPinang_21.readFeatures(json_GudangPinang_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GudangPinang_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GudangPinang_21.addFeatures(features_GudangPinang_21);
var lyr_GudangPinang_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GudangPinang_21, 
                style: style_GudangPinang_21,
                popuplayertitle: 'Gudang Pinang',
                interactive: true,
                title: '<img src="styles/legend/GudangPinang_21.png" /> Gudang Pinang'
            });
var format_Blang_22 = new ol.format.GeoJSON();
var features_Blang_22 = format_Blang_22.readFeatures(json_Blang_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Blang_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Blang_22.addFeatures(features_Blang_22);
var lyr_Blang_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Blang_22, 
                style: style_Blang_22,
                popuplayertitle: 'Blang',
                interactive: true,
                title: '<img src="styles/legend/Blang_22.png" /> Blang'
            });
var format_BalaiPengajian_23 = new ol.format.GeoJSON();
var features_BalaiPengajian_23 = format_BalaiPengajian_23.readFeatures(json_BalaiPengajian_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BalaiPengajian_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BalaiPengajian_23.addFeatures(features_BalaiPengajian_23);
var lyr_BalaiPengajian_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BalaiPengajian_23, 
                style: style_BalaiPengajian_23,
                popuplayertitle: 'Balai Pengajian',
                interactive: true,
                title: '<img src="styles/legend/BalaiPengajian_23.png" /> Balai Pengajian'
            });
var format_Lueng_24 = new ol.format.GeoJSON();
var features_Lueng_24 = format_Lueng_24.readFeatures(json_Lueng_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lueng_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lueng_24.addFeatures(features_Lueng_24);
var lyr_Lueng_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lueng_24, 
                style: style_Lueng_24,
                popuplayertitle: 'Lueng',
                interactive: true,
                title: '<img src="styles/legend/Lueng_24.png" /> Lueng'
            });
var format_Jurong_25 = new ol.format.GeoJSON();
var features_Jurong_25 = format_Jurong_25.readFeatures(json_Jurong_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jurong_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jurong_25.addFeatures(features_Jurong_25);
var lyr_Jurong_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jurong_25, 
                style: style_Jurong_25,
                popuplayertitle: 'Jurong',
                interactive: true,
                title: '<img src="styles/legend/Jurong_25.png" /> Jurong'
            });
var format_Jalan_26 = new ol.format.GeoJSON();
var features_Jalan_26 = format_Jalan_26.readFeatures(json_Jalan_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_26.addFeatures(features_Jalan_26);
var lyr_Jalan_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_26, 
                style: style_Jalan_26,
                popuplayertitle: 'Jalan',
                interactive: true,
                title: '<img src="styles/legend/Jalan_26.png" /> Jalan'
            });
var format_Got_27 = new ol.format.GeoJSON();
var features_Got_27 = format_Got_27.readFeatures(json_Got_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Got_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Got_27.addFeatures(features_Got_27);
var lyr_Got_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Got_27, 
                style: style_Got_27,
                popuplayertitle: 'Got',
                interactive: true,
                title: '<img src="styles/legend/Got_27.png" /> Got'
            });
var format_Alue_28 = new ol.format.GeoJSON();
var features_Alue_28 = format_Alue_28.readFeatures(json_Alue_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Alue_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Alue_28.addFeatures(features_Alue_28);
var lyr_Alue_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Alue_28, 
                style: style_Alue_28,
                popuplayertitle: 'Alue',
                interactive: true,
                title: '<img src="styles/legend/Alue_28.png" /> Alue'
            });

lyr_Google_0.setVisible(true);lyr_Sungai_1.setVisible(true);lyr_WCUmum_2.setVisible(true);lyr_Waduk_3.setVisible(true);lyr_Toko_4.setVisible(true);lyr_TabangPasir_5.setVisible(true);lyr_Sekolah_6.setVisible(true);lyr_RumahWarga_7.setVisible(true);lyr_RawaRawa_8.setVisible(true);lyr_Rangkang_9.setVisible(true);lyr_PosKambling_10.setVisible(true);lyr_Meunasah_11.setVisible(true);lyr_Masjid_12.setVisible(true);lyr_Lapangan_13.setVisible(true);lyr_Lampoh_14.setVisible(true);lyr_LahanKosong_15.setVisible(true);lyr_Kuburan_16.setVisible(true);lyr_Kios_17.setVisible(true);lyr_KetamKayu_18.setVisible(true);lyr_Kantor_19.setVisible(true);lyr_KantorGeuchiek_20.setVisible(true);lyr_GudangPinang_21.setVisible(true);lyr_Blang_22.setVisible(true);lyr_BalaiPengajian_23.setVisible(true);lyr_Lueng_24.setVisible(true);lyr_Jurong_25.setVisible(true);lyr_Jalan_26.setVisible(true);lyr_Got_27.setVisible(true);lyr_Alue_28.setVisible(true);
var layersList = [lyr_Google_0,lyr_Sungai_1,lyr_WCUmum_2,lyr_Waduk_3,lyr_Toko_4,lyr_TabangPasir_5,lyr_Sekolah_6,lyr_RumahWarga_7,lyr_RawaRawa_8,lyr_Rangkang_9,lyr_PosKambling_10,lyr_Meunasah_11,lyr_Masjid_12,lyr_Lapangan_13,lyr_Lampoh_14,lyr_LahanKosong_15,lyr_Kuburan_16,lyr_Kios_17,lyr_KetamKayu_18,lyr_Kantor_19,lyr_KantorGeuchiek_20,lyr_GudangPinang_21,lyr_Blang_22,lyr_BalaiPengajian_23,lyr_Lueng_24,lyr_Jurong_25,lyr_Jalan_26,lyr_Got_27,lyr_Alue_28];
lyr_Sungai_1.set('fieldAliases', {'Id': 'Id', 'Nama_Sunga': 'Nama_Sunga', 'Panjang': 'Panjang', 'Lebar': 'Lebar', });
lyr_WCUmum_2.set('fieldAliases', {'Id': 'Id', });
lyr_Waduk_3.set('fieldAliases', {'Id': 'Id', });
lyr_Toko_4.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'no_hp': 'no_hp', 'jenis_bang': 'jenis_bang', 'kepemilika': 'kepemilika', 'Nik': 'Nik', });
lyr_TabangPasir_5.set('fieldAliases', {'Id': 'Id', });
lyr_Sekolah_6.set('fieldAliases', {'Id': 'Id', 'Nama': 'Nama', 'Luas': 'Luas', 'Nama_Kepal': 'Nama_Kepal', });
lyr_RumahWarga_7.set('fieldAliases', {'Id': 'Id', 'Luas_ruang': 'Luas_ruang', 'Nama': 'Nama', 'Nomor_Hp': 'Nomor_Hp', 'Kepemilika': 'Kepemilika', 'Jns_Bangun': 'Jns_Bangun', 'Jns_Lantai': 'Jns_Lantai', 'Nik': 'Nik', 'J_Laki': 'J_Laki', 'J_Perempua': 'J_Perempua', 'J_total': 'J_total', });
lyr_RawaRawa_8.set('fieldAliases', {'Id': 'Id', });
lyr_Rangkang_9.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'jenis': 'jenis', });
lyr_PosKambling_10.set('fieldAliases', {'Id': 'Id', });
lyr_Meunasah_11.set('fieldAliases', {'Id': 'Id', 'Nama_Area': 'Nama_Area', 'Luas': 'Luas', });
lyr_Masjid_12.set('fieldAliases', {'Id': 'Id', });
lyr_Lapangan_13.set('fieldAliases', {'Id': 'Id', });
lyr_Lampoh_14.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'no_hp': 'no_hp', 'jenis_tana': 'jenis_tana', 'produksi': 'produksi', 'status': 'status', });
lyr_LahanKosong_15.set('fieldAliases', {'Id': 'Id', 'Luas': 'Luas', });
lyr_Kuburan_16.set('fieldAliases', {'Id': 'Id', 'luas': 'luas', 'jenis': 'jenis', });
lyr_Kios_17.set('fieldAliases', {'Id': 'Id', });
lyr_KetamKayu_18.set('fieldAliases', {'Id': 'Id', });
lyr_Kantor_19.set('fieldAliases', {'Id': 'Id', });
lyr_KantorGeuchiek_20.set('fieldAliases', {'Id': 'Id', });
lyr_GudangPinang_21.set('fieldAliases', {'Id': 'Id', });
lyr_Blang_22.set('fieldAliases', {'Id': 'Id', 'Luas_Lahan': 'Luas_Lahan', 'Nama': 'Nama', 'no_hp': 'no_hp', 'produksi': 'produksi', 'status': 'status', 'irigasi': 'irigasi', 'tanaman': 'tanaman', });
lyr_BalaiPengajian_23.set('fieldAliases', {'Id': 'Id', 'nama': 'nama', 'jlh_santri': 'jlh_santri', 'tahun_berd': 'tahun_berd', });
lyr_Lueng_24.set('fieldAliases', {'Id': 'Id', 'Nama_Lueng': 'Nama_Lueng', 'Panjang_Lu': 'Panjang_Lu', 'lebar_luen': 'lebar_luen', 'Bentuk': 'Bentuk', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', });
lyr_Jurong_25.set('fieldAliases', {'Panjang_Jl': 'Panjang_Jl', 'Lebar_Jln': 'Lebar_Jln', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', 'Nama_lr': 'Nama_lr', 'Id': 'Id', });
lyr_Jalan_26.set('fieldAliases', {'Panjang_Jl': 'Panjang_Jl', 'Lebar_Jln': 'Lebar_Jln', 'Status_Jln': 'Status_Jln', 'Kondisi': 'Kondisi', 'Kategori': 'Kategori', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', 'Nama_lr': 'Nama_lr', 'Id': 'Id', });
lyr_Got_27.set('fieldAliases', {'Panjang_Jl': 'Panjang_Jl', 'Lebar_Jln': 'Lebar_Jln', 'Kondisi': 'Kondisi', 'Pembiayaan': 'Pembiayaan', 'Thn_Perbai': 'Thn_Perbai', 'Nama_lr': 'Nama_lr', 'Id': 'Id', });
lyr_Alue_28.set('fieldAliases', {'Id': 'Id', 'Nama_Alue': 'Nama_Alue', 'Panjang': 'Panjang', 'Lebar': 'Lebar', });
lyr_Sungai_1.set('fieldImages', {'Id': '', 'Nama_Sunga': '', 'Panjang': '', 'Lebar': '', });
lyr_WCUmum_2.set('fieldImages', {'Id': '', });
lyr_Waduk_3.set('fieldImages', {'Id': '', });
lyr_Toko_4.set('fieldImages', {'Id': '', 'nama': '', 'no_hp': '', 'jenis_bang': '', 'kepemilika': '', 'Nik': '', });
lyr_TabangPasir_5.set('fieldImages', {'Id': '', });
lyr_Sekolah_6.set('fieldImages', {'Id': '', 'Nama': '', 'Luas': '', 'Nama_Kepal': '', });
lyr_RumahWarga_7.set('fieldImages', {'Id': '', 'Luas_ruang': '', 'Nama': '', 'Nomor_Hp': '', 'Kepemilika': '', 'Jns_Bangun': '', 'Jns_Lantai': '', 'Nik': '', 'J_Laki': '', 'J_Perempua': '', 'J_total': '', });
lyr_RawaRawa_8.set('fieldImages', {'Id': '', });
lyr_Rangkang_9.set('fieldImages', {'Id': '', 'nama': '', 'jenis': '', });
lyr_PosKambling_10.set('fieldImages', {'Id': '', });
lyr_Meunasah_11.set('fieldImages', {'Id': '', 'Nama_Area': '', 'Luas': '', });
lyr_Masjid_12.set('fieldImages', {'Id': '', });
lyr_Lapangan_13.set('fieldImages', {'Id': '', });
lyr_Lampoh_14.set('fieldImages', {'Id': '', 'nama': '', 'no_hp': '', 'jenis_tana': '', 'produksi': '', 'status': '', });
lyr_LahanKosong_15.set('fieldImages', {'Id': '', 'Luas': '', });
lyr_Kuburan_16.set('fieldImages', {'Id': '', 'luas': '', 'jenis': '', });
lyr_Kios_17.set('fieldImages', {'Id': '', });
lyr_KetamKayu_18.set('fieldImages', {'Id': '', });
lyr_Kantor_19.set('fieldImages', {'Id': '', });
lyr_KantorGeuchiek_20.set('fieldImages', {'Id': '', });
lyr_GudangPinang_21.set('fieldImages', {'Id': '', });
lyr_Blang_22.set('fieldImages', {'Id': '', 'Luas_Lahan': '', 'Nama': '', 'no_hp': '', 'produksi': '', 'status': '', 'irigasi': '', 'tanaman': '', });
lyr_BalaiPengajian_23.set('fieldImages', {'Id': '', 'nama': '', 'jlh_santri': '', 'tahun_berd': '', });
lyr_Lueng_24.set('fieldImages', {'Id': '', 'Nama_Lueng': '', 'Panjang_Lu': '', 'lebar_luen': '', 'Bentuk': '', 'Pembiayaan': '', 'Thn_Perbai': '', });
lyr_Jurong_25.set('fieldImages', {'Panjang_Jl': '', 'Lebar_Jln': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_Perbai': '', 'Nama_lr': '', 'Id': '', });
lyr_Jalan_26.set('fieldImages', {'Panjang_Jl': '', 'Lebar_Jln': '', 'Status_Jln': '', 'Kondisi': '', 'Kategori': '', 'Pembiayaan': '', 'Thn_Perbai': '', 'Nama_lr': '', 'Id': '', });
lyr_Got_27.set('fieldImages', {'Panjang_Jl': '', 'Lebar_Jln': '', 'Kondisi': '', 'Pembiayaan': '', 'Thn_Perbai': '', 'Nama_lr': '', 'Id': '', });
lyr_Alue_28.set('fieldImages', {'Id': '', 'Nama_Alue': '', 'Panjang': '', 'Lebar': '', });
lyr_Sungai_1.set('fieldLabels', {'Id': 'no label', 'Nama_Sunga': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', });
lyr_WCUmum_2.set('fieldLabels', {'Id': 'no label', });
lyr_Waduk_3.set('fieldLabels', {'Id': 'no label', });
lyr_Toko_4.set('fieldLabels', {'Id': 'no label', 'nama': 'no label', 'no_hp': 'no label', 'jenis_bang': 'no label', 'kepemilika': 'no label', 'Nik': 'no label', });
lyr_TabangPasir_5.set('fieldLabels', {'Id': 'no label', });
lyr_Sekolah_6.set('fieldLabels', {'Id': 'no label', 'Nama': 'no label', 'Luas': 'no label', 'Nama_Kepal': 'no label', });
lyr_RumahWarga_7.set('fieldLabels', {'Id': 'no label', 'Luas_ruang': 'no label', 'Nama': 'no label', 'Nomor_Hp': 'no label', 'Kepemilika': 'no label', 'Jns_Bangun': 'no label', 'Jns_Lantai': 'no label', 'Nik': 'no label', 'J_Laki': 'no label', 'J_Perempua': 'no label', 'J_total': 'no label', });
lyr_RawaRawa_8.set('fieldLabels', {'Id': 'no label', });
lyr_Rangkang_9.set('fieldLabels', {'Id': 'no label', 'nama': 'no label', 'jenis': 'no label', });
lyr_PosKambling_10.set('fieldLabels', {'Id': 'no label', });
lyr_Meunasah_11.set('fieldLabels', {'Id': 'no label', 'Nama_Area': 'no label', 'Luas': 'no label', });
lyr_Masjid_12.set('fieldLabels', {'Id': 'no label', });
lyr_Lapangan_13.set('fieldLabels', {'Id': 'no label', });
lyr_Lampoh_14.set('fieldLabels', {'Id': 'no label', 'nama': 'no label', 'no_hp': 'no label', 'jenis_tana': 'no label', 'produksi': 'no label', 'status': 'no label', });
lyr_LahanKosong_15.set('fieldLabels', {'Id': 'no label', 'Luas': 'no label', });
lyr_Kuburan_16.set('fieldLabels', {'Id': 'no label', 'luas': 'no label', 'jenis': 'no label', });
lyr_Kios_17.set('fieldLabels', {'Id': 'no label', });
lyr_KetamKayu_18.set('fieldLabels', {'Id': 'no label', });
lyr_Kantor_19.set('fieldLabels', {'Id': 'no label', });
lyr_KantorGeuchiek_20.set('fieldLabels', {'Id': 'no label', });
lyr_GudangPinang_21.set('fieldLabels', {'Id': 'no label', });
lyr_Blang_22.set('fieldLabels', {'Id': 'no label', 'Luas_Lahan': 'no label', 'Nama': 'no label', 'no_hp': 'no label', 'produksi': 'no label', 'status': 'no label', 'irigasi': 'no label', 'tanaman': 'no label', });
lyr_BalaiPengajian_23.set('fieldLabels', {'Id': 'no label', 'nama': 'no label', 'jlh_santri': 'no label', 'tahun_berd': 'no label', });
lyr_Lueng_24.set('fieldLabels', {'Id': 'no label', 'Nama_Lueng': 'no label', 'Panjang_Lu': 'no label', 'lebar_luen': 'no label', 'Bentuk': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', });
lyr_Jurong_25.set('fieldLabels', {'Panjang_Jl': 'no label', 'Lebar_Jln': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', 'Nama_lr': 'no label', 'Id': 'no label', });
lyr_Jalan_26.set('fieldLabels', {'Panjang_Jl': 'no label', 'Lebar_Jln': 'no label', 'Status_Jln': 'no label', 'Kondisi': 'no label', 'Kategori': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', 'Nama_lr': 'no label', 'Id': 'no label', });
lyr_Got_27.set('fieldLabels', {'Panjang_Jl': 'no label', 'Lebar_Jln': 'no label', 'Kondisi': 'no label', 'Pembiayaan': 'no label', 'Thn_Perbai': 'no label', 'Nama_lr': 'no label', 'Id': 'no label', });
lyr_Alue_28.set('fieldLabels', {'Id': 'no label', 'Nama_Alue': 'no label', 'Panjang': 'no label', 'Lebar': 'no label', });
lyr_Alue_28.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});