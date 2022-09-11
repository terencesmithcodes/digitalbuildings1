import React from 'react'

const About = () => {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[2160px] mx-auto'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>Data Model</h2>
          <p2>
            The Digital Buildings data model combines BMS data points, control
            sequences, and mechanical schedules to create a digital model of
            every piece of equipment.
          </p2>
        </div>
        <div>
          <h2>Global Analytics Engine</h2>
          <p2>
            Digital Buildings analyzes over 400 million square feet of buildings
            everyday using a global set of engineering algorithms. All
            diagnostic findings are bundled to present the highest priorities of
            the day, week, and month across all equipment.
          </p2>
        </div>
        <div>
          <h2>Automated Energy Modeling</h2>
          <p2>
            Digital Buildings automatically models energy impacts using advanced
            regression modeling techniques. The energy model normalizes for
            weather, equipment runtime, and even seasonal schedules of
            heating/cooling systems so you can confidently track all energy cost
            savings.
          </p2>
        </div>
      </div>
    </div>
  );
}

export default About