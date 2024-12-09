import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white py-6 shadow-md">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-extrabold tracking-wide uppercase">
          ToDo Tracker with Categories
        </h1>
        <p className="text-sm text-blue-200 mt-2">
          Organize your tasks effectively with a clean and simple interface
        </p>
      </div>
    </header>
  );
};

export default Header;
