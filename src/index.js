import { h, render } from "preact";
import { Router } from "@reach/router";

const App = () => (
  <div id="foo">
    <span>Hello, world!</span>
  </div>
);

render(
  <Router>
    <App path="/" />
  </Router>,
  document.body
);
