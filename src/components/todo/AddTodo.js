import React, { Component } from 'react';

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    alert(this.state.username)
    event.preventDefault()
  }

  render() {
    return (
      // <div className="container">
  
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
            <input type="submit" value="Submit" />
          </form>

      // </div>
    )
  }
}
export default AddTodo;

