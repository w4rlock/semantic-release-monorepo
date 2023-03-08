import debug from 'debug';
import { resolve } from 'path';
import readPkg from 'read-pkg';

const logDebug = debug('semantic-release:monorepo');

const logPluginVersion = type => plugin => async (pluginConfig, config) => {
  if (config.options.debug) {
    const { version } = await readPkg(resolve(__dirname, '../'));
    logDebug('Running %o version %o', type, version);
  }

  return plugin(pluginConfig, config);
};

module.exports = {
  logPluginVersion,
};
