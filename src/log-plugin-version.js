import debug from 'debug';
import { dirname, resolve } from 'path';
import readPkg from 'read-pkg';

const logDebug = debug('semantic-release:monorepo');

export default (type) => (plugin) => async (pluginConfig, config) => {
  if (config.options.debug) {
    const dirname = dirname(module.filename);
    const { version } = await readPkg(resolve(dirname, '../'));
    logDebug('Running %o version %o', type, version);
  }

  return plugin(pluginConfig, config);
};
