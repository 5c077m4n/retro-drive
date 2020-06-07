const path = require('path');
const { DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');

module.exports = function config({ prod = false } = {}) {
	const plugins = [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './src/index.html',
			scriptLoading: 'defer',
		}),
		new DefinePlugin({ 'env.PRODUCTION': JSON.stringify(prod) }),
	];
	if (prod) {
		plugins.push(
			new GenerateSW({
				clientsClaim: true,
				skipWaiting: true,
			})
		);
	}

	return {
		entry: { index: './src/index.js' },
		mode: prod ? 'production' : 'development',
		devtool: prod ? 'source-map' : 'eval-cheap-source-map',
		plugins,
		module: {
			rules: [
				{
					test: /\.(png|svg|jpg|gif)$/,
					use: ['file-loader'],
				},
				{
					test: /\.s[ac]ss$/,
					use: ['style-loader', 'css-loader', 'sass-loader'],
				},
			],
		},
		resolve: {
			alias: {
				'@assets': path.resolve(__dirname, 'assets'),
			},
		},
		devServer: {
			contentBase: path.join(__dirname, 'dist'),
			compress: true,
			port: 3000,
			writeToDisk: true,
		},
		output: {
			filename: '[name].[contenthash].js',
			path: path.resolve(__dirname, 'dist'),
		},
	};
};
