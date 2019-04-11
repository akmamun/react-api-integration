import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
// import MyForm from "./components/forms/MyForm";
import TodoList from "./components/todo/TodoList";
// import AddTodo from "./components/todo/AddTodo";

import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route path="/" component={TodoList} exact />
          {/* <Route path="/add/todo" component={AddTodo} exact /> */}
          {/* 
          <Route path="/form" component={MyForm} exact /> */}
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
