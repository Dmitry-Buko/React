import { ShowNumber } from "./components/ShowNumber";
import { ShowString } from "./components/ShowString";
import { ShowBoolean } from "./components/ShowBoolean";
import { ShowObject } from "./components/ShowObject";
import { ShowFunction } from "./components/ShowFunction";
import { ShowArray } from "./components/ShowArray";

function App() {
  const sayHello = () => {
    alert("hello!");
  };
  return (
    <>
      <div className="container">
        <ShowNumber value={66} />
        <ShowString str={"React"} />
        <ShowBoolean isOnline={true} />
        <ShowObject
          user={{
            name: "Dima",
            age: 29,
            city: "Minsk",
          }}
        />
        <ShowFunction greet={sayHello} />
        <ShowArray arr={['JS', 'HTML', 'CSS']}/>
      </div>
    </>
  );
}

export default App;
