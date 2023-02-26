import { RiTodoFill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import styles from "./Todo.module.css";

import { deleteTodoAction } from "../../store/action";

function Todo(props) {
  const dispatchFunction = useDispatch();

  const deleteTodo = () => {
    const { id } = props.todo;
    dispatchFunction(deleteTodoAction(id));
  };
  const { todo } = props;
  return (
    <div className={styles.todo} onDoubleClick={deleteTodo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.title}</div>
    </div>
  );
}

export default Todo;
