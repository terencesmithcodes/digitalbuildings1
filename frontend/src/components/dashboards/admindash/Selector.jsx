import React, {useState} from 'react'


const Selector = () => {
    const options = [
    { label: 'Admin', value: 'Admin' },
    { label: 'Energy Analyst', value: 'Facilities Engineer' },
    { label: 'Facility Manager', value: 'Energy Analyst' },
  ]

  const [value, setValue] = useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
return (
  <div>
    <label>
      Roles
      <select
        className="flex flex-col mt-1 mb-4 border relative bg-gray-100 py-2"
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