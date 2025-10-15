import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
// import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, IconStyled, LiStyled, UlStyled } from "./TodoList.styled";
const Todolist = (props) => {
  const [toggledItems, setToggledItems] = useState(() =>
    props.todos.map(() => false)
  );
  const handleToggle = (index) => {
    setToggledItems((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <Container>
      <UlStyled>
        {props.todos.map((todo, index) => {
          const isToggled = toggledItems[index];
          return (
            <LiStyled key={index} onClick={handleToggle[index]}>
              <IconStyled style={{ cursor: "pointer" }}>
                {!isToggled ? (
                  <FontAwesomeIcon
                    icon={faSquare}
                    style={{
                      color: "#6c63ff",
                      width: "1.3rem",
                      height: "1.3rem",
                    }}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faSquareCheck}
                    style={{
                      color: "#6c63ff",
                      width: "1.3rem",
                      height: "1.3rem",
                    }}
                  />
                )}
              </IconStyled>

              <h3
                style={{
                  color: isToggled ? "gray" : "black",
                  textDecorationLine: isToggled ? "line-through" : "none",
                }}
              >
                {todo}
              </h3>
              <IconStyled>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ color: "#CDCDCD" }}
                  onClick={props.onEdit}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "#CDCDCD" }}
                  onClick={props.onRemove}
                />
              </IconStyled>
            </LiStyled>
          );
        })}
      </UlStyled>
    </Container>
  );
};

export default Todolist;
