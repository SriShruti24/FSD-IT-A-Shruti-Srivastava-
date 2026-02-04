import React from 'react'

const Buttons = ({ colInc, colDec, rowInc, rowDec }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button onClick={colInc} style={btnBlue}>col +</button>
      <button onClick={colDec} style={btnRed}>col -</button>
      <button onClick={rowInc} style={btnGreen}>row +</button>
      <button onClick={rowDec} style={btnOrange}>row -</button>
    </div>
  )
}


const baseBtn = {
  color: "white",
  padding: "12px 25px",
  margin: "10px",
  border: "none",
  cursor: "pointer",
  fontSize: "16px",
  minWidth: "120px"
}

const btnBlue = { ...baseBtn, backgroundColor: "blue" }
const btnRed = { ...baseBtn, backgroundColor: "red" }
const btnGreen = { ...baseBtn, backgroundColor: "green" }
const btnOrange = { ...baseBtn, backgroundColor: "orange" }

export default Buttons
