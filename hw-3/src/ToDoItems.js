function ToDoItems(props) {
  return (
    <div className="task-item" key={`${props.id}${props.name} `}>
      <li key={props.id}>{props.name}</li>
      {props.children}
    </div>
  );
}

export default ToDoItems;
