# Yoga Recommendations App

## Overview
This Yoga Recommendations App, developed using React Native, provides personalized yoga pose recommendations based on user inputs such as age, gender, and experience level. The app features intuitive navigation between different screens and incorporates API integration for fetching data.

## Backend Server
- The backend server is responsible for processing user inputs and fetching yoga recommendations.
- It runs on `localhost:3000` and interacts with an OpenAI model to generate personalized yoga recommendations based on user data.
- The server provides an API endpoint `/recommendations` to post user data and receive yoga recommendations in response.
- Ensure that your server, with OpenAI integration, is running and accessible from your development environment for the app to function correctly.

## Setup for Development
1. **Prerequisites**:
    - Install Node.js and npm (Node Package Manager).
    - Install Expo CLI for easier development and testing: `npm install -g expo-cli`.
    - A running backend server on `localhost:3000` with OpenAI integration.

2. **Project Setup**:
    - Clone the repository: `git clone [your-repo-link]`.
    - Navigate to the project directory: `cd [project-directory]`.
    - Install the necessary packages: `npm install`.

3. **Running the App**:
    - Start the app using Expo: `expo start`.
    - Press `i` to run the iOS simulator, or `a` for the Android emulator.

4. **Environment Configuration**:
    - Ensure the backend service URL is correctly set in `apiServices.js`.

## API Services (apiServices.js)
- **fetchYogaRecommendations**: Communicates with the backend server to fetch yoga recommendations.
- **Error Handling**: Robust error handling mechanisms are in place to manage different types of errors during API calls.
- **Caching**: Implements AsyncStorage for caching responses, reducing the number of necessary API calls and improving app performance.

## Home Screen (HomeScreen.js)
- Users fill in their details (age, gender, experience) to receive recommendations.
- Form validation is implemented to ensure all fields are correctly filled.

## Loading Screen (LoadingScreen.js)
- Features a pulsating and spinning animation to indicate data loading.

## Recommendations Screen (RecommendationsScreen.js)
- Displays yoga recommendations in a user-friendly grid layout.
- Each yoga pose is presented with its benefits and instructions for clarity.

## Unit Testing and Debugging
- Extensive unit tests cover critical functionalities of the app.
- Debugging was performed to ensure smooth and efficient app performance.

## Contributions and License
- Contributions to this project are welcome.
- The project is licensed under [Your License].

## Contact Information
- Developer: [Your Name]
- Email: [Your Email]
- GitHub: [Your GitHub Link]
