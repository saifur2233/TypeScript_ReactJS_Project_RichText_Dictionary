import React, { useEffect, useState } from "react";
import { FaAdjust } from "react-icons/fa";

const NavBar = () => {
  const [dark, setDark] = useState<boolean>(false);
  const handleDark = () => {
    setDark(!dark);
    localStorage.setItem("dark-mode", !dark);
  };

  useEffect(() => {
    const localDark = JSON.parse(localStorage.getItem("dark-mode"));
    console.log(localDark);
    setDark(localDark);
  }, []);

  useEffect(() => {
    if (dark) {
      document.querySelector("html")?.setAttribute("data-theme", "night");
    } else {
      document.querySelector("html")?.setAttribute("data-theme", "lemonade");
    }
  }, [dark]);
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <h2 className="font-bold text-xl"> Rich-Text-Dictionary</h2>
        </a>
      </div>
      <div className="flex-none">
        <button onClick={handleDark} className="btn btn-ghost btn-circle">
          <FaAdjust></FaAdjust>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
