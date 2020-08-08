import React from "react";

const SearchResults = (props) => {
  return (
    <div>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <form>
            <ul>
              <li>title:{book.volumeInfo.title}</li>
              <li>author:{book.volumeInfo.authors}</li>
              <li>descr:{book.volumeInfo.description}</li>
              <li>
                image:
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </li>
              <li>
                Whant more details about the book?
                <a href={book.volumeInfo.infoLink}> Click here</a>
              </li>
              <li>
                =================================================================
              </li>
            </ul>
            </form>
            <button type="submit">Save Book</button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
