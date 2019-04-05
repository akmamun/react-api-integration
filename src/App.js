import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
// import MyForm from "./components/forms/MyForm";
import Index from "./components/Todo/Index";

class App extends Component {
  render() {
    return (
      <React.Fragment>
            <Switch>
          <Route path="/" component={Index} exact />
{/* 
          <Route path="/form" component={MyForm} exact /> */}
          </Switch>
      </React.Fragment>

    );
  }
}

export default App;
