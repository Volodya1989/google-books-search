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
       
      console.log("May book - "+res.data);
      this.setState({ svBooks: res.data });
    })
    .catch((err) => console.log(err));  }

  // loadBooks() {
    
  // }
  render() {
    return (
      <div>
        {/* <DisplaySavedBooks svBooks={this.state.svBooks} /> */}
      {this.state.svBooks.map((book) => (
        
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
      
      ))}
      </div>
    );
  }
}

export default savedBooks;
