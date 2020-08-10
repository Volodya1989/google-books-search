import React from "react";
import "./displaySavedBooks.style.css";

const DisplaySavedBooks = (props) => {
  return props.svBooks.length === 0 ? (
    <div className="container">
      <h3 className="text-center welcome">There are no saved books yet!</h3>
    </div>
  ) : (
    <div>
      <h2 id="yourSearch">Your Saved Books</h2>
      {props.svBooks.map((book) => {
        return (
          <div key={book._id} className="container">
            <form>
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item searchCards">
                    <div className="book-list__header row">
                      <div className="col-md-8">
                        <h3 className="book__title">{book.title}</h3>
                      </div>
                      <div className="book-list__btn-container col-md-4"></div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <p className="book-list__authors">
                          Written by {book.authors}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2 col-sm-4 col-12">
                        <img
                          src={book.image}
                          alt={book.title}
                          className="book-list__thumbnail img-thumbnail img-fluid w-100"
                        />
                      </div>
                      <div className="col-md-10 col-sm-8 col-12">
                        <p className="book-list__description">
                          {book.description}
                        </p>
                      </div>
                    </div>
                    <div className="btn-container ">
                      <button
                        className="btn btn-danger specialBtn"
                        type="submit"
                        id={book._id}
                        onClick={() => props.handleDelete(book._id)}
                      >
                        Delete Book
                      </button>
                      <button
                        className="btn btn-success specialBtn"
                        type="link"
                      >
                        <a href={book.link} target="_blank">
                          View Book
                        </a>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </form>
          </div>
        );
      })}
    </div>
  );
  //  return (
  //   <div>
  //       <h1>Saved Books are displayed here</h1>
  //     {props.svBooks.map((book) => {
  //         return(
  //           <div key={book._id}>
  //           <form>
  //           <ul>
  //             <li>title:{book.title}</li>
  //             <li>author:{book.authors}</li>
  //             <li>descr:{book.description}</li>
  //             <li>
  //               image:
  //               <img
  //                 src={book.image}
  //                 alt={book.title}
  //               />
  //             </li>

  //             <li>
  //               =================================================================
  //             </li>
  //           </ul>
  //           </form>
  //           <button
  //                 className="btn btn-danger"
  //                 id={book._id}
  //                 onClick={()=>props.handleDelete(book._id)}
  //               >
  //                 Delete Book
  //               </button>
  //               <button className="btn btn-success" type="link" >
  //                 <a href={book.link} target="_blank"> View Book</a>
  //               </button>
  //         </div>
  //        );
  //       })}
  //   </div>
  // );
};

export default DisplaySavedBooks;
