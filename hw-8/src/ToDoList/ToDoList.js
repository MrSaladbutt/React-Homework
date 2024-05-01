import ToDoListItem from "../ToDoListItems/ToDolistItem";
import listStyles from "../ToDoList/toDoList.module.css";
import { useState, useEffect } from "react";
import Select from "../Select/Select";
import Search from "../Search/Search";
import { debounce } from "lodash";

const ToDolist = () => {
  const [todos, setTodos] = useState(() => {
    const lsTodo = localStorage.getItem("todos");
    return lsTodo ? JSON.parse(lsTodo) : [];
  });
  const [input, setInput] = useState("");
  const [inputDirty, setInputDirty] = useState(false);
  const [inputError, setInputError] = useState("Це поле не може бути пустим");
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("Всі");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const debouncedFilterTodos = debounce(() => {
      const filtered = todos.filter((todo) =>
        todo.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTodos(filtered);
    }, 500);

    debouncedFilterTodos();

    return () => {
      debouncedFilterTodos.cancel();
    };
  }, [searchTerm, todos]);

  const onClickHandler = () => {
    if (input.length === 0) return;
    if (input.length > 4 && input.length < 20) {
      setTodos([...todos, { id: todos.length + Math.random(), name: input }]);
      setInput("");
    }
  };

  const enterPressedHandler = (e) => {
    if (e.key === "Enter") {
      onClickHandler();
    }
  };

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    if (input.length < 4) {
      setInputError("Це поле не може бути менше 4 символів");
    } else if (input.length > 20) {
      setInputError("Це поле не може бути більше 20 символів");
    } else {
      setInputError("");
    }
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  const clearLs = () => {
    localStorage.removeItem("todos");
    setTodos([]);
  };

  const handleSelectChange = (event) => {
    setFilter(event.target.value);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const focusHandler = () => {
    setInputDirty(true);
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

      <input
        className={listStyles.mainInput}
        type="text"
        value={input}
        onChange={onChangeHandler}
        onKeyPress={enterPressedHandler}
        onFocus={focusHandler}
      />
      {inputDirty && inputError && (
        <span className={listStyles.error}>{inputError}</span>
      )}
      <button className={listStyles.btn} onClick={onClickHandler}>
        Add ToDo
      </button>

      <Select filter={filter} handleSelectChange={handleSelectChange} />
      <ul>
        {filteredTodos.length > 0 ? (
          filteredTodos.map((element, index) => (
            <ToDoListItem
              element={element}
              toggleTodo={toggleTodo}
              key={index}
              id={element.id}
              name={element.name}
              deleteTask={deleteTask}
            />
          ))
        ) : (
          <p>Завдань не знайдено</p>
        )}
      </ul>
      <button className={listStyles.btnClearLs} onClick={clearLs}>
        Clear Todo List
      </button>
    </div>
  );
};

export default ToDolist;
