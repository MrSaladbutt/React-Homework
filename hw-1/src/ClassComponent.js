import { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Class Component',
    };
  }

  render() {
    return <h2>Hello, its {this.state.name}</h2>;
  }
}

export default ClassComponent;
