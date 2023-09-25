import { View, Text, StyleSheet, ImageBackground, Image, Pressable } from 'react-native'
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'


type landingProps = NativeStackScreenProps<RootStackParamList, 'Landing'>

const Landing = ({ navigation }: landingProps) => {
    return (
        <>
            <ImageBackground style={styles.container} source={require('../assets/images/back.png')} >
                <View style={styles.overlay} />

                <View style={{ flex: 1.3, justifyContent: 'flex-end', alignItems: 'center' }}>
                    <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                </View>


                <View style={{ flex: 1, justifyContent: 'flex-end' }}>

                    <Pressable style={[styles.button, { backgroundColor: '#006BFF' }]} >
                        <Text style={styles.btnText}>I’m Ready to Join</Text>
                    </Pressable>

                    <Pressable style={[styles.button, {
                        marginBottom: 40, borderWidth: 1,
                        borderColor: '#4D4D4D'
                    }]} onPress={() => { navigation.navigate('Login') }} >
                        <Text style={styles.btnText}>Skip</Text>
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
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the color and opacity as needed
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