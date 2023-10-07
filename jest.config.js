const craJestConfig = require('react-scripts/config/jest');

module.exports = {
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.jsx?$': 'babel-jest', // Use Babel for JavaScript and JSX files
    },
  };