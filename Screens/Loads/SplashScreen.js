import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, StyleSheet } from 'react-native';

const SplashScreen = ({ onAnimationEnd }) => {
    const fadeAnim = useRef(new Animated.Value(1)).current; // Initial opacity is 1

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 0, // Fade out to opacity 0
            duration:2000, // Duration of the animation
            useNativeDriver: true, // Use native driver for better performance
        }).start(() => onAnimationEnd()); // Call the function when animation ends
    }, [fadeAnim, onAnimationEnd]);

    return (
        <Animated.View style={[styles.splash, { opacity: fadeAnim }]}>
            <Text style={styles.title}>CORE</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    splash: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#12132C', // Change to your desired color
    },
    title: {
        color: 'white',
        fontSize: 48,
    },
});

export default SplashScreen;