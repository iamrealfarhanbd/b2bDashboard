import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './ChartBox.css'

const CartBox = () => {
    const data = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
      ];
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
      
  return (
    <>
      <div className="shadow-sm p-3 mb-5 bg-body rounded text-center">
        <h2>Earning Comparison</h2>
        <PieChart width={250} height={400} >
        <Tooltip />
        <Legend />

        <Pie
          data={data}
          cx={100}
          cy={200}
          title="hello"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="393"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </div>
    </>
  );
};

export default CartBox;
