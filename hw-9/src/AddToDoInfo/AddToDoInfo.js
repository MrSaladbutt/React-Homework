import { currentDate, generateId } from '../utils';
import inputStyles from './addToDoInfo.module.css';
import { useState, useRef } from 'react';
import AddButton from '../AddButton/AddButton';
import { useMutation } from 'react-query';
import { putTodoList } from '../api/api';

export const AddToDoInfo = props => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [checked, setChecked] = useState(false);
  const payload = {
    id: generateId(10),
    title: title,
    description: description,
    checked: checked,
    creationDate: currentDate,
  };
  const { mutateAsync } = useMutation({
    mutationFn: payload => putTodoList(payload),
  });
  const [addError, setAddError] = useState(null);
  const inputRef = useRef(null);

  const addToDo = async () => {
    try {
      props.setIsPostLoading(true);
      await mutateAsync(payload);
      setTitle('');
      setDescription('');
      await props.refetch();
      props.setIsPostLoading(false);
    } catch (error) {
      props.setIsPostLoading(false);
      setAddError(`Error: ${error.message}`);
    }
  };

  const handleChange = e => {
    setChecked(e.target.checked);
  };

  const enterPressHandler = e => {
    if (e.key === 'Enter') {
      addToDo();
    }
  };

  return (
    <div className={inputStyles.inputs}>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className={inputStyles.mainInput}
        onKeyPress={enterPressHandler}
      />
      <input
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}
        className={inputStyles.mainInput}
        onKeyPress={enterPressHandler}
      />
      <div className={inputStyles.check}>
        <p>Виконано: </p>
        <input
          type="checkbox"
          ref={inputRef}
          name="checkbox"
          id="checkbox"
          checked={checked}
          onChange={handleChange}
        />
      </div>

      {addError && <p style={{ color: 'red' }}>{addError}</p>}
      <AddButton isPostLoading={props.isPostLoading} addToDo={addToDo} />
    </div>
  );
};
