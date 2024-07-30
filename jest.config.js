module.exports = {
    preset: "ts-jest",
    testEnvironment: "jsdom",
    testRegex: "/__tests__/.*\\.(test|spec)?\\.(ts|tsx)$",
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: true,
    coverageDirectory: "coverage",
    coverageReporters: ["json-summary", "html"],
    collectCoverageFrom: [
        "src/**/*.{js,jsx,ts,tsx}", // Include all JavaScript and TypeScript files in the /src folder
        "!src/**/*.test.{js,jsx,ts,tsx}", // Exclude test files
        "!src/**/*.{d.ts}", // Exclude TypeScript declaration files
    ],
    setupFilesAfterEnv: ["./jest.setup.js"],
};
