import {counterIncrement} from "./action";
import {initialState} from "./state";

export function counterReducer(state: any = initialState, action: any) {
	switch (action.type) {
		case "counterIncrement":
			return counterIncrement(state);
		default:
			return state;
	}
}
