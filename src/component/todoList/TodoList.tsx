import type { TodoType } from "../../App";
import Todo from "../todo/Todo";
import "./todoList.scss";

type Props = {
  todos: TodoType[];
};
const TodoList = ({ todos }: Props) => {
  return (
    <ul className="list">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
