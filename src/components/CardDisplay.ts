import { div } from "react-hyperscript-helpers";

import { Card, Rank } from "../state/cards";

interface CardDisplayProps {
  card: Card | null;
  style?: any;
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

function formatCard(card: Card): string {
  return formatRank(card.rank) + card.suit;
}

export const CardDisplay = (props: CardDisplayProps) =>
  div(
    {
      style: {
        ...props.style,
        width: 40,
        height: 60,
        border: "1px solid black",
        background: props.card
          ? "white"
          : `radial-gradient(circle at 0% 50%, rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px) 0px 10px,
            radial-gradient(at 100% 100%,      rgba(96, 16, 48, 0) 9px, #613 10px, rgba(96, 16, 48, 0) 11px),
            #8a3`,
        backgroundSize: "20px 20px"
      }
    },
    props.card && formatCard(props.card)
  );

export default CardDisplay;
