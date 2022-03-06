import {counterIncrement} from "../components/store/action";
import {counterAddIncrement} from "../components/store/mutation";
import {createStore, Store} from "vuex";
import {counterState} from "./../components/store/state";

const store: Store<{counter: number}> = createStore({
	state: {...counterState},
	mutations: {counterAddIncrement},
	actions: {counterIncrement},
});

export default store;
