import React, { useState } from "react";

function InputArea(props) {
    const [inputText, setInputText] = useState("");

    return (
        <div className="form">
            <input type="text" />
            <button>
                <span>Add</span>
            </button>
        </div>
    );
}

export default InputArea;

