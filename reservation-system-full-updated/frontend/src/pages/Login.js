// frontend/src/pages/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const submit = async () => {
    setError('');
    try {
      const { data } = await axios.post('/admin/login', { email, password });
      if (!data.token) throw new Error('No token returned');
      localStorage.setItem('token', data.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;
      navigate('/dashboard');
    } catch (err) {
      // capture server‑side message if any
      const msg = err.response?.data?.error || err.message;
      setError(msg);
    }
  };

  return (
    <>
      <Header title="Sign In" />
      <main className="max-w-md mx-auto bg-white p-8 mt-12 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-6 text-primary font-semibold">Admin Login</h2>
        <input
          className="w-full p-3 mb-4 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="w-full p-3 mb-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-600 mb-4">{error}</div>}
        <button
          className="w-full py-3 bg-accent text-primary font-bold rounded hover:bg-yellow-400 transition"
          onClick={submit}
        >
          Sign In
        </button>
      </main>
    </>
  );
}
