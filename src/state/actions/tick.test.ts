import { describeAction } from "./action.testHelpers";

import * as tick from "./tick";

describe("ticking actions", () => {
  describeAction("increment", tick.increment, "INCREMENT", {
    "increments by the expected amount": {
      args: [13],
      output: { amount: 13 }
    }
  });

  describeAction("decrement", tick.decrement, "DECREMENT", {
    "decrements by the expected amount": {
      args: [13],
      output: { amount: 13 }
    }
  });

  describeAction("set", tick.set, "SET", {
    "sets the value to the specified number": {
      args: [13],
      output: { value: 13 }
    }
  });
});
