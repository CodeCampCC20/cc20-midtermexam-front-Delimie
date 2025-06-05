import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const menus = [
    { id: 1, menu: "Login", path: "/" },
    { id: 2, menu: "My To Do", path: "/mytodo" },
    { id: 3, menu: "Movie", path: "/movie" },
  ];
  return (
    <nav className="bg-(#080d19) text-white flex justify-center py-2 gap-8">
      {menus.map((item) => (
        <NavLink key={item.id} to={item.path}>
          {item.menu}
        </NavLink>
      ))}
    </nav>
  );
}

export default NavBar;
