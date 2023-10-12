import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'

interface btnProps {
    backgroundColor: any,
    width: any,
    height: any,
    text: any,
    size: any,
    spacing: any,
    marginHorizontal: any,
    marginVertical: any,
    textColor: any,
    onPress(): void
}

const CustomButton = ({ backgroundColor, width, height, text, size, spacing, marginHorizontal, marginVertical, textColor, onPress }: btnProps) => {
    return (
        <View>
            {/* onPress={onClickVerify} */}
            <Pressable style={[styles.button, { backgroundColor, width, height, marginHorizontal: marginHorizontal, marginVertical: marginVertical }]} onPress={onPress}  >
                <Text style={[styles.btnText, { fontSize: size, letterSpacing: spacing, color: textColor }]}>{text}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({

    button: {
        borderRadius: 58,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',

    },

    btnText: {
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
    }

})

export default CustomButton