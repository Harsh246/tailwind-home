import React from "react";

function Button() {
  return (
    <button
      type="button"
      className="inline-block rounded border-2 border-blue-400 text-indigo-100 hover:border-blue-500 w-[109px] h-8 shrink-0  hover:bg-opacity-10 focus:border-violet-700 focus:text-violet-700 active:border-violet-800 active:text-violet-800 dark:border-violet-300 dark:text-violet-300 text-xs font-medium leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
    >
      View Report
    </button>
  );
}

export default Button;
