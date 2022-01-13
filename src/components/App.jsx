import React, { useState } from "react";
import InputArea from "./InputArea.jsx";
import ListItem from "./ListItem.jsx";

function App() {
  const [listItems, setListItems] = useState([]);
  const currentDate = new Date();
  const dateString = currentDate.toDateString();

  function addItem(inputText) {
    setListItems((prevItems) => {
      return [...prevItems, inputText];
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="heading">
        <h2>{dateString}</h2>
      </div>
      <InputArea onAdd={addItem} />
      <div>
        <ul>
          {listItems.map((item, index) => (
            <ListItem key={index} id={index} text={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
