import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'

interface historyProps {
    onPress(): void
}

const HistoryCard = ({ onPress }: historyProps) => {
    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image style={styles.imgStyle} source={require('../assets/images/abs.png')} resizeMode='contain' />

            <View style={{ marginStart: 20 }}>

                <Text style={[styles.textStyle, { color: '#ACACAC', fontFamily: 'Lato-Regular' }]}>Jun 16, 10:48 am</Text>
                <Text style={[styles.textStyle, { fontSize: 19, marginTop: 4 }]}>ABS Beginning</Text>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 5 }}>

                    <Image style={{ height: 20, width: 20 }} source={require('../assets/images/flame.png')} resizeMode='contain' />
                    <Text style={[styles.textStyle, { marginStart: 5 }]}>0.6 kcal</Text>

                    <Image style={{ height: 20, width: 20, marginLeft: 10 }} source={require('../assets/images/clock.png')} resizeMode='contain' />
                    <Text style={[styles.textStyle, { marginStart: 5 }]}>00:35</Text>
                </View>

            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    container: {
        height: 100,
        backgroundColor: 'black',
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center',
        borderTopColor: 'grey',
        borderWidth: 1,
    },

    imgStyle: {
        height: 70,
        width: 70,
        marginStart: 20
    },
    textStyle: {
        color: 'white',
        fontFamily: 'Lato-Bold',
    }
})

export default HistoryCard