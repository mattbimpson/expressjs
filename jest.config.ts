export default {
  moduleFileExtensions: ["js", "json", "ts"],
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  testMatch: [
    "**/tests/**/*.spec.(ts)|**/__tests__/*.(ts)"
  ],
  testURL: "http://localhost/",
  globals: {
    "ts-jest": {
      babelConfig: true
    }
  }
};
