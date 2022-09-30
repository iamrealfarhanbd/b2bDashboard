import { format } from "date-fns";
import React, { useEffect, useMemo, useState } from "react";
import { Table } from "react-bootstrap";
import Datepicker from "../Datepicker/Datepicker";
import Dropdown from "../Dropdown/Dropdown";
import TableRow from "./TableRow";

const Tables = () => {
  var defaultSports = [
    { id: 1, name: "Table Tennis", category: "Indoor", date: "09/24/2022" },
    { id: 2, name: "Football", category: "Outdoor", date: "09/29/2022" },
    { id: 3, name: "Swimming", category: "Aquatics", date: "09/27/2022" },
    { id: 4, name: "Chess", category: "Indoor", date: "09/27/2022" },
    { id: 6, name: "BaseBall", category: "Outdoor", date: "09/29/2022" },
  ];

  // console.log(element)
  const [sportList, setSportList] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedDate, setSelectedDate] = useState(new Date());

  // // Add default value on page load
  useEffect(() => {
    setSportList(defaultSports);
  }, []);

  // Function to get filtered list
  const getFilteredList = () => {
    // Avoid filter when selectedCategory is null
    if (!selectedCategory && !selectedDate) {
      return sportList;
    } else {
      console.log("selectedDate", selectedDate);
      return sportList.filter(
        (item) =>
          item.category === selectedCategory &&
          item.date === format(selectedDate, `MM/dd/yyyy`)
      );
    }
  };

  // Avoid duplicate function calls with useMemo
  let filteredList = useMemo(getFilteredList, [
    selectedDate,
    selectedCategory,
    sportList,
  ]);

  function handleCategoryChange(event) {
    // const store = data.map(item=>item.label);
    setSelectedCategory(event.target.value);
  }
  function handleDateChange(date) {
    // const store = data.map(item=>item.label);
    const formatedDate = format(date, `MM/dd/yyyy`);
    console.log(formatedDate, date);
    setSelectedDate(date);
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-6">
          <Dropdown
            onChange={handleCategoryChange}
            selectedCategory={selectedCategory}
          />
        </div>
        <div className="col-md-6">
          <Datepicker
            onChange={handleDateChange}
            selectedDate={selectedDate}
          />
        </div>
      </div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Catagory</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((element) => (
            <TableRow element={element} key={element.id} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Tables;
