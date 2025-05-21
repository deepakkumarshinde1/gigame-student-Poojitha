import { createContext, memo, useContext, useMemo, useReducer } from "react";
import { initialState, reducer } from "../reducers/counter.reducer";

// #1 Create a context
const ThemeContext = createContext();

// #2 Create a Hook
export function useThemeContext() {
  return useContext(ThemeContext);
}

// #3 Create a Wrapper Component
function ThemeContextComponent(props) {
  const [state, dispatch] = useReducer(reducer, { ...initialState });

  const increment = () => dispatch({ type: "INC" });
  const decrement = () => dispatch({ type: "DEC" });
  const reset = () => dispatch({ type: "RESET" });

  const shared = useMemo(() => {
    return {
      count: state.count,
      increment,
      decrement,
      reset,
    };
  }, [state]);
  return (
    <ThemeContext.Provider value={shared}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextComponent;

// Memorizing a component => memo
// Memorizing a function => useCallback
// Memorizing a value => useMemo
