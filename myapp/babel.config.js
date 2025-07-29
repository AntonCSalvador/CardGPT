// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel", // <- NativeWind v4 is a PRESET
    ],
    // No expo-router plugin needed on v5
    // If you use Reanimated, you can add its plugin last:
    // plugins: ["react-native-reanimated/plugin"],
  };
};

