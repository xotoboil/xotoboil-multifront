import {COUNTER_KEY} from "src/app/enums/CounterEnums";
import {Counter} from "src/app/models/CounterModels";

export const initialState: any = {
	set counterCurrent(value: number) {
		console.log("value: ", value);
		localStorage.setItem(COUNTER_KEY, value.toString());
	},

	get counterCurrent(): number {
		console.log("localStorage.getItem(COUNTER_KEY): ", localStorage.getItem(COUNTER_KEY));
		return +(localStorage.getItem(COUNTER_KEY) || 0);
	},
};

export function setCounterCurrent(counter: Counter, counterCurrent: number): Counter {
	localStorage.setItem(COUNTER_KEY, counterCurrent.toString());
	return Object.assign({}, counter, {counterCurrent});
}
