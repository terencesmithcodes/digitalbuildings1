import React from 'react'

import hero from '../assets/data-analysis.png'

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
          <h1 className="py-3 text-5xl md:text-5xl font-bold">
            One simple ecosystem for smart building solutions
          </h1>
          <p className="text-2xl mb-2">
            Digital data analytics and diagnostics
          </p>
          <p className="text-2xl mb-2">
            Integrate our solutions and start saving
          </p>
          <div class="relative w-full max-w-lg">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>
          <button className="py-3 px-6 sm:w-[60%]">Get Started</button>
        </div>
        <div>
          <img className="w-full" src={hero} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero