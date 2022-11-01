import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import singleSpaReact from "single-spa-react";
import {Counter} from "./components/counter/Counter";
import store from "./store/index";
import "./index.scss";
// import {ComponentLibrary} from "@xotoboil-multifront/ui-vue";

export let globalEventDistributor: any;

export const App: any = (props: any): JSX.Element => (
	<div>
		<Provider store={store}>
			<h1>react {props.name}</h1>
			<Counter />
		</Provider>
	</div>
);

const reactLifecycles: singleSpaReact.Lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
});

export function bootstrap(props: any) {
	globalEventDistributor = props.globalEventDistributor;
	return reactLifecycles.bootstrap(props);
}

export function mount(props: any) {
	return reactLifecycles.mount(props);
}

export function unmount(props: any) {
	return reactLifecycles.unmount(props);
}

export default App;
