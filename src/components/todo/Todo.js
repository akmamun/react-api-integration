import React, { Component } from "react";

import api from "../../api";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []
    };
  }

  componentDidMount() {
    const todoId = this.props.match.params;
    api.todos().getOne(todoId)
      .then(response => console.log(this.setState({ todo: response.data })));
  }

  render() {
    const { todo } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
              <h2>Todo </h2>
              <h4> {todo.title} </h4>
              <p> {todo.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
