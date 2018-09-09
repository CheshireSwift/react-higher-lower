import { render } from "enzyme";
import { h } from "react-hyperscript-helpers";

import { Card } from "../state/cards";

import { Hand } from "./Hand";

describe("the Hand", () => {
  const cards: Card[] = [
    { suit: "H", rank: 12 },
    { suit: "C", rank: 4 },
    { suit: "S", rank: 1 }
  ];
  let hand: Cheerio;

  beforeEach(() => {
    hand = render(h(Hand, { cards }));
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
