export interface Counter {
	readonly counterCurrent: number;
}

export function setCounterCurrent(counter: Counter, counterCurrent: number): Counter {
	return Object.assign({}, counter, {counterCurrent});
}
