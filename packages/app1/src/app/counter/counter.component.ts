import {Component} from "@angular/core";
import {Observable} from "rxjs";
import {CounterService} from "./counter.service";
import {CounterActions} from "./counter.actions";
import {globalEventDistributor} from "src/single-spa/single-spa-props";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";

@Component({
	selector: "app-counter",
	template: `
		<div>
			<p>Counter: {{ counterCurrent | async }}</p>
			<p>Counter: {{ globalStore ? globalStore.counter : 0 }}</p>
			<button (click)="actions.increment()">increment</button>
			<button (click)="actions.incrementGlobal()">increment global</button>
		</div>
	`,
})
export class CounterComponent {
	public counterCurrent: Observable<number>;
	public globalStore: any;

	constructor(counterService: CounterService, public actions: CounterActions, private store: Store<AppState>) {
		this.counterCurrent = counterService.getCounterCurrent();
		if (globalEventDistributor) this.globalStore = globalEventDistributor.globalStore;
	}
}
