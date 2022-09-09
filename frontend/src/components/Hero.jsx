import React from 'react'

const Hero = () => {
  return (
      <div className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
          <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
              <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                  <h1 className='py-3 text-5xl md:text-5xl font-bold'>One simple ecosystem for smart building solutions</h1>
                  <p className='text-2xl mb-2'>Digital data analytics and diagnostics</p>
                  <p className='text-2xl mb-2'>Integrate our solutions and start saving</p>
                  <button className='py-3 px-6 sm:w-[60%]'>Get Started</button>
              </div>
          </div>
    </div>
  )
}

export default Hero