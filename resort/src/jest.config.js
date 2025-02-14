// jest.config.js
module.exports = {
    // Use babel-jest to transform your files
    transform: {
      "^.+\\.[jt]sx?$": "babel-jest",
    },
    // Exclude all node_modules except contentful (you can add others if needed)
    transformIgnorePatterns: [
      "/node_modules/(?!(contentful)/)"
    ],
  };
  