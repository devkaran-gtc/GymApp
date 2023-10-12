import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput, Pressable } from 'react-native';

const CustomDialog = ({ visible, onClose }: any) => {

    const [getType, setType] = useState('')
    const [getType1, setType1] = useState('')

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text>Weight</Text>

                        <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                            <TextInput style={{ borderWidth: 1, borderColor: 'lightgrey', width: '70%' }} placeholder='143.33 LB' />
                            <Text onPress={() => { setType('KG') }} style={{ borderColor: getType === 'KG' ? 'white' : 'lightgrey', backgroundColor: getType === 'KG' ? '#006BFF' : 'white', borderWidth: 1, padding: 10, marginStart: 8, textAlign: 'center', paddingVertical: 15, color: getType === 'KG' ? 'white' : 'grey' }}>KG</Text>
                            <Text onPress={() => { setType('LB') }} style={{ borderColor: getType === 'LB' ? 'white' : 'lightgrey', backgroundColor: getType === 'LB' ? '#006BFF' : 'white', borderWidth: 1, padding: 10, marginStart: 8, textAlign: 'center', paddingVertical: 15, color: getType === 'LB' ? 'white' : 'grey' }}>LB</Text>
                        </View>

                        <Text style={{ marginTop: 10 }}>Height</Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <TextInput style={{ borderWidth: 1, borderColor: 'lightgrey', width: '33%' }} placeholder='0 FT' />
                            <TextInput style={{ borderWidth: 1, borderColor: 'lightgrey', width: '33%', marginStart: 10 }} placeholder='143.33 LB' />
                            <Text onPress={() => { setType1('KG') }} style={{ borderColor: getType1 === 'KG' ? 'white' : 'lightgrey', backgroundColor: getType1 === 'KG' ? '#006BFF' : 'white', borderWidth: 1, padding: 10, marginStart: 8, textAlign: 'center', paddingVertical: 15, color: getType1 === 'KG' ? 'white' : 'grey' }}>KG</Text>
                            <Text onPress={() => { setType1('LB') }} style={{ borderColor: getType1 === 'LB' ? 'white' : 'lightgrey', backgroundColor: getType1 === 'LB' ? '#006BFF' : 'white', borderWidth: 1, padding: 10, marginStart: 8, textAlign: 'center', paddingVertical: 15, color: getType1 === 'LB' ? 'white' : 'grey' }}>LB</Text>
                        </View>

                        <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'flex-end' }}>
                            <Pressable onPress={onClose}>
                                <Text style={{ color: '#1477FF', fontFamily: 'Lato-Regular', fontSize: 15 }}>Cancel</Text>
                            </Pressable>

                            <Pressable onPress={onClose} style={{ marginStart: 20 }}>
                                <Text style={{ color: '#1477FF', fontFamily: 'Lato-Regular', fontSize: 15 }}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </Modal >
    );
};


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

export default CustomDialog;
