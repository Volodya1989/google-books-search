import React, { Component } from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
import API from "../utils/API";

class searchBooks extends Component {
  state = {
    search: "",
    books: [],
    message:"",
  };
  handleInputChange = (e) => {
    console.log(e.target.value)
    this.setState({ search: e.target.value });
  };
  handleSearchSubmit = (e) => {
    e.preventDefault();
    API.getBooks(this.state.search)
    .then(res => {
        console.log(res.data.items )
        this.setState({ books: res.data.items })

    })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSaveBook = (e) => {
    e.preventDefault();
    const arrayOfBooks = this.state.books;
    const svBook = arrayOfBooks.filter(book => book.id === e.target.id)
console.log(svBook)
const svOneBook = svBook[0];
console.log(svOneBook)


    API.saveOneBook(svOneBook)
    .then(this.setState({ message: alert("Book is saved") }))
      .catch((err) => {
        console.log(err);
      });
    //use filter to save book into new array of saved books
  };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <SearchResults books={this.state.books} handleSaveBook={this.handleSaveBook}  />
      </div>
    );
  }
}

export default searchBooks;
