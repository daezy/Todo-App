import React, { useContext } from "react";
import Todo from "./Todo";
import TodoContext from "../context/TodoContext";

const TodoList = () => {
  const ctx = useContext(TodoContext);
  return (
    <div className="p-3">
      {ctx.todos.length > 0 ? (
        <ul className="bg-slate-200 rounded-lg p-2">
          {ctx.todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </ul>
      ) : (
        <p className="p-3 text-center text-lg">No todos available</p>
      )}
    </div>
  );
};

export default TodoList;
