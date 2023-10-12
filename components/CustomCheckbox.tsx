import React, { useState } from 'react';
import { TouchableOpacity, Animated, Easing, StyleSheet, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const CustomCheckbox = ({ checked, onChange }: any) => {
    const [isChecked, setIsChecked] = useState(checked);
    const scaleValue = new Animated.Value(isChecked ? 1 : 0);

    const toggleCheckbox = () => {
        const toValue = isChecked ? 0 : 1;
        setIsChecked(!isChecked);

        Animated.timing(scaleValue, {
            toValue,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        }).start();

        // Call the onChange function provided by the parent component
        if (onChange) {
            onChange(!isChecked);
        }
    };

    const animatedScale = scaleValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0.8, 1.2],
    });

    return (
        <TouchableOpacity
            activeOpacity={0.6}
            onPress={toggleCheckbox}
            style={{ flexDirection: 'row', alignItems: 'center' }}
        >
            <View
                style={[
                    styles.checkbox,
                    {
                        borderColor: isChecked ? '#006BFF' : '#D7D7D7',
                    },
                ]}
            >
                <Animated.View
                    style={[
                        styles.innerCheckbox,
                        {
                            transform: [{ scale: animatedScale }],
                            backgroundColor: isChecked ? '#006BFF' : 'transparent',
                        },
                    ]}
                >
                    <Image style={{ height: 10, width: 10, tintColor: isChecked ? 'white' : undefined }} source={require('../assets/images/right.png')} resizeMode='contain' />
                </Animated.View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    checkbox: {
        width: 25,
        height: 25,
        borderRadius: 14,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerCheckbox: {
        width: 20,
        height: 20,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CustomCheckbox;
