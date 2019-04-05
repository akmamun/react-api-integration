import React, { Component } from 'react';

import api from '../../api'


class Index extends Component {
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
        let { todos } = this.state;



        return (
            <div className="container">

                {todos.map((todo, index) =>
                    <div key={index}>
                        <h1> {todo.title}</h1>
                        <p> {todo.body}</p>
                    </div>

                )

                }

            </div>

        );
    }
}

export default Index;
