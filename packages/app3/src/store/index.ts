import { counterIncrement } from "./actions/counter.action";
import { counterAddIncrement } from "./mutations/counter.mutation";
import { createStore, Store } from "vuex";
import { counterState } from "./states/counter.state";

const store: Store<{ counter: number }> = createStore({
	state: { ...counterState },
	mutations: { counterAddIncrement },
	actions: { counterIncrement },
});

export default store;
