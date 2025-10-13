import React, { Component } from "react";
import { category } from "../../../Data/data";
import { bannerImg } from "../../../Data/data";

// ========== swiper slider ===========
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { LiaAngleRightSolid } from "react-icons/lia";

const Banner = () => {
  return (
    <section className="pb-[140px] bg-white_color">
      <div className="container">
        <div className="flex items-start justify-between">
          
          {/* ========== category part ======= */}
          <div className="pt-10 basis-[20%] border-black_color/25 border-r-1">
            <ul>
              {category?.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center justify-between py-2.5 cursor-pointer hover:text-secondary_color1 hover:bg-secondary_color hover:pl-3 transition-all"
                >
                  <p className="text-[16px] font-poppins font-normal">
                    {item.title}
                  </p>
                  {item.subtitle && (
                    <span className="pr-[15px] text-[16px]">
                      {<LiaAngleRightSolid />}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* ========== slider part ======= */}
          <div className="basis-[80%] pl-[45px] pt-10">
            {/* =========== swiper slider ========== */}
            <div className="max-w-[880px] rounded-2xl overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                  delay: 3000, 
                  disableOnInteraction: false, 
                  pauseOnMouseEnter: true,
                }}
              >
                <div className="w-[100%]">
                  {bannerImg?.map((item) => (
                    <SwiperSlide>
                      <picture className="h-[344px] rounded-2xl">
                        <img
                          className="w-full h-full rounded-2xl object-cover"
                          src={item.img}
                          alt={item.img}
                        />
                      </picture>
                    </SwiperSlide>
                  ))}
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
