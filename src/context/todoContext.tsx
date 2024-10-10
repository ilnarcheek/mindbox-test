import { createContext, useReducer, useState } from "react";
import ITodo from "../types/ITodo";
import { todoReducer } from "./todoReducer";

interface ITodoContext {
  todos: ITodo[];
  filteredTodos: ITodo[];
  addTodo: (description: string) => void;
  toggleTodo: (id: number) => void;
  clearDoneTodos: () => void;
  filterTodos: (filter: string) => void;
  filter: string;
  isExpand: boolean;
  expandList: () => void;
}

const initialState: ITodo[] = [
  { id: 1, description: "Тестовое задание", isDone: false },
  { id: 2, description: "Прекрасный код", isDone: false },
  { id: 3, description: "Покрытие тестами", isDone: true },
];

export const TodoContext = createContext<ITodoContext | undefined>(undefined);

interface TodoProviderProps {
  children: React.ReactNode;
}

export const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);
  const [filter, setFilter] = useState("all");
  const [isExpand, setIsExpand] = useState(true);

  const filteredTodos = todos.filter((todo: ITodo) => {
    if (filter === "active") return !todo.isDone;
    if (filter === "completed") return todo.isDone;
    return true;
  });

  const addTodo = (description: string) => {
    dispatch({ type: "ADD_TODO", payload: description });
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: "TOGGLE_TODO", payload: id });
  };

  const clearDoneTodos = () => {
    dispatch({ type: "CLEAR_DONE_TODOS" });
  };

  const filterTodos = (type: string) => {
    setFilter(type);
  };

  const expandList = () => {
    setIsExpand((state) => (state = !state));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        addTodo,
        toggleTodo,
        clearDoneTodos,
        filterTodos,
        filter,
        isExpand,
        expandList,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
