import { View, Text, Modal, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const ThreeDotsMenu = ({ visible, onClose }: any) => {

  const navigation: any = useNavigation()

  const handleLogout = async () => {
    try {
      // Clear stored data
      await AsyncStorage.removeItem('image');
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('password');
      await AsyncStorage.removeItem('email');
      await AsyncStorage.removeItem('isLogin');

      // Navigate to the login screen (or any other appropriate screen)
      navigation.navigate('Landing');
      onClose()

    } catch (error) {
      console.error('Error during logout:', error);
    }
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

            <View style={{}}>
              <Pressable onPress={() => {
                handleLogout()
              }} style={{ paddingHorizontal: 10 }} ><Text style={{ color: 'black' }}>Logout</Text></Pressable>
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
    alignItems: 'flex-end',
    margin: 35
  },
  centeredView: {
    flex: 1,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
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

export default ThreeDotsMenu