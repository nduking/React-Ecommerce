import React from "react";
import {
  FaChevronDown,
  FaRegHeart,
  FaRegUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute inset-0 top-0 left-0 right-0 z-50 h-16 py-5 lg:px-32 bg:-transparent 2xl:px-auto">
      <div className="flex flex-row items-center justify-between">
        <div className="hidden lg:block">
          <input
            type="Search"
            placeholder="Search "
            className="px-4 py-1 rounded-full focus:bg-furnituregreen"
          />
        </div>
        <span className="flex ml-4 text-3xl font-semibold text-furnituregrey hover:text-furnituregreen lg:px-0">
          <img
            src="/Vector.svg"
            alt="simplewood"
            className="hover:opacity-55"
          />
          SimpleWood.
        </span>
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
        {/* mobile menu */}
        <div className="mr-4 text-3xl text-furnituregrey lg:hidden">
          <IoMdMenu />
        </div>
      </div>
      <div className="hidden lg:py-6">
        <ul className="flex items-center justify-center gap-6">
          <Link
            to="/"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Home
          </Link>
          <Link
            to="/"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Products
          </Link>
          <Link
            to="/"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Elements
          </Link>
          <Link
            to="/"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Pages
          </Link>
          <Link
            to="/"
            className="text-base font-semibold hover:underline text-furnituregrey hover:text-furnituregreen"
          >
            Shop
          </Link>
          <Link
            to="/"
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
