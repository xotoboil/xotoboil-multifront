import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {CounterService} from "./counter.service";
import {CounterActions} from "./counter.actions";
import {globalEventDistributor} from "src/single-spa/single-spa-props";
import {Store} from "@ngrx/store";
import {CounterState} from "src/app/models/CounterModels";

@Component({
	selector: "app-counter",
	template: `
		<div>
			<h2>Local Counter: {{ counterCurrent }}</h2>
			<h2>Global Counter: {{ globalStore ? globalStore.counter : 0 }}</h2>
			<ui-button (click)="actions.increment()">increment</ui-button>
			<ui-button (click)="actions.incrementGlobal()">increment global</ui-button>
		</div>
	`,
})
export class CounterComponent {
	public counterCurrent: Observable<number>;
	public globalStore: any;

	constructor(counterService: CounterService, public actions: CounterActions, private store: Store<CounterState>) {
		this.counterCurrent = counterService.getCounterCurrent();
		if (globalEventDistributor) this.globalStore = globalEventDistributor.globalStore;
	}
}
