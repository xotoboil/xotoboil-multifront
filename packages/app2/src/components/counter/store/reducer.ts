import {counterIncrement} from "./action";
import {counterState} from "./state";

export function counterReducer(state: any = counterState, action: any) {
	switch (action.type) {
		case "counter/counterIncrement":
			return counterIncrement(state);
		default:
			return state;
	}
}
