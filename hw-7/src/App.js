// Продовжимо працювати з нашим to do додатком
// Добавити стилі використовуючи один з підходів які ми розглянули у лекці
import './App.css';
import ThemeButton from './ThemeButton/ThemeButton';
import ToDoListClass from './ToDoList/ToDoListClass';

function App() {
  return (
    <div className="App" id="app">
      <ThemeButton />
      <h1>ToDo List</h1>
      <ToDoListClass />
    </div>
  );
}

export default App;
