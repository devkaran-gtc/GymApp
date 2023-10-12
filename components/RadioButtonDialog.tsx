import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';

const RadioButtonDialog = ({ isVisible, options, selectedValue, onClose, onSelect }: any) => {
    return (
        <Modal isVisible={isVisible}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '80%' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Select an option:</Text>
                    {options.map(({ option, index }: any) => (
                        <TouchableOpacity key={index} onPress={() => onSelect(option)} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 10,
                                    borderWidth: 2,
                                    borderColor: option === selectedValue ? 'blue' : 'gray',
                                    marginRight: 10,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                {option === selectedValue && (
                                    <View
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: 6,
                                            backgroundColor: 'blue',
                                        }}
                                    />
                                )}
                            </View>
                            <Text>{option}</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 20 }}>
                        <Text style={{ color: 'blue', fontSize: 16 }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default RadioButtonDialog;
