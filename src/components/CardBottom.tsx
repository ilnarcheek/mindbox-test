import styled from "styled-components";
import Filter from "./Filter";
import { useTodo } from "./../hooks/useTodo";

const StyledCardBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: var(--fs-s);
  color: var(--grey-color);
  padding: 1rem 1.5rem;
  border-top: var(--border);
`;

const Text = styled.p`
  width: 12rem;
  padding: 0.5rem 0.8rem;
`;

const Button = styled.button`
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  transition: all 0.3s ease;

  &:hover {
    background-color: var(--cb-uncheked-color);
    color: var(--primary-color);
  }
`;

export default function CardBottom() {
  const { filteredTodos, todos, clearDoneTodos } = useTodo();
  const todosLeft = filteredTodos.filter((todo) => !todo.isDone).length;

  return (
    <StyledCardBottom>
      <Text>
        {todosLeft
          ? todosLeft === 1
            ? "Осталось: 1"
            : `Осталось: ${todosLeft}`
          : "Все сделано"}
      </Text>
      {todos.length ? (
        <>
          <Filter />
          <Button onClick={clearDoneTodos}>Убрать готовые</Button>
        </>
      ) : null}
    </StyledCardBottom>
  );
}
