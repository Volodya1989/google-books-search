import React, { Component } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navTabs.style.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }
  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";
    return (
      <nav
        id="navBar"
        className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav"
      >
        <div className="container">
          <Link className="navbar-brand" to="/">
           Find Book
          </Link>

          <button
            onClick={this.toggleNavbar}
            className={`${classTwo}`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`${classOne}`} id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item ">
               
                <Link
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  to="/"
                >
                  Search
                </Link>
              </li>
              <li className="nav-item ">
              
                <Link
                  className="nav-link"
                  onClick={this.toggleNavbar}
                  to="/savedBooks"                >
                  Saved Books
                </Link>
              </li>
             
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}


export default Nav;


// import React from "react";
// import { Link } from "react-router-dom";

// function Nav() {
//   return (
//     <nav id="nav" className="navbar navbar-expand-lg">
//       <a className="navbar-brand" href="/">
//         My Library{" "}
//       </a>
//       <Link
//         id="search"
//         to="/"
//         className={
//           window.location.pathname === "/" || window.location.pathname === "/"
//             ? "nav-link active"
//             : "nav-link"
//         }
//       >
//         {" "}
//         Search{" "}
//       </Link>
//       <Link
//         id="saved"
//         to="/savedBooks"
//         className={
//           window.location.pathname === "/savedBooks" ||
//           window.location.pathname === "/savedBooks"
//             ? "nav-link active"
//             : "nav-link"
//         }
//       >
//         {" "}
//         Saved{" "}
//       </Link>
//     </nav>
//   );
// }

// export default Nav;
