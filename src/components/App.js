import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let relativeList = ["Nil", "sourav", "Anirban", "Souvik"];

    return (
      <div id="main">
        <ol key="relativeList">
          {relativeList.map((relative, index) => (
            <li key={`relativeListItem${index + 1}`}>{relative}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
