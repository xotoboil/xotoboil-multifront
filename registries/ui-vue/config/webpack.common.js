/* eslint-disable @typescript-eslint/typedef */
const prefixer = require("postcss-prefix-selector");

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
				options: {
					appendTsSuffixTo: [/\.vue$/],
				},
			},
		],
	},
	output: {
		filename: "index.js",
		library: "@xotoboil-multifront/ui-vue",
		libraryTarget: "umd",
	},
	externals: {
		vue: "vue",
	},
};
