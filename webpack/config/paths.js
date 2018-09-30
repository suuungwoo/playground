const path = require('path');
const fs = require('fs');
const {getServedPath} = require('../utils');

const directory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(directory, relativePath);

module.exports = {
  public: resolveApp('public'),
  servedPath: getServedPath(resolveApp('package.json')),
  html: resolveApp('public/index.html'),
  dist: resolveApp('dist'),
  src: resolveApp('src'),
  js: resolveApp('src/index.js'),
  scss: resolveApp('src/styles/index.scss'),
  nodeModules: resolveApp('node_modules'),
  srcConfig: resolveApp('src/config/index.js'),
  srcValidates: resolveApp('src/validates/index.js'),
  srcActions: resolveApp('src/actions/index.js'),
  srcApis: resolveApp('src/apis/index.js'),
  srcReducers: resolveApp('src/reducers/index.js'),
  srcStore: resolveApp('src/store/index.js'),
  srcUtils: resolveApp('src/utils/index.js'),
  componentChildren: resolveApp('src/components/Routes/Children/index.js'),
  componentPages: resolveApp('src/components/Pages/index.js'),
  componentCommon: resolveApp('src/components/Common/index.js'),
};
