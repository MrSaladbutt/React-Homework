import { Component } from 'react';

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="task-item" key={`${this.props.id}${this.props.name} `}>
        <li key={this.props.id}>{this.props.name}</li>
        {this.props.children}
      </div>
    );
  }
}

export default ToDoListItem;
