module.exports = {
	preset: "ts-jest",
	setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],
	moduleNameMapper: {
		".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
	},
	coverageReporters: ["lcov", "text"],
	coverageDirectory: "build/coverage",
};
