import { View, Text, StatusBar, ImageBackground, Image, StyleSheet, ScrollView, Pressable } from 'react-native'
import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation, useRoute } from '@react-navigation/native'
import FastImage from 'react-native-fast-image'
import YoutubeIframe from 'react-native-youtube-iframe'
import { useTranslation } from 'react-i18next'


const ProgressAnimation = () => {

    // const [getTab, setTab] = useState('Tab1')

    const { t } = useTranslation()

    const totalPages = 11; // Total number of pages
    const [currentPage, setCurrentPage] = useState(1);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const navigation: any = useNavigation()

    const route = useRoute();
    const value: any = route.params || {}; // Use an empty object as a default value

    const [getTab, setTab] = useState(value.currentTab || 'Tab1'); // Use the value.currentTab as initial state


    const pagesData = [
        [
            require('../assets/images/push1.png'),
        ],

        [
            require('../assets/images/push2.png'),
        ],

        [
            require('../assets/images/push1.png'),
        ],

        [
            require('../assets/images/push2.png'),
        ],

        [
            require('../assets/images/push1.png'),
        ],

        [
            require('../assets/images/push2.png'),
        ],

        [
            require('../assets/images/push1.png'),
        ],

        [
            require('../assets/images/push2.png'),
        ],

        [
            require('../assets/images/push1.png'),
        ],

        [
            require('../assets/images/push2.png'),
        ],

        [
            require('../assets/images/push1.png'),
        ],

        [
            require('../assets/images/push2.png'),
        ],


    ];


    const moveToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
            setCurrentImageIndex(0); // Reset to the first image on the new page
        }
    };

    // Function to move to the next page
    const moveToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
            setCurrentImageIndex(0); // Reset to the first image on the new page
        }
    };

    const toggleImage = () => {
        if (currentImageIndex === 0) {
            setCurrentImageIndex(1);
        } else {
            setCurrentImageIndex(0);
        }
    };

    return (
        <>
            <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />

            <View>

                <ImageBackground style={styles.imgStyle} source={require('../assets/images/gym1.png')}>
                    <View style={styles.overlay} />

                </ImageBackground>

                <View style={styles.barStyle}>

                    <Pressable style={[styles.barStyle2, { borderBottomWidth: getTab === 'Tab1' ? 8 : 0 }]} onPress={() => { setTab('Tab1') }}>
                        <Image style={styles.iconStyle} source={require('../assets/images/anim.png')} resizeMode='contain' />
                        <Text style={styles.txtStyle}>{t('Animation')}</Text>
                    </Pressable>

                    <Pressable style={[styles.barStyle2, { borderBottomWidth: getTab === 'Tab2' ? 8 : 0 }]} onPress={() => { setTab('Tab2') }}>
                        <Image style={styles.iconStyle} source={require('../assets/images/video.png')} resizeMode='contain' />
                        <Text style={styles.txtStyle}>{t('Video')}</Text>
                    </Pressable>

                </View>
            </View>


            <ScrollView style={{ backgroundColor: 'white' }}>

                {getTab === 'Tab1' && <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                    {/* <Image style={styles.imgStyle2} source={require('../assets/images/exeimg.png')} resizeMode='contain' /> */}
                    <FastImage
                        source={{
                            uri: 'https://i.gifer.com/FlXc.gif',
                            priority: FastImage.priority.normal,
                        }}
                        style={styles.imgStyle2}
                        resizeMode={FastImage.resizeMode.contain}
                    />

                </View>}

                {getTab === 'Tab2' && <View style={[styles.imgStyle2, { alignItems: 'center', justifyContent: 'center', width: '100%', backgroundColor: 'black' }]}>


                    <YoutubeIframe
                        webViewStyle={{ marginTop: 50, marginHorizontal: 20 }}
                        height={300}
                        play={false}
                        videoId={'24fdcMw0Bj0'}
                        width={400}

                    />
                </View>
                }

                <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                    <Text style={[styles.titleTxt, { textTransform: 'uppercase' }]}>Wide Arm pushup-ups X8</Text>

                    <Text style={styles.descTxt}>Start in the regular push-up position but with {'\n'}
                        your hands spread wider than your shoulders.</Text>

                    <Text style={[styles.descTxt, { marginTop: 5 }]}>Then push your body up and down.{'\n'}
                        Remember to keep your body straight.</Text>

                    <Text style={[styles.titleTxt, { fontSize: 19, marginTop: 20 }]}>{t('Muscle Highlight')}</Text>

                    <View style={{ flexDirection: 'row', marginTop: 50, borderBottomColor: 'lightgrey', borderBottomWidth: 1 }}>

                        {/* <Image style={styles.imgStyle3} source={require('../assets/images/push1.png')} resizeMode='contain' />
                        <Image style={styles.imgStyle3} source={require('../assets/images/push2.png')} resizeMode='contain' /> */}

                        {/* <Image
                            style={styles.imgStyle3}
                            source={pagesData[currentPage - 2] ? pagesData[currentPage - 2][currentImageIndex] : null} // Display the previous page's image
                            resizeMode='contain'
                        />

                        <Image
                            style={styles.imgStyle3}
                            source={pagesData[currentPage] ? pagesData[currentPage][currentImageIndex] : null} // Display the next page's image
                            resizeMode='contain'
                        /> */}

                        <Image
                            style={styles.imgStyle3}
                            source={pagesData[currentPage - 1] && pagesData[currentPage - 1][currentImageIndex] ? pagesData[currentPage - 1][currentImageIndex] : null}
                            resizeMode='contain'
                        />

                        {currentPage <= totalPages && (
                            <Image
                                style={styles.imgStyle3}
                                source={pagesData[currentPage] && pagesData[currentPage][currentImageIndex] ? pagesData[currentPage][currentImageIndex] : null}
                                resizeMode='contain'
                            />
                        )}
                    </View>
                </View>

            </ScrollView >

            <View style={{ flexDirection: 'row', height: 70, position: 'absolute', left: 15, right: 15, bottom: 1 }}>

                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {/* <Pressable onPress={() => { getPage === 1 ? undefined : setPage(getPage - 1) }}><Image style={styles.imgStyle4} source={require('../assets/images/previous.png')} resizeMode='contain' /></Pressable>
                    <Text style={{ marginHorizontal: 15, color: 'black', fontFamily: 'Lato-Black', fontSize: 18 }}>{getPage}/11</Text>
                    <Pressable onPress={() => { getPage === 11 ? undefined : setPage(getPage + 1) }}><Image style={styles.imgStyle4} source={require('../assets/images/next.png')} resizeMode='contain' /></Pressable> */}


                    <Pressable onPress={() => { moveToPreviousPage() }}>
                        <Image
                            style={styles.imgStyle4}
                            source={require('../assets/images/previous.png')}
                            resizeMode='contain'
                        />
                    </Pressable>
                    <Text style={{ marginHorizontal: 15, color: 'black', fontFamily: 'Lato-Black', fontSize: 18 }}>{currentPage}/{totalPages}</Text>
                    <Pressable onPress={() => { moveToNextPage() }}>
                        <Image
                            style={styles.imgStyle4}
                            source={require('../assets/images/next.png')}
                            resizeMode='contain'
                        />
                    </Pressable>


                </View>

                <View style={{ flex: 1, justifyContent: 'center' }}>

                    <CustomButton backgroundColor={'#006BFF'} height={45} marginHorizontal={0} marginVertical={0} text={t('Close')} spacing={0} size={15} width={null} textColor={'white'} onPress={() => {
                        navigation.navigate('ExerciseTimer', {
                            currentTab: getTab, // Pass the current tab state as a parameter
                        });
                    }}
                    />

                </View>

            </View >
        </>

    )
}

