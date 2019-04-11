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
    const {title, body} = this.state;
    // define state variable for use in return
    //and store in state value
    api.todos().create({ title: title, body: body})
      .then(response => response);

     
  }

  
  render() {
    const {title, body} = this.state;  // define state variable for use in return
    return (
      <div className="container">
        <div className="col-lg-6">
          <form onSubmit={this.onSubmit}>
            <div class="form-group">
              <label>
                Todo Title :
                <input
                  type="text"
                  name="title"
                  value={title}
                  class="form-control"
                  placeholder="Add Todo"
                  onChange={this.onChance}
                  required
                />
              </label>
            </div>
            <div class="form-group">
              <label>
                Description :
                <textarea
                  type="text"
                  name="body"
                  class="form-control"
                  placeholder="Description"
                  value={body}
                  onChange={this.onChance}
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              class="btn btn-md btn-primary float-right"
            >
              Add Todo
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddTodo;

