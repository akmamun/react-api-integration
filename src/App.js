import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import Navbar from './components/Navbar';
import TodoList from "./components/todo/TodoList";
import Todo from './components/todo/Todo';
import AddTodo from './components/todo/AddTodo';
import TodoEdit from './components/todo/Edit';

library.add(faEdit, faTrash)

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={TodoList} exact />
          <Route path="/todo/add" component={AddTodo} exact />
          <Route path="/todo/:id" component={Todo} exact />
          <Route path="/todo/edit/:id" component={TodoEdit} exact />

        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
