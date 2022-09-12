import React from "react";

const About = () => {
  return (
    <div name='about' className="w-full my-32">
      <div className="max-w-[2160px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-indigo-600">
            Digital Buildings
          </h2>
          <p className="text-3xl py-6 text-gray-500">
            Technology and services as extraordinary as the people behind them.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-14 p-2 text-center">
          <div className="border p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-600">Data Model</h2>
            <p className="text-gray-400 mt-2">
              The Digital Buildings data model combines BMS data points, control
              sequences, and mechanical schedules to create a digital model of
              every piece of equipment.
            </p>
          </div>

          <div className="border p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-600">
              Global Analytics Engine
            </h2>
            <p className="text-gray-400 mt-2">
              Digital Buildings analyzes over 400 million square feet of
              buildings everyday using a global set of engineering algorithms.
              All diagnostic findings are bundled to present the highest
              priorities of the day, week, and month across all equipment.
            </p>
          </div>

          <div className="border p-8 rounded-xl shadow-xl">
            <h2 className="text-3xl font-bold text-indigo-600">
              Automated Energy Modeling
            </h2>
            <p className="text-gray-400 mt-2">
              Digital Buildings automatically models energy impacts using
              advanced regression modeling techniques. The energy model
              normalizes for weather, equipment runtime, and even seasonal
              schedules of heating/cooling systems so you can confidently track
              all energy cost savings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
