import {Plugin} from "vue";
import {applyPolyfills, defineCustomElements} from "@xotoboil-multifront/stencil/loader";

export const ComponentLibrary: Plugin = {
	async install() {
		applyPolyfills().then(() => {
			defineCustomElements();
		});
	},
};
