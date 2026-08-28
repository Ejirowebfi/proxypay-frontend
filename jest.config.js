// CI_READY: true
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/src'],
  testMatch: [
    '**/__tests__/**/*.test.ts',
    '**/?(*.)+(spec|test).ts',
    '**/__tests__/**/*.test.tsx',
    '**/?(*.)+(spec|test).tsx',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverageFrom: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.d.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // Map CSS modules and static assets so Jest doesn't choke on them
  moduleNameMapper: {
    // CSS / SCSS modules → identity-obj-proxy (returns class name as-is)
    '\\.module\\.(css|scss|sass|less)$': '<rootDir>/__mocks__/styleMock.js',
    // Plain CSS imports
    '\\.(css|scss|sass|less)$': '<rootDir>/__mocks__/styleMock.js',
    // Image / font assets
    '\\.(jpg|jpeg|png|gif|svg|ico|webp|ttf|woff|woff2|eot)$': '<rootDir>/__mocks__/fileMock.js',
    // Docusaurus path alias — @site/* maps to the project root
    '^@site/(.*)$': '<rootDir>/$1',
    '^@docusaurus/(.*)$': '<rootDir>/__mocks__/docusaurusMock.js',
    '^@theme/(.*)$': '<rootDir>/__mocks__/themeMock.js',
  },
};
