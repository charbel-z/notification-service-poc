module.exports = {
  rootDir: ".",
  preset: "ts-jest",
  testMatch: ["<rootDir>/test/**/*Test.ts", "<rootDir>/test/*Test.ts"],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
};
