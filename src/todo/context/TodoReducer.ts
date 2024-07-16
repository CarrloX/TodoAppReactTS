import { Todo, TodoState } from "../interfaces/interfaces";

type TodoAction =
  | {
      type: "addToDo";
      payload: Todo;
    }
  | {
      type: "toggleTodo";
      payload: { id: string };
    };

export const TodoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "addToDo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "toggleTodo":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) => {
          if (todo.id === action.payload.id) {
            todo.completed = !todo.completed;
          }
          return todo;
        }),
      };

    default:
      return state;
  }
};
