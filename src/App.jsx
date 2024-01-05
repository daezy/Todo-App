import { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import { todos_list } from "./todos";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(todos_list);
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-slate-900">
        <div className="todo-container w-6/12 bg-slate-100 p-5 rounded-lg shadow">
          <h2 className="my-3 text-center text-3xl">Todo App</h2>
          <TodoInput />
          <TodoList todos={todos} />
        </div>
      </div>
    </>
  );
}

export default App;
