import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';

import { getEngBuilding} from "../../../features/engineer/engineerSlice";
import { getEngeryAnalyses} from "../../../features/energy/energySlice"

const Selector = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const options = [
    { label: 'Select Building', value: '18175' },
    { label: 'MIT', value: '1' },
    { label: 'University of Arizona', value: '67' },
    { label: 'SE Sweden Hosted', value: '69' },
    { label: 'Orange: Europe', value: '70' },
  ]
  const {user} = useSelector((state) => state.auth);

  // const [value, setValue] = useState();

  const handleChange = (event) => {
    try {if(user.role === 'energy'){
      dispatch(getEngeryAnalyses(event.target.value))
    navigate('/energy')
    }else{
      dispatch(getEngBuilding(event.target.value))
      navigate('/building')
    }}catch(error){
      dispatch(getEngBuilding(event.target.value))
      navigate('/building')
      // navigate("/energy");
      // dispatch(getEngeryAnalyses(event.target.value));
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