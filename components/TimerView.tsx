import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TimerView = () => {
    const [seconds, setSeconds] = useState(60); // Initial countdown time in seconds
    const [isRunning, setIsRunning] = useState(false);

    // Function to start the timer
    const startTimer = () => {
        setIsRunning(true);
    };

    // Function to stop the timer
    const stopTimer = () => {
        setIsRunning(false);
    };

    // Function to reset the timer
    const resetTimer = () => {
        setIsRunning(false);
        setSeconds(60); // Reset the timer to the initial time
    };

    useEffect(() => {
        let timerId: any;

        // Check if the timer is running
        if (isRunning && seconds > 0) {
            timerId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds - 1); // Decrement the seconds
            }, 1000); // Update every second
        } else if (seconds === 0) {
            setIsRunning(false); // Stop the timer when it reaches 0
            clearInterval(timerId);
        }

        // Cleanup the interval when the component unmounts
        return () => {
            clearInterval(timerId);
        };
    }, [isRunning, seconds]);

    return (
        <View style={styles.container}>
            <Text style={styles.timerText}>{seconds} seconds</Text>
            <View style={styles.buttonContainer}>
                {!isRunning ? (
                    <Button title="Start" onPress={startTimer} />
                ) : (
                    <>
                        <Button title="Stop" onPress={stopTimer} />
                        <Button title="Reset" onPress={resetTimer} />
                    </>
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    timerText: {
        fontSize: 24,
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default TimerView;
