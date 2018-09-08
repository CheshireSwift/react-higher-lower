import { combineReducers, Reducer } from "redux";

import { counter } from "./counter";

export type ReducerState<R> = R extends Reducer<infer S> ? S : null;
export const rootReducer = combineReducers({ counter });
