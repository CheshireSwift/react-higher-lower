import { describeAction } from "./action.helper";

import * as cards from "./cards";

describe("card actions", () => {
  describeAction("draw", cards.draw, "DRAW", {
    "draws the specified card": {
      args: [{ suit: "H", rank: 12 }],
      payload: { suit: "H", rank: 12 }
    }
  });

  describeAction("shuffle", cards.shuffle, "SHUFFLE");
});
