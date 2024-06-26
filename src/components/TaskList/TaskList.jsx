import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { getVisibleTasks } from "../../redux/selectors";
import css from "./TaskList.module.css";

export const TaskList = () => {
  const visibleTasks = useSelector(getVisibleTasks);

  return (
    <ul className={css.list}>
      {visibleTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
