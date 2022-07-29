import type { TodoType } from "../../App";
import Todo from "../todo/Todo";
import "./todoList.scss";

type Props = {
  todos: TodoType[];
  changeStatus: (todo: TodoType) => void;
  editTodos: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
  type: "all" | "active";
};
const TodoList = ({
  todos,
  changeStatus,
  deleteTodo,
  editTodos,
  type,
}: Props) => {
  const filteredTodos =
    type === "active" ? todos.filter((e) => e.isDone === false) : todos;
  return (
    <ul className="list">
      {filteredTodos.map((todo) => (
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
