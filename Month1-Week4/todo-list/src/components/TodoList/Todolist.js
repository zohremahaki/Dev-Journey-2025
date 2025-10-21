import { faSquare, faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, IconStyled, LiStyled, UlStyled } from "./TodoList.styled";

const Todolist = (props) => {
  return (
    <Container>
      <UlStyled>
        {props.todos.map((todo) => {     
          return (
            <LiStyled key={todo.id}>
              <IconStyled style={{ cursor: "pointer" }}>
                <FontAwesomeIcon
                  icon={todo.completed ? faSquareCheck : faSquare}
                  style={{
                    color: "#6c63ff",
                    width: "1.3rem",
                    height: "1.3rem",
                  }}
                  onClick={() => props.onToggle(todo.id)} //  کلیک روی آیکون
                />
                {/* تا فقط هنگام کلیک اجرا شود، نه هنگام رندربرای  جلوگیری از ریرندر بینهایت arrow functionهندلر با   */}
              </IconStyled>
              <h3
                style={{
                  textDecorationLine: todo.completed ? "line-through" : "none",
                }}
                onClick={() => props.onToggle(todo.id)}
              >
                {todo.text}
              </h3>

              <IconStyled>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ color: "#CDCDCD", cursor: "pointer" }}
                  onClick={
                    () => props.onEdit(todo.id, prompt("Edit task:", todo.text))
                    //ممکن است کلیک روی آیکون ها باعث شود هندلر کلی‌تری که روی والد تعریف شده فعال شوداگر این مشکل بود باید کدزیر درهندلر اضافه شود
                    // e.stopPropagation()
                  }
                />

                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ color: "#CDCDCD", cursor: "pointer" }}
                  onClick={() => props.onRemove(todo.id)}
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
