export type Suit = "H" | "S" | "C" | "D";
export type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;
export interface Card {
  rank: Rank;
  suit: Suit;
}
