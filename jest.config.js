module.exports = {
  moduleDirectories: ['node_modules', 'src'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  modulePaths: ['<rootDir>'],
  roots: ['<rootDir>'],
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest'
  },
  snapshotSerializers: ['@this-empathy/locales-patterns'],
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/utils/**/*.js', '<rootDir>/validations/**/*.js'],
  transformIgnorePatterns: ['<rootDir>/node_modules/']
}
