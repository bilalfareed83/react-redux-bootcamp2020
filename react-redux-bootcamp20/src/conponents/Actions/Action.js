import { increment, decrement, reset } from "./actionType";

export const incrementAction = () => ({
  type: increment,
});

export const decrementAction = () => ({
  type: decrement,
});

export const resetAction = () => ({
  type: reset,
});
