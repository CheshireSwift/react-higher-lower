import { guess, draw } from "./actions/cards";

import { hand } from "./hand";
import { Card, Guess } from "./cards";

describe("hand reducer", () => {
  it("initialises with an empty list of guesses", () => {
    expect(hand(undefined, { type: "X" })).toEqual([]);
  });

  it("adds the drawn card to the hand", () => {
    type Pair = { card: Card; guess: Guess | null };
    const qh: Pair = { card: { rank: 12, suit: "H" }, guess: null };
    const as: Pair = { card: { rank: 1, suit: "S" }, guess: null };

    expect(hand([qh], draw(as.card))).toEqual([qh, as]);
  });

  it("adds the guessed card to the hand", () => {
    type Pair = { card: Card; guess: Guess | null };
    const direction = "HIGHER";
    const qh: Pair = { card: { rank: 12, suit: "H" }, guess: null };
    const as: Pair = { card: { rank: 1, suit: "S" }, guess: direction };

    expect(hand([qh], guess(direction, as.card))).toEqual([qh, as]);
  });
});
