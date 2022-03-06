import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {AppState} from "../app.state";
import {createAction} from "../../store/createAction";
import {globalEventDistributor} from "src/single-spa/single-spa-props";

@Injectable()
export class CounterActions {
	constructor(private store: Store<AppState>) {}

	incrementGlobal(): void {
		if (globalEventDistributor && globalEventDistributor.globalStore) {
			globalEventDistributor.globalStore.counter++;
		}
	}

	increment(): void {
		this.store.dispatch(createAction("counterIncrement"));
	}

	decrement(): void {
		this.store.dispatch(createAction("counterDecrement"));
	}

	reset(): void {
		this.store.dispatch(createAction("resetCounter"));
	}
}
