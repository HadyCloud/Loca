import React from 'react';
import Header from '../components/Header';

export default function ManagerPortal() {
  return (
    <>
      <Header title="Manager Portal" />
      <main className="p-8">
        <h2 className="text-xl mb-4">Floor Plan</h2>
        <div className="grid grid-cols-4 gap-4">
          {/* Example tables */}
          {Array.from({length:8}).map((_,i)=>
            <div key={i} className="bg-secondary p-4 rounded-lg text-center">
              Table {i+1}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
