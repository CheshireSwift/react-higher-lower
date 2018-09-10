import _ from "lodash";

import { Card, Rank, Suit } from "./cards";
import { draw, shuffle } from "./actions/cards";

type DeckState = Card[];

const sortedDeck = (): DeckState =>
  _.flatten(
    (["S", "H", "C", "D"] as Suit[]).map(suit =>
      ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as Rank[]).map(rank => ({
        suit,
        rank
      }))
    )
  );

export const deck: Reducer<DeckState, typeof draw | typeof shuffle> = (
  state = sortedDeck(),
  action
) => {
  switch (action.type) {
    case "DRAW":
      return _.reject(state, action.payload);
    case "SHUFFLE":
      return _.shuffle(state);
    default:
      return state;
  }
};
