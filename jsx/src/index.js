// Import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

// Create a react comp
const App = () => {
  return <div>Hi there!</div>;
};

// take react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
