// Frontend v2 placeholder
import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import ManagerPortal from './pages/ManagerPortal';
import Waitlist from './pages/Waitlist';
import Loyalty from './pages/Loyalty';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import Reservations  from './pages/Reservations';
import Availability  from './pages/Availability';
import RestaurantsList  from './pages/RestaurantsList';
import Users         from './pages/Users';
import Calendar      from './pages/Calendar';

export default function App() {
  return (
    <BrowserRouter>
      <Header title="Admin Panel" />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/manager" element={<ManagerPortal />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/loyalty" element={<Loyalty />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path='/reservations' element={<Reservations/>} />
        <Route path='/restaurants' element={<RestaurantsList/>} />
        <Route path='/availability' element={<Availability/>} />
        <Route path='/users' element={<Users/>} />
        <Route path='/calendar' element={<Calendar/>} />
      </Routes>
    </BrowserRouter>
  );
}
