import ToDoItems from './ToDoItems';
import DeleteBtn from './DeleteBtn';
import { useState } from 'react';
function ToDoList() {
  const arr = [
    { id: 1, name: 'First ToDo' },
    { id: 2, name: 'Second ToDo' },
    { id: 3, name: 'Third ToDo' },
  ];

  const [task, setTask] = useState(arr);
  const [input, setInput] = useState('');

  const enterPressedHandler = e => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };
  const onClickHandler = () => {
    setTask([...task, { id: task.length + 1, name: input }]);
    setInput('');
  };

  const deleteTask = id => {
    const newTask = task.filter(item => item.id !== id);
    setTask(newTask);
  };

  return (
    <>
      <div className="input-container">
        <p>Tasks: {task.length}</p>
        <input
          value={input}
          placeholder="Create a new task"
          onChange={onChangeHandler}
          onKeyPress={enterPressedHandler}
        />
        <button className="input-btn" type="submit" onClick={onClickHandler}>
          Add task
        </button>
      </div>
      {task.length > 0 ? (
        <ul>
          {task.map((element, index) => {
            return (
              <ToDoItems
                key={index}
                name={element.name}
                id={element.id}
                deleteTask={deleteTask}
              >
                {
                  <DeleteBtn
                    text="Delete task"
                    type="button"
                    onClick={() => deleteTask(element.id)}
                  />
                }
              </ToDoItems>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No tasks</p>
        </div>
      )}
    </>
  );
}

export default ToDoList;
