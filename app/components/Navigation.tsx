import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">Lost in Space</div>
        <div className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) => `
              text-white px-3 py-2 rounded-md transition duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }
            `}
          >
            Home
          </NavLink>
          <NavLink
            to="/game"
            className={({ isActive }) => `
              text-white px-3 py-2 rounded-md transition duration-300
              ${
                isActive
                  ? "bg-blue-600 text-white"
                  : "hover:bg-gray-700 text-gray-300"
              }
            `}
          >
            Game
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
