// jest.setup.js
import 'react-native-gesture-handler/jestSetup';

global.fetch = require('jest-fetch-mock');

// jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
