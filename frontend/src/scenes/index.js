import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Views from './Views';
import Data from './Data';

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/data">Data</Link>
        </li>
        <li>
          <Link to="/views">Views</Link>
        </li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/data" component={Data} />
      <Route path="/views" component={Views} />
    </div>
  </Router>
);

export default App;
