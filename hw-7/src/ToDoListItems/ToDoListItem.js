import { Component } from 'react';
import itemStyles from './toDoListItems.module.css';

class ToDoListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className={itemStyles.taskItem}
        key={`${this.props.id}${this.props.name} `}
      >
        <li key={this.props.id}>{this.props.name}</li>
        {this.props.children}
      </div>
    );
  }
}

export default ToDoListItem;
