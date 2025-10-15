import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoInput from "../TodoInput/TodoInput";
import Todolist from "../TodoList/Todolist";
import { PlusStyle, StyledDiv } from "./Container.styled";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = () => {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );
  const inputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const applyHandler = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newTodo = {
      id: Date.now(),
      completed: false,
    };

    const updated = [...todos, newTodo];
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));

    inputRef.current.value = "";
  };
  const addTodos = () => {
    setShowForm(!showForm);
  };
 const editTaskHandler = (id, newText) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const removeTaskHandler = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };
  return (
    <StyledDiv>
      <h1>TODO LIST</h1>
      <TodoInput />
      <Todolist
        todos={todos}
        onEdit={editTaskHandler}
        onRemove={removeTaskHandler}
      />
      {showForm && (
        <TodoForm
          applyHandler={applyHandler}
          inputRef={inputRef}
          submitFormHandler={submitFormHandler}
          cancel={() => setShowForm(false)}
        />
      )}
      <PlusStyle>
        <FontAwesomeIcon
          icon={faCirclePlus}
          style={{ height: "3rem", width: "3rem", color: "#6c63ff" }}
          onClick={addTodos}
        />
      </PlusStyle>
    </StyledDiv>
  );
};

export default Container;
