import { draw } from "./actions/cards";

import { hand } from "./hand";
import { Card } from "./cards";

describe("hand reducer", () => {
  it("initialises with an empty hand", () => {
    expect(hand(undefined, { type: "X" })).toEqual([]);
  });

  it("adds the drawn card to the hand", () => {
    const qh: Card = { rank: 12, suit: "H" };
    const as: Card = { rank: 1, suit: "S" };
    expect(hand([qh], draw(as))).toEqual([qh, as]);
  });
});
