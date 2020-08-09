import React from "react";

const SearchResults = (props) => {
  return (
    <div>
      {props.books.map((book) => {
        return (
          <div key={book.id}>
            <form>
            <ul>
              <li>title:{book.title}</li>
              <li>author:{book.authors}</li>
              <li>description:{book.description}</li>
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
            <button type="submit" id={book.id} onClick={ (e)=>props.handleSaveBook(e)}>Save Book</button>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
