import React from "react";
import Button from "../Button";

import ReactEcharts from "echarts-for-react";

function OrderTime() {
  const option = {
    color: ["#5A6ACF", "#E6E8EC", "#C7CEFF", "#DEE1F4"],
    tooltip: {
      trigger: "item",
    },
    grid: {
      left: "10%",
      right: "10%",
      top: "10%",
      bottom: "10%",
    },
    legend: {
      bottom: "5%",
      left: "center",
      selectedMode: false,
      icon: "circle",
    },
    series: [
      {
        type: "pie",
        radius: ["25%", "40%"],
        label: {
          show: false,
        },
        emphasis: {
          scale: false,
          label: {
            show: false,
          },
          itemStyle: {
            borderWidth: 10,
            borderColor: "rgba(222, 225, 244, 0.5)",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 40,
            name: "Afternoon",
          },
          {
            value: 32,
            name: "Evening",
          },
          {
            value: 28,
            name: "Morning",
          },
        ],
        tooltip: {
          backgroundColor: "#37375C",
          borderColor: "#37375C",
          textStyle: {
            width: 140,
            height: 109,
            color: "white",
            fontSize: 18,
          },
          extraCssText:
            "width: 140px; height: 109px; display: flex; flex-direction: column; border-radius: 10px",
          formatter: function (params) {
            return '<div style="color: #FFF; font-family: Poppins;padding: 16px 16px 10px 12px; font-size: 16px; font-style: normal; line-height: 13px; font-weight: 500;  letter-spacing: 0.3px;">Afternoon</div><div style="color: #FFF;padding: 0px 16px 16px 12px; font-family: Poppins; font-size: 12px; font-style: normal; font-weight: 400; line-height: 12px; letter-spacing: 0.3px;opacity: 0.5">1pm - 4pm</div><div style="color: #FFF; padding: 0px 16px 16px 12px;  font-family: Poppins; font-size: 16px; font-style: normal; font-weight: 500; line-height: 16px; letter-spacing: 0.3px;">1.890 orders</div>';
          },
        },
      },
    ],
    avoidLabelOverlap: true,
  };

  return (
    <div className="w-full h-[321px]">
      <div className="flex justify-between">
        <div className="text-sm not-italic font-normal leading-[22px] tracking-[0.5px];">
          Order Time
          <div className="mt-2 font-normal leading-[21px] tracking-[0.5px] opacity-50">
            From 1-6 Dec, 2020
          </div>
        </div>
        <Button />
      </div>
      <div className="scale-110 bottom-4 relative">
        <ReactEcharts option={option} />
      </div>
    </div>
  );
}

export default OrderTime;
