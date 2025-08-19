import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Pagination } from "swiper/modules";
import "swiper/css/bundle"; // Import Swiper styles

const Productslider = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* Each SwiperSlide represents one image or item */}
      <SwiperSlide className="">
        <div className="w-[700px]"><img src="/Brownchair.png" alt="Brown Chair" /></div>
      </SwiperSlide>
      {/* <SwiperSlide>
        <div className="w-[700px]"><img src="/commode.png" alt="Commode" /></div>
      </SwiperSlide> */}

    </Swiper>
  );
};

export default Productslider;

