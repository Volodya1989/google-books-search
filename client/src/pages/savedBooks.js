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
      const books = res.data;
      console.log(books);
      this.setState({ svBooks: books });
    })
    .catch((err) => console.log(err));  }

  // loadBooks() {
    
  // }
  render() {
    return (
      <div>
        {/* <DisplaySavedBooks svBooks={this.state.svBooks} /> */}
        <h1>Saved Books are displayed here</h1>
      {this.state.books.map((book) => {
        return(
          <div key={book.id}>
            <ul>
              <li>title:{book.title}</li>
              <li>author:{book.authors}</li>
              <li>descr:{book.description}</li>
              <li>
                image:
                <img
                  src={book.thumbnail}
                  alt={book.title}
                />
              </li>
              <li>
                Whant more details about the book?
                <a href={book.infoLink}> Click here</a>
              </li>
              <li>
                =================================================================
              </li>
            </ul>
          </div>
       )
      })}
      </div>
    );
  }
}

export default savedBooks;
