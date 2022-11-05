import {NgModule} from "@angular/core";
import {DIRECTIVES} from "./directives";
import {defineCustomElements} from "@xotoboil-multifront/stencil/loader";

defineCustomElements();

@NgModule({
	declarations: [...DIRECTIVES],
	exports: [...DIRECTIVES],
})
export class UiLibrary {}

export * from "./components";
