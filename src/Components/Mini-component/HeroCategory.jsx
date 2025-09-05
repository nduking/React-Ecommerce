import React from 'react';
import { FaChevronRight } from "react-icons/fa";

const HeroCategory = ({children=[],heading}) => {
  return (
    <section  className="py-24 bg-[url(/furniturebg.svg)] lg:px-28 px-12 md:px-18 mt-8">
       <div className="flex items-center py-4 text-furnituregrey">
        {children.map((item, index) => (
          <span key={index} className="flex items-center gap-2">
            {item}
            {index < children.length - 1 && <FaChevronRight />}
          </span>
        ))}
      </div>
      <h1 className="text-2xl md:text-3xl lg:text-4xl text-furnituregrey">
        {heading}
      </h1>
      </section>
  )
}

export default HeroCategory