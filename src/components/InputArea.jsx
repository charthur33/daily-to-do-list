//This component will serve as the input section of the to-do list where the user can
// enter and add new items to the list.

import React, { useState } from "react";

function InputArea(props) {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
    console.log(inputText);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button
        className="add-button"
        onClick={() => {
          props.onAdd(inputText);
          //After user clicks add, input will be emptied
          setInputText("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
