// babel.config.js
module.exports = {
  presets: ['module:metro-react-native-babel-preset', 'nativewind/babel'],
   overrides: [
      {
        test: './node_modules/ethers',
        plugins:  [
          "@babel/plugin-proposal-class-properties",
          "@babel/plugin-proposal-private-methods"
        ]
      }
    ]
};