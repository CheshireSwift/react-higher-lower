import { render, shallow, ShallowWrapper } from "enzyme";
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
    guessHigher: jest.fn(),
    guessLower: jest.fn(),
    shuffle: jest.fn()
  };

  let deck: Cheerio;

  const findButton = (wrapper: ShallowWrapper<any>, text: string) =>
    wrapper.findWhere(
      child => child.type() === "button" && child.text() === text
    );

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
    const drawButton = findButton(shallow(h(Deck, props)), "draw");
    const onClick: any = drawButton.prop("onClick");
    onClick();
    expect(props.draw).toHaveBeenCalled();
  });

  it("guesses high when the button is clicked", () => {
    const higherButton = findButton(shallow(h(Deck, props)), "higher");
    const onClick: any = higherButton.prop("onClick");
    onClick();
    expect(props.guessHigher).toHaveBeenCalled();
  });

  it("guesses low when the button is clicked", () => {
    const lowerButton = findButton(shallow(h(Deck, props)), "lower");
    const onClick: any = lowerButton.prop("onClick");
    onClick();
    expect(props.guessLower).toHaveBeenCalled();
  });

  it("shuffles the deck when mounted", () => {
    shallow(h(Deck, props));
    expect(props.shuffle).toHaveBeenCalled();
  });
});
