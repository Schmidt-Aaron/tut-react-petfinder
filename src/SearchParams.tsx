import React from "react";
import Searchbox from "./Searchbox";
import { navigate, RouteComponentProps } from "@reach/router";

class SearchParams extends React.Component<RouteComponentProps> {
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
