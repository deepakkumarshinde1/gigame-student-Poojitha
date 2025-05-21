export const initialState = {
  count: 0,
  user: null,
};
// action = { type: "INCREMENT" | "DECREMENT" | "RESET" }
export const reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INC":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DEC":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RESET":
      return {
        ...state,
        count: 0,
      };
    default:
      return { ...state };
  }
};
