import styled from "styled-components";

export default function TodoList({ todos }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <StyledLi key={todo.id}>
            <StyledSpan>{todo.title}</StyledSpan>
          </StyledLi>
        ))}
      </ul>
    </>
  );
}

const StyledLi = styled.li`
  list-style-type: none;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  margin-right: 8px;
`;
