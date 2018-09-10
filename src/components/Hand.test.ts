import { render } from "enzyme";
import { h } from "react-hyperscript-helpers";

import { Card, Guess } from "../state/cards";

import { Hand } from "./Hand";

describe("the Hand", () => {
  const pairs: Array<{ card: Card; guess: Guess | null }> = [
    { card: { suit: "H", rank: 12 }, guess: null },
    { card: { suit: "C", rank: 4 }, guess: null },
    { card: { suit: "S", rank: 1 }, guess: null }
  ];
  let hand: Cheerio;

  beforeEach(() => {
    hand = render(h(Hand, { pairs }));
  });

  it("matches the snapshot", () => {
    expect(hand).toMatchSnapshot();
  });

  it("shows the cards in hand", () => {
    expect(hand.text()).toContain("QH");
    expect(hand.text()).toContain("4C");
    expect(hand.text()).toContain("AS");
  });
});
