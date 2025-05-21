import { useCallback, useRef, useState } from "react";
import ThemeContextComponent from "./context/theme.context";
import Counter from "./Counter";
import { Route, Routes } from "react-router-dom";
import Product from "./Product";
import Input from "./reducers/Input";

function App() {
  let [c, setC] = useState(0);
  let inputUserRef = useRef(null);
  let inputPasswordRef = useRef(null);
  const increment = useCallback(() => {
    setC((p) => p + 1);
  }, []);
  const submit = (event) => {
    console.log(inputUserRef.current.value);
    console.log(inputPasswordRef.current.value);
    if (inputUserRef.current.value.trim().length === 0) {
      inputUserRef.current.focus();
    } else {
      alert(inputUserRef.current.value);
    }
  };
  return (
    <>
      <h1>{c}</h1>
      <Input ref={inputUserRef} />
      <Input ref={inputPasswordRef} />
      <button onClick={submit}>Submit</button>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeContextComponent>
              <Counter />
            </ThemeContextComponent>
          }
        />
        <Route
          path="/product/:id"
          element={<Product text="deepak" increment={increment} />}
        />
      </Routes>
    </>
  );
}

export default App;
