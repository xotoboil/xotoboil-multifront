import { counterIncrement } from "../actions/counter.action";
import { counterState } from "../states/counter.state";

export function counterReducer(state: any = counterState, action: any) {
	switch (action.type) {
		case "counter/counterIncrement":
			return counterIncrement(state);
		default:
			return state;
	}
}
