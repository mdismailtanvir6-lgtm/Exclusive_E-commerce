import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiSelfLove } from "react-icons/gi";
import { LuUser } from "react-icons/lu";
import { RxCrossCircled } from "react-icons/rx";
import { TiStarOutline } from "react-icons/ti";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiOutlineProduct } from "react-icons/ai";

const Navbar = () => {
  // =========== useState & useRef for user profile =========
  const [profile, setProfile] = useState(false);
  // const profileRef = useRef(null);
  // const profileInfoRef = useRef(null);

  // =========== profile hiding function ==========
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (profileRef.current && !profileRef.current.contains(event.target)) {
  //       setProfile(false);
  //     }

  //     if (profileInfoRef.current && profileInfoRef.current.contains(event.target)) {
  //       setProfile(true);
  //     }

  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  // ============= creating obj for nav item =============
  const navItems = [
    {
      id: 1,
      title: "Home",
      link: "/",
    },

    {
      id: 2,
      title: "Contact",
      link: "/contact",
    },

    {
      id: 3,
      title: "About",
      link: "/about",
    },

    {
      id: 4,
      title: "Sign Up",
      link: "/signUp",
    },
  ];

  return (
    <section className="pt-10 pb-4 border-black_color/25 border-1">
      <div className="container">
        <div className="flex justify-between">
          {/* ========== logo part =========== */}
          <div className="basis-1/4 flex items-center">
            <NavLink
              to={"/header"}
              className="font-inter font-bold text-[24px] leading-[24px] tracking-[0.03em]"
            >
              Exclusive
            </NavLink>
          </div>

          {/* ============ nav item part ========== */}
          <ul className="basis-2/4 flex items-center gap-x-12">
            {navItems?.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.link}
                  className="font-poppins font-normal text-base leading-6 tracking-normal text-center text-black_color"
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* =========== search & icon part =============== */}
          <div className="basis-1/4 flex justify-between gap-x-6">
            <div className="flex gap-x-8 items-center pl-5 pr-3 px-2 bg-secondary_color rounded-[4px]">
              <input
                type="text"
                className="w-[170px] font-poppins font-normal text-xs text-black_color leading-[18px] tracking-normal"
                placeholder="What are you looking for?"
              />

              <span className="text-[20px]">
                <FaSearch />
              </span>
            </div>

            {/* ===========  icon part =============== */}
            <div className="flex items-center gap-x-4 p-[6px]">
              <span className="text-[24px]">
                <GiSelfLove />
              </span>
              <span className="cart-number text-[24px] cursor-pointer">
                <FaShoppingCart />
              </span>
              <div
                className="relative"

                // ref={profileRef}
              >
                <span
                  className="w-10 h-10 bg-secondary_color1 rounded-full flex justify-center items-center text-[24px] font-normal cursor-pointer text-white_color"
                  onClick={() => setProfile(!profile)}
                >
                  <LuUser />
                </span>

                {/* ========== dropdown part ========== */}
                {profile && (
                  <div
                    className={`absolute right-0 top-15.5 w-[224px] rotate-0 opacity-100 rounded-[4px] bg-[#9A939B]  flex flex-col overflow-hidden`}
                    // ref={profileInfoRef}
                  >
                    <div className="px-[15px] py-[10px] flex justify-start items-center gap-x-4 cursor-pointer hover:bg-hoverButton_color2 group transition-all">
                      <span className="text-[30px] text-text_color group-hover:text-black_color">
                        <LuUser />
                      </span>
                      <p className="normal-poppins-font text-text_color group-hover:text-black_color">
                        Manage My Account
                      </p>
                    </div>

                    <div className="px-[15px] py-[10px] flex justify-start items-center gap-x-4 cursor-pointer hover:bg-hoverButton_color2 group transition-all">
                      <span className="text-[30px] text-text_color group-hover:text-black_color">
                        <AiOutlineProduct />
                      </span>
                      <p className="normal-poppins-font text-text_color group-hover:text-black_color">
                        My Order
                      </p>
                    </div>

                    <div className="px-[15px] py-[10px] flex justify-start items-center gap-x-4 cursor-pointer hover:bg-hoverButton_color2 group transition-all">
                      <span className="text-[30px] text-text_color group-hover:text-black_color">
                        <RxCrossCircled />
                      </span>
                      <p className="normal-poppins-font text-text_color group-hover:text-black_color">
                        My Cancellations
                      </p>
                    </div>

                    <div className="px-[15px] py-[10px] flex justify-start items-center gap-x-4 cursor-pointer hover:bg-hoverButton_color2 group transition-all">
                      <span className="text-[30px] text-text_color group-hover:text-black_color">
                        <TiStarOutline />
                      </span>
                      <p className="normal-poppins-font text-text_color group-hover:text-black_color">
                        Reviews
                      </p>
                    </div>

                    <div className="px-[15px] py-[10px] flex justify-start items-center gap-x-4 cursor-pointer hover:bg-hoverButton_color2 group transition-all">
                      <span className="text-[30px] text-text_color group-hover:text-black_color">
                        <RiLogoutBoxRLine />
                      </span>
                      <p className="normal-poppins-font text-text_color group-hover:text-black_color">
                        Logout
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
