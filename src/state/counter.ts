import { increment, decrement, set } from "./actions/tick";

interface CounterState {
  count: number;
}

export const counter: Reducer<
  CounterState,
  typeof increment | typeof decrement | typeof set
> = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload.amount };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload.amount };
    case "SET":
      return { ...state, count: action.payload.value };
    default:
      return state;
  }
};
