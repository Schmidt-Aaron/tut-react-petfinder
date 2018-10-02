import React from "react";
import { render } from "react-dom";
import pf from "petfinder-client";
import Pet from "./Pet";

const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  componentDidMount() {
    const petList = petfinder.breed.list({ animal: "dog" });

    petList.then(console.log, console.error);
  }

  render() {
    return (
      <div>
        <h1>Adopt Me Please!</h1>
        <Pet name="Snoopy" animal="dog" breed="terrier" />
        <Pet name="Luna" animal="bird" breed="sparrow" />
        <Pet name="Doink" animal="cat" breed="mixed" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
