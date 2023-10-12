import React, { useEffect, useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, Pressable, BackHandler } from 'react-native';
import CustomButton from '../components/CustomButton';
import InfoDialog from '../components/InfoDialog';
import { useNavigation } from '@react-navigation/native';

const ExerciseTimer = () => {
    const navigation: any = useNavigation();

    const [isDialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => {
        setDialogVisible(true);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };

    const [totalSeconds, setTotalSeconds] = useState(60); // Initial countdown time in seconds
    const [isRunning, setIsRunning] = useState(false);

    const startTimer = () => {
        setIsRunning(true);
    };

    const stopTimer = () => {
        setIsRunning(false);
    };

    const resetTimer = () => {
        setIsRunning(false);
        setTotalSeconds(60);
    };

    useEffect(() => {
        const handleBackButton = () => {
            navigation.navigate('Home');
            return true;
        };

        let timerId: any;

        if (isRunning && totalSeconds > 0) {
            timerId = setInterval(() => {
                setTotalSeconds((prevSeconds) => prevSeconds - 1);
            }, 1000);
        } else if (totalSeconds === 0) {
            setIsRunning(false);
            clearInterval(timerId);
        }

        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            clearInterval(timerId);
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        };
    }, [isRunning, totalSeconds, navigation]);

    // Calculate minutes and seconds from totalSeconds
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
        <View style={styles.container}>
            <View style={{ flex: 2 }}>
                <ImageBackground style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} source={require('../assets/images/gym1.png')} blurRadius={7}>
                    <View style={styles.overlay} />
                    <Text onPress={() => resetTimer()} style={styles.txtStyle2}>
                        Reset
                    </Text>
                    <Text
                        onPress={() => startTimer()}
                        style={[
                            styles.txtStyle2,
                            { fontSize: 70, marginTop: 20, borderWidth: 1, borderRadius: 60, paddingHorizontal: 60, paddingVertical: 5, borderColor: 'rgba(225, 225, 225, 0.4)' },
                        ]}
                    >
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                    </Text>
                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <CustomButton
                            backgroundColor={'#006BFF'}
                            height={35}
                            marginHorizontal={5}
                            marginVertical={0}
                            text={'+20s'}
                            spacing={0}
                            size={15}
                            width={110}
                            textColor={'white'}
                            onPress={() => setTotalSeconds(totalSeconds + 20)}
                        />
                        <CustomButton
                            backgroundColor={'white'}
                            height={35}
                            marginHorizontal={5}
                            marginVertical={0}
                            text={'Skip'}
                            spacing={0}
                            size={15}
                            width={110}
                            textColor={'#006BFF'}
                            onPress={() => stopTimer()}
                        />
                    </View>
                </ImageBackground>

                <View style={{ height: 90, backgroundColor: '#006BFF', justifyContent: 'center', paddingHorizontal: 20, borderBottomStartRadius: 30, borderBottomEndRadius: 30 }}>
                    <Text style={styles.txtStyle}>Next 3/11</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={[styles.txtStyle, { fontSize: 20 }]}>Knee Push-ups</Text>
                            <Pressable onPress={() => showDialog()}>
                                <Image style={{ height: 25, width: 24, marginStart: 10, tintColor: 'white' }} source={require('../assets/images/cquestion.png')} />
                            </Pressable>
                            <InfoDialog visible={isDialogVisible} onClose={hideDialog} />
                        </View>
                        <Text style={styles.txtStyle}>x 10</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                <Image style={styles.imgStyle2} source={require('../assets/images/exeimg.png')} resizeMode='contain' />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#006BFF',
        opacity: 0.7,
    },
    txtStyle: {
        color: 'white',
        textTransform: 'uppercase',
        fontFamily: 'Lato-Bold',
        fontSize: 18,
    },
    imgStyle2: {
        height: 230,
    },
    txtStyle2: {
        color: 'white',
        fontSize: 20,
        textTransform: 'uppercase',
        fontFamily: 'Lato-Black',
    },
});

export default ExerciseTimer;
