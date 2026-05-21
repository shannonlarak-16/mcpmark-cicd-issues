module.exports = {
  testEnvironment: "node",
  coverageDirectory: "coverage",
  coveragePathIgnorePatterns: ["/node_modules/"],
  collectCoverageFrom: ["**/*.js", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70
    }
  }
};