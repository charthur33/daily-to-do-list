//List item

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
    <div>
      <li style={{ textDecorationLine: isChecked ? "line-through" : "none" }}>
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
          className="delete-button"
        >
          D
        </button>
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
