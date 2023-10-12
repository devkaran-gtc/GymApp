import { View, Text, Pressable, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { BlurView } from '@react-native-community/blur';
import ProgressBar from 'react-native-progress-bar-horizontal';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

interface homeProps {
    imageSource: any
}

const HomeCard = ({ imageSource }: any) => {
    const navigation: any = useNavigation();
    const { t } = useTranslation();
    return (
        <View>
            {/* require('../assets/images/gym1.png') */}
            <Pressable style={styles.container} onPress={() => {
                navigation.navigate('Exercise', { url: imageSource });
            }} >
                <ImageBackground style={styles.imgBackground} source={imageSource}>

                    <View style={{ flex: 2, justifyContent: 'flex-end', padding: 20 }}>

                        <View style={styles.overlay} />

                        <Text style={styles.textStyle}>{t('Full Body')}</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image style={styles.imgStyle} source={require('../assets/images/barbell.png')} resizeMode='contain' />
                            <Text style={[styles.textStyle, { fontSize: 15, marginStart: 5 }]}>{t('7x4 Challenge')}</Text>
                        </View>

                    </View>


                    {/* <BlurView
                        style={{ paddingHorizontal: 20 }}
                        blurType="light"
                        blurAmount={10}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ fontSize: 14, color: '#BBF246' }}>27 days left</Text>
                            <Text style={{ fontSize: 14, color: '#BBF246' }}>4%</Text>

                        </View>


                        <View style={{ marginTop: 5 }}>
                            <ProgressBar
                                progress={0.3}
                                fillColor="white"
                                unfilledColor="rgba(255, 255, 255, 0.2)"
                                height={5}
                                borderWidth={0}
                            />

                        </View>

                    </BlurView> */}


                    <View
                        style={{ flex: 1, paddingHorizontal: 20, backgroundColor: 'grey', opacity: 0.9 }}
                    >

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ fontSize: 14, color: '#BBF246' }}>{t('27 days left')}</Text>
                            <Text style={{ fontSize: 14, color: '#BBF246' }}>4%</Text>

                        </View>



                        <View style={{ marginTop: 5 }}>
                            <ProgressBar
                                progress={0.3}
                                fillColor="white"
                                unfilledColor="rgba(255, 255, 255, 0.2)"
                                height={5}
                                borderWidth={0}
                            />

                        </View>

                    </View>


                </ImageBackground>

            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 180,
        overflow: 'hidden',
        borderRadius: 10,
        marginVertical: 10
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.6)', // Set alpha to 1.0 for full opacity (fully black)
    },

    imgBackground: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Lato-Regular',
        fontWeight: '600',
        letterSpacing: 1
    },
    imgStyle: {
        height: 25,
        width: 25,
    }
})

export default HomeCard