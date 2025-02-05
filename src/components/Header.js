import React from 'react';
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const NameFont = "text-base sm:text-base md:text-base lg:text-lg xl:text-xl header font-normal text-stone-950";
  const NavFont = "text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl header font-normal no-underline text-stone-950";

  return (
    <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row gap-1 mb-30">
      {/* Site Name */}
      <div className="flex flex-1 justify-center sm:justify-center md:justify-start lg:justify-start xl:justify-start">
        <NavLink to={"/website"} className="no-underline">
          <p className={NameFont}>Kotoe Takeda</p>
        </NavLink>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-1 justify-center sm:justify-center md:justify-end lg:justify-end xl:justify-end gap-5">
      
      <NavLink
          to="/website"
          className={({ isActive }) =>
            `${NavFont} ${
              isActive
                ? "text-stone-950 underline"
                : "text-stone-400 hover:text-stone-950 hover:underline"
            }`
          }
        > Home </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${NavFont} ${
              isActive
                ? "text-stone-950 underline"
                : "text-stone-400 hover:text-stone-950 hover:underline"
            }`
          }
        > About </NavLink>

        <a
          href="/Kotoe_Takeda_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={`${NavFont} text-stone-400 hover:text-stone-950 hover:underline`}
        > Resume </a>
      </div>
    </div>
  );
};

export default Header;
