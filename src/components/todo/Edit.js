import React, { Component } from "react";

import api from "../../api";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title :'', 
            body: ''
        };
    }
  
    componentDidMount() {
        const todoId = this.props.match.params;
        api.todos().getOne(todoId)
            .then(response => this.setState({
                title: response.data.title,
                body: response.data.body
            }));

    }
    onChance = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault() //prevent load
        const todoId = this.props.match.params;
        // get our form data out of state
        const { title, body } = this.state;
        // define state variable for use in return
        //and store in state value
        api.todos().update(todoId, { title: title, body: body })
            .then(response => console.log(response.data));
    }


    render() {
        const { title, body } = this.state;

        return (
            <div className="container"> 
                    <div className="col-lg-9 offset-lg-2">
                                <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label>
                                                Todo Title :
                                                <input
                                                    type="text"
                                                    name="title"
                                                    value={title}
                                                    className="form-control"
                                                    placeholder="Add Todo"
                                                    onChange={this.onChance}
                                                    required  />
                                            </label>
                                        </div>
                                        <div className="form-group">
                                            <label>
                                                Description :
                                                <textarea
                                                    type="text"
                                                    name="body"
                                                    className="form-control"
                                                    placeholder="Description"
                                                    value={body}
                                                    onChange={this.onChance}
                                                    required  />
                                            </label>
                                        </div>
                                        <button
                                            type="submit"
                                            className="btn btn-md btn-secondary float-left">
                                            Update 
                                        </button>
                                        {/* <button
                                            type="submit"
                                            className="btn btn-md btn-primary float-right">
                                            Cancel
                                        </button> */}
                                </form>
              
                    </div> 
            </div>
        );
    }
}

export default Todo;
