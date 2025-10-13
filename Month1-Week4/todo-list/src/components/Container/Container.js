import styled from "styled-components";
import TodoInput from "../TodoInput/TodoInput";

const StyledDiv = styled.div``;

const Container = () => {
  return (
    <StyledDiv>
      <h1>TODO LIST</h1>
      <TodoInput />
    </StyledDiv>
  );
};

export default Container;
