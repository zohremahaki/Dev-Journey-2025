import styled from "styled-components";
// import TodoForm from "../TodoForm/TodoForm";
import TodoInput from "../TodoInput/TodoInput";
import Todolist from "../TodoList/Todolist";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledDiv = styled.div`
  height: 70vh;
`;

const PlusStyle = styled.div`
  margin-top: 24rem;
  margin-right: 3rem;
  display: flex;
  justify-content: right;
`;

const Container = () => {
  return (
    <StyledDiv>
      <h1>TODO LIST</h1>
      <TodoInput />
      <Todolist />
      {/* <TodoForm /> */}
      <PlusStyle>
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ height: "3rem", width: "3rem",color:'#6c63ff' }}
        />
      </PlusStyle>
    </StyledDiv>
  );
};

export default Container;
