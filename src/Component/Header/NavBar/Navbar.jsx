import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const Links = (
      <>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 underline font-semibold mr-3"
              : "text-gray-600 hover:text-purple-600 font-semibold mr-3"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 underline font-semibold mr-3"
              : "text-gray-600 hover:text-purple-600 font-semibold mr-3"
          }
        >
          Listed Books
        </NavLink>
        <NavLink
          to={"/read"}
          className={({ isActive }) =>
            isActive
              ? "text-purple-600 underline font-semibold mr-3"
              : "text-gray-600 hover:text-purple-600 font-semibold mr-3"
          }
        >
          Pages to Read
        </NavLink>
      </>
    );

    return (
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{Links}</ul>
        </div>
        <div className="navbar-end flex gap-4">
          <a className="btn btn-success text-white">Sign In</a>
          <a className="btn btn-info text-white">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;