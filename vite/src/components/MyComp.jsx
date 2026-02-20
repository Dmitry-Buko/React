import React, { useState } from "react";
import { ChildComponent } from "./ChildComponent";
import SiblingComponent from './SiblingComponent'

const ParentComponent = () => {
  const [counter, setCount] = useState(0);
  const increment = () => {
    setCount(() => counter + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const random = () => {
    setCount(() => {
      return Math.floor(Math.random() * 10) + 1;
    });
  };
  const decrement = () => {
    setCount(() => {
      return counter > 0 ? counter - 1 : counter
    });
  };
  return (
    <div>
      <p>Значение счетчика: {counter}</p>
      <div className="btn-flex">
        <button onClick={increment}>Увеличить</button>
        <button onClick={reset}>Сбросить</button>
        <button onClick={random}>Случайное значение</button>
        <button onClick={decrement}>Уменьшить</button>
      </div>
      <div>
        <ChildComponent name={'Паша'} count={counter}/>
        <SiblingComponent text={'Я учусь в...'}/>
      </div>
    </div>
  );
};

export default ParentComponent;
