/** @type {import('ts-jest').JestConfigWithTsJest} */
console.log(`Current dir: ${process.cwd()}`)
module.exports = {
  testEnvironment: 'jsdom',
  // listTests: true,
  // testRegex: ['src/**/*(*.)@(spec).[tj]s'],
  // testMatch: ['src/**/*.(spec).ts'],
  transformIgnorePatterns: [
    "node_modules/?!lodash-es"
  ],
  collectCoverage: true,
  noStackTrace: true,
  coverageDirectory: "<rootDir>/coverage/",
  coverageReporters: ["lcov", 'html', 'text-summary'],
  watch: false,
  collectCoverageFrom: [
    "src/app/**/*.ts"
  ],
  coveragePathIgnorePatterns: [
    ".builder.ts",
    "<rootDir>/src/app/core/services/error-message-config.service.ts",
    "<rootDir>/src/app/index.d.ts",
    ".module.ts",
    ".routes.ts"
  ]
};
