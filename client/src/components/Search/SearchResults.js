import React from "react";

const SearchResults = ({ title, author, description, image, link, date }) => {
  return (
    <div>
      <ul>
        <li>title:{title}</li>
        <li>author:{author}</li>
        <li>descr:{description}</li>
        <li>
          image:
          <img src={image} alt={title} />
        </li>
        <li>link:{link}</li>

        <li>date:{date}</li>
      </ul>{" "}
    </div>
  );
};

export default SearchResults;
