import React from 'react';

const TopNav = () => {
  return (
    <nav className="bg-green-100 p-10 w-100%">
      <div className="grid grid-flow-col auto-cols-max gap-4 items-center">
        <button className="p-2 bg-green-200 rounded pl-10">Home</button>
        <button className="p-2 bg-green-200 rounded">Inventory</button>
        <button className="p-2 bg-green-200 rounded">Layers</button>
        <input className="border rounded p-2" placeholder="Quick action..." />
        <button className="p-2 bg-green-200 rounded">User</button>
      </div>
    </nav>
  );
};

export default TopNav;
