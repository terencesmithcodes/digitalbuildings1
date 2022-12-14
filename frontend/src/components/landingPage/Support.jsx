import React from "react";

import { PhoneIcon, ArrowSmRightIcon } from "@heroicons/react/outline";

import { ChipIcon, SupportIcon } from "@heroicons/react/solid";

import supportHero from "../../assets/support.jpg";

const Support = () => {
  return (
    <div name="support" className="w-full h-screen mt-24">
      <div className="w-full h-full bg-gray-900/50 absolute">
        <img
          className="w-full h-full object-fill mix-blend-overlay"
          src={supportHero}
          alt="support"
        />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <h2 className="text-5xl text-white uppercase text-center font-bold pt-4">
            Support
          </h2>
          <h2 className="py-4 text-3xl text-white text-center font-bold">
            Your Team for Data Analytics and Diagnostics Knowledge and Support
          </h2>
          <p className="text-3xl font-bold py-6 text-center">
            Digital Buildings has deep experience leveraging the unique
            strengths of Data Analytics and Diaganostics to unlock disparate
            edge data. This opens infinite opportunities to architect IoT
            solutions that deliver operational efficiencies and tangible ROI’s
            for buildings and beyond.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <PhoneIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold text-2xl my-6">Sales</h3>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              velit natus id illo sit esse at similique sint consequuntur
              perspiciatis!
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4 rounded-xl">
            <p className=" flex items-center text-indigo-600">
              Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <ChipIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold text-2xl my-6">Technical Support</h3>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              velit natus id illo sit esse at similique sint consequuntur
              perspiciatis!
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4 rounded-xl">
            <p className=" flex items-center text-indigo-600">
              Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
            </p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-2xl">
          <div className="p-8">
            <SupportIcon className="w-16 p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
            <h3 className="font-bold text-2xl my-6">Energy Modeling</h3>
            <p className="text-gray-600 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
              velit natus id illo sit esse at similique sint consequuntur
              perspiciatis!
            </p>
          </div>
          <div className="bg-slate-100 pl-8 py-4 rounded-xl">
            <p className=" flex items-center text-indigo-600">
              Contact Us <ArrowSmRightIcon className="w-5 ml-2" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
