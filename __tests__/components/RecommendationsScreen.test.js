import React from 'react';
import { render } from '@testing-library/react-native';
import RecommendationsScreen from '../../components/RecommendationsScreen';

// Mock data for recommendations
const mockRecommendations = [
    {
        pose_name: 'Pose 1',
        benefits: 'Benefit 1',
        instructions: 'Instructions 1',
    },
    {
        pose_name: 'Pose 2',
        benefits: 'Benefit 2',
        instructions: 'Instructions 2',
    },
    // Additional mock recommendations can be added here as needed
];

// Describe block for RecommendationsScreen component tests
describe('RecommendationsScreen', () => {
    // Test to check if the RecommendationsScreen renders correctly
    it('renders correctly', () => {
        // Render the RecommendationsScreen component with mock data
        const { getByText } = render(<RecommendationsScreen route={{ params: { recommendations: mockRecommendations } }} />);

        // Check if the main header text is present
        expect(getByText('Yoga Routine Recommendations')).toBeTruthy();

        // Iterating through each mock recommendation to check if they are rendered correctly
        mockRecommendations.forEach(recommendation => {
            // Expect the pose name, benefits, and instructions for each recommendation to be present
            expect(getByText(recommendation.pose_name)).toBeTruthy();
            expect(getByText(recommendation.benefits)).toBeTruthy();
            expect(getByText(recommendation.instructions)).toBeTruthy();
        });
    });
});
