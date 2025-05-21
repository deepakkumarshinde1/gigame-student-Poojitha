import { memo } from "react";
import { useThemeContext } from "./context/theme.context";

function Counter() {
  let { count, increment, decrement } = useThemeContext();
  console.log("Counter");
  return (
    <div>
      {count}
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
    </div>
  );
}

export default memo(Counter);
