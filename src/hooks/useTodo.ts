import { useContext } from "react";
import { TodoContext } from "../context/todoContext";

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (context === undefined)
    throw new Error("Context was used outside of the Provider");
  return context;
};
