// Import react and react-dom
import React from "react";
import ReactDOM from "react-dom";

// bug: fast refresh/hot reloading/live reloading doesnt work for changes in index.js
// solution:
if (module.hot) {
  module.hot.accept();
}

// Create a react comp
const App = () => {
  return <div>Hi there!</div>;
};

// take react component and show it on screen
ReactDOM.render(<App />, document.querySelector("#root"));
