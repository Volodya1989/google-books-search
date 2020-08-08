import React from "react";
// import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import searchBooks from "./pages/searchBooks";
import savedBooks from "./pages/savedBooks";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={searchBooks} />
        <Route exact path="/savedBooks" component={savedBooks} />
      </Switch>
    </Router>
  );
}

export default App;
