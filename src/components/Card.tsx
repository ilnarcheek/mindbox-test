import styled from "styled-components";
import CardBottom from "./CardBottom";
import CardTop from "./CardTop";
import TodoList from "./TodoList";

const StyledCars = styled.div`
  background-color: white;
  box-shadow: 0 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
  width: 60rem;
  position: relative;

  &&::after,
  &&::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background-color: white;
    box-shadow: 0 0.1rem 0.6rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    width: 59rem;
    transform: translate(0.5rem, 6px);
    z-index: -1;
  }

  &::before {
    width: 58rem;
    transform: translate(1rem, 12px);
    z-index: -1;
  }
`;

export default function Card() {
  return (
    <StyledCars>
      <CardTop />
      <TodoList />
      <CardBottom />
    </StyledCars>
  );
}
