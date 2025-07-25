import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaArrowRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <section className="bg-black lg:px-32 ">
      <div className="items-center justify-center py-10 lg:justify-between lg:flex">
        <span className="text-furnituregrey">
          Policy Term & Conditions Help
        </span>
        <span className="flex text-3xl font-semibold text-furnituregrey hover:text-furnituregreen">
          <img
            src="/Vector.svg"
            alt="simplewood"
            className="hover:opacity-55"
          />
          SimpleWood.
        </span>
        <div className="flex items-center gap-6">
          <span className="text-furnituregrey">Follow Us on Social</span>
          <div className="flex gap-4">
            <FaFacebookF className="text-furnituregrey" />
            <FaTwitter className="text-furnituregrey" />
            <FaYoutube className="text-furnituregrey" />
            <FaGoogle className="text-furnituregrey" />
          </div>
        </div>
      </div>
      <span className="flex items-center justify-center py-5 text-furnituregrey/50">
        Copyring © Viachas Kul. All right reserved.
      </span>
    </section>
  );
};

export default Footer;
