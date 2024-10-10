import styled from "styled-components";
import ChevronDown from "./../assets/chevrondown.svg";
import { useTodo } from "./../hooks/useTodo";

const Container = styled.div`
  width: 5rem;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
`;

const Image = styled.img<{ $isExpand: boolean }>`
  width: 100%;
  height: 100%;
  transition: transform 0.3s ease;
  transform: ${({ $isExpand }) =>
    $isExpand ? "rotate(180deg)" : "rotate(0deg)"};
`;

export default function ExpandButton() {
  const { isExpand, expandList } = useTodo();

  return (
    <Container>
      <Button onClick={expandList}>
        <Image src={ChevronDown} alt="Раскрыть список" $isExpand={isExpand} />
      </Button>
    </Container>
  );
}
