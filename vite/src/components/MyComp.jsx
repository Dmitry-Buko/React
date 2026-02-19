import React, { useState } from "react";

const CompNumber = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };
  const decrement = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <CildComp count={count} />
      <div className="btn">
        <button onClick={increment}>Plus</button>
        <button onClick={decrement}>Minus</button>
      </div>
    </div>
  );
};

const CildComp = ({ count }) => {
  return <p>Счетчик: {count}</p>;
};

export default CompNumber;
