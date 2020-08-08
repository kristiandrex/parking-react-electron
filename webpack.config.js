const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index.js',
		materialize: 'materialize-css/dist/js/materialize.min.js'
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name][contenthash].js'
	},
	devServer: {
		contentBase: './build'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader']
			},
			{
				test: /\.(css|scss)$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							outputPath: 'fonts'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve('./public/index.html')
		})
	]
};
