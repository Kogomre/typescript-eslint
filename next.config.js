/** @type {import('next').NextConfig} */

const path = require('path');

const { TsconfigPathsPlugin } = require('tsconfig-paths-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  webpack: (config) => {
    new TsconfigPathsPlugin({
      configFile: path.resolve(__dirname, './tsconfig.json'),
    });

    return config;
  },
  trailingSlash: true,
};

module.exports = process.env.ANALYZE === 'true' ? withBundleAnalyzer(nextConfig) : nextConfig;
