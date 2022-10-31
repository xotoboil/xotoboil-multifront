import {Plugin} from "vue";
import {defineCustomElements} from "@xotoboil-multifront/stencil/loader";

export const ComponentLibrary: Plugin = {
	async install() {
		defineCustomElements();
	},
};
