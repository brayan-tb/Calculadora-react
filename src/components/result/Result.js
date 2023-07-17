import React from "react";

const InputResult = (props) => {
    return (
        <input type="text" id="result" readOnly autoComplete="off" value={props.value} />
    )
}

export default InputResult;