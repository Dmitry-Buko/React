import { useState } from "react";
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";

const App = () => {
  const [email, setEmail] = useState("HOC");
  const WrappComp = MyComponent(MyComponent2);
  return (
    <>
      <p>{email}</p>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <WrappComp name={'Dima'}/>
    </>
  );
};

export default App;
