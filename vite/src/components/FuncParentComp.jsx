import React, { useState } from "react";
import FuncComponent from "./FuncComponent";

const FuncParentComp = () => {

  const [isVisible, setIsVisible] = useState(true)

  const toggle = () => {
    setIsVisible(() => !isVisible)
  }

  return (
      <div>
        <h3>Компонент-родитель</h3>
        <button onClick={toggle}>
          {isVisible ? "Удалить компонент" : "Добавить компонент"}
        </button>
        {isVisible ? (
          <FuncComponent />
        ) : (
          <p>Компонент удален, проверь консоль</p>
        )}
      </div>
    );
}

export default FuncParentComp