import React, { Component } from 'react';

import api from '../../api'
import AddTodo from "./AddTodo";


class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        api.todos().getAll()
        .then(response => this.setState({ todos: response.data }))
    }

    render() {
        const { todos } = this.state;

        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <AddTodo />
              </div>
              <div className="col-lg-6">
                <h2>Todo List</h2>
                {todos.map((todo, index) => (
                  <div key={index}>
                    <h4>
                      <a href=""> {todo.title}</a>
                    </h4>
                    <p> {todo.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}

export default TodoList;
