import React from "react";
import Herosign from "../Components/Herosign";
import HeroCategory from "../Components/Mini-component/HeroCategory";

const SignupPage = () => {
  return (
    <section>
      <HeroCategory
        children={["Home", "Inner page Example"]}
        heading="Create New Customer Account"
      />
      <div className="flex justify-center pt-16 pb-16">
        <div className="flex flex-col space-y-4 w-[640px]">
          <span className="text-lg font-semibold ">Personal Information</span>
          {/* fnamt */}
          <div className="flex items-center space-x-7">
            <span>First name *</span>
            <input
              type="text"
              placeholder="First Name"
              className="px-2 py-1 border-2 w-[400px]"
            />
          </div>
          <div className="flex items-center space-x-7">
            <span>Last name *</span>
            <input
              type="text"
              placeholder="Last Name"
              className="px-2 py-1 border-2 w-[400px]"
            />
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" name="" id="" />{" "}
            <span>Sign Up for Newsletter</span>
          </div>

          {/* Email */}
          <div className="flex flex-col pt-5 space-y-4">
            <span className="text-lg font-semibold">Email & Password</span>
            <div className="flex items-center space-x-16">
              <span>Email *</span>
              <input
                type="email"
                placeholder="daisy.watson@example.com"
                className="border-2 w-[400px] py-1 px-2"
              />
            </div>
            <div className="flex items-center space-x-9">
              <span>Password *</span>
              <input
                type="password"
                placeholder="password"
                className="border-2 w-[400px] py-1 px-2"
              />
            </div>
            <div className="flex items-center space-x-9">
              <span>
                Confirm <br></br>Password *
              </span>
              <input
                type="password"
                placeholder="Password"
                className="border-2 w-[400px] py-1 px-2"
              />
            </div>
          </div>
          {/* CTA */}
          <div className="flex py-10 space-x-80 ">
            <button className="text-base font-bold bg-[#7DB800] text-white py-2 px-3 rounded-sm">
              Create an Account
            </button>
            <button className="text-base font-bold text-[#A2A2A2]">Back</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupPage;
