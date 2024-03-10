module.exports = {
    preset: 'jest-expo',
    transform: {
        '^.+\\.js$': 'babel-jest',
    },
    transformIgnorePatterns: [
        'node_modules/(?!react-native|expo|@react-native|@expo|@unimodules|@react-native-community|@react-navigation)',
    ],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    setupFiles: ['<rootDir>/jest.setup.js']
};
