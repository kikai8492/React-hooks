import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("useEffect");
  }, []);

  return (
    <div className="App">
      <h1>UseState, UseEffect</h1>
      <button onClick={handleClick}>追加</button>
      <p>{count}</p>
    </div>
  );
}

export default App;
