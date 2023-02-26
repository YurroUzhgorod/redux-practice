import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../store/action";
import styles from "./TodoForm.module.css";

function TodoForm() {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (text) dispatch(addTodoAction(text));
    setText("");
  };

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setText(value);
  };
  return (
    <div className={styles.todoFormContainer}>
      <form>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={onChangeHandler}
        />
        <button type="submit" onClick={onSubmitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default TodoForm;
