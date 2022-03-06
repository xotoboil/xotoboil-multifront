import {Action} from "@ngrx/store";
import {Counter, setCounterCurrent} from "./counter";

export function counterReducer(counter: Counter = {counterCurrent: 0}, action: Action): Counter {
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
