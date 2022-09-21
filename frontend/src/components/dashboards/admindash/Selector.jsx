import React, {useState} from 'react'


const Selector = () => {
    const options = [
    { label: 'Building', value: '1' },
    { label: 'Building', value: '2' },
    { label: 'Building', value: '3' },
  ]

  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
return (
  <div >
    <label className='h-[500px]'>
      
      <select
        className="flex w-[200px] rounded-xl mt-1 mb-4 relative p-6 text-lg text-indigo-600 bg-gray-100"
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  </div>
);
}

export default Selector