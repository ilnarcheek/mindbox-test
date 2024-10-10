import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodo } from "./../hooks/useTodo";

const List = styled.ul<{ $isExpand: boolean }>`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
  max-height: ${({ $isExpand }) => ($isExpand ? "40rem" : "0")};
  opacity: ${({ $isExpand }) => ($isExpand ? "1" : "0")};
  transition: all 0.3s ease;
`;

export default function TodoList() {
  const { filteredTodos, isExpand } = useTodo();

  return (
    <List $isExpand={isExpand}>
      {filteredTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </List>
  );
}
