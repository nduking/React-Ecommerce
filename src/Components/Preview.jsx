import React from "react";
import { MdAdd } from "react-icons/md";

const Preview = () => {
  return (
    <section className="2xl:px-80 lg:px-14">
      <div>
        <div className="grid grid-cols-1 gap-6 py-5 lg:grid-cols-2">
          {/* left */}
          <div className="space-y-8">
            {/* sofa */}
            <div>
              <img src="/sofa.svg" alt="sofa" className="w-[606px] h-[396px]" />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Sofas
              </span>
            </div>
            {/* Tables */}
            <div>
              <img src="/Tables.png" alt="table" className="w-[606px]" />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Tables
              </span>
            </div>
            {/* Floor lamps & Fixtures */}
            <div>
              <img
                src="/lamp.png"
                alt="Floor lamps & Fixtures"
                className="w-[606px]"
              />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Floor lamps & Fixtures
              </span>
            </div>
            {/* Commode */}
            <div>
              <img
                src="/commode.svg"
                alt="Commode"
                className="w-[606px] h-[396px]"
              />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Commode
              </span>
            </div>
          </div>
          {/* right */}
          <div className="space-y-8">
            {/* cupboards */}
            <div>
              <img src="/cupboard.png" alt="cupboard" className="w-[606px]" />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Cupboards
              </span>
            </div>
            {/* Beds $ Mattresses */}
            <div>
              <img src="/bed.png" alt="cupboard" className="w-[606px]" />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Beds & Mattresses
              </span>
            </div>
            {/* Discount */}
            <div className="border h-[380px] py-10 px-10 flex flex-col justify-center space-y-8">
           <h1>
               <span className="text-3xl">Get</span>{" "}
              <span className="text-3xl font-semibold text-furnituregreen">
                10%
              </span>
              {""}
              <span className="text-3xl">Discount</span>
           </h1>
              <p className="text-[#A2A2A2] text-base font-normal">
                Get 10% discount with notified about the latest news and
                updates, no spam, we proise1
              </p>
              <input
                type="text"
                placeholder="Enter your email address"
                className="px-5 py-3 border rounded-full w-[315px]"
              />
            </div>
            {/* Shelving */}
            <div>
              <img src="/shelving.png" alt="Shelving" className="w-[606px]" />
              <span className="flex items-center text-lg font-[300] gap-1">
                <MdAdd className="rounded-full bg-[#F2F2F2] text-furnituregreen" />
                Shelving
              </span>
            </div>
          </div>
        </div>

        {/* join our newsletter */}
        <div className="bg-[#EBEFE5] h-[203px] lg:w-[1150px] px-32 flex">
          <div className="flex justify-center item-center lg:flex-col">
            <h1 className="text-xl font-semibold">
              Join our newsletter for £10 off
            </h1>
            <p className="w-[75%] py-3 text-[#828282]">
              We'll email you a voucher worth £10 off your first order over £50.
              By subscribing you agree to our Terms & Conditions and Privacy &
              Cookies Policy.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <input
              type="search"
              placeholder="Enter your email address"
              className="px-5 py-2 rounded-full w-[300px] h-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Preview;
