import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";
const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 31px;
  height: 31px;
  border-radius: 3px;
  border: 1px solid #6c63ff;
  background-color: #6c63ff;
  border: 1px solid #6c63ff;
  color: ${({theme})=>theme.iconColor}
`;
const TodoMode = (props) => {
  return (
    <StyledDiv>
      {props.mode === "light" ? (
        <FontAwesomeIcon icon={faMoon} onClick={props.toggleMode}/>
      ) : (
        <FontAwesomeIcon icon={faSun} onClick={props.toggleMode}/>
      )}
    </StyledDiv>
  );
};
export default TodoMode;
