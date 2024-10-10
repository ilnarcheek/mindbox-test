import styled from "styled-components";
import TodoItem from "./TodoItem";
import { useTodo } from "./../hooks/useTodo";

const List = styled.ul<{ $isExpand: boolean }>`
  display: flex;
  display: ${({ $isExpand }) => ($isExpand ? "flex" : "none")};
  flex-direction: column;
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
