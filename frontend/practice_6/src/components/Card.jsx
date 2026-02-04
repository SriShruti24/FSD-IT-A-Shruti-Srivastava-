import React from 'react'
import './Card.css'

const Card = ({ width, height, name = "Shruti", age = 22 }) => {
  return (
    <div
      className="card"
      style={{ width: width + "px", height: height + "px" }}
    >
      <img
        src="image.jpg"
        alt=""
        style={{ width: "100px", height: "100px" }}
      />
      <h3>{name}</h3>
      <p>Age: {age}</p>
    </div>
  )
}

export default Card