const styles = StyleSheet.create({

    imgStyle: {
        height: 45,
        width: '100%'
    },
    imgStyle2: {
        height: 230,
        width: 230,
    },
    textStyle: {
        color: 'white',
        marginStart: 20,
        marginTop: 20,
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        textTransform: 'uppercase'

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Set alpha to 1.0 for full opacity (fully black)
    },
    barStyle: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'black',
        overflow: 'hidden',
        alignItems: 'center',
        borderBottomWidth: 2,

    },
    barStyle2: {
        height: 45,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        marginStart: 20,
        borderColor: '#006BFF',
        marginTop: 10,

    },
    iconStyle: {
        height: 25,
        width: 25
    },
    txtStyle: {
        color: 'white',
        fontFamily: 'Lato-Regular',
        marginStart: 10
    },

    titleTxt: {
        fontFamily: 'Lato-Black',
        color: 'black',
        fontSize: 22,

    },
    descTxt: {
        fontFamily: 'Lato-Regular',
        color: 'black',
        fontSize: 16,
        marginTop: 20
    },
    imgStyle3: {
        height: 120,
        width: 160,
        marginHorizontal: 5,
        marginBottom: 30
    },
    imgStyle4: {
        height: 30,
        width: 30,
    }
})

export default ProgressAnimation