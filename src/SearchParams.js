import React from "react";
import Searchbox from "./Searchbox";
import { navigate } from "@reach/router";

class SearchParams extends React.Component {
  handleSearchSubmit() {
    navigate("/");
  }
  render() {
    return (
      <div className="search-route">
        <Searchbox search={this.handleSearchSubmit} />
      </div>
    );
  }
}

export default SearchParams;
