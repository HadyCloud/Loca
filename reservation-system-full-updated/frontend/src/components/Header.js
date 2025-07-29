import React from 'react';
export default function Header({ title }) {
  return (
    <header className="bg-primary text-white p-4 shadow-lg">
      <h1 className="text-3xl font-bold">LocaBite Digital {title}</h1>
    </header>
  );
}
