import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function RestaurantsList() {
  const [list, setList] = useState([]);
  useEffect(() => axios.get('/admin/restaurants').then(r=>setList(r.data)), []);
  return (
    <>
      <Header title="Restaurants" />
      <main className="p-8">
        <ul className="bg-white shadow divide-y">
          {list.map(r => (
            <li key={r.id} className="p-4 flex justify-between">
              <span>{r.name}</span>
              <span>{r.address}</span>
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}