import React from "react";

import { div, button, h } from "react-hyperscript-helpers";
import { Dispatch, bindActionCreators } from "redux";
import { connect } from "react-redux";

import { State } from "../state";
import { Card } from "../state/cards";
import { topCard, isLost } from "../state/selectors";
import { shuffle, draw, guessHigher, guessLower } from "../state/actions/cards";

import { CardDisplay } from "./CardDisplay";

type CardAction = (card: Card) => any;

interface DeckProps {
  topCard: Card | undefined;
  cardCount: number;
  disabled: boolean;
  draw: CardAction;
  guessHigher: CardAction;
  guessLower: CardAction;
  shuffle: () => any;
}

export class Deck extends React.PureComponent<DeckProps> {
  componentDidMount() {
    this.props.draw({ rank: 7, suit: "C" });
    this.props.shuffle();
  }

  actionOnTopCard(action: CardAction) {
    const topCard = this.props.topCard;
    topCard && action(topCard);
  }

  button(text: string, action: CardAction) {
    return button(
      {
        disabled: this.props.disabled,
        onClick: () => this.actionOnTopCard(action)
      },
      text
    );
  }

  render() {
    return div({ style: { position: "relative" } }, [
      this.props.cardCount,
      h(CardDisplay, { card: null }),
      this.button("draw", this.props.draw),
      this.button("higher", this.props.guessHigher),
      this.button("lower", this.props.guessLower)
    ]);
  }
}

export default connect(
  (state: State) => ({
    topCard: topCard(state),
    cardCount: state.deck.length,
    disabled: isLost(state)
  }),
  (dispatch: Dispatch) =>
    bindActionCreators({ draw, shuffle, guessHigher, guessLower }, dispatch)
)(Deck);
