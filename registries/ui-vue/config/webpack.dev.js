/* eslint-disable @typescript-eslint/typedef */

const {merge} = require("webpack-merge");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const path = require("path");

const devConfig = {
	entry: path.resolve(process.cwd(), "src/index.ts"),
	output: {
		path: path.resolve(process.cwd(), "dist"),
		filename: "[name].js",
	},

	watch: true,
	mode: "development",
};

module.exports = merge(commonConfig, devConfig);
