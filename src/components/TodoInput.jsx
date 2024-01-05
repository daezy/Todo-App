import React, { useState, useContext } from "react";
import TodoContext from "../context/TodoContext";

const TodoInput = () => {
  const [todo, setTodo] = useState("");
  const ctx = useContext(TodoContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random() * 1000,
      name: todo,
      completed: false,
      date: new Date().getDate,
    };

    ctx.onAddTodo(newTodo);
    setTodo("");
  };

  return (
    <div className="p-3">
      <form action="" onSubmit={handleSubmit}>
        <div className="flex justify-between"></div>
        <input
          type="text"
          placeholder="Enter Todo..."
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-5/6 px-4 py-2 focus:outline-none"
        />
        <button
          className="bg-slate-900 px-4 py-2 w-1/6 text-white"
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
