// import logo from './logo.svg';
import "./App.css";
import React, { useState } from "react";
import img from "./img/bin.png";

function App() {
  const [lists, setLists] = useState([]);
  const [inputVal, setInputVal] = useState("");

  const addItem = (e) => {
    e.preventDefault();

    setLists((prev) => [...prev, inputVal]);
    setInputVal("");
  };

  const removeItem = (index) => {
    let newArr = [...lists];
    newArr.splice(index, 1);
    setLists(newArr);
  };

  return (
    <div className="parent">
      <h1>TODO LISTS</h1>
      <div className="input">
        <form onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter your Items"
            value={inputVal}
            onChange={(event) => {
              setInputVal(event.target.value);
            }}
          />
          <button>Click me!!</button>
        </form>
        </div>
        {/* //////////////////////////////////// */}
        <div className="second">
          {lists.map((ele, i) => {
            return (
              <div className="border">
              <div  key={i} className="Second1">
                <p>{ele}</p>
                <img src={img} alt="" width={30} onClick={() => {removeItem(i)}} />
              </div>
              </div>
            );
          })}
        </div>
    </div>
  );
}

export default App;
