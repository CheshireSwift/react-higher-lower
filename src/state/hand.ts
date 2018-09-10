import { Card } from "./cards";
import { draw } from "./actions/cards";

type HandState = Card[];

export const hand: Reducer<HandState, typeof draw> = (state = [], action) => {
  switch (action.type) {
    case "DRAW":
      return [...state, action.payload];
    default:
      return state;
  }
};
