// 1) Переписати наш туду ліст на классовий компонент
// 2) Зберігати данні у loaclStorage
// 4) Додати кнопку по якій наш localStorage буде очищуватись (Clear Todo List

import './App.css';
import ToDoListClass from './ToDoListClass';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>ToDo List</h1>
        <ToDoListClass />
      </header>
    </div>
  );
}

export default App;
