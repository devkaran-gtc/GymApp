import { View, Text, Pressable, StyleSheet, StatusBar, Image } from 'react-native'
import React from 'react'


interface profileProps {
    image: any,
    text: any,
    height: any,
    width: any,
    onpress(): void
}

const ProfileList = ({ image, text, height, width, onpress }: any) => {
    return (
        <View>
            <Pressable onPress={onpress} style={styles.btnStyle}>
                <Image style={{ height: height, width: width, marginStart: 20 }} source={image} />
                <Text style={styles.textStyle}>{text}</Text>
            </Pressable>


        </View>
    )
}

const styles = StyleSheet.create({


    btnStyle: {
        height: 60,
        flexDirection: 'row',
        overflow: 'hidden',
        alignItems: 'center'
    },

    textStyle: {
        color: 'black',
        fontFamily: 'Lato-Regular',
        marginStart: 20
    }
})

export default ProfileList