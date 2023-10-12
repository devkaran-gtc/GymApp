import React, { useState } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, ScrollView, ImageBackground, Pressable } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import HistoryCard from '../components/HistoryCard';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const History = () => {
    const [selected, setSelected] = useState('');
    const navigation: any = useNavigation();

    const { t } = useTranslation()

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground source={require('../assets/images/back.png')} style={styles.imageBackground}>
                <View style={styles.overlay} />

                <View style={styles.contentContainer}>

                    <View style={styles.header}>
                        <Pressable onPress={() => { navigation.goBack() }}><Image style={{ height: 30, width: 30 }} source={require('../assets/images/backBtn.png')} /></Pressable>
                        <Text style={styles.headerText}>{t('History')}</Text>
                    </View>
                    <ScrollView style={styles.scrollView}>
                        <Calendar
                            style={styles.calendarStyle}
                            onDayPress={day => {
                                setSelected(day.dateString);
                            }}
                            monthFormat={'yyyy/MM'}
                            markedDates={{
                                [selected]: { selected: true, disableTouchEvent: true, selectedColor: '#006BFF' }
                            }} />

                        <View style={{ backgroundColor: '#000D1F', height: 90, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>

                            <View>
                                <Text style={styles.textStyle}>Jun 11 - Jul 17</Text>
                                <Text style={[styles.textStyle, { fontFamily: 'Lato-Regular', fontSize: 14 }]}>4 {t('WorkOUT')}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>

                                <Image style={{ height: 25, width: 25 }} source={require('../assets/images/flame.png')} resizeMode='contain' />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.textStyle2}>{t('KCAL')}</Text>
                                    <Text style={[styles.textStyle, { fontSize: 12 }]}>500</Text>
                                </View>

                                <Image style={{ height: 25, width: 25, marginLeft: 10 }} source={require('../assets/images/clock.png')} resizeMode='contain' />
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.textStyle2}>{t('MINUTE')}</Text>
                                    <Text style={[styles.textStyle, { fontSize: 12 }]}>75</Text>
                                </View>
                            </View>


                        </View>
                        <HistoryCard onPress={() => { navigation.navigate('ProgressStart') }} />
                        <HistoryCard onPress={() => { navigation.navigate('ProgressStart') }} />
                        <HistoryCard onPress={() => { navigation.navigate('ProgressStart') }} />
                        <HistoryCard onPress={() => { navigation.navigate('ProgressStart') }} />


                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#006BFF',
        height: 440,
        opacity: 0.8,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
    },
    contentContainer: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    header: {
        flexDirection: 'row',
        marginStart: 20,
        marginTop: 50,
        marginBottom: 10,
        alignItems: 'center',
    },
    headerText: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        marginStart: 10,
    },
    scrollView: {
        flex: 1,
    },
    calendarStyle: {
        marginHorizontal: 20,
        borderRadius: 10,
        height: 320,
        marginTop: 20,
    },
    infoContainer: {
        backgroundColor: '#000D1F',
        height: 90,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    dateText: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 17,
    },
    statsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 10,
    },
    icon: {
        height: 25,
        width: 25,
    },
    statText: {
        marginLeft: 10,
    },
    textStyle2: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 9,
    },
    textStyle: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 17
    },

});

export default History;
