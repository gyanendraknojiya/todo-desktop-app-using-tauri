import React, { useState } from "react";

const Items = ({ todo, id, deleteToDoItem }) => {
  const [isDone, setIsDone] = useState(false);
  const handleCheck = (e) => {
    if (!isDone) {
      setIsDone(true);
    }
    setTimeout(() => {
      deleteToDoItem(id);
      setIsDone(false);
    }, [300]);
  };
  return (
    <div className="todoItem">
      <label className={isDone ? "line-through" : ""}>
        <input
          type="checkbox"
          onChange={handleCheck}
          checked={isDone}
          className="mr-2"
        />
        {todo}
      </label>
    </div>
  );
};

export default Items;
