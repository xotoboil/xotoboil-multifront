import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { globalEventDistributor } from "@/single-spa/single-spa-props";
import { select, Store } from "@ngrx/store";
import { CounterModel } from "@/app/models/CounterModel";
import { selectCounter } from "@/app/store/reducers/counter.reducer";
import { DecrementCounter, IncrementCounter, ResetCounter } from "@/app/store/actions/counter.actions";
import { GlobalEventDistributor } from "@xotoboil-multifront/common";

@Component({
	selector: "app-counter",
	template: `
		<div>
			<h2>Local Counter: {{ localCounter ? (localCounter | async) : 0 }}</h2>
			<h2>Global Counter: {{ globalEventDistributor && globalEventDistributor.globalStore ? globalEventDistributor.globalStore.counter : 0 }}</h2>
			<ui-button (click)="incrementCounter()">increment</ui-button>
			<ui-button (click)="incrementCounterGlobal()">increment global</ui-button>
		</div>
	`,
})
export class CounterComponent implements OnInit {
	public localCounter: Observable<number>;
	public globalEventDistributor: GlobalEventDistributor;

	constructor(private store: Store<CounterModel>) {
		if (globalEventDistributor && globalEventDistributor.globalStore) this.globalEventDistributor = globalEventDistributor;
	}

	ngOnInit(): void {
		this.localCounter = this.store.pipe(select(selectCounter));
	}

	incrementCounter(): void {
		this.store.dispatch(new IncrementCounter());
	}

	decrementCounter(): void {
		this.store.dispatch(new DecrementCounter());
	}

	resetCounter(): void {
		this.store.dispatch(new ResetCounter());
	}

	incrementCounterGlobal(): void {
		if (globalEventDistributor && globalEventDistributor.globalStore) globalEventDistributor.globalStore.counter += 1;
	}
}
