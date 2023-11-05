import React from "react";

function MostOrdered() {
  const items = [
    {
      icon: "food",
      name: "Fresh Salad Bowl",
      value: "IDR 45.000",
    },
    {
      icon: "food2",
      name: "Chicken Noodles",
      value: "IDR 75.000",
    },
    {
      icon: "food3",
      name: "Smoothie Fruits",
      value: "IDR 45.000",
    },
    {
      icon: "food4",
      name: "Hot Chicken Wings",
      value: "IDR 45.000",
    },
  ];
  return (
    <div className="w-full h-full text-dark-300 ">
      <div className="flex flex-col justify-between text-sm not-italic font-normal leading-[22px] tracking-[0.5px]">
        <div>
          Most Ordered Food
          <div className="mt-2 mb-4  leading-[21px]  opacity-50">
            Adipiscing elit, sed do eiusmod tempor
          </div>
        </div>{" "}
        <div className="flex flex-col gap-2">
          {items.map((item, index) => (
            <div
              key={item.name}
              className={`py-[20px] items-center border-gray-300 text-xs not-italic font-normal leading-5 flex flex-row justify-between flex-wrap-reverse ${
                index < items.length - 1 ? "border-b-[0.5px]" : ""
              }`}
            >
              <div className="flex items-center">
                <img
                  src={`/images/${item.icon}.svg`}
                  className="rounded-full drop-shadow-lg mr-[30px] "
                />
                <span>{item.name}</span>
              </div>

              <span className="opacity-70">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MostOrdered;
