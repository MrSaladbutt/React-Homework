import './App.css';
import { useState } from 'react';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

function App() {
  const [input, setInput] = useState('');
  const [task, setTask] = useState([]);

  const onChangeHandler = e => {
    const value = e.target.value;
    setInput(value);
  };

  const onClickHandler = () => {
    setTask([...task, input]);
    setInput('');
  };

  const deleteTask = text => {
    const newTask = task.filter(input => {
      return input !== text;
    });
    setTask(newTask);
  };

  const enterPressedHandler = e => {
    if (e.key === 'Enter') {
      onClickHandler();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <p>Tasks: {task.length}</p>
        <ToDoInput
          input={input}
          onChangeHandler={onChangeHandler}
          onClickHandler={onClickHandler}
          enterPressedHandler={enterPressedHandler}
        />
        <ToDoList task={task} deleteTask={deleteTask} />
      </header>
    </div>
  );
}

export default App;
