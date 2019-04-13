import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

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
      .then(response => this.setState({ todo: response.data }));
  }

  render() {
    const { todo } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <h4> {todo.title}  <Link to={`/todo/edit/${todo._id}`}>  <FontAwesomeIcon icon="edit" className="ml-2" /> </Link></h4> 
              <p> {todo.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
