import styled from "styled-components";
import ExpandButton from "./ExpandButton";
import TodoInput from "./TodoInput";

const StyledCardTop = styled.div`
  display: flex;
  padding: 1.5rem 1rem;
  border-bottom: 2px solid var(--secondary-color);
`;
export default function CardTop() {
  return (
    <StyledCardTop>
      <ExpandButton />
      <TodoInput />
    </StyledCardTop>
  );
}
