const fs = require('fs-extra');
const paths = require('./paths');

fs.emptyDirSync(paths.dist);
fs.copySync(paths.public, paths.dist, {
  dereference: true,
});
