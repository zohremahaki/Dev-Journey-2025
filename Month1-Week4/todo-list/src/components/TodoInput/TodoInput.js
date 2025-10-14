import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import TodoFilter from "./TodoFilter";
import TodoMode from "./TodoMode";

const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 70px 120px;
  margin: 20px auto;
  gap: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr; /* موبایل: دو ستون */
    gap: 0.5rem;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  width: 85%;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 8px 35px 8px 12px; /* padding راست برای آیکون */

  border-radius: 3px;
  border: 1px solid #6c63ff;

  &::placeholder {
    color: #c3c1e5;
  }
`;

const SearchIcon = styled(FontAwesomeIcon)`
  position: absolute;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
  color: #888;
  pointer-events: none; /* کلیک روی آیکون رو ازاد می‌کنه */
`;
const TodoInput = () => {
  return (
    <StyledDiv>
      <SearchWrapper>
        <StyledInput placeholder="Search note..." />
        <SearchIcon icon={faMagnifyingGlass} />
      </SearchWrapper>
      <TodoFilter />
      <TodoMode />
    </StyledDiv>
  );
};

export default TodoInput;



{
  /* <FontAwesomeIcon icon={faCirclePlus} />
 */
}
