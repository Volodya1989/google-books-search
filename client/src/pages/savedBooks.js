import React, { Component } from "react";
import DisplaySavedBooks from "../components/DisplaySavedBooks/DisplaySavedBooks";
import API from "../utils/API";

class savedBooks extends Component {
  state = {
    svBooks: [],
  };

  componentDidMount() {
    API.getAllBooks()
      .then((res) => {
        console.log("May book - " + JSON.stringify(res.data));
        this.setState({ svBooks: res.data });
        console.log(this.state.svBooks);
      })
      .catch((err) => console.log(err));
  }


  handleDelete(id) {
    API.deleteBook(id)
      .then((res) => this.componentDidMount())
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <DisplaySavedBooks svBooks={this.state.svBooks} handleDelete={this.handleDelete} />
      
      </div>
    );
  }
}

export default savedBooks;
