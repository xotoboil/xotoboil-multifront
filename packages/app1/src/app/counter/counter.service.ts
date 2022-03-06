import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from "../app.state";
@Injectable()
export class CounterService {
	constructor(private store: Store<AppState>) {}

	getCounterCurrent(): Observable<number> {
		return this.store.select((appState: any) => appState.counter.counterCurrent);
	}
}
