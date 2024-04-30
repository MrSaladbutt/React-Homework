import itemStyles from './toDoListItems.module.css';
import DeleteBtn from '../DeleteBtn/DeleteBtn';
import Checkbox from '../Checkbox/Checkbox';

const ToDolistItem = ({ id, name, deleteTask, element, toggleTodo }) => {
  return (
    <div className={itemStyles.taskItem} key={`${id}${name} `}>
      <Checkbox checked={element.completed} onChange={() => toggleTodo(id)} />
      <li
        className={
          element.completed ? itemStyles.checkedItem : itemStyles.uncheckedItem
        }
        key={id}
      >
        {name}
      </li>
      <DeleteBtn text="Delete ToDo" onClick={() => deleteTask(id)} />
    </div>
  );
};

export default ToDolistItem;
