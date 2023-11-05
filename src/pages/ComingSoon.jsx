import React from "react";

function ComingSoon() {
  return (
    <div className="relative overflow-hidden">
      <div className="bg-white pt-10 pb-14 sm:pt-16 lg:overflow-hidden lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-5xl lg:px-8">
          <div className="lg:grid lg:grid-cols-1 lg:gap-8">
            <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:flex lg:items-center lg:px-0 lg:text-left">
              <div className="lg:py-24">
                <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                  Stay tuned for exciting updates. Something big is on the way!
                </p>
                <div className="mt-10 sm:mt-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComingSoon;
