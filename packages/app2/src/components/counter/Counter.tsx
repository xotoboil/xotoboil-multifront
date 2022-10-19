import React, {useState} from "react";
import {getGlobalStore} from "../../store";

export const Counter: any = (props: any): JSX.Element => {
	const [localCounter, setLocalCounter] = useState(0);
	const [globalCounter, setGlobalCounterState] = useState(getGlobalStore().counter);
	const setGlobalCounter = (value: number) => {
		setGlobalCounterState(value);
		getGlobalStore().counter++;
	};

	return (
		<div>
			<h2>Local Counter: {localCounter}</h2>
			<h2>Global Counter: {globalCounter}</h2>
			<button onClick={() => setLocalCounter(localCounter + 1)}>increment</button>
			<button onClick={() => setGlobalCounter(globalCounter + 1)}>increment global</button>
		</div>
	);
};
