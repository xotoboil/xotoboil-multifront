import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Decrement, Increment, Reset } from "../../store/actions/counter.actions";
import { globalEventDistributor } from "../../../single-spa/single-spa-props";
import { select, Store } from "@ngrx/store";
import { CounterState } from "src/app/models/CounterModels";
import { selectCount } from "src/app/store/reducers/counter.reducer";

@Component({
	selector: "app-counter",
	template: `
		<div>
			<h2>Local Counter: {{ count ? (count | async) : 0 }}</h2>
			<h2>Global Counter: {{ globalStore ? globalStore.counter : 0 }}</h2>
			<ui-button (click)="increment()">increment</ui-button>
			<ui-button (click)="incrementGlobal()">increment global</ui-button>
		</div>
	`,
})
export class CounterComponent implements OnInit {
	public count: Observable<number>;
	public globalStore: any;

	constructor(private store: Store<CounterState>) {
		if (globalEventDistributor) this.globalStore = globalEventDistributor.globalStore;
	}

	ngOnInit(): void {
		this.count = this.store.pipe(select(selectCount));
	}

	increment(): void {
		this.store.dispatch(new Increment());
	}

	decrement(): void {
		this.store.dispatch(new Decrement());
	}

	reset(): void {
		this.store.dispatch(new Reset());
	}

	incrementGlobal(): void {
		if (globalEventDistributor && globalEventDistributor.globalStore) globalEventDistributor.globalStore.counter++;
	}
}
