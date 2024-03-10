import React, { useState } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet,
    ImageBackground, SafeAreaView, Dimensions, Platform, StatusBar, Alert
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { fetchYogaRecommendations } from "../services/apiServices";
import LoadingScreen from './LoadingScreen';

// HomeScreen component definition
const HomeScreen = ({ navigation }) => {
    // State variables for age, gender, yoga experience, and loading status
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [experience, setExperience] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Options for yoga experience
    const experienceOptions = ['Beginner', 'Intermediate', 'Advanced'];

    // Function to validate user input
    const validateInput = () => {
        if (!age.trim() || !gender || !experience) {
            Alert.alert('Error', 'All fields are required');
            return false;
        }
        if (isNaN(age) || age <= 0) {
            Alert.alert('Error', 'Age must be a positive number');
            return false;
        }
        return true;
    };

    // Function to handle yoga recommendations request
    const handleRecommendations = async () => {
        if (!validateInput()) return;

        setIsLoading(true);
        const userData = { age, gender, yogaExperience: experience };

        try {
            const recommendations = await fetchYogaRecommendations(userData);
            navigation.navigate('RecommendationsScreen', { recommendations });
        } catch (error) {
            Alert.alert('Error', 'Failed to fetch recommendations');
        } finally {
            setIsLoading(false);
        }
    };

    // Render LoadingScreen if isLoading is true
    if (isLoading) {
        return <LoadingScreen />;
    }

    // Main component rendering
    return (
        <ImageBackground source={require('../assets/yoga-home.jpeg')} style={styles.background}>
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.container}>
                    <Text style={styles.title}>Tell us about yourself</Text>

                    {/* Age input */}
                    <TextInput
                        value={age}
                        onChangeText={setAge}
                        placeholder="Enter your age"
                        keyboardType="numeric"
                        style={styles.input}
                    />

                    {/* Gender input */}
                    <TextInput
                        value={gender}
                        onChangeText={setGender}
                        placeholder="Enter your gender"
                        style={styles.input}
                    />

                    {/* Yoga experience picker */}
                    <Text style={styles.label}>Yoga Experience:</Text>
                    <Picker
                        selectedValue={experience}
                        onValueChange={(itemValue) => setExperience(itemValue)}
                        style={styles.picker}
                    >
                        {experienceOptions.map((exp) => (
                            <Picker.Item key={exp} label={exp} value={exp} />
                        ))}
                    </Picker>

                    {/* Submit button */}
                    <TouchableOpacity style={styles.button} onPress={handleRecommendations} activeOpacity={0.7}>
                        <Text style={styles.buttonText}>Get Recommendations</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

// Screen width calculation for responsiveness
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        margin: 20,
        borderRadius: 15,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4F6D7A',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: screenWidth - 80, // Adapted for responsiveness
        height: 50,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 10,
        borderRadius: 5,
        fontSize: 16,
        marginBottom: 20,
    },
    label: {
        width: screenWidth - 80, // Adapted for responsiveness
        textAlign: 'left',
        marginBottom: 8,
        fontSize: 19,
        color: '#4F6D7A',
        fontWeight: 'bold',
    },
    picker: {
        width: screenWidth - 80, // Adapted for responsiveness
        height: Platform.OS === 'android' ? 50 : undefined, // Set a fixed height only on Android
        backgroundColor: '#ffffff',
        marginBottom: 20,
        color: '#000000', // Text color for picker items on Android
    },
    button: {
        width: screenWidth - 80, // Adapted for responsiveness
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#4F6D7A',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default HomeScreen;
