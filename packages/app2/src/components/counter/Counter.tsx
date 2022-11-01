import React, {useState} from "react";
import {useSelector} from "react-redux";
import store, {getGlobalStore} from "../../store";
// import {UiButton} from "@xotoboil-multifront/ui-react"

export const Counter: any = (props: any): JSX.Element => {
	const localCounter = useSelector((state: any) => state.counter.counter);
	const [globalCounter, setGlobalCounterState] = useState(getGlobalStore().counter);
	const setGlobalCounter = (value: number) => {
		setGlobalCounterState(value);
		getGlobalStore().counter++;
	};
	return (
		<div>
			<h2>Local Counter: {localCounter}</h2>
			<h2>Global Counter: {globalCounter}</h2>
			<ui-button onClick={() => store.dispatch({type: "counter/counterIncrement"})}>increment</ui-button>
			<ui-button onClick={() => setGlobalCounter(globalCounter + 1)}>increment global</ui-button>
		</div>
	);
};
