import { div, h } from "react-hyperscript-helpers";
import { connect } from "react-redux";

import { State } from "../state";
import { Card } from "../state/cards";
import { CardDisplay } from "./CardDisplay";

interface HandProps {
  cards: Card[];
}

export const Hand = (props: HandProps) =>
  div(
    props.cards.map(card =>
      h(CardDisplay, {
        style: { display: "inline-block", marginRight: 8 },
        card
      })
    )
  );

export default connect((state: State) => ({ cards: state.hand }))(Hand);
