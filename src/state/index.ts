import { ReducerState, rootReducer } from "./reducers";
export type State = ReducerState<typeof rootReducer>;

export default State;
