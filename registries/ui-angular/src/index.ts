import {NgModule} from "@angular/core";
import {DIRECTIVES} from "./directives";

@NgModule({
	declarations: [...DIRECTIVES],
	exports: [...DIRECTIVES],
})
export class UiLibrary {}


export * from './components';
