import React, { useState } from "react";
function Count(){
        const [count, setCount]=useState(0);
        const [colour, setColour]=useState("red");
        function increment(){
            setCount(count+1);
}
 function decrement(){
            setCount(count-1);
}
function changeColour(){
    setColour(prevColor => (prevColor === "red" ? "green" : "red"));
}
    return(
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
            <button onClick={changeColour} style={{backgroundColor:colour}}  >{colour}</button>
            
        </div>
    )
}
export default Count;