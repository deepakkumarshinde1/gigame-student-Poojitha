import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <header>
        <ul className="nav">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/text">Text</NavLink>
          </li>
          <li>
            <NavLink to="/list">List</NavLink>
          </li>
        </ul>
      </header>
      <Outlet />
    </>
  );
}

export default Layout;
