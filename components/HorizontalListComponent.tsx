import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'


interface listProps {
    text: string
    borderRadius: any
    onPress(): void
    backgroundColor: any
    textColor: any
}

const HorizontalListComponent = ({ text, borderRadius, backgroundColor, textColor, onPress }: listProps) => {

    return (
        <View>

            <Pressable style={[styles.hListStyle, { backgroundColor: backgroundColor, borderRadius: borderRadius }]} onPress={onPress}>
                <Text style={{ color: textColor }}>{text}</Text>

            </Pressable>

        </View>
    )
}

const styles = StyleSheet.create({
    hListStyle: {

        padding: 10,
        borderRadius: 5,
        color: '#484848',
        fontFamily: 'Lato-Regular',
        textTransform: 'uppercase',
        marginHorizontal: 7,
        borderWidth: 1,
        borderColor: '#E0E0E0',

    },
})

export default HorizontalListComponent