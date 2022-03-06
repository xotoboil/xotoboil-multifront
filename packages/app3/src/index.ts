import singleSpaVue, {SingleSpaVueLifecycles} from "single-spa-vue";
import {h, createApp} from "vue";
import App from "./App.vue";
import store from "./store";
import "./index.scss";

const lifecycles: SingleSpaVueLifecycles = singleSpaVue({
	createApp,
	appOptions: {
		render() {
			return h(App, {name: this.name, globalEventDistributor: (this as any).globalEventDistributor});
		},
	},
	handleInstance(app: any) {
		app.use(store);
	},
});

export const bootstrap: any = function (props: any) {
	return lifecycles.bootstrap(props);
};

export const mount: any = function (props: any) {
	return lifecycles.mount(props);
};

export const unmount: any = function (props: any) {
	return lifecycles.unmount(props);
};

export default {bootstrap, mount, unmount};
