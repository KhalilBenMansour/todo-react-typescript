import type { TodoType } from "../../App";
import Todo from "../todo/Todo";

type Props = {
  todos: TodoType[];
};
const TodoList = ({ todos }: Props) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};

export default TodoList;
