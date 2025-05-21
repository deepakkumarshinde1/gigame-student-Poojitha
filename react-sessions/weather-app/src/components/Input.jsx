import { useState } from "react";
import List from "./List";
import { Helmet } from "react-helmet";

function Input() {
  let [inputValue, setInputValue] = useState(""); // number, string, boolean, array, object, null
  let [list, setList] = useState([]);
  let [toggle, setToggle] = useState(false);

  let handelChange = (event) => {
    let { value, name } = event.target;
    setInputValue(value);
  };

  let saveToList = () => {
    let newList = [...list]; // spread operator
    newList.push(inputValue);
    setList(newList);
    setInputValue(""); // clear the input field
  };
  return (
    <>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>ESO - Official Home | Explore, Quest, and Conquer</title>
        <meta
          name="description"
          content="Welcome to ESO - Your gateway to epic adventures. Explore immersive worlds, complete quests, and connect with players worldwide. Start your journey now."
        />
        <meta
          name="keywords"
          content="ESO, Elder Scrolls Online, MMORPG, fantasy game, online RPG, open world, questing, multiplayer"
        />
        <meta name="author" content="ESO Team" />
        <meta name="robots" content="index, follow"></meta>
      </Helmet>
      <input
        type="text"
        onChange={handelChange}
        name="username"
        value={inputValue}
        autoComplete="off"
      />
      <button
        onClick={saveToList}
        className="btn"
        disabled={inputValue.trim().length === 0 ? true : false}
      >
        Add to list
      </button>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {/* <input type="text" onChange={(event)=>{}} /> */}
      {/* 
      {inputValue_1 && <h1>Not In Input &&</h1>}
      {inputValue_1 ?? <h1>Not In Input_nullish</h1>} */}
      {/* {inputValue.trim().length === 0 ? (
        <h1>Not In Input_1</h1>
      ) : (
        <h1>Now You can save it</h1>
      )} */}
      {toggle ? <List list={list} /> : null}
    </>
  );
}

export default Input;

// state => state is object in react
// state is used to store data
