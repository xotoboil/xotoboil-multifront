import { Action, createSelector } from "@ngrx/store";
import { COUNTER_KEY } from "@/app/enums/CounterEnums";
import { CounterState } from "@/app/models/CounterModel";
import { ActionTypes } from "../actions/counter.actions";

export const counterState = +localStorage.getItem(COUNTER_KEY) ?? 0;

export function counterReducer(counter: number = counterState, action: Action): number {
	switch (action.type) {
		case ActionTypes.IncrementCounter:
			localStorage.setItem(COUNTER_KEY, (counter + 1).toString());
			return counter + 1;
		case ActionTypes.DecrementCounter:
			localStorage.setItem(COUNTER_KEY, (counter - 1).toString());
			return counter - 1;
		case ActionTypes.ResetCounter:
			localStorage.setItem(COUNTER_KEY, "0");
			return counterState;
		default:
			return counter;
	}
}

export const selectFeature = (state: CounterState) => state.counter;
export const selectCounter = createSelector(selectFeature, (e) => e);
