import { useCallback, useState } from "react";
import SearchInput from "./components/SearchInput";
import ItemList from "./components/ItemList";
import CounterButton from "./components/CounterButton";
import {initialItems} from "./data/items";
// import {withRenderTracker} from './withRenderTracker'

const App = () => {
  console.log('APP render');
  
  const [searchTerm, setSearchTerm] = useState("");
  const [count, setCount] = useState(0)

  const handleChange = useCallback((e) => {
    setSearchTerm(e);
  }, []);

  const handleCount = useCallback(()=>{
    setCount(count => count + 1)
  },[])
  return (
    <>
      <p>{count}</p>
      <CounterButton handleChangeCount={handleCount}/>
      <SearchInput onItemChange={handleChange} />
      <ItemList initialItems={initialItems} searchTerm={searchTerm} />
    </>
  );
};

export default App;
