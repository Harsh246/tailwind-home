import React from "react";

function Header() {
  return (
    <div className="sticky top-0 w-full border-b-[0.5px] border-gray-300 text-dark-100 h-[64px] bg-white px-[40px] py-[16px] flex flex-row justify-between items-center ">
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          name="price"
          id="price"
          className="block w-[625px] text-[12px] text-dark-100 h-[32px] border-transparent focus:border-transparent  focus:outline-none  focus:ring-1 focus:ring-offset-2 bg-gray-200 rounded-md border-0 py-1.5 pl-[15px] pr-[30px] "
          placeholder="Search"
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-[15px]">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.91314 10.8263C8.6266 10.8263 10.8263 8.6266 10.8263 5.91314C10.8263 3.19969 8.6266 1 5.91314 1C3.19969 1 1 3.19969 1 5.91314C1 8.6266 3.19969 10.8263 5.91314 10.8263Z"
                stroke="#627B87"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.7193 9.71889L12.8074 12.807"
                stroke="#627B87"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-between ">
        <svg
          className="drop-shadow-lg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="16" cy="16" r="16" fill="#FFE6CC" />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            font-size="16"
            dy=".3em"
            fill="black"
          >
            🍔
          </text>
        </svg>
        <div className=" ml-[12px] mr-[32px] drop-shadow-lg flex items-center gap-[3px] tracking-[0.5px] leading-[13px] text-[12px] ">
          <span className=" drop-shadow-lg"> Delicious Burger</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.5">
              <path
                d="M9.99997 13.0942L15.0083 8.08584L13.8308 6.90668L9.99997 10.74L6.16997 6.90668L4.99164 8.08501L9.99997 13.0942Z"
                fill="#1F384C"
              />
            </g>
          </svg>
        </div>
        <svg
          className=" drop-shadow-lg"
          width="13"
          height="16"
          viewBox="0 0 13 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.4 16C5.51684 15.9957 4.80073 15.2831 4.792 14.4H7.992C7.99369 14.6139 7.9529 14.826 7.872 15.024C7.66212 15.5056 7.23345 15.8569 6.72 15.968H6.716H6.704H6.6896H6.6824C6.58945 15.9874 6.49492 15.9981 6.4 16ZM12.8 13.6H0V12L1.6 11.2V6.8C1.55785 5.67129 1.81275 4.5513 2.3392 3.552C2.86323 2.62521 3.75896 1.9671 4.8 1.744V0H8V1.744C10.0632 2.2352 11.2 4.0304 11.2 6.8V11.2L12.8 12V13.6Z"
            fill="#B0C3CC"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
