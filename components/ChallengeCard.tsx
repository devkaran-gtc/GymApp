import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const ChallengeCard = () => {

    const navigation: any = useNavigation();

    return (
        <Pressable onPress={() => { navigation.navigate('ProgressStart') }} style={stlyes.container}>
            <Image style={stlyes.imgStyle} source={require('../assets/images/plank.png')} resizeMode='contain' />
            <Text style={stlyes.txtStyle}>Plank{'\n'}Challenge</Text>
        </Pressable>
    )
}

const stlyes = StyleSheet.create({
    container: {
        height: 110,
        width: 110,
        borderRadius: 15,
        backgroundColor: '#006BFF',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    imgStyle: {
        height: 50,
        width: 50,
    },
    txtStyle: {
        color: 'white',
        fontFamily: 'Lato-Bold',
    }
})
export default ChallengeCard