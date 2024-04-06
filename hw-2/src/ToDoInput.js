function ToDoInput({
  input,
  onChangeHandler,
  onClickHandler,
  enterPressedHandler,
}) {
  return (
    <div className="input-container">
      <input
        type="text"
        name="input"
        value={input}
        placeholder="Create a new task"
        onChange={onChangeHandler}
        onKeyPress={enterPressedHandler}
      />
      <button className="input-btn" type="submit" onClick={onClickHandler}>
        Add task
      </button>
    </div>
  );
}

export default ToDoInput;
