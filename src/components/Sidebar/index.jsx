import React from "react";
import { NavLink } from "react-router-dom";
import { menuItems, settingItems } from "../../utils/config.jsx";
function Sidebar() {
  return (
    <div className="w-[240px] text-[12px] text-blue2-200 flex-none leading-[12px] tracking-[0.5px] min-h-screen bg-blue-50 text-3xl">
      <div className="h-[64px] pl-[40px] border-b-[0.5px] border-gray-300 flex flex-row align-middle items-center">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#5A67BA" />
          <path
            d="M13.808 10.72C13.6687 10.4633 13.467 10.269 13.203 10.137C12.9463 9.99767 12.642 9.928 12.29 9.928C11.6813 9.928 11.1937 10.1297 10.827 10.533C10.4603 10.929 10.277 11.4607 10.277 12.128C10.277 12.8393 10.4677 13.3967 10.849 13.8C11.2377 14.196 11.7693 14.394 12.444 14.394C12.906 14.394 13.2947 14.2767 13.61 14.042C13.9327 13.8073 14.1673 13.47 14.314 13.03H11.927V11.644H16.019V13.393C15.8797 13.8623 15.6413 14.2987 15.304 14.702C14.974 15.1053 14.5523 15.4317 14.039 15.681C13.5257 15.9303 12.9463 16.055 12.301 16.055C11.5383 16.055 10.8563 15.89 10.255 15.56C9.661 15.2227 9.19533 14.757 8.858 14.163C8.528 13.569 8.363 12.8907 8.363 12.128C8.363 11.3653 8.528 10.687 8.858 10.093C9.19533 9.49167 9.661 9.026 10.255 8.696C10.849 8.35867 11.5273 8.19 12.29 8.19C13.214 8.19 13.9913 8.41367 14.622 8.861C15.26 9.30833 15.6817 9.928 15.887 10.72H13.808Z"
            fill="white"
          />
        </svg>

        <span className="ml-[8px] text-[12px] text-indigo-200 font-bold leading-[12px] tracking-[0.5px]">
          GOODFOOD
        </span>
      </div>
      <div className="w-[200px] h-[398px] mt-[60px] px-[20px]">
        <div className="my-4">
          <div className="text-[11px] leading-[11px] ml-[20px] my-[12px] tracking-[1px] ">
            MENU
          </div>

          {menuItems.map((item) => (
            <NavLink
              key={item.title}
              to={item.route}
              className={({ isActive }) =>
                `w-[200px] h-[42px]  flex items-center px-[20px] py-[10px] gap-[12px]  rounded-md ${
                  isActive ? "bg-gray3-100 text-indigo-100" : ""
                }`
              }
            >
              {item.icon}
              <span>{item.title}</span>
            </NavLink>
          ))}
        </div>
        <div className="my-4">
          <div className="text-[11px] leading-[11px] ml-[20px] my-[12px] tracking-[1px] ">
            OTHERS
          </div>
          {settingItems.map((item) => (
            <div
              key={item.title}
              className="w-[200px] h-[42px]  flex items-center px-[20px] py-[10px] gap-[12px] rounded-m"
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;