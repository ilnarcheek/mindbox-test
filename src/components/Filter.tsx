import styled from "styled-components";
import { useTodo } from "./../hooks/useTodo";

const List = styled.ul`
  display: flex;
  gap: 1rem;
`;

const FilterButton = styled.button<{ $isActive: boolean }>`
  padding: 0.5rem 0.8rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  border: ${({ $isActive }) =>
    $isActive ? "1px solid var(--accent-color)" : "none"};

  &:hover {
    background-color: var(--cb-uncheked-color);
    color: var(--primary-color);
  }
`;

export default function Filter() {
  const { filterTodos, filter } = useTodo();
  return (
    <List>
      <li onClick={() => filterTodos("all")}>
        <FilterButton $isActive={filter === "all"}>Все</FilterButton>
      </li>
      <li onClick={() => filterTodos("active")}>
        <FilterButton $isActive={filter === "active"}>Активные</FilterButton>
      </li>
      <li onClick={() => filterTodos("completed")}>
        <FilterButton $isActive={filter === "completed"}>Готовые</FilterButton>
      </li>
    </List>
  );
}
