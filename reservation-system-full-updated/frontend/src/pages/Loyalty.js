import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function Loyalty() {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    axios.get('/admin/loyalty').then(r => setMembers(r.data));
  }, []);

  return (
    <>
      <Header title="Loyalty" />
      <main className="p-8">
        <ul className="bg-white rounded shadow-lg divide-y">
          {members.map(m => (
            <li key={m.id} className="px-6 py-4 flex justify-between">
              <span>Customer ID: {m.customer_id}</span>
              <span className="font-bold">{m.points} pts</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
