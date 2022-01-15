import React, { useState } from "react";
import ClearIcon from '@mui/icons-material/Clear';

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
    <div className="list-item">
      <li style={{ textDecorationLine: isChecked ? "line-through" : "none" }}>
        <button
          onClick={() => {
            props.onDelete(props.id);
          }}
          className="delete-button"
        >
          <ClearIcon />
        </button>
        <input
          onClick={handleCheck}
          type="checkbox"
          className="item-checkbox"
        />
        <span>{props.text}</span>
      </li>
    </div>
  );
}

export default ListItem;
