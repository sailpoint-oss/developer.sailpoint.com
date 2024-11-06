const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  const isProduction = env.production;

  console.log('Webpack build environment:', env);

  // Set parallelism based on environment
  const parallelism = isProduction ? 1 : 8; // Use more parallelism in production, less in development

  const config = {
    name: 'webpack-config-docusaurus-plugin',
    cache: false,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: true, // Remove console.log in production
            },
            mangle: true,
          },
          extractComments: false, // Optional: Don't extract comments to separate files
        }),
      ],
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: Infinity,
        minSize: 20000,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: 10,
          },
        },
      },
      concatenateModules: true, // Scope hoisting for smaller bundles
    },
    resolve: {
      modules: ['node_modules'],
    },
    plugins: [
      new CleanWebpackPlugin(), // Clean output folder before each build
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(isProduction ? 'production' : 'development'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.(jpg|jpeg|png|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devtool: isProduction ? false : 'source-map', // Disable source maps in production
    performance: {
      hints: 'warning',
      maxEntrypointSize: 500000,
      maxAssetSize: 1000000,
    },
    stats: {
      assets: true,
      modules: true,
      timings: true,
      chunkModules: true,
      entrypoints: true,
      errors: true,
      errorDetails: true,
    },
    parallelism, // Use dynamic parallelism based on the environment
  };

  return config;
};
