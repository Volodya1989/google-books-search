import React, { Component } from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
import API from "../utils/API";

class searchBooks extends Component {
  state = {
    search: "",
    books: [],
  };
  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSearchSubmit = (e) => {
    e.preventDefault();
    API.getBook(this.state.search)
    .then(res => {
        console.log(res)
        this.setState({ books: res.data.items })

    })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <SearchResults books={this.state.books} />
      </div>
    );
  }
}

export default searchBooks;
