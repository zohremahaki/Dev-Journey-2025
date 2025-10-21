import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import TodoFilter from "./TodoFilter";
import TodoMode from "./TodoMode";
import { StyledDiv, SearchWrapper, StyledInput, SearchIcon } from "./TodoInput.styled";

const TodoInput = (props) => {
  return (
    <StyledDiv>
      <SearchWrapper>
        <StyledInput placeholder="Search note..." onChange={props.onChange}/>
        <SearchIcon icon={faMagnifyingGlass} />
      </SearchWrapper>
      <TodoFilter onChange={props.filterChange} selectedOption={props.selectedOption}/>
      <TodoMode mode={props.mode} toggleMode={props.toggleMode}/>
    </StyledDiv>
  );
};

export default TodoInput;



