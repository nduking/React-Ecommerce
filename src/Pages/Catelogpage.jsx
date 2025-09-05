import React from "react";
import Herocat from "./../Components/Herocat";
import Chairs from "../Components/Chairs";
import HeroCategory from "../Components/Mini-component/HeroCategory";

const Catelogpage = () => {
  return (
    <main>
      <HeroCategory
        children={["Home", "New Luma Yoga Collection"]}
        heading="Simple Wood Chair Collection"
      />
      <Chairs />
    </main>
  );
};

export default Catelogpage;
