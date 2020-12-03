const CracoLessPlugin = require('craco-less');
const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [{
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#1DA57A'
            },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: "tsconfig",
        baseUrl: "./src",
        tsConfigPath: "./paths.json",
      }
    }
  ],
  babel: {
    plugins: [
<<<<<<< HEAD
      ['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
      }],
      ['@babel/plugin-proposal-decorators', {
        legacy: true
      }]
    ]
  },
=======
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        ['@babel/plugin-proposal-decorators', { legacy: true }]
    ]
},
>>>>>>> 1eb5fb78c8dd83a69c7724ce78abbf177eddc1e8
};