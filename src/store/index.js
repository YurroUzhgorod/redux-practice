import { legacy_createStore } from "redux";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  todos: [],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case "add-todo":
      return {
        todos: state.todos.concat({
          id: action.todoId,
          title: action.todoTitle,
        }),
      };
    case "delete-todo":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };

    default:
      return state;
  }
};

const store = legacy_createStore(todosReducer);

export default store;
