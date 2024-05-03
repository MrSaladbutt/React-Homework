import { Link, useParams } from 'react-router-dom';
import taskStyles from './taskPage.module.css';
import { useQuery } from 'react-query';
import { getSingleTodo } from '../../api/api';
import useEditTodo from '../../hooks/useEditTodo';
import { useState, useEffect } from 'react';
import { BeatLoader } from 'react-spinners';

const TaskPage = () => {
  const { id } = useParams();
  const { data, isFetching } = useQuery({
    queryKey: ['singleToTo'],
    queryFn: () => getSingleTodo(id),
  });

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [checked, setChecked] = useState(false);
  const editToDo = useEditTodo();
  const [editError, setEditError] = useState(null);

  useEffect(() => {
    if (data) {
      setTitle(data.title || '');
      setDescription(data.description || '');
      setChecked(data.checked || false);
    }
  }, [data]);

  const handleSave = async () => {
    try {
      await editToDo.mutateAsync({
        id,
        title,
        description,
        checked,
      });
    } catch (error) {
      setEditError(`Error: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setTitle(data.title || '');
    setDescription(data.description || '');
    setChecked(data.checked || false);
  };

  const enterHandler = e => {
    if (e.key === 'Enter') {
      handleSave();
    }
  };

  if (isFetching) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={taskStyles.container}>
      <h2 className={taskStyles.title}>Завдання: {title}</h2>
      <div className={taskStyles.inputs}>
        <label className={taskStyles.label} htmlFor="title">
          Назва
        </label>
        <input
          value={title}
          id="title"
          onChange={e => setTitle(e.target.value)}
          onKeyPress={enterHandler}
          className={taskStyles.input}
          type="text"
        />
        <label className={taskStyles.label} htmlFor="description">
          Опис
        </label>
        <input
          onChange={e => setDescription(e.target.value)}
          id="description"
          onKeyPress={enterHandler}
          value={description}
          className={taskStyles.input}
          type="text"
        />
        <div className={taskStyles.check}>
          <p>Виконано</p>
          <input
            onChange={e => setChecked(e.target.checked)}
            checked={checked}
            type="checkbox"
          />
        </div>
      </div>
      {editError && <p style={{ color: 'red' }}>{editError}</p>}
      <div className={taskStyles.buttons}>
        <Link
          className={taskStyles.buttonSave}
          onClick={handleSave}
          to="/todo-list"
        >
          {isFetching ? <BeatLoader width={10} color="#ffff" /> : 'Зберегти'}
        </Link>
        <Link
          className={taskStyles.buttonCancel}
          onClick={handleCancel}
          to="/todo-list"
        >
          {isFetching ? <BeatLoader width={10} color="#ffff" /> : 'Скасувати'}
        </Link>
      </div>
    </div>
  );
};

export default TaskPage;
