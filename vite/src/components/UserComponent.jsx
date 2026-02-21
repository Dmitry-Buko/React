import React, { useState } from "react";

const ParentComponent = () => {
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  const changeName = () => {
    setUser((prev) => ({ ...prev, name: "Дима" }));
  };
  const changeAge = () => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  };
  const changeActive = () => {
    setUser((prev) => ({...prev, isActive: !prev.isActive}));
  };
  return (
    <div className="user">
      <h3>Профиль пользователя</h3>
      <p>Имя: {user.name}</p>
      <p>Возраст: {user.age}</p>
      <p>Активность: {user.isActive ? "да" : "нет"}</p>
      <div className="btn-flex">
        <button onClick={changeName}>Сменить имя</button>
        <button onClick={changeAge}>Увеличить возраст</button>
        <button onClick={changeActive}>Переключить активность</button>
      </div>
    </div>
  );
};

export default ParentComponent;
