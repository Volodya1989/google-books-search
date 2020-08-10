import React from 'react';

const DisplaySavedBooks = (props) => {
   return (
    <div>
        <h1>Saved Books are displayed here</h1>
      {props.svBooks.map((book) => {
          return( 
            <div key={book._id}>
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
            <button
                  className="btn btn-danger"
                  id={book._id}
                  onClick={()=>props.handleDelete(book._id)}
                >
                  Delete Book
                </button>
                <button className="btn btn-success" type="link" >
                  <a href={book.link} target="_blank"> View Book</a>
                </button>
          </div>
         );
        })}
    </div>
  );
};

export default DisplaySavedBooks;