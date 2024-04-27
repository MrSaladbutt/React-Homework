import { useForm } from 'react-hook-form';
import ToDoListItem from '../ToDoListItems/ToDolistItem';
import listStyles from '../ToDoList/toDoList.module.css';
import { useState, useEffect } from 'react';
import Select from '../Select/Select';
import Search from '../Search/Search';

const ToDolist = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [todos, setTodos] = useState(() => {
    const lsTodo = localStorage.getItem('todos');
    return lsTodo ? JSON.parse(lsTodo) : [];
  });

  const [input, setInput] = useState('');

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const onSubmit = data => {
    if (data.task.length >= 4 && data.task.length <= 20) {
      setTodos([
        ...todos,
        { id: todos.length + Math.random(), name: data.task },
      ]);
      setInput('');
    }
  };

  const deleteTask = id => {
    setTodos(todos.filter(item => item.id !== id));
  };

  const clearLs = () => {
    localStorage.removeItem('todos');
    setTodos([]);
  };

  const [filter, setFilter] = useState('Всі');

  const handleSelectChange = event => {
    setFilter(event.target.value);
  };

  const filteredTodos = todos
    .filter(todo => {
      if (filter === 'Активний') {
        return !todo.completed;
      } else if (filter === 'Завершений') {
        return todo.completed;
      } else {
        return true;
      }
    })
    .filter(todo => {
      return todo.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

  const toggleTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className={listStyles.container}>
      <Search
        type="text"
        placeholder="Пошук..."
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <p>Tasks: {todos.length}</p>
      <form className={listStyles.form} onSubmit={handleSubmit(onSubmit)}>
        <input
          className={listStyles.mainInput}
          type="text"
          {...register('task', { required: true, minLength: 4, maxLength: 20 })}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        {errors.task && errors.task.type === 'required' && (
          <span className={listStyles.error}>Це поле є обов'язковим</span>
        )}
        {errors.task && errors.task.type === 'minLength' && (
          <span className={listStyles.error}>Мінімум 4 символи</span>
        )}
        {errors.task && errors.task.type === 'maxLength' && (
          <span className={listStyles.error}>Максимум 20 символів</span>
        )}
        <button className={listStyles.btn} type="submit">
          Add ToDo
        </button>
      </form>

      <Select filter={filter} handleSelectChange={handleSelectChange} />
      <ul>
        {filteredTodos.map((element, index) => (
          <ToDoListItem
            element={element}
            toggleTodo={toggleTodo}
            key={index}
            id={element.id}
            name={element.name}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
      <button className={listStyles.btnClearLs} onClick={clearLs}>
        Clear Todo List
      </button>
    </div>
  );
};

export default ToDolist;
