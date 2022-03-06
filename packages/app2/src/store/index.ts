import {combineReducers, createStore, Store} from "redux";
import {counterReducer} from "../components/counter/store/reducer";
import {tokenReducer} from "../components/token/store/reducer";
import {globalEventDistributor} from "../App";

const store: Store<any, any> = createStore(
	combineReducers({
		counter: counterReducer,
		token: tokenReducer,
	}),
);

export const getGlobalStore: Function = () => globalEventDistributor.globalStore;

export default store;
