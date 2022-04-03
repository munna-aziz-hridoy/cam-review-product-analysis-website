import React from "react";

const Error404 = () => {
  return (
    <div className="container mx-auto h-[60vh] flex flex-col justify-center items-center gap-5">
      <h2 className="text-7xl font-bold text-red-300 text-center">404</h2>
      <p className="text-3xl font-semibold text-gray-500">
        The page your are looking for is not found. please make sure you enter a
        valid url
      </p>
      <p className="text-sm text-[#01acfa]">Thank you for staying with us</p>
    </div>
  );
};

export default Error404;
