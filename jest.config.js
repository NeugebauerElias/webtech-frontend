module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  transform: {
    '\\.js$': '<rootDir>/node_modules/babel-jest' // Use <rootDir>
  },
  automock: false,
  resetMocks: false,
  setupFiles: [
    './setupJest.js'
  ]
}
