import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// RecommendationsScreen component definition
const RecommendationsScreen = ({ route }) => {
    // Extracting recommendations passed via route params
    const { recommendations } = route.params;

    // Render the recommendations screen
    return (
        <ScrollView style={styles.container}>
            {/* Header text for the screen */}
            <Text style={styles.header}>Yoga Routine Recommendations</Text>

            {/* Iterating over each recommendation */}
            {recommendations.map((recommendation, index) => (
                <View key={index} style={styles.recommendationCard}>
                    {/* Displaying the pose name */}
                    <Text style={styles.poseName}>{recommendation.pose_name}</Text>
                    {/* Section for Benefits */}
                    <Text style={styles.sectionTitle}>Benefits</Text>
                    <Text style={styles.details}>{recommendation.benefits}</Text>
                    {/* Section for Instructions */}
                    <Text style={styles.sectionTitle}>Instructions</Text>
                    <Text style={styles.details}>{recommendation.instructions}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

// StyleSheet for styling the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8E8E8', // Light grey background
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4F6D7A', // Header text color
        marginBottom: 20,
        paddingTop: 20,
    },
    recommendationCard: {
        backgroundColor: '#FFFFFF', // White background for each card
        borderRadius: 10, // Rounded corners for the cards
        padding: 15, // Padding inside each card
        marginBottom: 20, // Margin at the bottom of each card
        marginHorizontal: 10, // Horizontal margin for the card
        shadowColor: '#000', // Shadow color
        shadowOffset: { width: 0, height: 2 }, // Shadow offset
        shadowOpacity: 0.25, // Shadow opacity
        shadowRadius: 3.84, // Shadow radius
        elevation: 5, // Elevation for Android
        flexDirection: 'column', // Column layout for the card's contents
        alignItems: 'center', // Centering items horizontally
    },
    poseName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4A90E2', // Pose name color
        marginBottom: 10,
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: '#4F6D7A', // Section title color
        alignSelf: 'flex-start', // Aligning section titles to the start
        marginTop: 10,
        marginBottom: 5,
    },
    details: {
        fontSize: 16,
        color: '#333', // Text color for details
        marginBottom: 5,
        textAlign: 'left', // Text alignment
        alignSelf: 'flex-start', // Aligning text to the start
    },
});

export default RecommendationsScreen;
