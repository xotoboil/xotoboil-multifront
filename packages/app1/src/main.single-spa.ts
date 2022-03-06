// import "./index.scss";

import {enableProdMode, NgZone} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Router, NavigationStart} from "@angular/router";
import {AppModule} from "./app/app.module";
import {environment} from "./environments/environment";
import {singleSpaAngular, getSingleSpaExtraProviders} from "single-spa-angular";
import {singleSpaPropsSubject} from "./single-spa/single-spa-props";
import {SingleSpaProps} from "./single-spa/single-spa-props";
import {AppProps, LifeCycleFn, LifeCycles} from "single-spa";

if (environment.production) enableProdMode();

const lifecycles: LifeCycles<{globalEventDistributor: Record<string, any>}> = singleSpaAngular({
	bootstrapFunction: (singleSpaProps: SingleSpaProps) => {
		singleSpaPropsSubject.next(singleSpaProps);
		return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule);
	},
	template: "<app-root />",
	Router,
	NavigationStart,
	NgZone,
});

export const bootstrap: LifeCycleFn<{globalEventDistributor: Record<string, any>}> | LifeCycleFn<{globalEventDistributor: Record<string, any>}>[] = async <T extends {globalEventDistributor: Record<string, any>} & AppProps>(props: T) => {
	if (typeof lifecycles.bootstrap === "function") {
		lifecycles.bootstrap(props);
	}
};

export const mount: LifeCycleFn<{globalEventDistributor: Record<string, any>}> | LifeCycleFn<{globalEventDistributor: Record<string, any>}>[] = async <T extends {globalEventDistributor: Record<string, any>} & AppProps>(props: T) => {
	if (typeof lifecycles.mount === "function") {
		lifecycles.mount(props);
	}
};

export const unmount: LifeCycleFn<{globalEventDistributor: Record<string, any>}> | LifeCycleFn<{globalEventDistributor: Record<string, any>}>[] = async <T extends {globalEventDistributor: Record<string, any>} & AppProps>(props: T) => {
	if (typeof lifecycles.unmount === "function") {
		await lifecycles.unmount(props);
	}
	if (document.getElementById("single-spa-application:app1")) document.getElementById("single-spa-application:app1").innerHTML = "";
};
