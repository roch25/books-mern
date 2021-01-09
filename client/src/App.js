import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import BookList from "./components/book-list.component";
import CreateBook from "./components/create-book.component";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container" style={{ marginTop: 20 }}>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">
              MERN-Stack
            </Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">
                    Todos
                  </Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">
                    Create Book
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/" exact component={BookList} />
          <Route path="/create" exact component={CreateBook} />
        </div>
      </Router>
    );
  }
}

export default App;
