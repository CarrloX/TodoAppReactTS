import { TodoProvider } from "./context/TodoProvider";

export const Todo = () => {
  return (
    <TodoProvider>
      <h1>ToDo:</h1>
      <ul>
        <li>todo1</li>
        <li>todo2</li>
        <li>todo3</li>
      </ul>
    </TodoProvider>
  );
};
