import type { TodoType } from "../../App";
import Todo from "../todo/Todo";
import "./todoList.scss";

type Props = {
  todos: TodoType[];
  changeStatus: (todo: TodoType) => void;
};
const TodoList = ({ todos, changeStatus }: Props) => {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo key={todo.id} changeStatus={changeStatus} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
