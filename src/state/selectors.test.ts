import * as selectors from "./selectors";

import State from ".";
import { Card } from "./cards";

describe("selectors", () => {
  const aceS: Card = { rank: 1, suit: "S" };
  const queenH: Card = { rank: 12, suit: "H" };
  const tenD: Card = { rank: 10, suit: "D" };

  const emptyState = {
    hand: [],
    deck: []
  };

  describe("#isLost", () => {
    it("is true if the most recent guess is HIGHER the card is lower", () => {
      const incorrectHigherGuess: State = {
        ...emptyState,
        hand: [
          { card: queenH, guess: "LOWER" },
          { card: tenD, guess: "HIGHER" }
        ]
      };
      expect(selectors.isLost(incorrectHigherGuess)).toBe(true);
    });

    it("is true if the most recent guess is LOWER when the card is higher", () => {
      const incorrectLowerState: State = {
        ...emptyState,
        hand: [
          { card: aceS, guess: null },
          { card: tenD, guess: "HIGHER" },
          { card: queenH, guess: "LOWER" }
        ]
      };
      expect(selectors.isLost(incorrectLowerState)).toBe(true);
    });

    it("is false for a single card hand", () => {
      const singleCardState: State = {
        ...emptyState,
        hand: [{ card: aceS, guess: null }]
      };
      expect(selectors.isLost(singleCardState)).toBe(false);
    });

    it("is false for a hand of correct guesses", () => {
      const correctGuessesState: State = {
        ...emptyState,
        hand: [
          { card: aceS, guess: null },
          { card: queenH, guess: "HIGHER" },
          { card: tenD, guess: "LOWER" }
        ]
      };
      expect(selectors.isLost(correctGuessesState)).toBe(false);
    });

    it("is false for an empty hand", () => {
      const emptyHandState: State = { ...emptyState, hand: [] };
      expect(selectors.isLost(emptyHandState)).toBe(false);
    });
  });

  describe("#topCard", () => {
    it("returns the first card for a nonempty deck", () => {
      const someCardsState: State = { ...emptyState, deck: [queenH, aceS] };
      expect(selectors.topCard(someCardsState)).toBe(queenH);
    });
    it("returns undefined for an empty deck", () => {
      const emptyDeckState: State = { ...emptyState, deck: [] };
      expect(selectors.topCard(emptyDeckState)).toBeUndefined();
    });
  });
});
