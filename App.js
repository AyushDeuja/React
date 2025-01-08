// const heading = React.createElement(
//   "h1",
//   {id: "heading"},
//   "Hello world from react, It's me AYUSH"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h1", {}, "Hello react I am an h1 tag"),
        React.createElement("h2", {}, "Hello react I am an h2 tag"),
      ]),
      React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hello react I am an h1 tag"),
        React.createElement("h2", {}, "Hello react I am an h2 tag"),
      ])
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
