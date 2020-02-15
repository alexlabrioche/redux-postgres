import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const Navbar = props => {
  console.log(props);

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/secret">Secret</Link>
        </li>
        {!props.isAuth && (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

Navbar.propTypes = {
  isAuth: PropTypes.bool
};

export default Navbar;
