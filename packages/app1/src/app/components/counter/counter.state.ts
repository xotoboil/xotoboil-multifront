export interface Counter {
	readonly counterCurrent: number;
}

export interface CounterState {
	readonly counter: Counter;
}

export function setCounterCurrent(counter: Counter, counterCurrent: number): Counter {
	return Object.assign({}, counter, {counterCurrent});
}
