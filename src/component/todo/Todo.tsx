import type { TodoType } from "../../App";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import "./todo.scss";
interface Props {
  todo: TodoType;
  changeStatus: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
}
const Todo = ({ todo, changeStatus, deleteTodo }: Props) => {
  const handleChange = () => {
    changeStatus(todo);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
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
      <div className="list__item__right">
        <span className="edit">
          <AiFillEdit />
        </span>
        <span className="delete" onClick={handleDelete}>
          <AiFillDelete />
        </span>
      </div>
    </li>
  );
};

export default Todo;
