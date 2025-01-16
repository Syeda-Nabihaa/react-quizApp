import React from "react";
import Dropdown from "../dropdown";
import { FiAlignJustify, FiSearch } from "react-icons/fi";
import { Link } from "react-router-dom";
// import navbarimage from "assets/img/layout/Navbar.png";
import { BsArrowBarUp } from "react-icons/bs";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import {
  IoMdNotificationsOutline,
  // IoMdInformationCircleOutline,
} from "react-icons/io";
// import avatar from "assets/img/avatars/avatar4.png";

const Navbar = ({ onOpenSidenav, brandText }) => {
  const [darkmode, setDarkmode] = React.useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle("dark");
    setDarkmode(!darkmode);
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      <div className="ml-[6px]">
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white"
            href="/#"
            onClick={(e) => e.preventDefault()}
          >
            Pages
            <span className="mx-1 text-sm text-navy-700 dark:text-white">
              /
            </span>
          </a>
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>
        <p className="text-[33px] capitalize text-navy-700 dark:text-white">
          <Link to="#" className="font-bold capitalize">
            {brandText}
          </Link>
        </p>
      </div>

      <div className="relative mt-[3px] flex h-[61px] w-[355px] items-center justify-around gap-2 rounded-full bg-white px-2 py-2 shadow-xl dark:bg-navy-800 md:w-[365px] xl:w-[365px]">
        <div className="flex h-full items-center rounded-full bg-lightPrimary text-navy-700 dark:bg-navy-900 xl:w-[225px]">
          <FiSearch className="h-4 w-4 text-gray-400 pl-3" />
          <input
            type="text"
            placeholder="Search..."
            className="h-full w-full rounded-full bg-lightPrimary text-sm text-navy-700 outline-none placeholder-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder-white"
          />
        </div>
        <span
          className="flex cursor-pointer text-xl text-gray-600 xl:hidden"
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>

        {/* Notification Dropdown */}
        <Dropdown
          button={
            <IoMdNotificationsOutline className="h-4 w-4 text-gray-600 dark:text-white cursor-pointer" />
          }
          animation="origin-[65%_0%] transition-all duration-300"
        >
          <div className="flex flex-col gap-3 rounded-2xl bg-white p-4 shadow-xl dark:bg-navy-700 sm:w-[460px]">
            <div className="flex items-center justify-between">
              <p className="text-base font-bold text-navy-700 dark:text-white">
                Notifications
              </p>
              <button className="text-sm font-bold text-navy-700 dark:text-white">
                Mark all read
              </button>
            </div>
            {/* Notification Item */}
            <button className="flex w-full items-center">
              <div className="flex h-full w-[85px] items-center justify-center rounded-xl bg-gradient-to-b from-brandLinear to-brand-500 py-4 text-white">
                <BsArrowBarUp />
              </div>
              <div className="ml-2 flex flex-col text-left text-sm">
                <p className="text-base font-bold dark:text-white">
                  New Update: Horizon UI Dashboard PRO
                </p>
                <p className="text-xs dark:text-white">
                  A new update for your downloaded item is available!
                </p>
              </div>
            </button>
          </div>
        </Dropdown>

        {/* Dark Mode Toggle */}
        <div
          className="cursor-pointer text-gray-600 dark:text-white"
          onClick={toggleDarkMode}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4" />
          ) : (
            <RiMoonFill className="h-4 w-4" />
          )}
        </div>

        {/* Profile Dropdown */}
        <Dropdown
          button={
            <img
              className="h-10 w-10 rounded-full"
              // src={avatar}
              alt="Profile"
            />
          }
          classNames="py-2 top-8 w-max"
        >
          <div className="flex flex-col w-56 rounded-2xl bg-white p-4 shadow-xl dark:bg-navy-700">
            <p className="text-sm font-bold">👋 Hey, Adela</p>
            <hr className="my-2 border-gray-200 dark:border-white/20" />
            <a href="/#" className="text-sm dark:text-white">
              Profile Settings
            </a>
            <a href="/#" className="mt-3 text-sm dark:text-white">
              Newsletter Settings
            </a>
            <a href="/#" className="mt-3 text-sm font-medium text-red-500">
              Log Out
            </a>
          </div>
        </Dropdown>
      </div>
    </nav>
  );
};

export default Navbar;
