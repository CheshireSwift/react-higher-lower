import { describeAction } from "./action.helper";

import * as cards from "./cards";

describe("card actions", () => {
  describeAction("draw", cards.draw, "DRAW", {
    "draws the specified card": {
      args: [{ suit: "H", rank: 12 }],
      payload: { card: { suit: "H", rank: 12 } }
    }
  });

  describeAction("shuffle", cards.shuffle, "SHUFFLE");

  describeAction("guess", cards.guess, "GUESS", {
    "guesses the given card is in the given direction": {
      args: ["HIGHER", { suit: "H", rank: 12 }],
      payload: { card: { suit: "H", rank: 12 }, direction: "HIGHER" }
    }
  });

  describeAction("guessHigher", cards.guessHigher, "GUESS", {
    "guesses the given card is higher": {
      args: [{ suit: "H", rank: 12 }],
      payload: { card: { suit: "H", rank: 12 }, direction: "HIGHER" }
    }
  });

  describeAction("guessLower", cards.guessLower, "GUESS", {
    "guesses the given card is lower": {
      args: [{ suit: "H", rank: 12 }],
      payload: { card: { suit: "H", rank: 12 }, direction: "LOWER" }
    }
  });
});
