import React, { useState } from "react";

const ShowColor = () => {
  const [color, setColor] = useState('red')

  const handleChange = () => {
    setColor(color === 'red' ? 'blue' : 'red')
  }
  const style = {
    color: color
  }
  return (
    <div>
      <button onClick={handleChange}>Change the color</button>
      <p style={style}>The color of this text may change</p>
    </div>
  )
};



export default ShowColor