import { div, h } from "react-hyperscript-helpers";
import { connect } from "react-redux";

import { State } from "../state";
import { Card, Guess } from "../state/cards";
import { CardDisplay } from "./CardDisplay";

interface HandProps {
  pairs: Array<{ card: Card; guess: Guess | null }>;
}

export const Hand = (props: HandProps) =>
  div(
    props.pairs.map(pair =>
      div({ style: { display: "inline-block", marginRight: 8 } }, [
        pair.guess,
        h(CardDisplay, { card: pair.card })
      ])
    )
  );

export default connect((state: State) => ({ pairs: state.hand }))(Hand);
