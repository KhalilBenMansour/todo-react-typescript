import type { TodoType } from "../../App";
import {
  AiFillDelete,
  AiFillEdit,
  AiFillSave,
  AiOutlineClose,
} from "react-icons/ai";
import "./todo.scss";
import { useEffect, useRef, useState } from "react";
interface Props {
  todo: TodoType;
  changeStatus: (todo: TodoType) => void;
  editTodos: (todo: TodoType) => void;
  deleteTodo: (id: string) => void;
}
const Todo = ({ todo, changeStatus, deleteTodo, editTodos }: Props) => {
  const textInput = useRef<HTMLInputElement>(null);
  const [isEdit, setIsEdit] = useState(false);
  const [editTodo, setEditTodo] = useState<TodoType>(todo);
  useEffect(() => {
    if (textInput.current) {
      textInput.current.focus();
    }
  }, [isEdit]);
  const handleChange = () => {
    changeStatus(todo);
  };
  const handleDelete = () => {
    deleteTodo(todo.id);
  };
  const handleEdit = () => {
    setIsEdit(true);
  };
  const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditTodo({ ...editTodo, text: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodos(editTodo);
    setIsEdit(false);
  };
  const handleClose = () => {
    setEditTodo(todo);
    setIsEdit(false);
  };

  return (
    <li className="list__item">
      <label className="list__item__label">
        <input
          className="list__item__input"
          type="checkbox"
          disabled={isEdit ? true : false}
          id={todo.id}
          onChange={handleChange}
          checked={todo.isDone}
        />
        {!isEdit ? (
          <span className="list__item__text">{todo.text}</span>
        ) : (
          <form onSubmit={handleSubmit} onBlur={handleClose}>
            <input
              type="text"
              className="edit-input"
              value={editTodo.text}
              onChange={handleTodoChange}
              ref={textInput}
            />
            <button className="save">
              <AiFillSave />
            </button>
            <button className="close" onClick={handleClose}>
              <AiOutlineClose />
            </button>
          </form>
        )}
      </label>
      <div className="list__item__right">
        <button className="edit" onClick={handleEdit}>
          <AiFillEdit />
        </button>
        <button className="delete" onClick={handleDelete}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  );
};

export default Todo;
