import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid
} from 'recharts';
import Header from '../components/Header';

export default function Reports() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/admin/reports/daily')
      .then(res => setData(res.data))
      .catch(err => console.error('Failed to load reports:', err));
  }, []);

  return (
    <>
      <Header title="Reports" />
      <main className="p-8 bg-bg min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-primary mb-4">
            Covers Last 7 Days
          </h2>
          <LineChart width={700} height={300} data={data}>
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line
              type="monotone"
              dataKey="covers"
              stroke="#5B3E99"
              strokeWidth={3}
            />
          </LineChart>
        </div>
      </main>
    </>
  );
}
