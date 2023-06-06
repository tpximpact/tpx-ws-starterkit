/**
 * tpx_sk_subsitename webpack config.
 */
const wingsuitCore = require('@wingsuit-designsystem/core');

const appConfig = wingsuitCore.resolveConfig('drupal-tpx-sk-subsitename-kebab', process.env.NODE_ENV);
const finalConfig = wingsuitCore.getAppPack(appConfig);
module.exports = finalConfig;
