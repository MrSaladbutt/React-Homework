import './styles/App.css';

import ToDolist from './ToDoList/ToDoList';

function App() {
  return (
    <div className="App" id="app">
      <h1 className="main-header">ToDo List</h1>
      <ToDolist />
    </div>
  );
}

export default App;
