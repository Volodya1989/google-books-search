import React, { Component } from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";
import API from "../utils/API";

class searchBooks extends Component {
  state = {
    search: "",
    books: [],
    message: "",
  };
  handleInputChange = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };
  handleSearchSubmit = (e) => {
    e.preventDefault();
    API.getBooks(this.state.search)
      .then((res) => {
        console.log(res.data.items);
        // store response as array
        let data = res.data.items;
        if (data === "error") {
          throw new Error(data);
        } else {
          //map through the array
          data = data.map((result) => {
            //store  book's info as object
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
            };
            return result;
          });
          this.setState({ books: data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  handleSaveBook = (e) => {
    e.preventDefault();
    const arrayOfBooks = this.state.books;
    //use filter to save book into new array of saved books
    const filteredArray = arrayOfBooks.filter((book) => book.id === e.target.id);
    console.log(filteredArray);
    const svBooks = filteredArray[0];
    console.log(svBooks);

    API.saveOneBook(svBooks)
      .then(this.setState({ message: alert("Book is saved") }))
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
        <SearchResults
          books={this.state.books}
          handleSaveBook={this.handleSaveBook}
        />
      </div>
    );
  }
}

export default searchBooks;
