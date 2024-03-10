import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import HomeScreen from '../../components/HomeScreen';
import { fetchYogaRecommendations } from '../../services/apiServices';
import { Alert } from 'react-native';

// Mock the fetchYogaRecommendations module
jest.mock('../../services/apiServices', () => ({
    fetchYogaRecommendations: jest.fn(),
}));

// Clear mock data before each test
beforeEach(() => {
    fetchYogaRecommendations.mockClear();
});

// Mock navigation object
const mockNavigation = {
    navigate: jest.fn(),
};

// Describe block for HomeScreen component tests
describe('HomeScreen', () => {
    // Test to check if the HomeScreen renders correctly
    it('renders correctly', () => {
        // Render the HomeScreen component and destructuring helper functions
        const { getByText, getByPlaceholderText } = render(<HomeScreen navigation={mockNavigation} />);

        // Assertions to check if certain texts are present
        expect(getByText('Tell us about yourself')).toBeTruthy();
        expect(getByPlaceholderText('Enter your age')).toBeTruthy();
        expect(getByPlaceholderText('Enter your gender')).toBeTruthy();
    });

    // Test to check if state updates on user input
    it('updates state on user input', () => {
        // Render the component
        const { getByPlaceholderText } = render(<HomeScreen navigation={mockNavigation} />);

        // Simulate user input for age
        const ageInput = getByPlaceholderText('Enter your age');
        fireEvent.changeText(ageInput, '30');
        expect(ageInput.props.value).toBe('30');

        // Simulate user input for gender
        const genderInput = getByPlaceholderText('Enter your gender');
        fireEvent.changeText(genderInput, 'Female');
        expect(genderInput.props.value).toBe('Female');
    });

    // Test to validate the inputs
    it('validates inputs correctly', () => {
        // Mocking the alert function
        const mockAlert = jest.spyOn(Alert, 'alert');
        const { getByPlaceholderText, getByText } = render(<HomeScreen navigation={mockNavigation} />);

        // Simulate user input and button press
        const ageInput = getByPlaceholderText('Enter your age');
        const submitButton = getByText('Get Recommendations');
        fireEvent.changeText(ageInput, '30'); // Only age is filled
        fireEvent.press(submitButton);

        // Expect an alert to be shown when validation fails
        expect(mockAlert).toHaveBeenCalledWith('Error', 'All fields are required');
    });
});
