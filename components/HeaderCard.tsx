import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const HeaderCard = () => {
    return (
        <View >
            <ImageBackground source={require('../assets/images/gym1.png')} style={styles.container} >
                <LinearGradient start={{ x: 0.0, y: 0.9 }} end={{ x: 0.7, y: 1.0 }} colors={['#3C3C3C', '#00000000']} style={styles.linearGradient} />
                <Text style={styles.headerTxt}>Best Quarantine{'\n'}Workout</Text>
                <Text style={styles.txtStyle}>See more  {'>'}</Text>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 190,
        backgroundColor: 'orange',
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'space-between',
        padding: 30

    },
    headerTxt: {
        color: 'white',
        fontFamily: 'Lato-Bold',
        fontSize: 23
    },
    txtStyle: {
        color: '#BBF246',
        fontFamily: 'Lato-Bold'
    },
    linearGradient: {
        ...StyleSheet.absoluteFillObject,
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        opacity: 0.8
    },

})
export default HeaderCard