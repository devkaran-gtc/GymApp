import { View, Text, StyleSheet, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import DateCard from '../components/DateCard';
import { LineChart } from 'react-native-chart-kit';
import CustomDialog from '../components/CustomDialog';
import { useTranslation } from 'react-i18next';


const Report = () => {

    const { t } = useTranslation();


    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                data: [30, 45, 28, 80, 99, 43],
                color: (opacity = 1) => `rgba(0, 107, 255, ${opacity})`, // Line color
            },
        ],
    };

    const [isDialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => {
        setDialogVisible(true);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };


    return (
        <>
            <StatusBar backgroundColor={'black'} />
            <View style={styles.container}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ paddingBottom: 80 }}>

                        <Text style={styles.txtStyle}>{t('Reports')}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 22, marginTop: 20 }}>

                            <Image style={styles.imgStyle} source={require('../assets/images/dumb.png')} resizeMode='contain' />
                            <View>
                                <Text style={styles.textStyle2}>{t('WorkOUT')}</Text>
                                <Text style={[styles.textStyle2, { fontFamily: 'Lato-Black', fontSize: 16 }]}>5</Text>
                            </View>
                            <Image style={{ height: 40 }} source={require('../assets/images/line.png')} />


                            <Image style={styles.imgStyle} source={require('../assets/images/flame.png')} resizeMode='contain' />
                            <View>
                                <Text style={styles.textStyle2}>{t('KCAL')}</Text>
                                <Text style={[styles.textStyle2, { fontFamily: 'Lato-Black', fontSize: 16 }]}>500</Text>
                            </View>
                            <Image style={{ height: 40 }} source={require('../assets/images/line.png')} />


                            <Image style={styles.imgStyle} source={require('../assets/images/clock.png')} resizeMode='contain' />
                            <View>
                                <Text style={styles.textStyle2}>{t('MINUTE')}</Text>
                                <Text style={[styles.textStyle2, { fontFamily: 'Lato-Black', fontSize: 16 }]}>75</Text>
                            </View>
                        </View>

                        <View style={styles.cardStyle}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomColor: '#D6D6D6', borderBottomWidth: 1, alignItems: 'center', paddingVertical: 10 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#192126' }}>{t('History')}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#0086FF' }}>{t('MORE')}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginHorizontal: 15, marginTop: 8 }}>
                                <DateCard day={'S'} date={'12'} />
                                <DateCard day={'M'} date={'13'} />
                                <DateCard day={'T'} date={'14'} />
                                <DateCard day={'W'} date={'15'} />
                                <DateCard day={'T'} date={'16'} />
                                <DateCard day={'F'} date={'17'} />
                                <DateCard day={'S'} date={'18'} />

                            </View>

                            <View style={{ alignItems: 'center', marginTop: 10 }}>

                                <Text style={{ color: '#0086FF', fontFamily: 'Lato-Regular', fontSize: 15 }}>{t('Records')}</Text>
                            </View>

                        </View>


                        <View style={{ backgroundColor: 'white', marginTop: 10, marginHorizontal: 20, borderRadius: 15 }}>

                            <Text style={[styles.txtStyle, { color: 'black', fontSize: 15, marginTop: 10 }]}>{t('Report')}</Text>


                            <View style={{ flexDirection: 'row', backgroundColor: '#F1F1F1', justifyContent: "space-between", paddingVertical: 10, paddingHorizontal: 20, marginTop: 10, alignItems: 'center' }}>
                                <Text style={{ color: '#4E4E4E', fontFamily: 'Lato-Bold' }}>{t('Weight')}</Text>
                                <Text onPress={() => { showDialog() }} style={{ color: '#0086FF', fontFamily: 'Lato-Regular', fontSize: 20, paddingStart: 30 }}>+</Text>
                                <CustomDialog
                                    visible={isDialogVisible}
                                    onClose={hideDialog}
                                />
                            </View>
                            <LineChart
                                data={data}
                                width={300}
                                height={200}
                                chartConfig={{
                                    backgroundColor: '#ffffff',
                                    backgroundGradientFrom: '#ffffff',
                                    backgroundGradientTo: '#ffffff',
                                    decimalPlaces: 0,
                                    color: (opacity = 1) => `rgba(0, 107, 255	, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                }}
                                bezier
                                withDots={false} // Disable dots
                                style={styles.chart}
                            />

                            <View style={{ flexDirection: 'row', alignItems: 'center', marginStart: 20, marginTop: 10 }}>
                                <View style={{ height: 15, width: 15, backgroundColor: '#2A83FF' }} />
                                <Text style={{ color: '#5F5F5F', marginStart: 10, fontFamily: 'Lato-Regular' }}>{t('Weight')}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center', paddingVertical: 15, marginTop: 10 }}>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F' }}>{t('Current')}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F' }}>143.33 lbs</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomColor: 'lightgrey', borderBottomWidth: 1, alignItems: 'center', paddingVertical: 10 }}>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F' }}>{t('Heaviest')}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F' }}>143.33 lbs</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', paddingVertical: 10, marginBottom: 10 }}>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F' }}>{t('Lightest')}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F' }}>143.33 lbs</Text>
                            </View>

                        </View>


                        <View style={[styles.cardStyle, { height: 140, marginBottom: 20 }]}>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, borderBottomColor: '#D6D6D6', borderBottomWidth: 1, alignItems: 'center', paddingVertical: 15 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#192126', fontSize: 16 }}>{t('BMI(kg/m2) :')}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#0086FF' }}>{t('EDIT')}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', paddingVertical: 12 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#192126', fontSize: 16 }}>{t('Height')}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#0086FF' }}>{t('EDIT')}</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, alignItems: 'center', paddingVertical: 12 }}>
                                <Text style={{ fontFamily: 'Lato-Bold', color: '#2A83FF', fontSize: 16 }}>{t("Current")}</Text>
                                <Text style={{ fontFamily: 'Lato-Regular', color: '#5F5F5F', textDecorationLine: 'underline' }}>{t('0 FT 0.0 IN')}</Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </View>
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    txtStyle: {
        color: 'white',
        fontFamily: 'Lato-Black',
        fontSize: 16,
        marginTop: 40,
        marginStart: 20
    },
    imgStyle: {
        height: 25,
        width: 35,
    },
    textStyle2: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        fontSize: 10
    },
    cardStyle: {
        backgroundColor: 'white',
        height: 180,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 15,
        overflow: 'hidden'
    },
    chart: {
        marginVertical: 8,
    },
})

export default Report;
