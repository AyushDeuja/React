import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   [
//     React.createElement("div", { id: "child1" }, [
//         React.createElement("h1", {}, "Hello react I am an h1 tag"),
//         React.createElement("h2", {}, "Hello react I am an h2 tag"),
//       ]),
//       React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "Hello react I am an h1 tag"),
//         React.createElement("h2", {}, "Hello react I am an h2 tag"),
//       ])
//   ]
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement("h1", { id: "heading" }, "Hello React");
const Title = () => (
  <h1 id="heading" className="head">
    Hello React from jsx this is component
  </h1>
);

// const HeadingComponent1 = () => {
//   return <h1>This is functional component</h1>;
// };

// const HeadingComponent2 = () => <h1>This is functional component</h1>;
const elem = <span>React Element. </span>
const title = (
  <h1  className="head" style={{color:"blue"}}>
    {elem}
    Hello React from jsx this is element
  </h1>
);

const HeadingComponent = () => (
  <div id="container">
    {title}
    {/* below are all three Title are same thing all can be used but first one is commonly used */}
    <Title/>
    <Title></Title>
    {Title()}
    <h1 className="heading">This is functional component</h1>
  </div>
);
// above all three HeadingComponent are same
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
// root.render(jsxHeading);
root.render(<HeadingComponent/>)
