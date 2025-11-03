import React from 'react'
import "./book.css";
import { useState } from 'react';
const Book = () => {
    const [count,setCount]=useState(0);
    function add(){
        setCount(count+1);
    }
    function sub(){
        if(count>0)setCount(count-1);
    }
  return (
    <div id="book">
      <img src="https://m.media-amazon.com/images/I/61NcA4vVfRL._AC_UF1000,1000_QL80_.jpg" alt=""/>
      <h2>Title:Math</h2>
      <h3>250</h3>
      <div>
        <button onClick={add}>+</button>
        <span>{count}</span>
        <button onClick={sub}>-</button>
      </div>
    </div>
  )
}

export default Book