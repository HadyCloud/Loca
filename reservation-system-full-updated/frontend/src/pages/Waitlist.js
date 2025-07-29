import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function Waitlist() {
  const [list, setList] = useState([]);
  useEffect(() => {
    axios.get('/admin/waitlist').then(r => setList(r.data));
  }, []);

  return (
    <>
      <Header title="Waitlist" />
      <main className="p-8">
        <table className="min-w-full bg-white rounded shadow-lg">
          <thead className="bg-secondary">
            <tr>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Party</th>
              <th className="py-3 px-6">Phone</th>
            </tr>
          </thead>
          <tbody>
            {list.map(e => (
              <tr key={e.id}>
                <td className="border px-6 py-4">{e.customer_name}</td>
                <td className="border px-6 py-4">{e.party_size}</td>
                <td className="border px-6 py-4">{e.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
