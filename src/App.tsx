import styled from "styled-components";
import Header from "./components/Header";
import Card from "./components/Card";

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 20rem;
  margin-bottom: 5rem;
`;

export default function App() {
  return (
    <StyledApp>
      <Header />
      <Card />
    </StyledApp>
  );
}
