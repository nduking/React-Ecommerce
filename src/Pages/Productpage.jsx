import React from "react";
import { FaChevronDown, FaStar, FaPlus } from "react-icons/fa";
import Productslider from "../Components/Mini-component/Productslider";
import ToggleDetails from "../Components/Mini-component/ToggleDetails";
import DetailsSection from "../Components/Mini-component/DetailsSection";

const productpage = () => {
  return (
    <section className="mt-32 px-28">
      <div>
        <span>Home</span>
        <span>New Luma Yoga Collection</span>
      </div>
      <div className="grid grid-cols-2">
        <div className="w-[712px]">
          <Productslider />
        </div>
        <div className="w-[530px]">
          <h1>Simple Wood Chair Collection</h1>
          <div className="flex items-center">
            <FaStar className="text-[#FF9900]" />
            <FaStar className="text-[#FF9900]" />
            <FaStar className="text-[#FF9900]" />
            <FaStar className="text-[#C4C4C4]" />
            <FaStar className="text-[#C4C4C4]" />

            <span className="underline text-[#828282] ml-2">3 reviews</span>
            <span className="underline text-[#828282] ml-2">
              Add Your Review
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="">As low as</span>
            <span className="flex items-center text-sm font-bold">
              <img
                src="/Ellipse 11.png"
                alt="Ellipse"
                className="h-[10px] w-[10px]"
              />
              IN STOCK
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-medium">$45.00</span>
            <span className="flex items-center text-">SKU#: 24-MB05</span>
          </div>
        </div>
      </div>
      {/* details */}
      <div className="max-w-4xl mt-16">
        <DetailsSection title="Details" defaultOpen={true}>
          <p className="text-gray-600 ">
            The sofa quickly and easily turns into a spacious bed.
          </p>
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>

        <DetailsSection title="Sizes">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>

        <DetailsSection title="Care Instructions">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>

        <DetailsSection title="Quality and environmental information">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>
        <DetailsSection title="Packing Information">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>
        <DetailsSection title="Instructions and documents">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>
        <DetailsSection title="Product Availability">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>
        <DetailsSection title="Reviews">
          <p className="mt-3 text-gray-600 ">
            It is recommended to use as a sleeping place for guests, not
            intended for daily use as a bed.
          </p>
        </DetailsSection>
      </div>

      {/* <ToggleDetails className="w-[1000px] max-h-min bg-[#F5F5F5] flex items-center px-5" />
      <div>
        <button className=" w-[1000px] h-[50px] bg-[#F5F5F5] items-center flex px-6 mt-3">
          <span className="flex items-center">
            <FaPlus className="mr-1" />
            Details
          </span>
        </button>
      </div> */}

      {/* <div>
        <button className=" w-[1000px] h-[50px] bg-[#F5F5F5] items-center flex px-6 mt-3">
          <span className="flex items-center">
            <FaPlus className="mr-1" />
            Details
          </span>
        </button>
      </div>
      <div>
        <button className=" w-[1000px] h-[50px] bg-[#F5F5F5] items-center flex px-6 mt-3">
          <span className="flex items-center">
            <FaPlus className="mr-1" />
            Details
          </span>
        </button>
      </div>
      <div>
        <button className=" w-[1000px] h-[50px] bg-[#F5F5F5] items-center flex px-6 mt-3">
          <span className="flex items-center">
            <FaPlus className="mr-1" />
            Details
          </span>
        </button>
      </div> */}
      <div className="flex flex-col items-center justify-center">
        <h2 className="py-10 text-3xl">Related Products</h2>
        <div className="grid gap-5 lg:grid-cols-4">
          <div className="2xl:h-[450px] 2xl:w-[288px] space-y-1">
            <img src="/Greychair.png" alt="" />
            <span className="text-base font-semibold text-[#212121] flex">
              Cupboards
            </span>
            <div>
              <span className="line-through text-[#A2A2A2] text-[15px]">
                $45.00
              </span>{" "}
              <span className="text-[#212121] font-semibold text-[15px]">
                $44.00
              </span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#C4C4C4]" />
              <FaStar className="text-[#C4C4C4]" />

              <span className="underline text-[#828282] ml-2">3 reviews</span>
            </div>
          </div>
          <div className="2xl:h-[450px] 2xl:w-[288px] space-y-1">
            <img src="/Goldchair.png" alt="" />
            <span className="text-base font-semibold text-[#212121] flex">
              Cupboards
            </span>
            <div>
              <span className="line-through text-[#A2A2A2] text-[15px]">
                $45.00
              </span>{" "}
              <span className="text-[#212121] font-semibold text-[15px]">
                $44.00
              </span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#C4C4C4]" />
              <FaStar className="text-[#C4C4C4]" />

              <span className="underline text-[#828282] ml-2">3 reviews</span>
            </div>
          </div>
          <div className="2xl:h-[450px] 2xl:w-[288px] space-y-1">
            <img src="/Brownchair.png" alt="" />
            <span className="text-base font-semibold text-[#212121] flex">
              Cupboards
            </span>
            <div>
              <span className="line-through text-[#A2A2A2] text-[15px]">
                $45.00
              </span>{" "}
              <span className="text-[#212121] font-semibold text-[15px]">
                $44.00
              </span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#C4C4C4]" />
              <FaStar className="text-[#C4C4C4]" />

              <span className="underline text-[#828282] ml-2">3 reviews</span>
            </div>
          </div>
          <div className="2xl:h-[450px] 2xl:w-[288px] space-y-1">
            <img src="/Goldchair.png" alt="" />
            <span className="text-base font-semibold text-[#212121] flex">
              Cupboards
            </span>
            <div>
              <span className="line-through text-[#A2A2A2] text-[15px]">
                $45.00
              </span>{" "}
              <span className="text-[#212121] font-semibold text-[15px]">
                $44.00
              </span>
            </div>
            <div className="flex items-center">
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#FF9900]" />
              <FaStar className="text-[#C4C4C4]" />
              <FaStar className="text-[#C4C4C4]" />

              <span className="underline text-[#828282] ml-2">3 reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default productpage;
