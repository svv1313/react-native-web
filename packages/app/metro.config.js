const path = require('path');

const extraNodeModules = {
  'common': path.resolve(__dirname + '/../common/dist/components'),
};
const watchFolders = [
  path.resolve(__dirname + '/../common/dist/components'),
  path.resolve(__dirname, '../../')
];

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(extraNodeModules, {
      get: (target, name) =>
        //redirects dependencies referenced from common/ to local node_modules
        name in target ? target[name] : path.join(process.cwd(), `node_modules/${name}`),
    }),
  },
  watchFolders,
};
