import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {CounterComponent} from "./counter.component";
import {UiLibrary} from "@xotoboil-multifront/ui-angular";

@NgModule({
	imports: [CommonModule, UiLibrary],
	providers: [],
	declarations: [CounterComponent],
	exports: [CounterComponent],
})
export class CounterModule {}
