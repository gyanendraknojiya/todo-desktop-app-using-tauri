import React, { useContext, useState } from "react";
import TodoContext from "./../ToDoContext";

const Add = () => {
  const [content, setContent] = useState("");
  const [list, setList] = useContext(TodoContext);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (content) {
      list.push(content);
      setList([...list]);
      setContent("");
    }
  };

  return (
    <div className="px-3 ">
      <form className="d-flex" onSubmit={handleAddTodo}>
        <input
          type="text"
          autoFocus
          placeholder="Write here..."
          className="form-control bg-dark text-light  border-sm  rounded-0"
          onChange={(e) => setContent(e.target.value)}
          value={content}
        />
        <button
          type="submit"
          className="btn btn-light ml-3"
          disabled={!content}
        >
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
