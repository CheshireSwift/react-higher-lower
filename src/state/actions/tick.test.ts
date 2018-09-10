import { describeAction } from "./action.helper";

import * as tick from "./tick";

describe("ticking actions", () => {
  describeAction("increment", tick.increment, "INCREMENT", {
    "increments by the expected amount": {
      args: [13],
      payload: { amount: 13 }
    }
  });

  describeAction("decrement", tick.decrement, "DECREMENT", {
    "decrements by the expected amount": {
      args: [13],
      payload: { amount: 13 }
    }
  });

  describeAction("set", tick.set, "SET", {
    "sets the value to the specified number": {
      args: [13],
      payload: { value: 13 }
    }
  });
});
