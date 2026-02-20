import React, { useState } from "react";

const SiblingComponent = ({ text }) => {
  const [prev, setPrev] = useState(false);
  const handleClick = () => {
    setPrev((prev) => !prev);
  };
  return (
    <div>
      <p>Текущий текст: {prev ? <span>REDEV</span> : <span>{text}</span>}</p>
      <button onClick={handleClick}>Изменить текст</button>
    </div>
  );
};

export default SiblingComponent;
