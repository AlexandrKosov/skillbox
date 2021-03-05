const path = require('path');
//const htmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin, DefinePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const {getUrl} = require( '../utils/settings/serverSettings');
const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV==='development';
const IS_PROD = NODE_ENV==='production';

const GLOBAL_CSS_REGEXP = /\.global\.css$/;

const DEV_PLUGINS = [new HotModuleReplacementPlugin(), new CleanWebpackPlugin()];
const COMMON_PLUGINS = [new DefinePlugin({
	'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'`
})]; 

function setupDevtool(){
	if(IS_DEV)return 'eval';
	if(IS_PROD)return false;
};

function getEntry(){
	if(IS_PROD){
		return [path.resolve(__dirname, '../src/client/index.jsx')]
	}
	return [
		path.resolve(__dirname, '../src/client/index.jsx'),
		`webpack-hot-middleware/client?path=${getUrl()}/static/__webpack_hmr`,
	]
}

module.exports = {
	resolve: {
		extensions: ['.js','.jsx', '.ts', '.tsx', '.json'],
		alias: {
			'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
		}
	},
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: getEntry(),
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
		},
		{
			test: /\.less$/i,
			use: [
				'style-loader', {
					loader: 'css-loader',
					options: {
						modules: {
							mode: 'local',
							localIdentName: '[name]__[local]--[hash:base64:5]',
						}
					}
				},
				'less-loader',
			],
			//глобальные CSS 
			exclude: GLOBAL_CSS_REGEXP
		},
		{
			test: GLOBAL_CSS_REGEXP,
			use: [
				'style-loader', 'css-loader'
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
	plugins: IS_DEV ? DEV_PLUGINS.concat(COMMON_PLUGINS) : COMMON_PLUGINS
};