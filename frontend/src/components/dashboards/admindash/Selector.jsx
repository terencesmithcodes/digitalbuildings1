import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { getEngBuilding} from "../../../features/engineer/engineerSlice";
import { getEngeryAnalyses} from "../../../features/energy/energySlice"

const Selector = ({transfer}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const options = [
    { label: 'Select Building', value: '' },
    { label: 'Corporate HQ Building', value: '1' },
  ]
  const {user} = useSelector((state) => state.auth);

  // const [value, setValue] = useState();
  console.log(transfer)
  const handleChange = (event) => {

    if(transfer === 'energy'){
      navigate('/energy')
      dispatch(getEngeryAnalyses(event.target.value))
    }else{
      dispatch(getEngBuilding(event.target.value))
      navigate('/building')
    }
    
    
    // setValue(event.target.value);
  };
return (
  <div className="w-full max-w-xs">
    <label className="block w-full">
      <div className="relative">
        <select
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-base font-medium text-gray-700 bg-white shadow-sm appearance-none cursor-pointer"
        onChange={handleChange}
        defaultValue=""
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </div>
      </div>
    </label>
  </div>
);
}

export default Selector