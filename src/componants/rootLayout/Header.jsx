import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <section className="bg-black_color py-[12px]">
      <div className="container">
        <div className="flex justify-end gap-[231px]">
          {/* ======== first part ======== */}
          <div className="flex gap-[8px]  text-[14px] text-text_color leading-[25px] font-poppins">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              <span>50%!</span>
            </p>
            <button className="font-semibold underline cursor-pointer">Shop Now</button>
          </div>

          {/* ======== second part / language ======== */}
          <div className="flex gap-[5px] items-center"><p className="text-[14px] leading-[21px] text-text_color font-poppins font-normal">English</p>
          <button className="text-white_color font-bold font-poppins cursor-pointer"><MdOutlineKeyboardArrowDown /></button></div>

        </div>
      </div>
    </section>
  );
};

export default Header;
