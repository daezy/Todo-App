import { createContext, useState } from "react";
import { todos_list } from "../todos";

const TodoContext = createContext({
  todos: [],
  onAddTodo: (todo) => {},
  onDeleteTodo: (todoId) => {},
  onEditTodo: (todoId) => {},
});

export const TodoContextProvider = (props) => {
  const [todos, setTodos] = useState(todos_list);

  const addTodoHandler = (todo) => {
    setTodos((prevTodo) => [...prevTodo, todo]);
  };
  const deleteTodoHandler = (todoId) => {
    const newTodos = todos.filter((todo) => todo.id != todoId);
    setTodos(newTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        onAddTodo: addTodoHandler,
        onDeleteTodo: deleteTodoHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
