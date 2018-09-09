import { render, shallow } from "enzyme";
import { h } from "react-hyperscript-helpers";

import { Deck } from "./Deck";
import { Card } from "../state/cards";

describe("the Deck", () => {
  const cards: Card[] = [
    { rank: 1, suit: "S" },
    { rank: 3, suit: "C" },
    { rank: 7, suit: "D" }
  ];

  const props = {
    cards,
    draw: jest.fn(),
    shuffle: jest.fn()
  };

  let deck: Cheerio;

  beforeEach(() => {
    deck = render(h(Deck, props));
  });

  it("matches the snapshot", () => {
    expect(deck).toMatchSnapshot();
  });

  it("shows the remaining card count", () => {
    expect(deck.text()).toContain(cards.length);
  });

  it("draws a card when the button is clicked", () => {
    const drawButton = shallow(h(Deck, props)).find("button");
    const onClick: any = drawButton.prop("onClick");
    onClick();
    expect(props.draw).toHaveBeenCalled();
  });

  it("shuffles the deck when mounted", () => {
    shallow(h(Deck, props));
    expect(props.shuffle).toHaveBeenCalled();
  });
});
