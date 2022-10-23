import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {CounterState} from "src/app/models/CounterModels";

@Injectable()
export class CounterService {
	constructor(private store: Store<CounterState>) {}

	getCounterCurrent(): Observable<number> {
		return this.store.select((counterState: CounterState) => counterState.counter.counterCurrent);
	}
}
