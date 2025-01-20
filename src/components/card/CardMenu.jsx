import React from "react";
// import Dropdown from "components/dropdown";
import Dropdown from "../dropdown";
import { AiOutlineUser, AiOutlineShop } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { TiLightbulb } from "react-icons/ti";

function CardMenu({ transparent }) {
  const [open, setOpen] = React.useState(false);

  return (
    <Dropdown
      button={
        <button
          onClick={() => setOpen(!open)}
          className={`flex items-center text-xl hover:cursor-pointer ${
            transparent
              ? "bg-none text-white hover:bg-none active:bg-none"
              : "bg-lightPrimary p-2 text-brand-500 hover:bg-gray-100 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10"
          } linear justify-center rounded-lg font-bold transition duration-200`}
        >
          <BsThreeDots className="h-6 w-6" />
        </button>
      }
      animation={"origin-top-right transition-all duration-300 ease-in-out"}
      classNames={`${transparent ? "top-8" : "top-11"} right-0 w-max`}
    >
      <div className="z-50 w-max rounded-xl bg-white py-3 px-4 text-sm shadow-xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <div className="hover:text-black flex cursor-pointer items-center gap-2 text-gray-600 hover:font-medium">
          <AiOutlineUser />
          <span>Panel 1</span>
        </div>
        <div className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <AiOutlineShop />
          <span>Panel 2</span>
        </div>
        <div className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <TiLightbulb />
          <span>Panel 3</span>
        </div>
        <div className="hover:text-black mt-2 flex cursor-pointer items-center gap-2 pt-1 text-gray-600 hover:font-medium">
          <FiSettings />
          <span>Panel 4</span>
        </div>
      </div>
    </Dropdown>
  );
}

export default CardMenu;
