import React from "react";
import store, {getGlobalStore} from "../../store";
import {counterIncrement} from "./store/action";

export const Counter: any = (props: any): JSX.Element => (
	<div>
		<h2>Local Counter: {store.getState().counter.counter}</h2>
		<h2>Global Counter: {getGlobalStore().counter}</h2>
		<button onClick={counterIncrement()}>increment global</button>
	</div>
);
