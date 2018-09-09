import { h } from "react-hyperscript-helpers";
import { storiesOf } from "@storybook/react";
import { withKnobs, number, select, object } from "@storybook/addon-knobs";

import CardDisplay from "./CardDisplay";
import { Rank } from "state/cards";

storiesOf("Card display", module)
  .addDecorator(withKnobs)
  .add("Back", () => h(CardDisplay, { card: null }))
  .add("Front", () =>
    h(CardDisplay, {
      card: {
        rank: number("Rank", 11) as Rank,
        suit: select(
          "Suit",
          { S: "Spades", H: "Hearts", C: "Clubs", D: "Diamonds" },
          "S"
        )
      },
      style: object("Style", {})
    })
  );
