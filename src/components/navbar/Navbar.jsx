import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

class Navbar extends Component {
  state = [
    {
      to: "/",
      name: "Home",
    },
    {
      to: "portfolio",
      name: "Portfolio",
    },
    {
      to: "about",
      name: "About",
    },
    {
      to: "contact",
      name: "Contact",
    },
  ];

  render() {
    const nav = this.state.map((item) => (
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "unActive")}
          to={item.to}
        >
          {item.name}
        </NavLink>
      </li>
    ));

    return (
      <>
        <nav>
          <div className="container">
            <Link to="/">START REACT</Link>
            <ul>{nav}</ul>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
