import React, { useState } from "react";
import "./App.css";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Listcom from "./Listcom";

const App = () => {
  const [curItem, setItem] = useState("");
  const [list, setList] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const listOfItems = () => {
    setList((preValue) => {
      return [...preValue, curItem];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TODO LIST</h1>
          <br />
          <input
            type="text"
            onChange={itemEvent}
            value={curItem}
            placeholder="Add Items"
          />
          <Button color="primary" onClick={listOfItems} className="newBtn">
            {" "}
            <AddIcon fontSize="large" />{" "}
          </Button>
          <br />
          <ol>
            {/* <li> {curItem} </li> */}
            {list.map((values, index) => {
              return <Listcom key={index} text={values} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default App;
