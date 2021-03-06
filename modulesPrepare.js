/* eslint-disable @typescript-eslint/no-var-requires */

const { sync: spawnSync } = require('cross-spawn');
const fse = require('fs-extra');
const path = require('path');

const { preparedModulesPath, getModulesFilteredByNameFromCli } = require('./modulePaths');

require('./modulesUpdate');
getModulesFilteredByNameFromCli().forEach((module) => {
  prepareModule(module);
});

function prepareModule({ modulePath, preparedModuleFolders, packageManager }) {
  console.log('Preparing a module', modulePath);

  console.log('Installing dependencies in', modulePath);
  const installPackagesCommand = packageManager === 'npm' ? ['npm', ['ci']] : ['yarn', ['--check-files']];
  spawnSync(...installPackagesCommand, { stdio: 'inherit', cwd: modulePath });

  console.log('Build', modulePath);
  const buildCommand = packageManager === 'npm' ? ['npm', ['run', 'build']] : ['yarn', ['build']];
  spawnSync(...buildCommand, {
    stdio: 'inherit',
    cwd: modulePath,
    env: {
      // Disable it as react-scripts inbuilt eslint conflicts with eslint in the current GIT repo and
      // throws some errors.
      DISABLE_ESLINT_PLUGIN: true,
      // Switch some custom webpack builders to the production mode (e.g. in monorepo-spa)
      NODE_ENV: 'production',
    },
  });

  preparedModuleFolders.forEach(({ moduleTakeawayPath, localPreparedModuleFolderName }) => {
    console.log('Replacing the old prepared module with the new prepared module of', localPreparedModuleFolderName);
    fse.copySync(moduleTakeawayPath, path.join(preparedModulesPath, localPreparedModuleFolderName), {
      overwrite: true,
    });
  });
}
