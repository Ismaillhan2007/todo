import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ToDo Tracker. Built with 💙 using React and Tailwind CSS.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Stay productive, one task at a time.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
