import React from "react";

const BtnOperator = (props) => {
    return (
        <button className="operator" onClick={props.onClick} id={props.operator}>{props.text}</button>
    )
}

export default BtnOperator;