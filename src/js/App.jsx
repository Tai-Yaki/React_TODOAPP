import React from "react";
import ReactDOM from "react-dom";
import ToDoList from "./pages/ToDoList";

const App = () => (
  <div>
    <ToDoList />
  </div>
);

const app = document.getElementById("app");
ReactDOM.render(<App />, app);
