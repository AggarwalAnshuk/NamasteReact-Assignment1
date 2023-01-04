const heading1 = React.createElement("h1", {}, "Hello World-React h1");
const heading2 = React.createElement("h2", {}, "Hello World-React h2");

const container = React.createElement(
  "section",
  { id: "container", className: "container" },
  [heading1, heading2]
);

const rootEl = document.getElementById("root");

const root = ReactDOM.createRoot(rootEl);

root.render(container);
