import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const navRoutes = ["home", "review", "dashboard", "blogs", "about"];
  return (
    <div className="flex justify-center items-center gap-10 h-16 shadow-2xl">
      {navRoutes.map((navItem) => (
        <CustomLink key={navItem} to={navItem}>
          {navItem}
        </CustomLink>
      ))}
    </div>
  );
};

export default Header;
