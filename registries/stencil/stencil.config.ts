import {Config} from "@stencil/core";
import {sass} from "@stencil/sass";
import {vueOutputTarget} from "@stencil/vue-output-target";
import {angularOutputTarget} from "@stencil/angular-output-target";
import {reactOutputTarget} from "@stencil/react-output-target";

export const config: Config = {
	namespace: "stencil-components",
	globalStyle: "src/global/global.css ",
	outputTargets: [
		{
			type: "dist",
			esmLoaderPath: "../loader",
			copy: [
				{
					src: "**/*.{jpg,png}",
					dest: "dist/components/assets",
					warn: true,
				},
			],
		},
		vueOutputTarget({
			componentCorePackage: "@xotoboil-multifront/stencil",
			proxiesFile: "./lib/vue/vue-proxy/components.ts",
			includeDefineCustomElements: true,
		}),
		angularOutputTarget({
			componentCorePackage: "@xotoboil-multifront/stencil",
			directivesProxyFile: "./lib/angular/stencil-generated/components.ts",
			directivesArrayFile: "./lib/angular/stencil-generated/index.ts",
		}),
		reactOutputTarget({
			componentCorePackage: "@xotoboil-multifront/stencil",
			proxiesFile: "./lib/react/stencil-generated/index.ts",
			includeDefineCustomElements: true,
		}),
	],
	plugins: [sass()],
};
