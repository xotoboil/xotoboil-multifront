import {Action} from "@ngrx/store";
import {Counter} from "src/app/models/CounterModels";
import {initialState, setCounterCurrent} from "./counter.state";

export function counterReducer(counter: Counter = initialState, action: Action): Counter {
	switch (action.type) {
		case "counterIncrement":
			return setCounterCurrent(counter, counter.counterCurrent + 1);
		case "counterDecrement":
			return setCounterCurrent(counter, counter.counterCurrent - 1);
		case "reset":
			return setCounterCurrent(counter, 0);
		default:
			return counter;
	}
}
