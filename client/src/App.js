import React from "react";
// import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import searchBooks from "./pages/searchBooks";

function App() {
  
  return (
    <Router>
        <Route exact path="/" component={searchBooks} />
        <Route  />
    </Router>
  );
}

export default App;
