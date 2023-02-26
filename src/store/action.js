import { v4 as uuidv4 } from "uuid";

export function addTodoAction(title) {
  return {
    type: "add-todo",
    todoId: uuidv4(),
    todoTitle: title,
  };
}
export function deleteTodoAction(idToDelete) {
  return {
    type: "delete-todo",
    id: idToDelete,
  };
}
