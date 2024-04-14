// 1) Зробити дуже простий ToDo List
// 2) додати input і кнопку по якій ми будемо записувати наші to do.
// 3) Після вводу нашого to do в інпут і після натискання на кнопку має додатись до To Do List
// 4) Маємо побачити відмальовану To Do в інтерфейсі
// 5) Показати кількість to do у списку
// 6) Додати евент щоб можна будо додавати to do по натисканню кнопки “enter”

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
