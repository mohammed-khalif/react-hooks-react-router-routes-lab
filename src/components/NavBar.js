import React from "react";
import { NavLink } from "react-router-dom";
import { CSSProperties } from "react";
function NavBar() {
  return <div className="navbar">(
      <ul>
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink exact to="/Movies">Movies</NavLink></li>
      <li><NavLink exact to="/Directors">Directors</NavLink></li>
      <li><NavLink exact to="/Actors">Actors</NavLink></li>
      </ul>
  )
  </div>
} 

export default NavBar;