import React from "react";

const Dropdown = ({ id, label, value, options, onChange }) => {
  return (
    <div>
      <label>
        {/* <select value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={id} value={option.value}>
              {option.label}
            </option>
          ))}
        </select> */}
        <select
            name="category-list"
            id="category-list"
            onChange={onChange}
          >
            <option value="">All</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Indoor">Indoor</option>
            <option value="Aquatics">Aquatics</option>
          </select>
      </label>
    </div>
  );
};

export default Dropdown;
