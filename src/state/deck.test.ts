import { guess, shuffle, draw } from "./actions/cards";

import { deck } from "./deck";
import { Card } from "./cards";

const sortedDeck: Card[] = [
  {
    suit: "S",
    rank: 1
  },
  {
    suit: "S",
    rank: 2
  },
  {
    suit: "S",
    rank: 3
  },
  {
    suit: "S",
    rank: 4
  },
  {
    suit: "S",
    rank: 5
  },
  {
    suit: "S",
    rank: 6
  },
  {
    suit: "S",
    rank: 7
  },
  {
    suit: "S",
    rank: 8
  },
  {
    suit: "S",
    rank: 9
  },
  {
    suit: "S",
    rank: 10
  },
  {
    suit: "S",
    rank: 11
  },
  {
    suit: "S",
    rank: 12
  },
  {
    suit: "S",
    rank: 13
  },
  {
    suit: "H",
    rank: 1
  },
  {
    suit: "H",
    rank: 2
  },
  {
    suit: "H",
    rank: 3
  },
  {
    suit: "H",
    rank: 4
  },
  {
    suit: "H",
    rank: 5
  },
  {
    suit: "H",
    rank: 6
  },
  {
    suit: "H",
    rank: 7
  },
  {
    suit: "H",
    rank: 8
  },
  {
    suit: "H",
    rank: 9
  },
  {
    suit: "H",
    rank: 10
  },
  {
    suit: "H",
    rank: 11
  },
  {
    suit: "H",
    rank: 12
  },
  {
    suit: "H",
    rank: 13
  },
  {
    suit: "C",
    rank: 1
  },
  {
    suit: "C",
    rank: 2
  },
  {
    suit: "C",
    rank: 3
  },
  {
    suit: "C",
    rank: 4
  },
  {
    suit: "C",
    rank: 5
  },
  {
    suit: "C",
    rank: 6
  },
  {
    suit: "C",
    rank: 7
  },
  {
    suit: "C",
    rank: 8
  },
  {
    suit: "C",
    rank: 9
  },
  {
    suit: "C",
    rank: 10
  },
  {
    suit: "C",
    rank: 11
  },
  {
    suit: "C",
    rank: 12
  },
  {
    suit: "C",
    rank: 13
  },
  {
    suit: "D",
    rank: 1
  },
  {
    suit: "D",
    rank: 2
  },
  {
    suit: "D",
    rank: 3
  },
  {
    suit: "D",
    rank: 4
  },
  {
    suit: "D",
    rank: 5
  },
  {
    suit: "D",
    rank: 6
  },
  {
    suit: "D",
    rank: 7
  },
  {
    suit: "D",
    rank: 8
  },
  {
    suit: "D",
    rank: 9
  },
  {
    suit: "D",
    rank: 10
  },
  {
    suit: "D",
    rank: 11
  },
  {
    suit: "D",
    rank: 12
  },
  {
    suit: "D",
    rank: 13
  }
];

describe("deck reducer", () => {
  it("initialises with a sorted deck", () => {
    expect(deck(undefined, { type: "X" })).toEqual(sortedDeck);
  });

  it("removes cards when they are drawn", () => {
    const qh: Card = { rank: 12, suit: "H" };
    const as: Card = { rank: 1, suit: "S" };
    expect(deck([qh, as], draw(as))).toEqual([qh]);
  });

  it("removes cards when they are guessed", () => {
    const qh: Card = { rank: 12, suit: "H" };
    const as: Card = { rank: 1, suit: "S" };
    expect(deck([qh, as], guess("HIGHER", as))).toEqual([qh]);
  });

  it("shuffles the deck", () => {
    expect(deck(sortedDeck, shuffle())).not.toEqual(sortedDeck);
  });
});
