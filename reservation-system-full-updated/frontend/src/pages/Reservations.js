import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function Reservations() {
  const [list, setList] = useState([]);
  useEffect(() => axios.get('/reservations').then(r=>setList(r.data)), []);
  return (
    <>
      <Header title="Reservations" />
      <main className="p-8">
        <ul className="bg-white shadow divide-y">
          {list.map(r =>
            <li key={r.id} className="p-4 flex justify-between">
              <span>{r.date} @ {r.time_slot}</span>
              <span>{r.guest_count} guests</span>
            </li>
          )}
        </ul>
      </main>
    </>
  );
}