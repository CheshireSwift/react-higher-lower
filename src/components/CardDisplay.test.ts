import { render } from "enzyme";
import { h } from "react-hyperscript-helpers";

import { Card } from "../state/cards";

import { CardDisplay } from "./CardDisplay";

describe("the Card Display", () => {
  const twoClubs: Card = { rank: 2, suit: "C" };

  const display = (card: Card | null) => render(h(CardDisplay, { card }));

  it("matches the back of card snapshot", () => {
    expect(display(null)).toMatchSnapshot();
  });

  it("matches the front of cardsnapshot", () => {
    expect(display(twoClubs)).toMatchSnapshot();
  });

  it("displays the card", () => {
    expect(display(twoClubs).text()).toContain("2C");
  });

  it("formats aces and faces", () => {
    function assertPair(card: Card, output: string) {
      expect(display(card).text()).toContain(output);
    }
    assertPair({ rank: 1, suit: "S" }, "AS");
    assertPair({ rank: 11, suit: "C" }, "JC");
    assertPair({ rank: 12, suit: "H" }, "QH");
    assertPair({ rank: 13, suit: "D" }, "KD");
  });
});
