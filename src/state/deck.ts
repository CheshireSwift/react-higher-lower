import _ from "lodash";

import { Card, Rank, Suit } from "./cards";
import { draw, guess, shuffle } from "./actions/cards";

type DeckState = Card[];

const sortedDeck = (): DeckState =>
  _.flatMap(["S", "H", "C", "D"] as Suit[], suit =>
    ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] as Rank[]).map(rank => ({
      suit,
      rank
    }))
  );

export const deck: Reducer<
  DeckState,
  typeof draw | typeof guess | typeof shuffle
> = (state = sortedDeck(), action) => {
  switch (action.type) {
    case "DRAW":
    case "GUESS":
      return _.reject(state, action.payload.card);
    case "SHUFFLE":
      return _.shuffle(state);
    default:
      return state;
  }
};
