import { join, resolve } from 'path'
import webpack from 'webpack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
	entry: join(__dirname, 'src', 'index.js'),
	// target: 'node',
	output: {
		path: resolve(__dirname, 'dist'),
		// publicPath: '/dist/',
		filename: '[hash].bundle.js',
	},
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader'],
			},
			// {
			// 	test: /\.scss$/,
			// 	use: ['style-loader', 'css-loader', 'sass-loader'],
			// },
		],
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './index.html' }),
	],
	devServer: {
		contentBase: join(__dirname, './'),
		port: 9000,
		historyApiFallback: true,
	},
}