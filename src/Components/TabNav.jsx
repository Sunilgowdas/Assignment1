import React from 'react';

const TabNav = () => {
  return (
    <div className="bg-green-100 p-4 flex space-x-4">
      <button className="bg-green-200 p-2 rounded text-green-800">PRIMARY</button>
      <button className="p-2 rounded">SECONDARY</button>
      <button className="p-2 rounded">THIRDLY</button>
    </div>
  );
};

export default TabNav;
