import React from "react";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize, currentColor } =
    useStateContext();

  const handleCloseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  };

  const activeLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg font-semibold text-white text-md m-2";
  const inactiveLink =
    "flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 text-md dark:text-gray-200 dark:hover:text-white dark:hover:bg-main-dark-bg hover:bg-light-gray m-2";

  return (
    <div className="px-4 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (
        <>
          <div className="flex justify-between items-center">
            <Link
              to="/"
              onClick={handleCloseSidebar}
              className="items-center gap-3 ml-3 mt-4 flex text-xl font-bold tracking-tight dark:text-white text-slate-900"
            >
              <SiShopware className="text-3xl" />
              <h1>Shoppy</h1>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                onClick={() =>
                  setActiveMenu((prevActiveMenu) => !prevActiveMenu)
                }
                className="text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden"
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>
          <ul className="mt-10">
            {links.map((link, index) => (
              <div key={index}>
                <li className="text-gray-400 m-3 mt-4 uppercase">
                  {link.title}
                </li>
                {link.links.map((sublink, index) => (
                  <NavLink
                    key={index}
                    to={`/${sublink.name}`}
                    onClick={handleCloseSidebar}
                    style={({ isActive }) => ({
                      backgroundColor: isActive ? currentColor : "",
                    })}
                    className={({ isActive }) =>
                      isActive ? activeLink : inactiveLink
                    }
                  >
                    {sublink.icon}
                    <span className="capitalize">{sublink.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Sidebar;
