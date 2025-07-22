import React from "react";
import {
  FaChevronDown,
  FaRegHeart,
  FaRegUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute inset-0 top-0 left-0 right-0 z-50 h-16 py-5 lg:px-32 bg:-transparent 2xl:px-auto">
      <div className="flex flex-row items-center justify-between">
        <div>
          <input
            type="Search"
            placeholder="Search "
            className="px-4 py-1 rounded-full focus:bg-furnituregreen"
          />
        </div>
        <span className="flex font-bold text-furnituregrey hover:text-furnituregreen">
          <img
            src="/Vector.svg"
            alt="simplewood"
            className="hover:opacity-55"
          />
          SimpleWood.
        </span>
        <div className="flex items-center gap-3 ">
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
      </div>
      <div className="py-6">
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
