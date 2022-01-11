import React, { useState } from "react";

function ListItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    if (isChecked === false) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecorationLine: isChecked ? "line-through" : "none" }}>
        <input
          onClick={handleCheck}
          type="checkbox"
          className="item-checkbox"
        />
        {props.text}
      </li>
    </div>
  );
}

export default ListItem;
