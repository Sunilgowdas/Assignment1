import React, { useState } from 'react';

function PrimaryData() {
  const [data, setData] = useState([
    {
      date: '23/08/30',
      consectetur: 'Consectetur',
      vestibulum: 'Vestibulum',
      egestas: 'Egestas',
      id: '154.181',
      facilisis: 3,
      elit: 'N/A',
      pretium: 'Pretium',
      senectus: 'Turkey',
      felis: 'Nulla',
      cursus: 'N/A',
    },
    {
      date: '14/08/70',
      consectetur: 'Consectetur',
      vestibulum: 'Vestibulum',
      egestas: 'Egestas',
      id: '154.181',
      facilisis: 1,
      elit: 'N/A',
      pretium: 'Pretium',
      senectus: 'Australia',
      felis: 'Nulla',
      cursus: 'N/A',
    },
    {
      date: '11/06/55',
      consectetur: 'Consectetur',
      vestibulum: 'Vestibulum',
      egestas: 'Egestas',
      id: '154.181',
      facilisis: 5,
      elit: 'N/A',
      pretium: 'Pretium',
      senectus: 'India',
      felis: 'Nulla',
      cursus: 'N/A',
    },
    {
      date: '20.07.28',
      consectetur: 'Consectetur',
      vestibulum: 'Vestibulum',
      egestas: 'Egestas',
      id: '154.181',
      facilisis: 51,
      elit: 'N/A',
      pretium: 'Pretium',
      senectus: 'Nigeria',
      felis: 'Nulla',
      cursus: 'N/A',
    },
    {
      date: '25/11/27',
      consectetur: 'Consectetur',
      vestibulum: 'Vestibulum',
      egestas: 'Egestas',
      id: '154.181',
      facilisis: 32,
      elit: 'N/A',
      pretium: 'Pretium',
      senectus: 'Switzerland',
      felis: 'Nulla',
      cursus: 'N/A',
    },
  ]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedOrnare, setSelectedOrnare] = useState(null);
  const [selectedUltrices, setSelectedUltrices] = useState(null);
  const [selectedErat, setSelectedErat] = useState(null);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleOrnareChange = (event) => {
    setSelectedOrnare(event.target.value);
  };

  const handleUltricesChange = (event) => {
    setSelectedUltrices(event.target.value);
  };

  const handleEratChange = (event) => {
    setSelectedErat(event.target.value);
  };

  const handleClearAll = () => {
    setSelectedDate(null);
    setSelectedOrnare(null);
    setSelectedUltrices(null);
    setSelectedErat(null);
  };

  const filteredData = data.filter((item) => {
    if (selectedDate && item.date !== selectedDate) {
      return false;
    }
    if (selectedOrnare && item.consectetur !== selectedOrnare) {
      return false;
    }
    if (selectedUltrices && item.vestibulum !== selectedUltrices) {
      return false;
    }
    if (selectedErat && item.egestas !== selectedErat) {
      return false;
    }
    return true;
  });

  return (
    <div className="bg-green-100 p-4 rounded-md">
      <h2 className="text-lg font-bold mb-2">PRIMARY DATA</h2>
      <p className="text-sm mb-4">
        Parchment be turns stand veela fawkes mistletoe snare drops.
      </p>
      <div className="flex gap-4 mb-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Choose a date
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div>
          <label htmlFor="ornare" className="block text-sm font-medium text-gray-700">
            Select a Ornare
          </label>
          <select
            id="ornare"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedOrnare}
            onChange={handleOrnareChange}
          >
            <option value="">Select a Ornare</option>
            {['Consectetur', 'Vestibulum', 'Egestas'].map((ornare) => (
              <option key={ornare} value={ornare}>
                {ornare}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="ultrices" className="block text-sm font-medium text-gray-700">
            Select an Ultrices
          </label>
          <select
            id="ultrices"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedUltrices}
            onChange={handleUltricesChange}
          >
            <option value="">Select an Ultrices</option>
            {['Consectetur', 'Vestibulum', 'Egestas'].map((ultrices) => (
              <option key={ultrices} value={ultrices}>
                {ultrices}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="erat" className="block text-sm font-medium text-gray-700">
            Select an Erat
          </label>
          <select
            id="erat"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={selectedErat}
            onChange={handleEratChange}
          >
            <option value="">Select an Erat</option>
            {['Consectetur', 'Vestibulum', 'Egestas'].map((erat) => (
              <option key={erat} value={erat}>
                {erat}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="flex justify-end mb-4">
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleClearAll}
        >
          Clear All
        </button>
      </div>
      <table className="w-full border border-gray-300 rounded-md">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="py-2 px-3">Magna</th>
            <th className="py-2 px-3">Ultrices</th>
            <th className="py-2 px-3">Ornare</th>
            <th className="py-2 px-3">Erat</th>
            <th className="py-2 px-3">Nisi</th>
            <th className="py-2 px-3">Facilisis</th>
            <th className="py-2 px-3">Elit</th>
            <th className="py-2 px-3">Senectus</th>
            <th className="py-2 px-3">Felis</th>
            <th className="py-2 px-3">Cursus</th>
            <th className="py-2 px-3">Grav</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.date}>
              <td className="py-2 px-3">{item.date}</td>
              <td className="py-2 px-3">{item.consectetur}</td>
              <td className="py-2 px-3">{item.vestibulum}</td>
              <td className="py-2 px-3">{item.egestas}</td>
              <td className="py-2 px-3">{item.id}</td>
              <td className="py-2 px-3">{item.facilisis}</td>
              <td className="py-2 px-3">{item.elit}</td>
              <td className="py-2 px-3">{item.pretium}</td>
              <td className="py-2 px-3">{item.senectus}</td>
              <td className="py-2 px-3">{item.felis}</td>
              <td className="py-2 px-3">{item.cursus}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-2">
        <p className="text-sm text-gray-500">Page 1 | 6 de 12</p>
      </div>
    </div>
  );
}

export default PrimaryData;
