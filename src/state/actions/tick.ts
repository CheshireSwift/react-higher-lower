export const increment = (amount: number) => ({
  type: "INCREMENT" as "INCREMENT",
  payload: { amount }
});

export const decrement = (amount: number) => ({
  type: "DECREMENT" as "DECREMENT",
  payload: { amount }
});

export const set = (value: number) => ({
  type: "SET" as "SET",
  payload: { value }
});
