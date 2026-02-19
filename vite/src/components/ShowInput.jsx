import React, { useState } from "react";


const ShowInput = () => {
  const [input, setInput] = useState('')
  const handleChange =(e)=>{
    setInput(e.target.value)
  }
  return (
    <div>
      <h2>Enter your name:</h2>
      <label htmlFor="#">
        <input type="text" value={input} onChange={handleChange} />
      </label>
      <p>You entered: {input}</p>
    </div>
  )
};

export default ShowInput