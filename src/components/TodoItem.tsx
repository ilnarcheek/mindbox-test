import styled from "styled-components";
import CustomCheckbox from "./CustomCheckbox";
import ITodo from "../types/ITodo";

const StyledTodoItem = styled.li`
  display: flex;
  padding: 1rem;
  border-bottom: var(--border);

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.label<{ $isDone: boolean }>`
  text-decoration: ${({ $isDone }) => ($isDone ? "line-through" : "none")};
  color: ${({ $isDone }) =>
    $isDone ? "var(--secondary-color)" : "var(--primary-color)"};
`;

interface TodoItemProps {
  todo: ITodo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const { id, description, isDone } = todo;

  return (
    <StyledTodoItem>
      <CustomCheckbox number={id} isDone={isDone} />
      <Label htmlFor={`todo-${id}`} $isDone={isDone}>
        {description}
      </Label>
    </StyledTodoItem>
  );
}
