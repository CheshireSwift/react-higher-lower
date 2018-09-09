module.exports = function(config) {
  config.set({
    testRunner: "jest",
    mutator: "typescript",
    // transpilers: ["babel", "typescript"],
    transpilers: [],
    reporters: ["clear-text", "progress"],
    packageManager: "yarn",
    coverageAnalysis: "off",
    tsconfigFile: "tsconfig.json",
    mutate: ["src/**/*.ts", "!src/**/*.@(test|helper|d).ts", "!src/main.ts"],
    babelrcFile: ".babelrc",
    thresholds: { high: 80, low: 60, break: 90 }
  });
};
