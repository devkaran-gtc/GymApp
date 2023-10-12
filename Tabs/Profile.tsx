import { View, Text, StatusBar, ScrollView, Image, StyleSheet, Pressable } from 'react-native'
import ProfileList from '../components/ProfileList'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import ThreeDotsMenu from '../components/ThreeDotsMenu';
import LanguageDialog from '../components/LanguageDialog';
import { t } from 'i18next';

const Profile = () => {


    const [isDialogVisible, setDialogVisible] = useState(false);

    const showDialog = () => {
        setDialogVisible(true);
    };

    const hideDialog = () => {
        setDialogVisible(false);
    };


    const [isDialogVisible2, setDialogVisible2] = useState(false);

    const showDialog2 = () => {
        setDialogVisible2(true);
    };

    const hideDialog2 = () => {
        setDialogVisible2(false);
    };

    const [profileData, setProfileData] = useState({
        image: '',
        name: '',
        password: '',
        email: '',
    });

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {
        try {
            const image = await AsyncStorage.getItem('image');
            const name = await AsyncStorage.getItem('name');
            const password = await AsyncStorage.getItem('password');
            const email = await AsyncStorage.getItem('email');

            if (image !== null && name !== null && password !== null && email !== null) {
                // Data retrieval was successful
                setProfileData({
                    image,
                    name,
                    password,
                    email,
                });
            } else {
                // One or more items were not found in AsyncStorage
                console.log('One or more items not found.');
            }
        } catch (error) {
            // Error retrieving data
            console.error('Error retrieving data:', error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={{ height: 80, backgroundColor: '#006BFF', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }} >
                <Text style={{ fontFamily: 'Lato-Bold', color: 'white', marginStart: 10, fontSize: 20, marginTop: 20 }}>{t('Setting')}</Text>
                {profileData.name && profileData.email ? (<Pressable onPress={showDialog}><Image style={{ height: 20, width: 20, marginTop: 20, marginEnd: 20, tintColor: 'white' }} source={require('../assets/images/dots.png')} resizeMode='contain' /></Pressable>) : null}
                <ThreeDotsMenu visible={isDialogVisible} onClose={hideDialog} />
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={{ backgroundColor: 'white', flex: 1 }} >
                {profileData.name && profileData.email ? (
                    <View>
                        <View style={{ height: 100, marginTop: 10, flexDirection: 'row', alignItems: 'center', borderBottomColor: 'lightgrey', borderBottomWidth: 1, paddingBottom: 10 }}>
                            <Image source={profileData.image ? { uri: profileData.image } : require('../assets/images/gym1.png')} style={{ backgroundColor: 'white', height: 80, width: 80, borderRadius: 50, marginStart: 10 }} />
                            <View style={{ marginStart: 20 }}>
                                <Text style={style.textStyle}>{profileData.name}</Text>
                                <Text style={style.textStyle}>{profileData.email}</Text>
                            </View>
                        </View>
                    </View>
                ) : null}
                <View style={{ paddingTop: 10, }}>
                    <ProfileList image={require('../assets/images/barbel.png')} text={t('Workout setting')} height={26} width={26} />
                    <ProfileList image={require('../assets/images/setting.png')} text={t('General Setting')} height={26} width={26} />
                    <ProfileList image={require('../assets/images/mic.png')} text={t('Voice Options (TTS)')} height={26} width={26} />
                    <ProfileList image={require('../assets/images/web.png')} text={t('Language options')} height={26} width={26} onpress={showDialog2} />
                    <LanguageDialog visible={isDialogVisible2} onClose={hideDialog2} />
                    <View style={{ marginTop: 10 }}>
                        <ProfileList image={require('../assets/images/share.png')} text={t('Share with friends')} height={28} width={28} />
                        <ProfileList image={require('../assets/images/favourite.png')} text={t('Rate us')} height={28} width={28} />
                        <ProfileList image={require('../assets/images/feedback.png')} text={t('Feedback')} height={28} width={28} />
                        <ProfileList image={require('../assets/images/adblock.png')} text={t('Remove ads')} height={28} width={28} />


                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const style = StyleSheet.create({
    textStyle: {
        fontSize: 17,
        color: 'black',
        fontFamily: 'Lato-Bold',
        marginVertical: 3
    }
});

export default Profile;
