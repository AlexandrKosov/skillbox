const path = require('path');
//const htmlWebpackPlugin = require('html-webpack-plugin');
const {HotModuleReplacementPlugin} = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV==='development';
const IS_PROD = NODE_ENV==='production';

function setupDevtool(){
	if(IS_DEV)return 'eval';
	if(IS_PROD)return false;
};

module.exports = {
	resolve: {
		extensions: ['.js','.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
		}
	},
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: [
		path.resolve(__dirname, '../src/client/index.jsx'),
		'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr',
	],
	output: {
		path: path.resolve(__dirname, '../dist/client'),
		filename: 'client.js',
		publicPath: '/static/'
	},
	module: {
		rules: [
		{
			test: /\.[tj]sx?$/,  //ts,tsx,js,jsx
			use: [
				'ts-loader'
			]
		}
		]
	},
	plugins:[
		// new htmlWebpackPlugin({
			// template: path.resolve(__dirname, 'index.html')
		// })
	],
	// devServer: {
		// port: 3000,
		// open: true,
		// hot: IS_DEV
	// },
	devtool: setupDevtool(),
	plugins: IS_DEV ? [
		new CleanWebpackPlugin,
		new HotModuleReplacementPlugin(),
	] : []
};