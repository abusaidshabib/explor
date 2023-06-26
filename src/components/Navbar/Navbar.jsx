import { useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const { pathname } = useLocation();
  const [darkmode, setDarkmode] = useState(false);
  // console.log(typeof(pathname.substring(1)))

  return (
    <nav className="z-40 sticky flex flex-wrap flex-row items-center justify-between m-8">
      <div className="">
        <p className="text-sm pb-1 dark:!text-light-100 text-dark-100">
          Page /{" "}
          {pathname.substring(1) === "default"
            ? "Main Dashboard"
            : pathname.substring(1)}
        </p>
        <p className="text-4xl font-bold text-dark-100 dark:!text-light-100 capitalize">
          {pathname.substring(1) === "default"
            ? "Main Dashboard"
            : pathname.substring(1)}
        </p>
      </div>

      {/* right cards */}
      <div className=" bg-white h-14 dark:!bg-dark-50 dark:!border-light-100 text-dark-100 rounded-full flex flex-wrap flex-row items-center justify-between shadow-2xl">
        <div className="p-3">
          {/* <IoMenuOutline className="text-light-50 text-3xl" /> */}
          <AiOutlineClose className="dark:!text-light-100 text-dark-100 text-3xl" />
        </div>
        <div
          className="cursor-pointer text-gray-600  p-3"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="text-2xl text-gray-600 dark:text-white" />
          ) : (
            <RiMoonFill className="text-2xl text-gray-600 dark:text-white" />
          )}
        </div>
        <div className="p-3">
          <CgProfile className="text-dark-100 text-3xl dark:text-light-100" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
