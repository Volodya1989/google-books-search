import React, { Component } from "react";
import DisplaySavedBooks from "../components/DisplaySavedBooks/DisplaySavedBooks";
import API from "../utils/API";

class savedBooks extends Component {
  state = {
    svBooks: [],
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks() {
    API.getAllBooks()
      .then((res) => {
        const books = res.data;
        console.log(books);
        this.setState({ svBooks: books });
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <DisplaySavedBooks svBooks={this.state.svBooks} />
      </div>
    );
  }
}

export default savedBooks;
