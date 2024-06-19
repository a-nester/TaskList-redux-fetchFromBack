import { useDispatch } from "react-redux";
import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { deleteTask, toggleStatus } from "../../redux/operations";

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteTask(task.id));
  };

  const handleChange = () => {
    dispatch(toggleStatus(task));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleClick}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
