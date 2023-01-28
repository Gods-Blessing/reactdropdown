import React from "react";
import "./Element.css";
function Element(props){

const mindit = props.arr.map((i)=>{
    return (
        <div className="written" onClick={props.disappear}>
            {i}
        </div>
    )
})

    return(
        <div className="ele">
            {mindit}
        </div>
    )
}

export default Element;