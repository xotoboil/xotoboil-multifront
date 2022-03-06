/* eslint-disable @typescript-eslint/typedef */
const webpack = require("webpack");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const prefixer = require("postcss-prefix-selector");
__webpack_base_uri__ = "http://localhost:8081";

module.exports = {
	output: {
		publicPath: "http://localhost:8081/",
		uniqueName: "app1",
	},

	optimization: {
		runtimeChunk: false,
	},

	// module: {
	// 	rules: [
	// 		{
	// 			test: /index\.s[ac]ss$/i,
	// 			loader: require.resolve("postcss-loader"),
	// 			options: {
	// 				postcssOptions: {
	// 					plugins: [
	// 						prefixer({
	// 							prefix: "#single-spa-application\\:app1",
	// 						}),
	// 					],
	// 				},
	// 			},
	// 		},
	// 	],
	// },

	plugins: [
		new ModuleFederationPlugin({
			name: "app1",
			library: {type: "var", name: "app1"},
			filename: "remoteEntry.js",
			exposes: {
				"./ApplicationPage": "./src/main.single-spa.ts",
			},
			shared: {
				// "@angular/core": {eager: true, singleton: true,},
				// "@angular/common": {eager: true, singleton: true},
				// "@angular/router": {eager: true, singleton: true},
			},
		}),
	],
};
