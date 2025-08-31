import React from "react";
import { FaStar } from "react-icons/fa";
import Productslider from "../Components/Mini-component/Productslider";
import DetailsSection from "../Components/Mini-component/DetailsSection";
const Reviewpage = () => {
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
        <DetailsSection title="Details">
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
        <DetailsSection title="Reviews" defaultOpen={true}>
          <div className="py-5 border-b border-grey-200">
            <h3 className="text-[23px] font-light text-[#828282]">
              Customer Reviews
            </h3>
            <p className="mt-4 font-medium text-[#212121] text-lg">
              As an ocean lifeguard, I've used several types of lower grade
              binos in the past and eventually just gave up on using binos all
              together because they would always have issues.
            </p>
            <div className="flex flex-row justify-between mt-4">
              <div>
                <div className="flex items-center">
                  <span className="text-[#828282] mr-3">Ratings</span>
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#C4C4C4]" />
                  <FaStar className="text-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="text-sm text-[#212121]">
                  Rides up a bit during workouts but otherwise it's pretty
                  comfy! I like the hood.
                </p>
                <p className="text-sm text-[#828282]">Review by Gala 3/25/19</p>
              </div>
            </div>
          </div>
          <div className="py-5 border-b border-grey-200">
            <h3 className="text-lg font-light text-[#212121]">
              Rides up during workouts
            </h3>
            <p className="mt-4 font-medium text-[#212121] text-lg">
              As an ocean lifeguard, I've used several types of lower grade
              binos in the past and eventually just gave up on using binos all
              together because they would always have issues.
            </p>
            <div className="flex flex-row justify-between mt-4">
              <div>
                <div className="flex items-center">
                  <span className="text-[#828282] mr-3">Ratings</span>
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#C4C4C4]" />
                  <FaStar className="text-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="text-sm text-[#212121]">
                  Rides up a bit during workouts but otherwise it's pretty
                  comfy! I like the hood.
                </p>
                <p className="text-sm text-[#828282]">Review by Gala 3/25/19</p>
              </div>
            </div>
          </div>
          <div className="py-5 border-b border-grey-200">
            <h3 className="text-lg font-light text-[#212121]">
              Rides up during workouts
            </h3>
            <p className="mt-4 font-medium text-[#212121] text-lg">
              As an ocean lifeguard, I've used several types of lower grade
              binos in the past and eventually just gave up on using binos all
              together because they would always have issues.
            </p>
            <div className="flex flex-row justify-between mt-4">
              <div>
                <div className="flex items-center">
                  <span className="text-[#828282] mr-3">Ratings</span>
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#FF9900]" />
                  <FaStar className="text-[#C4C4C4]" />
                  <FaStar className="text-[#C4C4C4]" />
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <p className="text-sm text-[#212121]">
                  Rides up a bit during workouts but otherwise it's pretty
                  comfy! I like the hood.
                </p>
                <p className="text-sm text-[#828282]">Review by Gala 3/25/19</p>
              </div>
            </div>
          </div>
          {/* form */}
          <div>
            <p>You're reviewing:</p>
            <span>Mona Pullover Hoodlie</span>
          </div>
        </DetailsSection>
      </div>

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

export default Reviewpage;
