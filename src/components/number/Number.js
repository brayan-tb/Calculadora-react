import React from "react";

const BtnNumber = (props) => {
    return (
        <button onClick={props.onClick}>{props.text}</button>
    )
}

export default BtnNumber;