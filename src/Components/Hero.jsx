import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGoogle,
  FaArrowRight,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative bg-[url(/furniturebg.svg)] h-max py-20 object-cover bg-no-repeat">
      <div className="grid grid-cols-1 gap-6 px-32 lg:grid-cols-2 2xl:px-auto">
        {/* leftside */}
        <div className="flex items-center justify-center gap-10">
            {/* social Icons */}
          <div className="flex gap-5 lg:flex-col">
            <FaFacebookF className="text-furnituregrey" />
            <FaTwitter className="text-furnituregrey" />
            <FaYoutube className="text-furnituregrey" />
            <FaGoogle className="text-furnituregrey" />
          </div>
          <div className="flex flex-col items-start ml-20 space-y-5">
            <h1 className="text-3xl font-bold text-furnituregrey 2xl:w-[60%] lg:w-[65%]">
              SimpleWood Chair Collection
            </h1>
            <p className="text-furnituregrey/80 font-[300] text-sm 2xl:w-[55%] lg:w-[65%]">
              Find hand-curated collections that fit your style, space, and
              budget.
            </p>
            <button className="font-semibold bg-furnituregreen text-furnituregrey px-5 py-2 w-[] flex items-center justify-center gap-2">
              Shop Now <FaArrowRight />
            </button>
          </div>
        </div>
        {/* rightside */}
        <div className="flex gap-3 mt-14">
          <div className="flex space-y-3 lg:flex-col">
            <img src="/image 42.svg" alt="" />
            <img src="/image 43.svg" alt="" />
          </div>
          <img src="/image 40.svg" alt="" />
        </div>
        {/* paganation */}
        <div className="flex justify-center gap-2">
          <div className="rounded-full bg-furnituregreen h-[10px] w-[10px]"></div>
          <div className="rounded-full bg-furnituregrey/80 h-[10px] w-[10px]"></div>
          <div className="rounded-full bg-furnituregrey/80 h-[10px] w-[10px]"></div>
          <div className="rounded-full bg-furnituregrey/80 h-[10px] w-[10px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
