const local = require('./local');
const develop = require('./develop');
const release = require('./release');
const master = require('./master');

let stage = {};

switch (process.env.STAGE_ENV) {
  case 'local': {
    stage = Object.assign({}, stage, local);
    break;
  }

  case 'develop': {
    stage = Object.assign({}, stage, develop);
    break;
  }

  case 'release': {
    stage = Object.assign({}, stage, release);
    break;
  }

  case 'master': {
    stage = Object.assign({}, stage, master);
    break;
  }

  default:
    break;
}

module.exports = stage;
