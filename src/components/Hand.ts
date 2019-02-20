import { div, h } from 'react-hyperscript-helpers';
import { connect } from 'react-redux';

import { State } from '../state';
import { Card, Guess } from '../state/cards';
import { isLost } from '../state/selectors';
import { CardDisplay } from './CardDisplay';

interface HandProps {
  pairs: Array<{ card: Card; guess: Guess | null }>;
  isLost: boolean;
}

export const Hand = (props: HandProps) =>
  div(
    props.pairs.map((pair, i) =>
      div(
        {
          style: {
            display: 'inline-block',
            marginRight: 8,
            color:
              props.isLost && i === props.pairs.length - 1 ? 'red' : 'black'
          }
        },
        [pair.guess, h(CardDisplay, { card: pair.card })]
      )
    )
  );

export default connect((state: State) => ({
  pairs: state.hand,
  isLost: isLost(state)
}))(Hand);
