import React from "react";
import {
  FaChevronDown,
  FaRegHeart,
  FaRegUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link, useLocation } from "react-router-dom"; // Import useLocation to detect current route

const Navbar = () => {
  const location = useLocation(); // Get current location object from React Router

  // Check if the current path is NOT the homepage
  // This will be true for any route except "/"
  const isNotHome = location.pathname !== "/";

  return (
    // Apply background conditionally:
    // If not on homepage, use "bg-white" and "shadow-md" for a visible navbar
    // If on homepage, keep it transparent
    <nav
      className={`absolute inset-0 top-0 left-0 right-0 z-50 h-32 py-5 lg:px-32 2xl:px-auto ${
        isNotHome ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      {/* Top section of navbar */}
      <div className="flex flex-row items-center justify-between">
        {/* Search bar (visible only on large screens) */}
        <div className="hidden lg:block">
          <input
            type="Search"
            placeholder="Search "
            className="px-4 py-1 rounded-full focus:bg-furnituregreen"
          />
        </div>

        {/* Logo and brand name */}
        <span className="flex ml-4 text-3xl font-semibold text-furnituregrey hover:text-furnituregreen lg:px-0">
          <img
            src="/Vector.svg"
            alt="simplewood"
            className="hover:opacity-55"
          />
          SimpleWood.
        </span>

        {/* Icons and language/currency options (visible only on large screens) */}
        <div className="hidden lg:flex lg:gap-3 lg:items-center">
          <span className="flex items-center gap-1 text-furnituregrey hover:text-furnituregreen">
            English <FaChevronDown className="text-[13px]" />
          </span>
          <span className="flex items-center gap-1 text-furnituregrey hover:text-furnituregreen">
            USD <FaChevronDown className="text-[13px]" />
          </span>
          <FaRegHeart className="text-furnituregrey hover:text-furnituregreen" />
          <FaRegUserCircle className="text-furnituregrey hover:text-furnituregreen" />
          <FaShoppingCart className="text-furnituregrey hover:text-furnituregreen" />
        </div>

        {/* Mobile menu icon (visible only on small screens) */}
        <div className="mr-4 text-3xl text-furnituregrey lg:hidden">
          <IoMdMenu />
        </div>
      </div>

      {/* Navigation links */}
      <div className="lg:py-6">
        <ul className="flex items-center justify-center gap-6">
          {/* Each Link navigates to a different route */}
          <Link
            to="/"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Home
          </Link>
          <Link
            to="/products"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Products
          </Link>
          <Link
            to="/elements"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Elements
          </Link>
          <Link
            to="/pages"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Pages
          </Link>
          <Link
            to="/shop"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Shop
          </Link>
          <Link
            to="/sale"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Sale
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
