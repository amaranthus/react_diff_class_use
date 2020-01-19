import * as React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import AppHooks from "./AppHooks";
import AppClass from "./AppClass";

const App = () => (
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/hooks">hooks</Link>
        </li>
        <li>
          <Link to="/class">class</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/class" component={AppClass} />
      <Route path="/hooks" component={AppHooks} />
    </div>
  </BrowserRouter>
);

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>ホームです</p>
  </div>
);

export default App;
