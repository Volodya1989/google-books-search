import React from 'react';

const DisplaySavedBooks = (props) => {
   return (
    <div>
        <h1>Saved Books are displayed here</h1>
      {props.svBooks.map((book) => {
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
        })}
    </div>
  );
};

export default DisplaySavedBooks;