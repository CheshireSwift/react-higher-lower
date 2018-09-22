import * as _ from "lodash";
import { createSelector } from "reselect";

import { State } from ".";

export const topCard = createSelector(
  (state: State) => state.deck,
  deck => _.first(deck)
);

export const isLost = createSelector(
  (state: State) => state.hand,
  (hand): boolean => {
    const [previous, last] = _.takeRight(hand, 2);
    if (!previous || !last || !last.guess) {
      return false;
    }

    // lose if comparison is opposite of guess
    switch (last.guess) {
      case "HIGHER":
        return last.card.rank < previous.card.rank;
      case "LOWER":
        return last.card.rank > previous.card.rank;
    }
  }
);
