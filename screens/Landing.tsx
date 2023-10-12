import { View, Text, StyleSheet, ImageBackground, Image, Pressable, StatusBar } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import CustomButton from '../components/CustomButton'
import { useTranslation } from 'react-i18next'
import Animated, { useSharedValue } from 'react-native-reanimated';




type landingProps = NativeStackScreenProps<RootStackParamList, 'Landing'>

const Landing = ({ navigation }: landingProps) => {

    const { t } = useTranslation();
    const width = useSharedValue(100);

    return (
        <>
            <StatusBar translucent backgroundColor={'transparent'} />
            <ImageBackground style={styles.container} source={require('../assets/images/splash.png')} >
                <View style={styles.overlay} />

                <View style={{ flex: 1.3, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                </View>

                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <CustomButton backgroundColor='#006BFF' height={50} width={'90%'} text={t('ready')} size={13} spacing={2} marginHorizontal={20} marginVertical={35} textColor={'white'} onPress={() => { navigation.navigate('Login') }} />

                    <Pressable style={[styles.button, {
                        marginBottom: 40, borderWidth: 1, borderColor: '#4D4D4D'
                    }]} onPress={() => { navigation.navigate('Home') }}>
                        <Text style={styles.btnText}>{t('Skip')}</Text>
                    </Pressable>

                </View>

            </ImageBackground>

        </>



    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',

    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the color and opacity as needed
    },

    logo: {
        height: 120,
        width: 120
    },

    button: {
        height: 50,
        borderRadius: 58,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 10,

    },

    btnText: {
        color: 'white',
        fontFamily: 'Lato-Black',
        fontSize: 13,
        letterSpacing: 2,
        textTransform: 'uppercase',
    }
})

export default Landing