import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("you clicked the title");
  }

  render() {
    // return React.createElement("div", {}, [
    //   React.createElement(
    //     "h1",
    //     { onClick: this.handleTitleClick },
    //     "Adopt Me!"
    //   ),
    //   React.createElement(Pet, {
    //     name: "Luna",
    //     animal: "dog",
    //     breed: "Havanese"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Pepper",
    //     animal: "bird",
    //     breed: "Cockatiel"
    //   }),
    //   React.createElement(Pet, {
    //     name: "Doink",
    //     animal: "cat",
    //     breed: "Mixed"
    //   })
    // ]);

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
