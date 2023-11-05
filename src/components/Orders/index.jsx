import React from "react";
import Button from "../Button";
import ReactEcharts from "echarts-for-react";

function Orders() {
  const options = {
    color: ["#5A6ACF", "#E6E8EC"],
    legend: {
      left: true,
      bottom: 0, // Set the legend to the bottom
      itemWidth: 10, // Adjust the width of legend items
      itemHeight: 10, // Adjust the height of legend items
    },
    grid: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 30, // Increase the bottom padding to make room for the legend
      containLabel: true,
    },
    toolbox: {
      show: false,
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["01", "02", "03", "04", "05", "06"],
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: "#737B8B",
        opacity: "0.5",
      },
      axisPointer: {
        show: false,
        trigger: "none",
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    yAxis: {
      type: "value",
      show: true,
      axisLabel: {
        show: false,
      },
      axisPointer: {
        show: false,
        trigger: "none",
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dashed",
        },
      },
    },
    series: [
      {
        name: "Email",
        type: "line",
        data: [90, 65, 180, 165, 85, 250],
      },
      {
        name: "Union Ads",
        type: "line",
        data: [140, 200, 120, 200, 170, 190],
      },
    ],
    avoidLabelOverlap: true,
  };

  return (
    <div className="w-full h-full">
      <div className="flex justify-between">
        <div className="text-sm not-italic font-normal leading-[22px] tracking-[0.5px];">
          Order
          <div className="text-black text-xl not-italic font-medium leading-7 mt-[8px] mb-[10px]">
            2.568
          </div>
          <div className=" font-normal leading-[21px] tracking-[0.5px] flex items-center gap-1">
            <svg
              width="9"
              height="12"
              viewBox="0 0 9 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.5066 1L4.5066 10.0361"
                stroke="#F2383A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.1152 7.44246L4.5576 11.0001L1 7.44246"
                stroke="#F2383A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span className="text-button-800  not-italic font-semibold leading-3">
              2.1%
            </span>{" "}
            <span className="opacity-50">vs last week</span>
          </div>
          <div className="mt-[24px] font-normal leading-[21px] tracking-[0.5px] opacity-50">
            Sales From 1-6 Dec, 2020
          </div>
        </div>
        <Button />
      </div>

      <ReactEcharts
        style={{ marginTop: "1rem", height: "210px", width: "100%" }}
        option={options}
      />
    </div>
  );
}

export default Orders;
