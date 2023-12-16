import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import "./App.css";
import InfoContext from "./main";

function App() {
  const [count, setCount] = useState(0);
  const info = useContext(InfoContext);

  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>追加</button>
      <p>{count}</p>
      <hr />
      <h1>useContext</h1>
      <p>{info.name}</p>
      <p>{info.age}</p>
    </div>
  );
}

export default App;
