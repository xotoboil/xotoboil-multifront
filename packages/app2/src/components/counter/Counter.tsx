import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UiButton } from "@xotoboil-multifront/ui-react";
import { CounterModel } from "@/models/CounterModel";
import store, { getGlobalEventDistributer } from "@/store";

export const Counter: any = (props: any): JSX.Element => {
	const localCounter = useSelector((state: CounterModel) => state.counter.counter);
	const [globalEventDistributerCounter, setGlobalEventDistributerCounterState] = useState(getGlobalEventDistributer() ? getGlobalEventDistributer().globalStore.counter : 0);
	const setGlobalEventDistributerCounter = (value: number) => {
		setGlobalEventDistributerCounterState(value);
		getGlobalEventDistributer().globalStore.counter + 1;
	};

	return (
		<div>
			<h2>Local Counter: {localCounter}</h2>
			<h2>Global Counter: {globalEventDistributerCounter}</h2>
			<UiButton onClick={() => store.dispatch({ type: "counter/counterIncrement" })}>increment</UiButton>
			<UiButton onClick={() => setGlobalEventDistributerCounter(globalEventDistributerCounter + 1)}>increment global</UiButton>
		</div>
	);
};
