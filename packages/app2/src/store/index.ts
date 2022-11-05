import { combineReducers, createStore, Store } from "redux";
import { globalEventDistributor } from "../App";
import { counterReducer } from "./reducers/counter.reducer";

const store: Store<any, any> = createStore(
	combineReducers({
		counter: counterReducer,
	}),
);

export const getGlobalStore: Function = () => globalEventDistributor.globalStore;

export default store;
