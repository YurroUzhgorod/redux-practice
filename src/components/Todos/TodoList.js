import Todo from "./Todo";
import styles from "./TodoList.module.css";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => {
    return state.todos;
  });

  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2> Todo list is empty</h2>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
export default TodoList;
