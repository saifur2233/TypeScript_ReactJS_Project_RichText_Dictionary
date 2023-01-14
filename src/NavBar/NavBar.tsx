import React from "react";
import { FaAdjust } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <h2 className="font-bold text-xl"> Rich-Text-Dictionary</h2>
        </a>
      </div>
      <div className="flex-none">
        <button className="btn btn-ghost btn-circle">
          <FaAdjust></FaAdjust>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
