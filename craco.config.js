// craco.config.ts
const CracoLessPlugin = require('craco-less');
const { loaderByName } = require("@craco/craco");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@link-color": "#1DA57A",
              "@border-radius-base": "2px",
            },
            javascriptEnabled: true,
          },
        },
        modifyLessRule(lessRule, context) {
          // You have to exclude these file suffixes first,
          // if you want to modify the less module's suffix
          lessRule.exclude = /\.less$/;
          return lessRule;
        },
        modifyLessModuleRule(lessModuleRule, context) {
          // Configure the file suffix
          lessModuleRule.test = /\.less$/;

          // Configure the generated local ident name.
          const cssLoader = lessModuleRule.use.find(loaderByName("css-loader"));
          cssLoader.options.modules = {
            localIdentName: "[local]_[hash:base64:5]",
          };

          return lessModuleRule;
        },
      },
    },
  ],
};