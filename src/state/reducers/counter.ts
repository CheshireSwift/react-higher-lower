import { increment, decrement, set } from "../actions/tick";

interface CounterState {
  count: number;
}

export const counter = (
  state: CounterState = { count: 0 },
  action: Action<typeof increment | typeof decrement | typeof set>
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.amount };
    case "DECREMENT":
      return { ...state, count: state.count - action.amount };
    case "SET":
      return { ...state, count: action.value };
    default:
      return state;
  }
};
