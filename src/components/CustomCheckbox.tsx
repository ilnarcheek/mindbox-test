import styled from "styled-components";
import { useTodo } from "./../hooks/useTodo";

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 5rem;
`;

const OriginalCheckbox = styled.input`
  display: none;
`;

const Checkbox = styled.label`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border: 1px solid var(--cb-uncheked-color);
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    transition: background-color 0.3s;
  }

  ${OriginalCheckbox}:checked + &::before {
    content: "✔";
    color: #78c0b0;
    font-size: 2rem;
    position: absolute;
  }
`;

interface CustomCheckboxProps {
  number: number;
  isDone: boolean;
}

export default function CustomCheckbox({
  number,
  isDone,
}: CustomCheckboxProps) {
  const { toggleTodo } = useTodo();

  return (
    <CheckboxContainer>
      <OriginalCheckbox
        type="checkbox"
        id={`todo-${number}`}
        defaultChecked={isDone}
        onChange={() => toggleTodo(number)}
      />
      <Checkbox htmlFor={`todo-${number}`} />
    </CheckboxContainer>
  );
}
