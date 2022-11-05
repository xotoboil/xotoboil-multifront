import { CounterModel } from "@/models/CounterModel";

export const counterIncrement: Function = (state: CounterModel) => {
	return {
		counter: state.counter + 1,
	};
};
