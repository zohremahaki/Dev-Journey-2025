import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSun } from "@fortawesome/free-solid-svg-icons";

import styled from "styled-components";
const StyledDiv = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  border-radius: 3px;
  background-color: #6c63ff;
    border: 1px solid #6c63ff;

  color: #000;
`;
const TodoMode = () => {
  return (
    <StyledDiv>
      <FontAwesomeIcon icon={faMoon} />
      {/* <FontAwesomeIcon icon={faSun} /> */}
    </StyledDiv>
  );
};
export default TodoMode;
