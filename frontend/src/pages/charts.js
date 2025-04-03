import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Header from "./Header";

const data = [
  { name: "Active Workers", value: 80 },
  { name: "Inactive Workers", value: 20 },
];

const COLORS = ["blue", "#F44336"]; // Green for Active, Red for Inactive



function Charts(){

    return (
        <div className="bg-white p-4 shadow-md rounded-lg">
           <Header />
          <h2  className="text-xl font-semibold text-center mb-4" style={{marginTop:"120px"}} >Active vs Inactive Workers</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart> {/* Make sure this is correctly imported */}
              <Pie 
                data={data} 
                cx="50%" 
                cy="50%" 
                outerRadius={100} 
                fill="#8884d8" 
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    

}


export default Charts;
