import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import Header from '../components/Header';

export default function AdminDashboard() {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    axios.get('/admin/reports/daily').then(r => setStats(r.data));
  }, []);

  return (
    <>
      <Header title="Dashboard" />
      <main className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-primary mb-4">Covers Last 7 Days</h2>
          <LineChart width={700} height={300} data={stats}>
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <CartesianGrid stroke="#eee" />
            <Line type="monotone" dataKey="covers" stroke="#5B3E99" strokeWidth={3} />
          </LineChart>
        </div>
      </main>
    </>
  );
}
