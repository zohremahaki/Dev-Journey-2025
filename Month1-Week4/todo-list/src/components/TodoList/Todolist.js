import {
  faPen,
  faSquareCheck,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
const UlStyled = styled.ul`
  list-style: none;
  text-align: left;
  padding-left: 15rem;
`;
const LiStyled = styled.li`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  width: 50%;
  border-bottom: 1px solid #6c63ff;
`;

const IconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Todolist = () => {
  return (
    <div>
      <UlStyled>
        {/* <FontAwesomeIcon icon={faSquare} /> */}
        <LiStyled>
          <IconStyled>
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#6c63ff", width: "1.3rem", height: "1.3rem" }}
            />
          </IconStyled>

          <h3>NOTE #1</h3>
          <IconStyled>
            <FontAwesomeIcon icon={faPen} style={{ color: "#CDCDCD" }} />
            <FontAwesomeIcon icon={faTrash} style={{ color: "#CDCDCD" }} />
          </IconStyled>
        </LiStyled>
      </UlStyled>
    </div>
  );
};

export default Todolist;
