import type { TodoType } from "../../App";
import "./todo.scss";
interface Props {
  todo: TodoType;
  changeStatus: (todo: TodoType) => void;
}
const Todo = ({ todo, changeStatus }: Props) => {
  const handleChange = () => {
    changeStatus(todo);
  };
  return (
    <li className="list__item">
      <label className="list__item__label">
        <input
          className="list__item__input"
          type="checkbox"
          id={todo.id}
          onChange={handleChange}
        />
        <span className="list__item__text">{todo.text}</span>
      </label>
    </li>
  );
};

export default Todo;
