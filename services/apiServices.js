import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Base URL for the server (replace with actual server URL)
const BASE_URL = 'http://localhost:3000';

// Function to fetch data from cache
const fetchCachedData = async (key) => {
    try {
        // Retrieve item from AsyncStorage by key
        const cachedData = await AsyncStorage.getItem(key);
        if (cachedData !== null) {
            // Parse and return the cached JSON data if available
            return JSON.parse(cachedData);
        }
    } catch (error) {
        // Log error if fetching from cache fails
        console.error('Failed to fetch from cache:', error);
    }
    return null;
};

// Function to cache data
const cacheData = async (key, data) => {
    try {
        // Convert data to JSON and save in AsyncStorage
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem(key, jsonData);
    } catch (error) {
        // Log error if caching data fails
        console.error('Failed to cache data:', error);
    }
};

// Function to fetch yoga recommendations
export const fetchYogaRecommendations = async (userData) => {
    // Construct a unique cache key using user data
    const cacheKey = `recommendations-${JSON.stringify(userData)}`;

    // Try fetching data from cache first
    const cachedData = await fetchCachedData(cacheKey);
    if (cachedData) {
        return cachedData; // Return cached data if available
    }

    try {
        // Make an HTTP POST request to fetch recommendations
        const response = await axios.post(`${BASE_URL}/recommendations`, userData);
        // Cache the new data and return the recommendations
        await cacheData(cacheKey, response.data.recommendations);
        return response.data.recommendations;
    } catch (error) {
        // Handle different types of errors
        if (error.response) {
            // Log error details if server responds with an error
            console.error('Error response:', error.response.data);
        } else if (error.request) {
            // Log if the request was made but no response was received
            console.error('Error request:', error.request);
        } else {
            // Log if an error occurred while setting up the request
            console.error('Error:', error.message);
        }
        throw error; // Rethrow the error for further handling
    }
};
