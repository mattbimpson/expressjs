export default {
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: [
    "**/*.spec.(ts)"
  ],
  testURL: "http://localhost/",
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  }
};
