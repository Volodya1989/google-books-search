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
                  <img src={book.image} alt={book.title} />
                </li>
                <li>
                  Whant more details about the book?
                  <a href={book.link} target="_blank">
                    {" "}
                    Click here
                  </a>
                </li>
                <li>
                  =================================================================
                </li>
              </ul>
            </form>
            <div>
              <button
                className="btn btn-primary"
                type="submit"
                id={book.id}
                onClick={(e) => props.handleSaveBook(e)}
              >
                Save Book
              </button>
              <button className="btn btn-info" id={book.id}>
                <a href={book.link} target="_blank">
                  View Book
                </a>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResults;
