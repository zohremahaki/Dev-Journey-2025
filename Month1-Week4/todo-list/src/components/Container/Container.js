import { useRef, useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoInput from "../TodoInput/TodoInput";
import Todolist from "../TodoList/Todolist";
import { PlusStyle, StyledDiv } from "./Container.styled";

import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Container = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const [selectedOption, setSelectedOption] = useState("all");

  // JSON.parse
  // اگر کاربر قبلاً تسک‌هایی ذخیره کرده باشه، از استرینگ به آرایه تبدیل میشن

  const inputRef = useRef();
  // useRef
  // هدف استفاده: دسترسی مستقیم به مقدار اینپوت بدون نیاز به استیت اضافه (یه روش سریع و بهینه‌تر برای گرفتن مقدار ورودی)

  const submitFormHandler = (e) => {
    e.preventDefault();
  };

  const applyHandler = () => {
    const text = inputRef.current.value.trim();
    if (!text) return;

    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };

    const updated = [...todos, newTodo];
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));

    // در ریکت نباید استیت رو مستقیم تغییر داد،برای همین از اسپرد اپریتور استفاده می‌کنیم  تا یه آرایه‌ی جدید ساخته بشه (تغییر مرجع یا رفرنس جدید → باعث ریرندر میشه)

    inputRef.current.value = "";
    setShowForm(false);
  };

  const addTodos = () => {
    setShowForm(!showForm);
  };

  const editTaskHandler = (id, newText) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    if (!newText) return;
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const removeTaskHandler = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };

  const toggleCompleted = (id) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    setTodos(updated);
    localStorage.setItem("todos", JSON.stringify(updated));
  };
  const changeSearchInputHandler = (e) => {
    // Logic for handling search input changes can be implemented here
    const searchTerm = e.target.value.toLowerCase();
    // You can filter the todos based on the SearchTerm if needed
    setTodos(
      todos.filter((todo) => todo.text.toLowerCase().includes(searchTerm))
    );
  };

  const filterChangeHandler = (event) => {
    // Logic for handling filter changes can be implemented here
    setSelectedOption(event.target.value);
  };

  const filteredTodos = todos.filter((todo) => {
    if (selectedOption === "all") return todo;
    if (selectedOption === "completed") return todo.completed;
    if (selectedOption === "incompleted") return !todo.completed;
  });

  return (
    <StyledDiv>
      <h1>TODO LIST</h1>
      <TodoInput
        onChange={changeSearchInputHandler}
        filterChange={filterChangeHandler}
        selectedOption={selectedOption}
        toggleMode={props.toggleMode}
        mode={props.mode}
      />
      <Todolist
        todos={filteredTodos}
        onEdit={editTaskHandler}
        onRemove={removeTaskHandler}
        onToggle={toggleCompleted}
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
