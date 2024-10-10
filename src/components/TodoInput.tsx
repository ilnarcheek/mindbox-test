import { useState } from "react";
import styled from "styled-components";
import { useTodo } from "./../hooks/useTodo";

const Input = styled.input`
  width: 100%;
  &::placeholder {
    font-weight: 100;
    font-style: italic;
    color: var(--secondary-color);
  }
`;
export default function TodoInput() {
  const [description, setDescription] = useState("");
  const { addTodo } = useTodo();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && description.trim()) {
      addTodo(description.trim());
      setDescription("");
    }
  };

  return (
    <Input
      placeholder="Что нужно сделать?"
      value={description}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
}
