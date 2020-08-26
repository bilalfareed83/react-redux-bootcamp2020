import { increment, decrement, reset } from "../Actions/actionType";

const initState = {
  count: 0,
};

const counterReducer = (state = initState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };

    case reset:
      return {
        ...initState,
      };

    default:
      return state;
  }
};

export default counterReducer;
