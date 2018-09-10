import { Card } from "../cards";

export const draw = (card: Card) => ({
  type: "DRAW" as "DRAW",
  payload: card
});

export const shuffle = () => ({
  type: "SHUFFLE" as "SHUFFLE"
});
