import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Link to="">
          <img src="assets/shared/logo.svg" alt="" className="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/destination">Destination</Link>
          </li>
          <li>
            <Link to="/crew">Crew</Link>
          </li>
          <li>
            <Link to="/technology">Technology</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
