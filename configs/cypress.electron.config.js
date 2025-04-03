
const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

module.exports = defineConfig({
  nonGlobalStepDefinitions: true,
  projectId: "e9y4a8",
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultBrowser: 'electron',
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents,
    chromeWebSecurity: false,
  },
});

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

//  Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
