const { getLoader, loaderByName } = require('@craco/craco');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const linariaLoader = {
        loader: require.resolve('@linaria/webpack4-loader'),
        options: {
          sourceMap: process.env.NODE_ENV !== 'production',
          babelOptions: {
            presets: ['@babel/preset-react'],
          },
        },
      };

      const cssLoader = getLoader(webpackConfig, loaderByName('css-loader'));
      if (!cssLoader.isFound) {
        throw new Error('Cannot find CSS loader');
      }

      cssLoader.match.loader = linariaLoader;

      return webpackConfig;
    },
  },
};
