import { useTodos } from "../hooks/UseTodo";

export const Title = () => {
  const { pendingTodos } = useTodos();

  return <h1>Todos:{pendingTodos}</h1>;
};
