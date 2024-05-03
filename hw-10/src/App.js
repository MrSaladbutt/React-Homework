import './styles/App.css';
import NotFound from './pages/NotFound/NotFound';
import ToDolist from './pages/ToDoList/ToDoList';
import Home from './pages/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Layout from './components/Layout/Layout';
import TaskPage from './pages/task-page/TaskPage';

function App() {
  return (
    <div className="App" id="app">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/todo-list" element={<ToDolist />} />
          <Route path="/todo-list/:id" element={<TaskPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
