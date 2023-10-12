import { View, Text, StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import InfoDialog from '../components/InfoDialog';
import { useTranslation } from 'react-i18next';




const ProgressStart = () => {

    const navigation: any = useNavigation();

    const { t } = useTranslation()

    const [isDialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => {
        setDialogVisible(true);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };

    return (
        <>
            <View style={styles.container}>

                <StatusBar backgroundColor={'white'} barStyle="dark-content" />


                <View style={{ width: '100%', flexDirection: 'row', marginTop: 20, justifyContent: 'flex-end', marginHorizontal: 20 }}>
                    <Image style={styles.imgStyle1} source={require('../assets/images/volume.png')} resizeMode='contain' />
                    <Image style={[styles.imgStyle1, { marginEnd: 20 }]} source={require('../assets/images/cam.png')} resizeMode='contain' />
                </View>

                {/* <Image style={styles.imgStyle2} source={require('../assets/images/workout.gif')} resizeMode='contain' /> */}
                {/* https://cdn.pixabay.com/animation/2023/02/15/11/01/11-01-14-951_512.gif */}
                <FastImage
                    source={{
                        uri: 'https://i.gifer.com/NszM.gif',
                        priority: FastImage.priority.normal,
                    }}
                    style={styles.imgStyle2}
                    resizeMode={FastImage.resizeMode.contain}
                />


                <View style={{ width: '100%', flexDirection: 'row', marginTop: 0, justifyContent: 'flex-end', marginHorizontal: 20 }}>
                    <Image style={styles.imgStyle1} source={require('../assets/images/like.png')} resizeMode='contain' />
                    <Image style={[styles.imgStyle1, { marginEnd: 20 }]} source={require('../assets/images/dislike.png')} resizeMode='contain' />
                </View>


                <Text style={styles.textStyle}>{t('Ready to go!')}</Text>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>

                    <Text style={styles.textStyle2}>{t('Right Side Crunch')}</Text>
                    <Pressable onPress={showDialog}><Image style={{ height: 25, width: 24, marginStart: 5 }} source={require('../assets/images/cquestion.png')} /></Pressable>
                    <InfoDialog visible={isDialogVisible}
                        onClose={hideDialog} />

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                    <CircularProgress radius={60} maxValue={3} value={2} activeStrokeColor='#006BFF' progressValueColor='black' progressValueFontSize={40} inActiveStrokeColor='#D1D1D1' clockwise={false} />
                    <Pressable onPress={() => navigation.navigate('ProgressAnimation')} ><Image style={{ height: 20, width: 20, marginStart: 30 }} source={require('../assets/images/skip.png')} /></Pressable>
                </View>

            </View>

            <Pressable
                style={styles.button} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>{t('Close')}</Text>
            </Pressable>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0, // Add space at the top for the status bar
        alignItems: 'center',
        backgroundColor: 'white'
    },

    imgStyle1: {
        height: 35,
        width: 35,
        marginHorizontal: 8
    },
    imgStyle2: {
        height: 300,
        width: 300,
    },
    textStyle: {
        fontFamily: 'Lato-Black',
        fontSize: 30,
        color: '#006BFF',
        textTransform: 'uppercase',
        marginTop: 50
    },
    textStyle2: {
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        color: 'black',
        textTransform: 'uppercase'

    },
    button: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#006BFF',
        padding: 10,
        borderRadius: 30,
        height: 50,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        left: 40,
        right: 40

    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        textTransform: 'uppercase'
    },

});

export default ProgressStart;
