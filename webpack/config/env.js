const {Map} = require('immutable');
const stage = require('./../stage');
console.log(stage);
const rawSeq = Map(process.env).keySeq();
const raw = rawSeq.reduce(
  (env, key) => {
    const newEnv = Map(env).set(key, process.env[key]);
    return newEnv.toJSON();
  },
  {
    NODE_ENV: process.env.NODE_ENV,
    URL: stage.url,
    SLS_GO: stage.slsGo,
    AWS_REGION: stage.region,
    AWS_USER_POOL_ID: stage.userPoolId,
    AWS_CLIENT_ID: stage.clientId,
  },
);

const stringifiedSeq = Map(raw).keySeq();
const stringified = {
  'process.env': stringifiedSeq.reduce((env, key) => {
    const newEnv = Map(env).set(key, JSON.stringify(raw[key]));
    return newEnv.toJSON();
  }, {}),
};

module.exports = {
  raw,
  stringified,
};
