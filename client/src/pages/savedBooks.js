import React, { Component } from "react";
import DisplaySavedBooks from "../components/DisplaySavedBooks/DisplaySavedBooks";
import API from "../utils/API";
import "./pages.style.css";

class savedBooks extends Component {
  state = {
    svBooks: [],
  };

  componentDidMount() {
    API.getAllBooks()
      .then((res) => {
        this.setState({ svBooks: res.data });
      })
      .catch((err) => console.log(err));
  }

  handleDelete(id) {
    API.deleteBook(id)
      .then((_) => {
        this.componentDidMount(); window.location.reload();
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div id="savedPage">
        <div className="container">
          <DisplaySavedBooks
            svBooks={this.state.svBooks}
            handleDelete={this.handleDelete}
          />
        </div>
      </div>
    );
  }
}

export default savedBooks;
