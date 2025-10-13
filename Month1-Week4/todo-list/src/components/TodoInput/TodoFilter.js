import styled from "styled-components";

const StyledDiv = styled.div`
  select {
    padding: 7px  ;
  border: 1px solid #6c63ff;

    border-radius: 3px;
    background-color: #6c63ff;
    color: #f7f7f7;
    width: 100%;
  }
`;

const TodoFilter = () => {
  return (
    <StyledDiv>
      <select>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </select>
    </StyledDiv>
  );
};

export default TodoFilter;
