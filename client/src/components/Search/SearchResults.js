import React from "react";
import "./search.style.css";

const SearchResults = (props) => {
  return (props.books.length === 0) ? (
    <div className="container">
      
      <h3 className="text-center welcome">Welcome to our page!</h3> 
        
      </div>) :(<div>
      <h2 id="yourSearch">Your Search Results</h2>
      {props.books.map((book) => {
        return (
          
          <div key={book.id} className="container">
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
                      className="btn btn-primary specialBtn"
                      type="submit"
                      id={book.id}
                      onClick={(e) => props.handleSaveBook(e)}
                    >
                      Save Book
                    </button>
                    <button className="btn btn-success specialBtn" id={book.id}>
                      <a href={book.link} target="_blank">
                        View Book
                      </a>
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
            </div>
  
  )
}

export default SearchResults;
