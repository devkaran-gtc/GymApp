import { View, Text, StyleSheet, Image, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const PopularCard = () => {

    const navigation: any = useNavigation();

    return (
        <View>

            <ImageBackground source={require('../assets/images/gym1.png')} style={styles.container} >
                <LinearGradient start={{ x: 0.0, y: 0.9 }} end={{ x: 0.7, y: 1.0 }} colors={['#006BFF', 'transparent']} style={styles.linearGradient} />

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 40 }}>

                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.textStyle}>Lower Body {'\n'}Training</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15 }}>

                            <Image style={{ height: 20, width: 20 }} source={require('../assets/images/flame.png')} resizeMode='contain' />
                            <Text style={[styles.textStyle2, { marginStart: 5 }]}>0.6 kcal</Text>

                            <Image style={{ height: 20, width: 20, marginLeft: 10 }} source={require('../assets/images/clock.png')} resizeMode='contain' />
                            <Text style={[styles.textStyle2, { marginStart: 5 }]}>00:35</Text>
                        </View>

                    </View>

                    <Pressable onPress={() => { navigation.navigate('ProgressAnimation', { currentTab: 'Tab2' }) }}><Image style={styles.imgStyle} source={require('../assets/images/play.png')} /></Pressable>

                </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 270,
        height: 190,
        borderRadius: 40,
        overflow: 'hidden',
        justifyContent: 'center',
        padding: 20,
        marginHorizontal: 10

    },
    linearGradient: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        opacity: 0.6
    },
    textStyle: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        fontSize: 24
    },
    textStyle2: {
        color: 'white',
        fontFamily: 'Lato-Regular',
    },
    imgStyle: {
        height: 35,
        width: 35
    }

})

export default PopularCard