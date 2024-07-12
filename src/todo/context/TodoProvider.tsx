import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { TodoReducer } from "./TodoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    {
      id: "1",
      desc: "recolectar las piedras del infinito",
      completed: false,
    },
    {
      id: "2",
      desc: "piedra del alma",
      completed: false,
    },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [TodoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  return (
    <TodoContext.Provider
      value={{
        TodoState,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
