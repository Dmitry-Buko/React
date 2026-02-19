import React, { useState } from "react";


const ShowArray = () => {
  const [showText, setShowText] = useState(true)
  const handleClick = () => {
    setShowText((showText)=> !showText)
  }
  return (
    <div className="hidden-text">
      <button onClick={handleClick}>Click me!</button>
      {showText && (<p>Hello!</p>)}
    </div>
  );
};

export default ShowArray