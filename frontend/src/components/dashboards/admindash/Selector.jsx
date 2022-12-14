import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { getEngBuilding} from "../../../features/engineer/engineerSlice";
import { getEngeryAnalyses} from "../../../features/energy/energySlice"

const Selector = ({transfer}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const options = [
    { label: 'Select Building', value: '18175' },
    { label: 'MIT', value: '1' },
    { label: 'Rudin', value: '5458' },
    { label: 'Hines', value: '5625' },
    { label: 'Alexandria', value: '5783' },
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
  <div >
    <label className='h-[500px]'>
      
      <select
        className="flex w-[200px] rounded-xl mt-1 mb-4 relative p-6 text-lg text-indigo-600 bg-gray-100"
        // value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  </div>
);
}

export default Selector