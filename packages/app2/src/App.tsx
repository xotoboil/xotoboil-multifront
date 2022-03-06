import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import {Counter} from "./components/counter/Counter";
import "./index.scss";

export let globalEventDistributor: any;

export const App: any = (props: any): JSX.Element => (
	<div>
		<h1>React Application {props.name}</h1>
		<Counter />
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
