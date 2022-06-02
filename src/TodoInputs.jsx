import React, { Component } from "react";

import "./index.css";

class TodoInput extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header>
        <h1>Список задач {this.props.myprops.length}</h1>
      </header>
    );
  }
}

export default TodoInput;
