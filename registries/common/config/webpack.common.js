/* eslint-disable @typescript-eslint/typedef */
const path = require("path");
module.exports = {
	resolve: {
		extensions: [".js", ".tsx", ".jsx", ".ts"],
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/,
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
			},
		],
	},
	output: {
		path: path.resolve(process.cwd(), "lib"),
		filename: "[name].js",
		library: "@xotoboil-multifront/commont",
		libraryTarget: "umd",
		globalObject: "this",
	},
};
