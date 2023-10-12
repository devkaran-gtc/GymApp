import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react'

const InfoDialog = ({ visible, onClose }: any) => {


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
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non pretium metus. Etiam luctus ex et quam suscipit condimentum. Proin eu venenatis sapien. Cras luctus volutpat lectus, vitae euismod odio eleifend quis. Phasellus tincidunt pharetra condimentum. Nullam dui felis, rutrum vel venenatis ac, hendrerit non lacus. Pellentesque tristique quam vitae pharetra interdum. Maecenas at placerat ex, sit amet ultrices nisl. Donec consequat volutpat odio non imperdiet. Nullam eleifend justo quis leo eleifend, eu gravida urna consectetur. Suspendisse potenti. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc condimentum molestie lorem, et euismod arcu porta sed. Donec ultrices diam faucibus, maximus nulla molestie, gravida lacus. Donec nunc dui, tempus sed eros quis, suscipit fermentum odio. Nam eu mattis libero.
                        </Text>

                        <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                            <Pressable onPress={() => { onClose() }} style={{ backgroundColor: '#006BFF', paddingVertical: 12, borderRadius: 15, paddingHorizontal: 20 }} ><Text style={{ color: 'white' }}>Close</Text></Pressable>
                        </View>
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

export default InfoDialog