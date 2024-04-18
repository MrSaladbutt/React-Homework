import { Component } from 'react';
import deleteBtnStyles from './deleteBtn.module.css';

class DeleteBtnClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className={deleteBtnStyles.btnDelete}
      >
        {this.props.text}
      </button>
    );
  }
}

export default DeleteBtnClass;
