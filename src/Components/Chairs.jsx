import React from "react";
import { FaChevronDown, FaStar } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { CgMenuGridR } from "react-icons/cg";
import { ImArrowUp } from "react-icons/im";

const Chairs = () => {
  return (
    <section className="flex px-28">
      <div className="grid grid-cols-3 py-6">
        {/* left */}
        <div className="w-[278px] space-y-4">
          <h3 className="text-lg font-semibold">Shopping Options</h3>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Style</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Category</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Style</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Size</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t">
            <span>Price</span>
            <FaChevronDown />
          </div>
          <div className="flex items-center justify-between text-[#4F4F4F] text-base border-t border-b py-2">
            <span>Color</span>
            <FaChevronDown />
          </div>
          <div>
            <span className="text-lg font-sm text-[#212121]">
              Compare Products
            </span>{" "}
            <span className="text-xs text-[#828282]">(2 items)</span>
          </div>
          <span className="flex items-center gap-2 text-sm underline">
            <IoClose />
            Summit Watch
          </span>
          <span className="flex items-center gap-2 text-sm underline">
            <IoClose />
            Cruise Dual Analog Watch
          </span>
          <div className="flex space-x-9 ">
            <button className="text-sm border bg-furnituregreen text-furnituregrey w-[100px] py-2">
              Compare
            </button>
            <button className="text-sm underline">Clear All</button>
          </div>
        </div>
        {/* rightside top */}
        <div className="col-span-2 ">
         <div className="flex justify-between">
             {/* items */}
          <div className="flex items-center ">
            <span className="h-[34px] w-[34px] bg-[#DEDEDE] flex items-center justify-around">
              <CgMenuGridR />
            </span>
            <span className="h-[34px] w-[34px] bg-[#F0F0F0] flex items-center justify-around">
              <img src="/Group 3.png" alt="" />
            </span>
            <p className="text-sm font-normal text-[#828282] ml-5">Items 1-9 of 32</p>
          </div>
          {/* sort */}
          <div className="flex items-center gap-4">
            <span className="text-[#828282] font-normal text-sm">Sort By</span>
            <button className="flex items-center justify-between w-[130px] h-[34px] bg-[#F0F0F0] px-3">Position <FaChevronDown /></button>
            <ImArrowUp />
          </div>
         </div>
         {/* display */}
         <div className="grid grid-cols-3 py-5 gap-x-4">
            {/* left-side */}
            <div className="">
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Greychair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Goldchair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Greychair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                
            </div>
            {/* middle-side */}
            <div className="">
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Goldchair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Brownchair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Goldchair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
            </div>
            {/* right-side */}
            <div className="">
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Brownchair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Greychair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
                <div className="h-[450px] w-[288px] space-y-1">
                    <img src="/Greychair.png" alt="" />
                    <span className="text-base font-semibold text-[#212121] flex">Cupboards</span>
                    <div><span className="line-through text-[#A2A2A2] text-[15px]">$45.00</span> <span className="text-[#212121] font-semibold text-[15px]">$44.00</span></div>
                    <div className="flex items-center">
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#FF9900]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        <FaStar className="text-[#C4C4C4]"/>
                        
                        <span className="underline text-[#828282] ml-2">3 reviews</span>
                    </div>
                </div>
            </div>
         </div>
        </div>
      </div>
    </section>
  );
};

export default Chairs;
