import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const BodyCard = () => {

    const navigation: any = useNavigation();

    return (
        <Pressable onPress={() => { navigation.navigate('ProgressStart') }} style={styles.container}>
            <Image style={styles.imgStyle} source={require('../assets/images/chest.png')} />
            <Text style={styles.txtStyle}>Chest</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 110,
        width: 150,
        backgroundColor: '#006BFF',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginHorizontal: 10
    },
    imgStyle: {
        height: 50,
        width: 50,
    },
    txtStyle: {
        fontFamily: 'Lato-Bold',
        color: 'white',
        marginTop: 10
    }

})

export default BodyCard