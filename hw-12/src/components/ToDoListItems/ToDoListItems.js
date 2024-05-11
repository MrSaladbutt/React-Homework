import DeleteButton from "../DeleteButton/DeleteButton";
import toDoListItem from "./toDoListItem.module.css";
import useDeleteTodo from "../../hooks/useDeleteTodo";
import { useContext, useState } from "react";
import { BeatLoader } from "react-spinners";
import { Link } from "react-router-dom";
import { QueryContext } from "../../context/QueryContext";
import { PostLoadingContext } from "../../context/PostLoadingContext";

const ToDoListItems = ({ task }) => {
  const { id, title, description, checked, creationDate } = task;
  const deleteTodo = useDeleteTodo();
  const [deleteError, setDeleteError] = useState(null);
  const { refetch } = useContext(QueryContext);
  const { isPostLoading, setIsPostLoading } = useContext(PostLoadingContext);

  const handleDelete = async (id) => {
    try {
      setIsPostLoading(true);
      await deleteTodo.mutateAsync(id);
      await refetch();
      setIsPostLoading(false);
    } catch (error) {
      setIsPostLoading(false);
      setDeleteError(`Error: ${error.message}`);
    }
  };

  return (
    <li className={toDoListItem.items} key={id}>
      <details>
        <summary>
          <span>Назва: </span>
          {title}
        </summary>
        <p>
          <span>Опис: </span>
          {description}
        </p>
        <p className={checked ? toDoListItem.check : toDoListItem.uncheck}>
          {checked ? "Виконана" : "Не виконана"}
        </p>
        <p>
          <span>Дата створення: </span>
          {creationDate}
        </p>
      </details>

      <div>
        <Link to={`/todo-list/${id}`} className={toDoListItem.btn}>
          {isPostLoading ? (
            <BeatLoader width={10} color="#ffff" />
          ) : (
            "Редагувати"
          )}
        </Link>
        {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
        <DeleteButton onClick={() => handleDelete(id)} />
      </div>
    </li>
  );
};

export default ToDoListItems;
