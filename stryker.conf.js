module.exports = function(config) {
  config.set({
    testRunner: 'jest',
    mutator: 'typescript',
    transpilers: [],
    reporters: ['clear-text'],
    packageManager: 'npm',
    coverageAnalysis: 'off',
    tsconfigFile: 'tsconfig.json',
    mutate: ['src/**/*.ts', '!src/**/*.*.ts', '!src/main.ts'],
    // babelrcFile: ".babelrc",
    thresholds: { high: 100, low: 95, break: 90 }
  });
};
