import React, { useContext, useState } from "react";
import { BiTrash, BiEdit } from "react-icons/bi";
import TodoContext from "../context/TodoContext";

const Todo = ({ todo }) => {
  const [completed, setCompleted] = useState(todo.completed);
  const ctx = useContext(TodoContext);

  const checkedStyles = "line-through text-slate-400";

  const handleDelete = () => {
    ctx.onDeleteTodo(todo.id);
  };
  return (
    <li className="p-2 py-3 flex justify-between items-center">
      <div className="description">
        <input
          type="checkbox"
          name="check"
          id="check"
          checked={completed}
          onChange={() => setCompleted((prevChecked) => !prevChecked)}
        />
        <span className={`ml-2 ${completed && checkedStyles}`}>
          {todo.name}
        </span>
      </div>
      <div className="flex items-center">
        <i className="cursor-pointer">
          <BiEdit className="w-12 h-5 text-green-600" />
        </i>
        <i className="cursor-pointer" onClick={handleDelete}>
          <BiTrash className="w-12 h-5 text-red-600" />
        </i>
      </div>
    </li>
  );
};

export default Todo;
