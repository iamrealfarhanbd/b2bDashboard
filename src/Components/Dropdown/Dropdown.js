import React, { useState } from "react";
import Select from "react-select";

const Dropdown = ({ selectedCategory,onChange }) => {
    const optionList = [
        { value: "Indoor", label: "Indoor" },
        { value: "Outdoor", label: "Outdoor" },
        { value: "Aquatics", label: "Aquatics" }
      ];

      console.log("selectedCategory", selectedCategory);

//   const [selectedOptions, setSelectedOptions] = useState();
  return (

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


  );
};

export default Dropdown;
