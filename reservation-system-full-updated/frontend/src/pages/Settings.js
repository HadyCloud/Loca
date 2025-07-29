import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default function Settings() {
  const [theme, setTheme] = useState({ primary:'', secondary:'', accent:'' });
  useEffect(() => {
    axios.get('/admin/settings').then(r => setTheme(r.data.theme));
  }, []);

  const save = () => axios.put('/admin/settings', { theme }).then(()=>alert('Saved'));

  return (
    <>
      <Header title="Settings" />
      <main className="p-8 bg-bg min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <h2 className="text-xl font-semibold text-primary mb-4">Theme Colors</h2>
          {['primary','secondary','accent'].map(key => (
            <div key={key} className="mb-4">
              <label className="block text-gray-700 mb-1">{key}</label>
              <input
                type="color"
                value={theme[key]}
                onChange={e => setTheme({ ...theme, [key]: e.target.value })}
                className="w-16 h-10 border-none p-0"
              />
            </div>
          ))}
          <button
            onClick={save}
            className="mt-4 w-full py-3 bg-accent text-primary font-bold rounded hover:bg-yellow-500"
          >
            Save Theme
          </button>
        </div>
      </main>
    </>
  );
}
