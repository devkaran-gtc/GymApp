import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, StatusBar, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RadioButtonDialog from '../components/RadioButtonDialog';
import { useTranslation } from 'react-i18next';

const WeeklyGoal = () => {
    const navigation: any = useNavigation();
    const [isDialogVisible, setDialogVisible] = useState(false);

    const { t } = useTranslation()
    // State for "Weekly training days"
    const [selectedDays, setSelectedDays] = useState<string>('1');

    // State for "First day of the week"
    const [selectedWeekDay, setSelectedWeekDay] = useState<string>('Sunday');

    const [getTap, setTap] = useState<string>('');

    const options = ['1', '2', '3', '4', '5', '6', '7'];
    const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const openDialog = () => {
        setDialogVisible(true);
    };

    const closeDialog = () => {
        setDialogVisible(false);
    };

    const handleOptionSelect = (option: string) => {
        if (getTap === 'Day') {
            setSelectedDays(option);
        } else if (getTap === 'Week') {
            setSelectedWeekDay(option);
        }
        closeDialog();
    };

    return (
        <View style={styles.container}>
            <StatusBar translucent backgroundColor={'transparent'} />

            <ImageBackground style={{ flex: 1 }} source={require('../assets/images/back.png')}>
                <View style={styles.overlay} />

                <Pressable onPress={() => { navigation.goBack() }}><Image style={{ height: 30, width: 30, marginStart: 20, marginTop: 50 }} source={require('../assets/images/backBtn.png')} /></Pressable>

                <Text style={{ color: 'white', fontFamily: 'Lato-Bold', fontSize: 22, marginTop: 20, marginHorizontal: 20 }}>{t('Set your weekly goals')}</Text>

                <Text style={{ color: 'white', fontFamily: 'Lato-Regular', marginTop: 12, marginHorizontal: 20 }}>{t('We recommend training at least 3 days weekly for a better result')}</Text >

                <View style={{ marginTop: 65 }}>
                    <Pressable style={{ backgroundColor: '#090909', height: 80, marginHorizontal: 25, borderRadius: 20, overflow: 'hidden', justifyContent: 'center', padding: 20 }}>
                        <Text style={{ color: 'white', fontFamily: 'Lato-Regular', fontSize: 17 }}>Weekly training days </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ color: '#006BFF', fontFamily: 'Lato-Regular', fontSize: 15 }}>{selectedDays} days</Text>
                            <Pressable onPress={() => {
                                openDialog()
                                setTap('Day')
                            }}><Image style={{ height: 12, width: 12 }} source={require('../assets/images/dropdown.png')} resizeMode='contain' /></Pressable>
                        </View>
                    </Pressable>

                    <Pressable style={{ backgroundColor: '#090909', height: 80, marginHorizontal: 25, borderRadius: 20, overflow: 'hidden', justifyContent: 'center', padding: 20, marginTop: 20 }}>
                        <Text style={{ color: 'white', fontFamily: 'Lato-Regular', fontSize: 17 }}>First day of the week</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 5 }}>
                            <Text style={{ color: '#006BFF', fontFamily: 'Lato-Regular', fontSize: 15 }}>{selectedWeekDay}</Text>
                            <Pressable onPress={() => {
                                openDialog()
                                setTap('Week')
                            }}><Image style={{ height: 12, width: 12 }} source={require('../assets/images/dropdown.png')} resizeMode='contain' /></Pressable>
                        </View>
                    </Pressable>

                    <RadioButtonDialog
                        isVisible={isDialogVisible}
                        options={getTap === 'Day' ? options.map((option, index) => ({ option, index })) : week.map((day, index) => ({ option: day, index }))}
                        selectedValue={getTap === 'Day' ? selectedDays : selectedWeekDay}
                        onClose={closeDialog}
                        onSelect={handleOptionSelect}
                    />

                </View>

                <Pressable
                    onPress={() => { navigation.navigate('History') }}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </Pressable>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: '#006BFF',
        height: 450,
        opacity: 0.8,
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20
    },
    button: {
        position: 'absolute',
        bottom: 20,
        backgroundColor: '#006BFF',
        padding: 10,
        borderRadius: 30,
        height: 50,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        left: 30,
        right: 30

    },
    buttonText: {
        color: 'white',
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase'
    },
})

export default WeeklyGoal;
