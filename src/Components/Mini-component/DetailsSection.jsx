import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const DetailsSection = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-gray-200 ">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full gap-3 px-6 py-4 bg-[#F5F5F5]"
      >
         {isOpen ? (
          <FaMinus className="w-4 h-4" />
        ) : (
          <FaPlus className="w-4 h-4" />
        )}
        <span className="font-medium">{title}</span>
       
      </button>
      {isOpen && <div className="p-6 ">{children}</div>}
    </div>
  );
};

export default DetailsSection;
