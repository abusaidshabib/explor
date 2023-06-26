import { NavLink, useLocation } from "react-router-dom";
import { MdHome } from "react-icons/md";
import { IoAnalyticsOutline } from "react-icons/io5";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
  const location = useLocation();
  
  const isActiveRoute = (match) => {
    return match == location.pathname.substring(1);
  };

  // if(isActiveRoute){
  //   console.log("true")
  // }

  // const active = "border-r-4 border-blue-600"

  return (
    <div className="w-80 h-screen bg-light-50 dark:!bg-dark-50 shadow-2xl relative">
      <div className="w-full flex justify-end absolute top-4 right-4">
        <AiOutlineClose className="dark:!text-light-100 text-xl text-dark-100" />
      </div>
      <div className="w-full h-28 flex items-center justify-center border-b border-gray-300">
        <p className="text-3xl uppercase font-bold text-dark-100 dark:!text-light-100">
          ex-<span className="font-normal text-blue-100">plor</span>
        </p>
      </div>
      <div className="h-10" />
      <ul className="grid pl-8 gap-4">
        <NavLink
          to="default"
          className={`h-8 flex items-center ${
            isActiveRoute("default") ? "border-r-4 border-blue-100" : ""
          }`}
        >
          <li className="flex items-center">
            <span>
              <MdHome
                className={`text-2xl ${
                  isActiveRoute("default")
                    ? "text-blue-100"
                    : "dark:!text-light-100"
                }`}
              />
            </span>
            <p className="leading-1 ml-4 font-bold text-gray-800 dark:text-gray-200">
              Main Dashboard
            </p>
          </li>
        </NavLink>
        <NavLink
          to="analytics"
          className={`h-8 flex items-center ${
            isActiveRoute("analytics") ? "border-r-4 border-blue-100" : ""
          }`}
        >
          <li className="flex items-center">
            <span>
              <IoAnalyticsOutline
                className={`text-2xl ${
                  isActiveRoute("analytics")
                    ? "text-blue-100"
                    : "dark:!text-light-100"
                }`}
              />
            </span>
            <p className="leading-1 ml-4 font-bold text-gray-800 dark:text-gray-200">
              Analytics
            </p>
          </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Sidebar;
