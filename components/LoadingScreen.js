import React from 'react';
import { View, StyleSheet, Modal, Animated, Easing, Image } from 'react-native';

// LoadingScreen component definition
const LoadingScreen = () => {
    // Initial scale value for the animation
    const scale = new Animated.Value(0);

    // Scale animation for the pulsating effect
    Animated.loop(
        Animated.sequence([
            // Scale up the animated view
            Animated.timing(scale, {
                toValue: 1.2,
                duration: 800,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
            // Scale down the animated view
            Animated.timing(scale, {
                toValue: 1,
                duration: 800,
                easing: Easing.ease,
                useNativeDriver: true,
            }),
        ])
    ).start();

    // Interpolation for smooth scaling transition
    const pulsate = scale.interpolate({
        inputRange: [0, 1.2],
        outputRange: [1, 1.2],
    });

    // Render the loading screen
    return (
        <Modal transparent={true} animationType="fade">
            <View style={styles.container}>
                {/* Animated loader */}
                <Animated.View
                    style={[
                        styles.loader,
                        { transform: [{ scale: pulsate }] }
                    ]}
                />
                {/* Image to display on the loading screen */}
                <Image
                    source={require('../assets/yoga-dog.jpeg')} // Replace with your image path
                    style={styles.image}
                />
            </View>
        </Modal>
    );
};

// Stylesheet for the LoadingScreen component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    loader: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4F6D7A', // Background color for the loader
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 60, // Reduced width for a smaller image
        height: 60, // Reduced height to match the width
        borderRadius: 30, // Half of width/height to make it circular
    }
});

export default LoadingScreen;
