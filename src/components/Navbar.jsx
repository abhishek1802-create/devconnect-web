import { memo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import appLogo from "../assets/DC_Logo.svg";
import NavButtons from "./NavButtons";

const Navbar = () => {
  const user = useSelector((state) => state.user);

  // if (!user) {
  //   return null;
  // }

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle cursor-pointer"
          >
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
                d="M4 6h16M4 12h16M4 18h7"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow"
          >
            <Navigation />
          </ul>
        </div>
      </div>
      <Link to="/feed" className="navbar-center">
        <img className="w-16 h-16" src={appLogo} alt="app-logo" />
      </Link>
      <div className="navbar-end">
        {user ? (
          <span className="font-semibold text-sm hover:bg-gray-300 cursor-pointer p-2 rounded-2xl">
            Welcome, {user?.firstName}
          </span>
        ) : null}
        <div className=" ml-3 w-[2px] h-5 flex justify-center items-center bg-black"></div>
        <NavButtons />
      </div>
    </div>
  );
};

export default memo(Navbar);
