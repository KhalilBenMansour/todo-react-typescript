import type { TodoType } from "../../App";
import Todo from "../todo/Todo";
import "./todoList.scss";

type Props = {
  todos: TodoType[];
  changeStatus: (todo: TodoType) => void;
  editTodos: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
};
const TodoList = ({ todos, changeStatus, deleteTodo, editTodos }: Props) => {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          changeStatus={changeStatus}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodos={editTodos}
        />
      ))}
    </ul>
  );
};

export default TodoList;
