import React from "react";

const SearchResults = (props) => {
  return (
    <div>
      <ul>
        <li>title:{props.title}</li>
        <li>author:{props.authors}</li>
        <li>descr:{props.description}</li>
        <li>
          image:
          <img src={props.imageLinks} alt={props.title} />
        </li>
        <li>link:{props.infoLink}</li>

      </ul>{" "}
    </div>
  );
};

export default SearchResults;
