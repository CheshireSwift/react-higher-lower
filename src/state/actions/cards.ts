import _ from "lodash";

import { Card, Guess } from "../cards";

export const draw = (card: Card) => ({
  type: "DRAW" as "DRAW",
  payload: { card }
});

export const guess = (direction: Guess, card: Card) => ({
  type: "GUESS" as "GUESS",
  payload: { card, direction }
});

export const guessHigher = _.partial(guess, "HIGHER");
export const guessLower = _.partial(guess, "LOWER");

export const shuffle = () => ({
  type: "SHUFFLE" as "SHUFFLE"
});
