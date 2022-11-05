import {Action, createSelector} from "@ngrx/store";
import {COUNTER_KEY} from "src/app/enums/CounterEnums";
import {CounterState} from "src/app/models/CounterModels";
import {ActionTypes} from "../actions/counter.actions";

export const counterState = +localStorage.getItem(COUNTER_KEY) ?? 0;

export function counterReducer(counter: number = counterState, action: Action): number {
	switch (action.type) {
		case ActionTypes.Increment:
			localStorage.setItem(COUNTER_KEY, (counter + 1).toString());
			return counter + 1;
		case ActionTypes.Decrement:
			localStorage.setItem(COUNTER_KEY, (counter - 1).toString());
			return counter - 1;
		case ActionTypes.Reset:
			localStorage.setItem(COUNTER_KEY, "0");
			return counterState;
		default:
			return counter;
	}
}

export const selectFeature = (state: CounterState) => state.counter;
export const selectCount = createSelector(selectFeature, (s) => {
	return s;
});
