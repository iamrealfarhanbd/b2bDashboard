import React, { useEffect, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import Dropdown from "../Dropdown/Dropdown";
import TableRow from "./TableRow";

const Tables = () => {
  var defaultSports = [
    { id: 1, name: "Table Tennis", category: "Indoor" },
    { id: 2, name: "Football", category: "Outdoor" },
    { id: 3, name: "Swimming", category: "Aquatics" },
    { id: 4, name: "Chess", category: "Indoor" },
    { id: 6, name: "BaseBall", category: "Outdoor" },
  ];

  // console.log(element)
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();

  // // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);
  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory) {
      return sportList;
    }
    return sportList.filter((item) => item.category === selectedCategory);
  }

  // Avoid duplicate function calls with useMemo
  var filteredList = useMemo(getFilteredList, [selectedCategory, sportList]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  //   const options = [
  //     {id:1, label: "Fruit", value: "fruit" },
  //     {id:2, label: "Vegetable", value: "vegetable" },
  //     { id:3,label: "Meat", value: "meat" },
  //   ];
  //   const [value, setValue] = useState("fruit");

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };
  return (
    <>
      <Dropdown onChange={handleCategoryChange} />
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Catagory</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((element) => (
            <TableRow element={element} key={element.id} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Tables;
