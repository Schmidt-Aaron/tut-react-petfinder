import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Adopt Me!!</h1>
        <Pet name="Snoopy" animal="dog" breed="terrier" />
        <Pet name="Luna" animal="bird" breed="sparrow" />
        <Pet name="Doink" animal="cat" breed="mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
