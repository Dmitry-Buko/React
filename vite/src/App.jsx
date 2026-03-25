import { useRef, useState } from "react";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Элемент 1" },
    { id: 2, text: "Элемент 2" },
    { id: 3, text: "Элемент 3" },
    { id: 4, text: "Элемент 4" },
    { id: 5, text: "Элемент 5" },
  ]);
  const handleItemChange = (id) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return { ...item, text: "!!!" + item.text };
        }
        return item;
      }),
    );
  };
  const inputRef = useRef(null);
  const handleKeyDown = (e) => {
    if(e.key === 'Enter'){
      const lastId = items.length
      const newItems = [...items]
      newItems.push({id: lastId + 1, text: inputRef.current.value})
      inputRef.current.value = null
      setItems(newItems)
    }
  }
  return (
    <>
      <input type="text" ref={inputRef} onKeyDown={handleKeyDown}/>
      <button onClick={() => inputRef.current.focus()}>
        Focus on the input
      </button>
      <List items={items} onItemChange={handleItemChange} />
    </>
  );
}

export default App;
