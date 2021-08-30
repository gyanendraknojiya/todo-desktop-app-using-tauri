import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import TodoContext from "./ToDoContext";

function App() {
  const [list, setList] = useState(["Start adding your todo"]);
  return (
    <div>
      <TodoContext.Provider value={[list, setList]}>
        <Main />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
