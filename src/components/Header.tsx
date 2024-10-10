import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: var(--fs-l);
  color: var(--accent-color);
  font-weight: 100;
  line-height: 1.2;
`;

export default function Header() {
  return <StyledHeader>todos</StyledHeader>;
}
