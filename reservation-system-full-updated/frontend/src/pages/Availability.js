import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Availability(){
  const [slots, setSlots] = useState([]);
  useEffect(()=> axios.get('/availability?restaurant_id=1&date=2025-01-01&time_slot=19:00&guest_count=2')
    .then(r=>setSlots(r.data)), []);
  return <pre>{JSON.stringify(slots, null,2)}</pre>;
}