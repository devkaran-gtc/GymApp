import { View, Text, StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import React from 'react';


interface exercisePorps {
    text: any
    drag: any
    isActive: any
}

const ExerciseCard = ({ text, drag, isActive }: exercisePorps) => {

    return (
        <Pressable onLongPress={drag} style={[styles.container, { backgroundColor: isActive ? 'lightgray' : 'white', }]}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image style={styles.imgStyle} source={require('../assets/images/eximg.png')} resizeMode='contain' />
                <View style={{ marginStart: 15 }}>
                    <Text style={[styles.textStyle, { fontWeight: '700' }]}>{text}</Text>
                    <Text style={styles.textStyle}>x16</Text>
                </View>
            </View>

            <Image style={{ height: 20, width: 20 }} source={require('../assets/images/menuBurger.png')} />
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
        // marginTop: StatusBar.currentHeight || 0, // Add padding for status bar
        overflow: 'hidden',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgStyle: {
        height: 70,
        width: 80
    },
    textStyle: {
        color: 'black',
        fontFamily: 'Lato-Regular'
    }
});

export default ExerciseCard;
