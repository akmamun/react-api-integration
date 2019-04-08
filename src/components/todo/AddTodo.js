import React, { Component } from 'react';
import api from '../../api';

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      //initialize state keys value  
      title : "",
      body : ""
    }
  }
  onChance = (e) => {
     /* Because we named the inputs to match their
          corresponding values in state, it's
          super easy to update the state
        */
    this.setState({[e.target.name] : e.target.value}); 
  }

  onSubmit = (e) => {
    e.preventDefault()
            
    // get our form data out of state
    const {title, body} = this.state;  // define state variable for use in return
    api.todos().create(title, body)
    .then(response => response)
  }

  
  render() {
    const {title, body} = this.state;  // define state variable for use in return
    return (
      <div className="container">
    
          <form onSubmit={this.onSubmit}>
          <label>Todo Title</label>
                    <input
                      type="text"
                      name="title"
                      value={title}
                      onChange={this.onChance}
                    />
                    <input
                      type="text"
                      name="body"
                      value={body}
                      onChange={this.onChance}
                    />
                  <button type="submit">Submit</button>

                    
          </form>

      </div>
    )
  }
}
export default AddTodo;

