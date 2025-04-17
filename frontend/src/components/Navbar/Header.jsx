import React from 'react'
import { useSelector } from 'react-redux'
import { SearchIcon, OfficeBuildingIcon, BellIcon, InboxIcon, UserCircleIcon } from '@heroicons/react/outline'

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const { building } = useSelector((state) => state.engineer);

  return (
    <div className='bg-white shadow-sm w-full py-4 items-center justify-between flex px-6 border-b border-gray-200'>
      <div className='w-full lg:flex hidden space-x-4 items-center justify-start py-2'>
        <div className='relative w-64'>
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
            <SearchIcon className='w-5 h-5 text-gray-400' />
          </div>
          <input 
            type="text" 
            placeholder="Search for equipment" 
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5' 
          />
        </div>
      </div>
      
      <div className='flex items-center justify-center space-x-3'>
        <OfficeBuildingIcon className='w-7 h-7 text-indigo-600'/>
        <div>
          <h1 className='text-xl text-gray-800 font-bold'>Digital Building Analytics</h1>
          {building && building.Name && (
            <div className='text-sm text-gray-500'>
              <span className='font-medium text-indigo-600'>{building.Name}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className='items-center justify-end space-x-4 flex'>
        <div className='hidden md:flex items-center space-x-4'>
          <button className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
            <BellIcon className='w-6 h-6 text-gray-600 cursor-pointer'/>
          </button>
          <button className='p-2 rounded-full hover:bg-gray-100 transition-colors'>
            <InboxIcon className='w-6 h-6 text-gray-600 cursor-pointer'/>
          </button>
        </div>
        
        {user ? (
          <div className='flex items-center space-x-3'>
            <div className='hidden md:block text-right'>
              <div className='text-sm font-medium text-gray-700'>{user.name}</div>
              <div className='text-xs text-gray-500'>Administrator</div>
            </div>
            <div className='h-10 w-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold'>
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
          </div>
        ) : (
          <UserCircleIcon className='w-10 h-10 text-gray-400 cursor-pointer'/>
        )}
      </div>
    </div>
  )
}

export default Header