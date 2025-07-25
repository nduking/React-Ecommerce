import React from "react";
import { FaChevronRight } from "react-icons/fa";
const Herocat = () => {
  return (
    <section className="py-24 bg-[url(/furniturebg.svg)] lg:px-28 px-12 md:px-18">
      <div className="flex items-center py-4 text-furnituregrey">
        <span className="flex items-center gap-2">
          Home <FaChevronRight />
        </span>{" "}
        <span>New Luma Yoga Collection</span>
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-furnituregrey">
        Simple Wood Chair Collection
      </h1>
    </section>
  );
};

export default Herocat;
