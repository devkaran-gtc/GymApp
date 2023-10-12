import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const SleepCard = () => {

    const navigation: any = useNavigation();


    return (
        <Pressable onPress={() => { navigation.navigate('ProgressStart') }} style={styles.container}>
            <Image style={styles.imgStyle} source={require('../assets/images/sleepimg.png')} resizeMode='contain' />
            <Text style={styles.txtStyle}>Full body stretching</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        width: 165,
        backgroundColor: 'white',
        borderRadius: 15,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },

    imgStyle: {
        height: 150,
        width: 150,
        borderRadius: 15

    },
    txtStyle: {
        color: '#192126',
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        marginTop: 10
    }
})

export default SleepCard