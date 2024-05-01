import DeleteButton from '../DeleteButton/DeleteButton';
import toDoListItem from './toDoListItem.module.css';
import EditButton from '../EditButton/EditButton';
import useDeleteTodo from '../hooks/useDeleteTodo';
import { useState } from 'react';
import useEditTodo from '../hooks/useEditTodo';

const ToDoListItems = ({ task, refetch, isPostLoading, setIsPostLoading }) => {
  const {
    id,
    title: initialTitle,
    description: initialDescription,
    checked: initialCheck,
    creationDate,
  } = task;
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [checked, setChecked] = useState(initialCheck);
  const deleteTodo = useDeleteTodo();
  const editToDo = useEditTodo();
  const [deleteError, setDeleteError] = useState(null);
  const [editError, setEditError] = useState(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      setIsPostLoading(true);
      await editToDo.mutateAsync({
        id,
        title,
        description,
        checked,
        creationDate,
      });
      setIsEditing(false);
      setIsPostLoading(false);
    } catch (error) {
      setIsPostLoading(false);
      setEditError(`Error: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setTitle(initialTitle);
    setDescription(initialDescription);
    setChecked(initialCheck);
    setIsEditing(false);
  };

  const handleDelete = async id => {
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
    <div className={toDoListItem.items}>
      <li key={id}>
        {isEditing ? (
          <div className={toDoListItem.edit}>
            <div className={toDoListItem.inputs}>
              <input
                className={toDoListItem.editInput}
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
              <input
                className={toDoListItem.editInput}
                type="text"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <div className={toDoListItem.editCheckbox}>
                <p>Виконано</p>
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={e => setChecked(e.target.checked)}
                />
              </div>
            </div>
            <button className={toDoListItem.save} onClick={handleSave}>
              Зберегти
            </button>
            <button className={toDoListItem.cancel} onClick={handleCancel}>
              Скасувати
            </button>
          </div>
        ) : (
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
              {checked ? 'Виконана' : 'Не виконана'}
            </p>
            <p>
              <span>Дата створення: </span>
              {creationDate}
            </p>
          </details>
        )}
        <div>
          {editError && <p style={{ color: 'red' }}>{editError}</p>}
          <EditButton isPostLoading={isPostLoading} onClick={handleEdit} />
          {deleteError && <p style={{ color: 'red' }}>{deleteError}</p>}
          <DeleteButton
            isPostLoading={isPostLoading}
            onClick={() => handleDelete(id)}
          />
        </div>
      </li>
    </div>
  );
};

export default ToDoListItems;
