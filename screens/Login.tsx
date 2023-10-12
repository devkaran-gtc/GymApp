import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Image, Pressable, ToastAndroid, StatusBar } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import CustomButton from '../components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';
import { colorTone } from 'react-native-color-matrix-image-filters';
import { useTranslation } from 'react-i18next';
import i18n from '../components/i18next';
import Animated, { useSharedValue, withDelay, withTiming, Easing, useAnimatedStyle, interpolateColor, withSpring } from 'react-native-reanimated';




type LoginProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Login = ({ navigation }: LoginProps) => {
    const [getText, setText] = useState('');
    const [getPass, setPass] = useState('');
    const [getEmail, setEmail] = useState('');
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const text = ['React', 'Native', 'Reanimated'];

    const { t } = useTranslation()

    const opacity1 = useSharedValue(0);
    const DURATION = 200;
    const DELAY = 20;

    const textAnimatedStyle = useAnimatedStyle(() => {
        return {
            opacity: withDelay(2 * DELAY, withTiming(opacity1.value, { duration: DURATION, easing: Easing.inOut(Easing.ease) })),
            transform: [{ scale: withSpring(1, { damping: 2, stiffness: 80 }) }]
        };
    });

    useEffect(() => {
        opacity1.value = withDelay(0 * DELAY, withTiming(1, { duration: DURATION }));
    }, []);

    const openImagePicker = () => {
        const options: any = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response: any) => {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
        });
    };

    const StoreData = async () => {
        try {
            await AsyncStorage.setItem('image', selectedImage ?? ''); // Use an empty string as the default value if selectedImage is null
            await AsyncStorage.setItem('name', getText);
            await AsyncStorage.setItem('password', getPass);
            await AsyncStorage.setItem('email', getEmail);
            await AsyncStorage.setItem('isLogin', 'true');
        } catch (error) {
            // Error saving data
        }
    }

    const isEmailValid = (email: string) => {
        // Regular expression for email validation
        const emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
        return emailRegex.test(email);
    };

    const onClickVerify = () => {
        if (getText.length === 0 || getPass.length === 0 || getEmail.length === 0) {
            ToastAndroid.show('Fields are empty!', ToastAndroid.SHORT);
        } else if (getPass.length < 6) {
            ToastAndroid.show('Password should be at least 6 characters long!', ToastAndroid.SHORT)
        } else if (!isEmailValid(getEmail)) {
            ToastAndroid.show('Enter a valid email address!', ToastAndroid.SHORT);
        } else if (selectedImage === undefined) {
            ToastAndroid.show('Enter an image too!', ToastAndroid.SHORT);
        } else {
            setText('');
            setPass('');
            setEmail('');
            StoreData()
            navigation.navigate('Home');
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'black'} />
            <Animated.Text style={[styles.textStyle, textAnimatedStyle]}>
                {t('welcome to')}
            </Animated.Text>

            <Text style={[styles.textStyle, { fontSize: 32, fontFamily: 'Lato-Black' }]}>{t('WORKOUT')}</Text>
            <Animated.Text style={[styles.textStyle, textAnimatedStyle, { fontSize: 14, color: '#BDBDBD' }]}>
                {t('planWorkout')}
            </Animated.Text>

            {/* <Text style={[styles.textStyle, { fontSize: 32, fontFamily: 'Lato-Black' }]}>{t('WORKOUT')}</Text>
            <Text style={[styles.textStyle, { fontSize: 14, color: '#BDBDBD' }]}>{t('planWorkout')}</Text> */}
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Pressable onPress={openImagePicker} style={[selectedImage === null ? styles.imagePickerContainer : { backgroundColor: 'black' }]}>
                    {!selectedImage && <LottieView style={{ height: 80, width: 80, }} source={require('../assets/lottie/profile.json')} autoPlay loop />}
                    {selectedImage && (
                        <Image source={{ uri: selectedImage }} style={styles.imagePickerImage} />
                    )}
                </Pressable>
                {!selectedImage && <Text style={[styles.textStyle, { fontSize: 12, marginTop: 10 }]}>{t('addImage')}</Text>}
            </View>
            <View style={[styles.inputTextOuter, { marginTop: 20 }]}>
                <Image source={require('../assets/images/user.png')} />
                <TextInput
                    style={styles.inputText}
                    placeholder={t("username")}
                    placeholderTextColor="#484848"
                    onChangeText={(text) => setText(text)}
                    value={getText}
                />
            </View>
            <View style={styles.inputTextOuter}>
                <Image source={require('../assets/images/lock.png')} />
                <TextInput
                    style={styles.inputText}
                    placeholder={t("password")}
                    placeholderTextColor="#484848"
                    onChangeText={(text) => setPass(text)}
                    secureTextEntry={true}
                    value={getPass}
                />
            </View>
            <View style={styles.inputTextOuter}>
                <Image source={require('../assets/images/mail.png')} />
                <TextInput
                    style={styles.inputText}
                    placeholder={t("email")}
                    placeholderTextColor="#484848"
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    value={getEmail}
                />
            </View>
            <CustomButton
                backgroundColor="#006BFF"
                height={45}
                width={'90%'}
                size={13}
                text={t("signUp")}
                spacing={2}
                marginHorizontal={20}
                marginVertical={40}
                textColor="white"
                onPress={onClickVerify}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
    },

    textStyle: {
        fontFamily: 'Lato-Regular',
        color: 'white',
        fontSize: 19,
        textAlign: 'center',
    },

    inputTextOuter: {
        flexDirection: 'row',
        height: 50,
        borderRadius: 25,
        backgroundColor: '#101010',
        borderWidth: 2,
        borderColor: '#383838',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 20,
        overflow: 'hidden',
        marginHorizontal: 20,
    },

    inputText: {
        color: '#484848',
        marginLeft: 10,
        fontSize: 15,
        fontFamily: 'Lato-Regular',
        width: '100%',
    },

    imagePickerContainer: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 50,
    },

    imagePickerImage: {
        backgroundColor: 'white',
        height: 80,
        width: 80,
        borderRadius: 50,

    },
});

export default Login;
