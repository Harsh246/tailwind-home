import React from "react";
import Revenue from "../components/Revenue";
import OrderTime from "../components/OrderTime";
import Rating from "../components/Rating";
import Orders from "../components/Orders";
import MostOrdered from "../components/MostOrdered";
function Dashboard() {
  return (
    <div className="overflow-y-auto h-full">
      <div className="p-[20px] text-dark-100">
        <p className="text-[18px] leading-[23px] font-medium">Dashboard</p>
      </div>

      <div className=" w-full px-[40px] mb-[20px]">
        <div className="grid grid-cols-3 border-b-[0.5px] border-gray-300">
          <div className="col-span-2  pb-[20px] pr-[20px] border-r-[0.5px] border-gray-300">
            <Revenue />
          </div>
          <div className="col-span-1  pb-[20px] pl-[20px]">
            <OrderTime />
          </div>
        </div>

        <div className="grid grid-cols-3 mb-6 auto-rows-max">
          <div className="child1 col-span-2  ">
            <div className="grid grid-cols-2 mb-6 auto-rows-max">
              <div className=" pt-[20px] col-span-1  border-r-[0.5px] border-gray-300 pr-[46px]">
                <Rating />
              </div>
              <div className=" mb-6 col-span-1  border-r-[0.5px] border-gray-300   pt-[20px] px-[40px]">
                <MostOrdered />
              </div>
            </div>
          </div>
          <div className="col-span-1   pt-[20px] pl-[20px]">
            <Orders />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
