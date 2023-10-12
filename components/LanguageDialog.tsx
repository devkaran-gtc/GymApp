import { View, Text, Modal, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import i18n from './i18next';

const LanguageDialog = ({ visible, onClose }: any) => {

    const changeLanguage = (newLanguage: string) => {
        i18n.changeLanguage(newLanguage);
    };

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <TouchableOpacity
                style={styles.overlay}
                activeOpacity={1} // Prevent the underlying components from receiving touch events
                onPress={onClose}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={{ fontFamily: 'Lato-Bold', color: 'black', fontSize: 20 }}>Select Language</Text>
                        <Pressable onPress={() => {
                            changeLanguage('en')
                            onClose()
                        }} style={{ paddingVertical: 12, borderRadius: 15, paddingHorizontal: 20, marginTop: 20, borderBottomColor: 'grey', borderBottomWidth: 1, justifyContent: 'center' }} ><Text style={{ color: 'black', fontSize: 15 }}>English</Text></Pressable>
                        <Pressable onPress={() => {
                            changeLanguage('hi')
                            onClose()
                        }} style={{ paddingVertical: 12, borderRadius: 15, paddingHorizontal: 20, marginTop: 10, justifyContent: 'center' }} ><Text style={{ color: 'black', fontSize: 15 }}>हिंदी</Text></Pressable>
                    </View>
                </View>
            </TouchableOpacity>
        </Modal>
    );
}

const styles = StyleSheet.create({

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent dark background
        justifyContent: 'center',
        alignItems: 'center',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        width: '90%',
        overflow: 'hidden'
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        width: '70%'
    },
    modalContent: {
        fontSize: 16,
        marginBottom: 20,
    },
    closeButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 5,
        alignSelf: 'flex-end',
    },
    closeButtonText: {
        color: 'white',
    },
});


export default LanguageDialog