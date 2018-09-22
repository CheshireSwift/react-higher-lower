import { Deck } from "./Deck";

import { render, shallow, ShallowWrapper } from "enzyme";
import { h } from "react-hyperscript-helpers";

import { Card } from "../state/cards";

describe("the Deck", () => {
  const props = {
    topCard: { rank: 1, suit: "S" } as Card,
    cardCount: 3,
    disabled: false,
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
    expect(deck.text()).toContain(props.cardCount);
  });

  it("disables the buttons when the component is disabled", () => {
    const deck = shallow(h(Deck, { ...props, disabled: true }));
    ["draw", "higher", "lower"].forEach(buttonText => {
      expect(findButton(deck, buttonText).prop("disabled")).toBeTruthy();
    });
  });

  it("does not disable the buttons when component is not disabled", () => {
    const deck = shallow(h(Deck, { ...props, disabled: false }));
    ["draw", "higher", "lower"].forEach(buttonText => {
      expect(findButton(deck, buttonText).prop("disabled")).toBeFalsy();
    });
  });

  it("draws a card when the button is clicked", () => {
    const draw = jest.fn();
    const drawButton = findButton(shallow(h(Deck, { ...props, draw })), "draw");
    const onClick: any = drawButton.prop("onClick");
    onClick();
    expect(draw).toHaveBeenCalled();
  });

  it("guesses high when the button is clicked", () => {
    const guessHigher = jest.fn();
    const higherButton = findButton(
      shallow(h(Deck, { ...props, guessHigher })),
      "higher"
    );
    const onClick: any = higherButton.prop("onClick");
    onClick();
    expect(guessHigher).toHaveBeenCalled();
  });

  it("guesses low when the button is clicked", () => {
    const guessLower = jest.fn();
    const lowerButton = findButton(
      shallow(h(Deck, { ...props, guessLower })),
      "lower"
    );
    const onClick: any = lowerButton.prop("onClick");
    onClick();
    expect(guessLower).toHaveBeenCalled();
  });

  it("shuffles the deck when mounted", () => {
    const shuffle = jest.fn();
    shallow(h(Deck, { ...props, shuffle }));
    expect(shuffle).toHaveBeenCalled();
  });
});
