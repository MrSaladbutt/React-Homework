import { Component } from 'react';
import ToDoListItem from './ToDoListItem';
import DeleteBtnClass from './DeleteBtnClass';

class ToDoListClass extends Component {
  state = {
    task: [
      { id: 1, name: 'First ToDo' },
      { id: 2, name: 'Second ToDo' },
      { id: 3, name: 'Third ToDo' },
    ],
    input: '',
  };

  componentDidMount() {
    const lsTask = localStorage.getItem('task');
    if (lsTask) {
      this.setState({ task: JSON.parse(lsTask) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.task !== this.state.task) {
      localStorage.setItem('task', JSON.stringify(this.state.task));
    }
  }

  enterPressedHandler = e => {
    if (e.key === 'Enter') {
      this.onClickHandler();
    }
  };

  onClickHandler = () => {
    let question = window.confirm('Добавить в список?');
    if (question === true) {
      this.setState({
        task: [
          ...this.state.task,
          { id: this.state.task.length + 1, name: this.state.input },
        ],
      });
      if (this.state.input.length === 0) {
        this.setState({ task: [...this.state.task] });
      }
      this.setState({ input: '' });
    }
  };

  onChangeHandler = e => {
    const value = e.target.value;
    this.setState({ input: value });
  };

  deleteTask = id => {
    let question = window.confirm('Удалить из списка?');
    if (question === true) {
      this.setState({ task: this.state.task.filter(item => item.id !== id) });
    }
  };

  clearLs = () => {
    let question = prompt('Очистить список');
    if (question === '12345678') {
      localStorage.removeItem('task');
      this.setState({ task: [] });
    }
  };

  render() {
    return (
      <div className="input-container">
        <p>Tasks: {this.state.task.length}</p>
        <input
          type="text"
          value={this.state.input}
          onChange={this.onChangeHandler}
          onKeyPress={this.enterPressedHandler}
        />
        <button className="input-btn" onClick={this.onClickHandler}>
          Add ToDo
        </button>
        <ul>
          {this.state.task.map((element, index) => {
            return (
              <ToDoListItem
                key={index}
                id={element.id}
                name={element.name}
                deleteTask={this.deleteTask}
              >
                <DeleteBtnClass
                  text="Delete ToDo"
                  onClick={() => this.deleteTask(element.id)}
                />
              </ToDoListItem>
            );
          })}
        </ul>
        <button className="btn-clr-ls" onClick={this.clearLs}>
          Clear Todo List
        </button>
      </div>
    );
  }
}

export default ToDoListClass;
