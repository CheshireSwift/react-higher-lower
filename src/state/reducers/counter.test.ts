import { increment, decrement, set } from "../actions/tick";

import { counter } from "./counter";

describe("counter reducer", () => {
  it("intialises with a count", () => {
    expect(counter(undefined, { type: "X" })).toEqual({ count: 0 });
  });

  it("raises the count when incremented", () => {
    expect(counter({ count: 1 }, increment(3))).toEqual({ count: 1 + 3 });
  });

  it("lowers the count when decremented", () => {
    expect(counter({ count: 1 }, decrement(3))).toEqual({ count: 1 - 3 });
  });

  it("sets the count to the appropriate value", () => {
    expect(counter({ count: 1 }, set(3))).toEqual({ count: 3 });
  });
});
