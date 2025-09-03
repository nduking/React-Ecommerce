import React from 'react'
import { FaChevronRight } from "react-icons/fa";
const Herosign = () => {
  return (
     <section className="py-24 bg-[url(/furniturebg.svg)] lg:px-28 px-12 md:px-18 mt-11">
          <div className="flex items-center py-4 text-furnituregrey">
            <span className="flex items-center gap-2">
              Home <FaChevronRight />
            </span>{" "}
            <span>Inner page Example</span>
          </div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-furnituregrey">
            Create New Customer Account
          </h1>
        </section>
  )
}

export default Herosign