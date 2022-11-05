import { combineReducers, createStore, Store } from "redux";
import { globalEventDistributor } from "@/App";
import { counterReducer } from "@/store/reducers/counter.reducer";
import { GlobalEventDistributerModel } from "@/models/GlobalStoreModel";

const store: Store<any, any> = createStore(
	combineReducers({
		counter: counterReducer,
	}),
);

export const getGlobalEventDistributer: Function = () => globalEventDistributor as GlobalEventDistributerModel;

export default store;
