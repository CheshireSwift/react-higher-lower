import { div } from "react-hyperscript-helpers";
import { connect } from "react-redux";

import { State } from "../state";
import { Card, Rank } from "../state/cards";
import { cardStyle } from "./style";

interface HandProps {
  cards: Card[];
}

function formatRank(rank: Rank) {
  switch (rank) {
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    case 1:
      return "A";
    default:
      return rank;
  }
}

export const Hand = (props: HandProps) =>
  div(
    props.cards.map(card =>
      div(
        { style: { ...cardStyle, display: "inline-block", marginRight: 8 } },
        formatRank(card.rank) + card.suit
      )
    )
  );

export default connect((state: State) => ({ cards: state.hand }))(Hand);
