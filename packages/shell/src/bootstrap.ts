// @ts-nocheck
/* eslint-disable prettier/prettier */

import { start, registerApplication } from "single-spa";
import { GlobalEventDistributor } from "./events/globalEvents";
const globalEventDistributor: GlobalEventDistributor = new GlobalEventDistributor();

/**
 * Register applications here
 */

registerApplication("portal", () => import("portal/App"), () => true, { globalEventDistributor },);
registerApplication("app1", () => import("app1/ApplicationPage"), (location: Location) => location.pathname.startsWith("/angular"), { globalEventDistributor },);
registerApplication("app2", () => import("app2/ApplicationPage"), (location: Location) => location.pathname.startsWith("/react"), { globalEventDistributor },);
registerApplication("app3", () => import("app3/ApplicationPage"), (location: Location) => location.pathname.startsWith("/vue"), { globalEventDistributor },);

start();
