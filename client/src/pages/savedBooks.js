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

  // loadBooks() {

  // }
  render() {
    return (
      <div>
        <DisplaySavedBooks svBooks={this.state.svBooks} />
        {/* {this.state.svBooks.map((book) => {
          return( 
            <div key={book.id}>
            <form>
            <ul>
              <li>title:{book.title}</li>
              <li>author:{book.authors}</li>
              <li>descr:{book.description}</li>
              <li>
                image:
                <img
                  src={book.image}
                  alt={book.title}
                />
              </li>
              <li>
                Whant more details about the book?
                <a href={book.link}> Click here</a>
              </li>
              <li>
                =================================================================
              </li>
            </ul>
            </form>
          </div>
         );
        })} */}
      </div>
    );
  }
}

export default savedBooks;
