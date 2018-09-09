import React from "react";

import { div, button } from "react-hyperscript-helpers";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State } from "../state";
import { cardStyle } from "./style";
import { Card } from "../state/cards";
import { draw, shuffle } from "../state/actions/cards";

interface DeckProps {
  cards: Card[];
  draw: (card: Card) => any;
  shuffle: () => any;
}

export class Deck extends React.PureComponent<DeckProps> {
  componentDidMount() {
    this.props.shuffle();
  }

  render() {
    return div([
      div({ style: { ...cardStyle } }, this.props.cards.length),
      button({ onClick: () => this.props.draw(this.props.cards[0]) }, "draw")
    ]);
  }
}

export default connect(
  (state: State) => ({ cards: state.deck }),
  (dispatch: Dispatch) => bindActionCreators({ draw, shuffle }, dispatch)
)(Deck);
