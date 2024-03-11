import { AppRegistry } from 'react-native';
import App from './App.js'; // Adjust the path if App.js is located in a different directory
import { name as appName } from './app.json'; // This imports the app name from app.json

AppRegistry.registerComponent(appName, () => App);
