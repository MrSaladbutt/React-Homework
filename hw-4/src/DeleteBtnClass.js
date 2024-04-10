import { Component } from 'react';

class DeleteBtnClass extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button onClick={this.props.onClick} className="btn-delete">
        {this.props.text}
      </button>
    );
  }
}

export default DeleteBtnClass;
