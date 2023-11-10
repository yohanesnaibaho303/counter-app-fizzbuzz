import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import PenambahanApp from "./PenambahanApp.jsx";
import PenguranganApp from "./PenguranganApp.jsx";
import CounterApp from "./CounterApp.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PenguranganApp />
    <br />
    <br />
    <br />
    <PenambahanApp />
    <br />
    <br />
    <br />
    <CounterApp />
  </React.StrictMode>
);
