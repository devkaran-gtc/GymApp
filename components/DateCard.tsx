import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import CustomCheckbox from './CustomCheckbox';


interface dateProps {
    day: any,
    date: any
}

const DateCard = ({ day, date }: dateProps) => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Lato-Regular', color: '#D6D6D6' }}>{day}</Text>
            <CustomCheckbox checked={isChecked} onChange={handleCheckboxChange} />
            <Text style={{ marginTop: 10, fontFamily: 'Lato-Bold', color: '#6D6D6D' }}>{date}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 30,
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    }
})

export default DateCard