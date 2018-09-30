'use strict';

var env = process.env.BABEL_ENV;

var presets = [
  '@babel/flow',
  '@babel/react',
  ['@babel/preset-stage-2', { loose: true, decoratorsLegacy: true }],
];
var plugins = [
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-optional-chaining',
];

if (env === 'local') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1% in JP'],
        },
        useBuiltIns: 'entry',
        modules: false,
      },
    ],
  ]);

  plugins.push.apply(plugins, ['react-hot-loader/babel']);
}

if (env === 'test') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: { node: '8.11.1' },
        modules: false,
      },
    ],
  ]);
}

if (env === 'development') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1% in JP'],
        },
        useBuiltIns: 'entry',
        modules: false,
      },
    ],
  ]);
}

if (env === 'production') {
  presets.push.apply(presets, [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['> 1% in JP'],
        },
        useBuiltIns: 'entry',
        modules: false,
      },
    ],
  ]);
}

module.exports = { presets, plugins };
