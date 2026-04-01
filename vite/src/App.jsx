import { useCallback, useState } from "react";
import UserInfo from "./components/UserInfo";
import CartItem from "./components/CartItem";
import TaskItem from "./components/TaskItem";

function App() {
  //UserInfo:
  const [user, setUser] = useState({
    name: "Иван",
    age: 25,
    isActive: true,
  });
  //CartItem:
  const [cart, setCart] = useState([
    { id: 1, title: "Футболка", count: 1 },
    { id: 2, title: "Кепка", count: 2 },
  ]);
  //TaskItem:
  const [tasks, setTasks] = useState(["Купить хлеб", "Погулять с собакой"]);
  const [index, setIndex] = useState(0);
  const futureTasks = ["Повторить JS", "Убраться в квартире", "Поспать"];

  //UserInfo:
  const changeName = useCallback(() => {
    setUser((prev) => ({
      ...prev,
      name: prev.name === "Иван" ? "Дима" : "Иван",
    }));
  }, []);
  const changeAge = useCallback(() => {
    setUser((prev) => ({ ...prev, age: prev.age + 1 }));
  }, []);
  const changeActive = useCallback(() => {
    setUser((prev) => ({ ...prev, isActive: !prev.isActive }));
  }, []);
  //CartItem:
  const clearCart = useCallback(() => {
    setCart([]);
  }, []);
  const addItem = useCallback((id) => {
    setCart((arr) =>
      arr.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item,
      ),
    );
  }, []);
  const deleteItem = useCallback((id) => {
    setCart((arr) => arr.filter((item) => item.id !== id));
  }, []);
  //TaskItem:
  const addTask = useCallback(() => {
    const taskToAdd = futureTasks[index];
    setTasks((prev) => [...prev, taskToAdd]);
    setIndex((index) => index + 1);
  },[index]);
  const deleteTask = useCallback(() => {
    setTasks(() => tasks.slice(0, -1));
  },[tasks]);//не уверен что это правильно, но без этой зависимости возникает ошибка

  return (
    <>
      <UserInfo
        user={user}
        setChangeName={changeName}
        setChangeAge={changeAge}
        setChangeActive={changeActive}
      />
      <CartItem
        cart={cart}
        setClearCart={clearCart}
        setAddItem={addItem}
        setDeleteItem={deleteItem}
      />
      <TaskItem tasks={tasks} setAddTask={addTask} setDeleteTask={deleteTask} />
    </>
  );
}

export default App;
