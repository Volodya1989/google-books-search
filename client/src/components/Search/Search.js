import React from "react";
import "./search.style.css";

const Search = (props) => {
  return (
    <div className="container justify-content-center">
      <div>
        <form>
          <div className="form-group justify-content-center">
            <div >
              <h2 className="title">Search For a Book</h2>
            </div>
            <hr />
            <input
              id="searchField"
              className="col-12 "
              value={props.search}
              type="text"
              name="books"
              placeholder="enter book's title"
              onChange={props.handleInputChange}
            />
           
          </div>
          <button
              id="searchButton"
              type="submit"
              className=" btn btn-primary"
              onClick={props.handleSearchSubmit}
            >
              <svg
                className="bi bi-search"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
                />
                <path
                  fillRule="evenodd"
                  d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
                />
              </svg>
            </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
