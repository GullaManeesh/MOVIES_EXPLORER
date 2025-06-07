import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="h-15 w-full  p-5 ">
      <div className="w-[10%]  flex justify-between items-center">
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-amber-600 underline underline-offset-4"
                : "no-underline"
            } hover:underline hover:underline-offset-4 hover:text-amber-600`
          }
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? " text-amber-600 underline underline-offset-4"
                : "no-underline"
            } hover:underline hover:underline-offset-4 hover:text-amber-600`
          }
          to="favorites">
          Favorites
        </NavLink>
        {/* <NavLink
          className={({ isActive }) =>
            `${
              isActive
                ? "text-amber-600 underline underline-offset-4"
                : "no-underline"
            } hover:underline hover:underline-offset-4 hover:text-amber-600`
          }
          to="about">
          About
        </NavLink> */}
      </div>
    </div>
  );
};

export default Header;
