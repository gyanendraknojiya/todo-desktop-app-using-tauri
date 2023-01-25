import React, { useEffect, useState } from 'react';
import './App.css';
import Main from './components/Main';
import TodoContext from './ToDoContext';

function App() {
  const [list, setList] = useState(['Start adding your todo']);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedTodoList = localStorage.getItem('todo_list');
    if (storedTodoList) {
      setList(JSON.parse(storedTodoList));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('todo_list', JSON.stringify(list));
    }
  }, [list, isLoading]);

  return (
    <div>
      <TodoContext.Provider value={[list, setList]}>
        {isLoading ? <p>Loading...</p> : <Main />}
      </TodoContext.Provider>
    </div>
  );
}

export default App;
