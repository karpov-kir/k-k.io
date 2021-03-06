/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');

const preparedModulesPath = path.join(__dirname, 'preparedModules');
const modulesPath = path.join(__dirname, 'modules');
const modules = [
  {
    name: 'mi-q',
    packageManager: 'npm',
    gitBranch: 'master',
    modulePath: path.join(modulesPath, 'mi-q'),
    preparedModuleFolders: [
      {
        moduleTakeawayPath: path.join(modulesPath, '/mi-q/build'),
        localPreparedModuleFolderName: 'mi-q-build',
      },
    ],
  },
  {
    name: 'guessir',
    packageManager: 'npm',
    gitBranch: 'master',
    modulePath: path.join(modulesPath, 'guessir'),
    preparedModuleFolders: [
      {
        moduleTakeawayPath: path.join(modulesPath, 'guessir/packages/web/build'),
        localPreparedModuleFolderName: 'guessir-web-build',
      },
      {
        moduleTakeawayPath: path.join(modulesPath, 'guessir/packages/backend/build'),
        localPreparedModuleFolderName: 'guessir-backend-build',
      },
    ],
  },
  {
    name: 'mindy',
    packageManager: 'npm',
    gitBranch: 'master',
    modulePath: path.join(modulesPath, 'mindy'),
    preparedModuleFolders: [
      {
        moduleTakeawayPath: path.join(modulesPath, 'mindy/build'),
        localPreparedModuleFolderName: 'mindy-build',
      },
    ],
  },
  {
    name: 'monorepo-spa',
    packageManager: 'yarn',
    gitBranch: 'development',
    modulePath: path.join(modulesPath, 'monorepo-spa'),
    preparedModuleFolders: [
      {
        moduleTakeawayPath: path.join(modulesPath, 'monorepo-spa/packages/@af-web/spa/build/webpack'),
        localPreparedModuleFolderName: 'monorepo-spa-build',
      },
      {
        moduleTakeawayPath: path.join(modulesPath, 'monorepo-spa/packages/@af-web/spa/build/storybook'),
        localPreparedModuleFolderName: 'monorepo-spa-sb-build',
      },
      {
        moduleTakeawayPath: path.join(modulesPath, 'monorepo-spa/packages/@af-web/ui/build/storybook'),
        localPreparedModuleFolderName: 'monorepo-spa-ui-sb-build',
      },
    ],
  },
];

const filterModulesByName = (name) => modules.filter(({ name: nameToCheck }) => name === nameToCheck);

const getModulesFilteredByNameFromCli = () => {
  const moduleName = process.argv[2];

  if (!moduleName) {
    return modules;
  }

  return filterModulesByName(moduleName);
};

module.exports = {
  preparedModulesPath,
  modules,
  modulesPath,
  filterModulesByName,
  getModulesFilteredByNameFromCli,
};
