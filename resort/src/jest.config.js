module.exports = {
    transform: {
      "^.+\\.(js|jsx|mjs)$": "babel-jest",
    },
    // Tell Jest to transform contentful even though it’s in node_modules
    transformIgnorePatterns: [
      "/node_modules/(?!(contentful)/)"
    ],
  };
  