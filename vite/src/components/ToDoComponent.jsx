import React, { useState } from "react";

const ToDoComponent = () => {
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  const [index, setIndex] = useState(0);
  const futureTasks = ["Повторить JS", "Убраться в квартире", "Поспать"];
  const addTask = () => {
    const taskToAdd = futureTasks[index];
    setTasks((prev) => [...prev, taskToAdd]);
    setIndex(() => index + 1)
  };
  const deleteTask =() => {
    setTasks(() => tasks.slice(0, -1))
  }
  return (
    <div className="to-do">
      <h3>Список задач:</h3>
      <ul>
        {tasks.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
      <div className="btn-flex">
        <button onClick={addTask}>Добавить задачу</button>
        <button onClick={deleteTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
};

export default ToDoComponent;