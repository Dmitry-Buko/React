import { memo } from "react";

const TaskItem = ({ tasks, setAddTask, setDeleteTask }) => {
  console.log('TaskItem render');
  
  return (
    <div className="to-do">
      <h3>Список задач:</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li> //я знаю что ключ некоректно добавлен...
        ))}
      </ul>
      <div className="btn-flex">
        <button onClick={setAddTask}>Добавить задачу</button>
        <button onClick={setDeleteTask}>Удалить последнюю задачу</button>
      </div>
    </div>
  );
};

export default memo(TaskItem);
