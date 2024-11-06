const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin'); // Optional: Measure speed

module.exports = (env) => {
  const isProduction = env.production;

  // Enable caching for faster subsequent builds
  const cacheConfig = isProduction
    ? {
        type: 'filesystem', // Persistent cache for production
      }
    : false; // No cache in dev mode for faster feedback loop

  const smp = new SpeedMeasurePlugin(); // Optional: Measure build speed

  const config = {
    name: 'webpack-config-docusaurus-plugin',
    cache: cacheConfig,  // Enable caching
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
      ...(isProduction ? [new BundleAnalyzerPlugin()] : []), // Only include analyzer in production
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
    parallelism: 8, // Limit parallelism to reduce memory usage
  };

  
  return smp.wrap(config);
};
