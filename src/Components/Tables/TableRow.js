import React from "react";
import { Table } from "react-bootstrap";

const TableRow = ({ element }) => {
  return (
    <>
      <tr key={element.id}>
        <td>{element.id}</td>
        <td>{element.name}</td>
        <td>{element.name}</td>
        <td>{element.category}</td>
      </tr>
    </>
  );
};

export default TableRow;
