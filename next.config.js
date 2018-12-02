const withTypescript = require('@zeit/next-typescript');
const withAssetsImport = require('next-assets-import');
const withCSS = require('@zeit/next-css');
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer');
const withPlugins = require('next-compose-plugins');

const { ANALYZE } = process.env;

const bundleAnalyzer = [
  withBundleAnalyzer,
  {
    analyzeServer: ['server', 'both'].includes(ANALYZE),
    analyzeBrowser: ['browser', 'both'].includes(ANALYZE)
  }
];

const environmentConfig = {
  publicRuntimeConfig: {}
};

module.exports = withPlugins([withTypescript, withAssetsImport, withCSS, bundleAnalyzer, environmentConfig]);
