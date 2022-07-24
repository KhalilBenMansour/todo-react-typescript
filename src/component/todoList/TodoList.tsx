import type { TodoType } from "../../App";
// import Todo from "../todo/Todo";
import "./todoList.scss";

type Props = {
  todos: TodoType[];
};
const TodoList = ({ todos }: Props) => {
  return (
    <ul className="list">
      <li className="list__item">
        <label className="list__item__label">
          <input className="list__item__input" type="checkbox" name="todo1" />
          make a fake todo
        </label>
      </li>
      <li className="list__item">
        <label className="list__item__label">
          <input className="list__item__input" type="checkbox" name="todo2" />
          add checked or not
        </label>
      </li>
      <li className="list__item">
        <label className="list__item__label">
          <input className="list__item__input" type="checkbox" name="todo3" />
          style todo
        </label>
      </li>

      {/* {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))} */}
    </ul>
  );
};

export default TodoList;
