import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div
      className={`nav-item border-b-2 h-[80%] flex justify-center items-center w-32 uppercase font-semibold ${
        match ? "text-sky-500 border-sky-500" : "text-gray-500"
      }`}
    >
      <Link to={to} {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
