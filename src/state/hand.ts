import _ from "lodash";

import { Card, Guess } from "./cards";
import { draw, guess } from "./actions/cards";

type HandState = Array<{ card: Card; guess: Guess | null }>;

export const hand: Reducer<HandState, typeof draw | typeof guess> = (
  state = [],
  action
) => {
  switch (action.type) {
    case "DRAW":
    case "GUESS":
      return [
        ...state,
        {
          card: action.payload.card,
          guess: _.get(action.payload, "direction", null)
        }
      ];
    default:
      return state;
  }
};
