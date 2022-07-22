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
        <input
          className="list__item__input"
          type="checkbox"
          id="todo1"
          name="todo11"
          value="todo111"
        />
        <label className="list__item__label" htmlFor="todo1">
          make a fake todo
        </label>
      </li>
      <li className="list__item">
        <input
          className="list__item__input"
          type="checkbox"
          id="todo2"
          name="todo22"
          value="todo222"
        />
        <label className="list__item__label" htmlFor="todo2">
          add checked or not
        </label>
      </li>
      <li className="list__item">
        <input
          className="list__item__input"
          type="checkbox"
          id="todo3"
          name="todo33"
          value="todo333"
        />
        <label className="list__item__label" htmlFor="todo3">
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
