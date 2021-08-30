import React, { useContext } from "react";
import Add from "./Add";
import Items from "./Items";
import TodoContext from "../ToDoContext";

const Main = () => {
  const [list, setList] = useContext(TodoContext);
  const today = new Date();
  const weekDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const handleDeleteToDoItem = (id) => {
    let newList = list.filter((item, idx) => idx !== id);
    setList(newList);
  };

  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <div className="main-card" style={{ width: "450px" }}>
        <div className="text-center mt-3">
          <h3>{weekDay[today.getDay()]}</h3>
          <p>{today.toLocaleDateString()}</p>
          <Add />
        </div>
        <div className="p-3">
          {list.length ? (
            list.map((item, idx) => (
              <Items
                todo={item}
                deleteToDoItem={handleDeleteToDoItem}
                key={idx}
                id={idx}
              />
            ))
          ) : (
            <div className="py-5 text-center text-danger">No data found!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
