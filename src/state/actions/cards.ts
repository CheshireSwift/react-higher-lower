import { Card } from "../cards";

export const draw = ({ rank, suit }: Card) => ({
  type: "DRAW" as "DRAW",
  rank,
  suit
});

export const shuffle = () => ({
  type: "SHUFFLE" as "SHUFFLE"
});
