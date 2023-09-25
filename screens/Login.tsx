import { View, Text, StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>

            <Text style={[styles.textStyle]}>Welcome to</Text>
            <Text style={[styles.textStyle, { fontSize: 32, fontFamily: 'Lato-Black' }]}>WORKOUT</Text>
            <Text style={[styles.textStyle, { fontSize: 14, color: '#BDBDBD' }]}>Plan your workout time with us</Text>

            <View>
                <inpu
           </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        color: 'white',
        fontSize: 19
    }
})

export default Login