import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { LifeCycleFn } from "single-spa";
import { NavBar } from "./components/NavBar";
import "./index.scss";

export const App: any = (): JSX.Element => (
	<div>
		<NavBar />
	</div>
);

const headerLifecycles: singleSpaReact.Lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: App,
});

export const bootstrap: LifeCycleFn<{ globalEventDistributor: Record<string, any> }> | LifeCycleFn<{ globalEventDistributor: Record<string, any> }>[] = headerLifecycles.bootstrap;
export const mount: LifeCycleFn<{ globalEventDistributor: Record<string, any> }> | LifeCycleFn<{ globalEventDistributor: Record<string, any> }>[] = headerLifecycles.mount;
export const unmount: LifeCycleFn<{ globalEventDistributor: Record<string, any> }> | LifeCycleFn<{ globalEventDistributor: Record<string, any> }>[] = headerLifecycles.unmount;

export default App;
