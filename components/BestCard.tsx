import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

interface bestProps {
    text: any
}

const BestCard = ({ text }: bestProps) => {

    const navigation: any = useNavigation();

    return (
        <Pressable onPress={() => { navigation.navigate('ProgressStart') }} style={styles.container}>

            <Image style={styles.imgStyle} source={require('../assets/images/workimg1.png')} resizeMode='cover' />
            <View style={{ height: 80, marginStart: 10 }}>

                <Text style={styles.textStyle}>{text}</Text>
                <Text style={[styles.textStyle, { marginTop: 15, color: '#192126B2', fontFamily: 'Lato-Regular' }]}>10 min</Text>
                <Text style={[styles.textStyle, { marginTop: 15, color: '#192126B2', fontFamily: 'Lato-Regular' }]}>Beginner</Text>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 110,
        marginHorizontal: 10,
        borderRadius: 20,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        backgroundColor: 'white'
    },

    imgStyle: {
        height: 90,
        width: 80,
        borderRadius: 15,
        marginStart: 10
    },
    textStyle: {
        color: '#192126',
        fontFamily: 'Lato-Bold'
    }
})

export default BestCard