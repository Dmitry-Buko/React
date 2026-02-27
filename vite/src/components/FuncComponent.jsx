import React, { useState } from "react";
import { useEffect } from "react";

const FuncComponent = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((data) => console.log("Компонент смонтирован. data:", data))
  }, []);//монтирование

  useEffect(() => {
    setPrevCount(count)
  }, [count]) //поиграться и посмотреть как работает

  useEffect(() => {
    console.log("Компонент обновлен. Новое значение count:", count);
    if (prevCount !== count) console.log(`Зачение обновлено с ${prevCount} до ${count}`)
  }, [count, prevCount]);//обновление

  useEffect(()=>{
    return ()=> console.log('Компонент был удален')
  })//удаление

  const toggleVisibility = () => {
    setCount(() => count + 1);
  };
  return (
    <div>
      <h3>Жизненный цикл</h3>
      <p>Значение: {count}</p>
      <button onClick={toggleVisibility}>Увеличить +1</button>
    </div>
  );
};

export default FuncComponent;
