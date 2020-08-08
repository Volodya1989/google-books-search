import React from 'react';

const DisplaySavedBooks = (props) => {
   return (
    <div>
      {props.books.map((book) => {
        return (
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
        );
      })}
    </div>
  );
};

export default DisplaySavedBooks;