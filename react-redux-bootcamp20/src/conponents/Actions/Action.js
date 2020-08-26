import { increment, decrement } from "./actionType";

export const incrementAction = () => ({
  type: increment,
});

export const decrementAction = () => ({
  type: decrement,
});
