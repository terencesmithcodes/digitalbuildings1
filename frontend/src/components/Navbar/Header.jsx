import React from 'react'
import {BellIcon, SearchIcon, UserCircleIcon, InboxIcon, DatabaseIcon} from '@heroicons/react/outline'

const Header = () => {
  return (
      <div className='bg-zinc-100 w-full py-6 items-center justify-between flex px-12'>
          <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
              <SearchIcon className='w-4 h-4' />
              <input type="text" placeholder="Search for equipment" className='bg-transparent outline-none' />
              </div>
              <div className='items-center w-full justify-center flex space-x-4'>
                  <DatabaseIcon className='w-6 h-6'/>
                  <h1 className='text-xl text-indigo-600 font-bold'>Digital Building Analytics</h1>
              </div>
              <div className='items-center justify-end space-x-6 flex w-full'>
                  <BellIcon className='w-6 h-6 cursor-pointer'/>
                  <InboxIcon className='w-6 h-6 cursor-pointer'/>
                  <UserCircleIcon className='w-6 h-6 cursor-pointer'/>
              </div>
          </div>
          
   
  )
}

export default Header