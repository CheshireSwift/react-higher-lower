export const increment = (amount: number) => ({
  type: "INCREMENT" as "INCREMENT",
  amount
});

export const decrement = (amount: number) => ({
  type: "DECREMENT" as "DECREMENT",
  amount
});

export const set = (value: number) => ({
  type: "SET" as "SET",
  value
});
