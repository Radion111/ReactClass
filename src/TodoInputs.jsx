import React, { Component } from "react";

import "./index.css";

class TodoInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1>ToDo List on React</h1>
        <h2>Список задач {this.props.myprops.length}</h2>
      </header>
    );
  }
}

export default TodoInput;
