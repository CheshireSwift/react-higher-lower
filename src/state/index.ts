import { combineReducers, Reducer } from "redux";

import { deck } from "./deck";
import { hand } from "./hand";

export const rootReducer = combineReducers({ deck, hand });

export type ReducerState<R> = R extends Reducer<infer S> ? S : null;
export type State = ReducerState<typeof rootReducer>;
export default State;
