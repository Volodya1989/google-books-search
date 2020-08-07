import React, { Component } from "react";
import Search from "../components/Search/Search";
import SearchResults from "../components/Search/SearchResults";


class searchBooks extends Component {
  state = {
    search: "",
    saved: [],
  };
  handleInputChange = (e) => {
    this.setState({ search: e.target.value });
  };
  handleSearchSubmit = (e) => {
    e.preventDefault;
    API.getBook(this.state.search).then(response=>{
        console.log(response.data.items)
        this.setState({search:response.data.items})
    })
  };

  render() {
    return (
      <div>
        <Search
          handleInputChange={this.handleInputChange}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <SearchResults books={this.state.search} />
      </div>
    );
  }
}

export default searchBooks;
