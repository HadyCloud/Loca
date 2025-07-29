import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Users(){
  const [u,setU]=useState([]);
  useEffect(()=>axios.get('/admin/users').then(r=>setU(r.data)),[]);
  return (<ul>{u.map(x=><li key={x.id}>{x.email} ({x.role})</li>)}</ul>);
}