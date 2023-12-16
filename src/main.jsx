import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const info = {
  name: "kikai",
  age: 21,
};

const InfoContext = createContext(info);

ReactDOM.createRoot(document.getElementById("root")).render(
  <InfoContext.Provider value={info}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </InfoContext.Provider>
);

export default InfoContext;
