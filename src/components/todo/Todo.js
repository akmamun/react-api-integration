import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../../url";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(url(`/posts/${id}`))
      .then((response) => this.setState({ todo: response.data }));
  }
  onDelete = () => {
    const id = this.props.match.params.id;
    axios
      .delete(url(`/posts/${id}`))
      .then((response) => this.props.history.push("/"));
  };

  render() {
    const { todo } = this.state;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <h4>
              {todo.title}
              <Link to={`/todo/edit/${todo.id}`}>
                <FontAwesomeIcon icon="edit" className="ml-5" />
              </Link>
              <FontAwesomeIcon
                icon="trash"
                onClick={this.onDelete}
                className="float-right mr-5"
                style={{ cursor: "pointer" }}
              />
            </h4>
            <p> {todo.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Todo;
