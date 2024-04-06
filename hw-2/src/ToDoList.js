function ToDoList({ task, deleteTask }) {
  return (
    <>
      {task.length > 0 ? (
        <ul>
          {task.map((input, index) => {
            return (
              <div className="task-item" key={`${index}${input} `}>
                <li key={`${input} ${index}`}>{input}</li>
                <button
                  onClick={() => {
                    deleteTask(input);
                  }}
                  className="btn-delete"
                >
                  Delete task
                </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <div>
          <p>No tasks</p>
        </div>
      )}
    </>
  );
}

export default ToDoList;
