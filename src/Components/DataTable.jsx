import React from 'react';

const DataTable = () => {
  const data = [
    { name: 'India', code: 'IN', population: 1324171354, size: 3287263 },
    { name: 'China', code: 'CN', population: 1403500365, size: 9596961 },
    { name: 'Italy', code: 'IT', population: 60483973, size: 301340 },
    { name: 'United States', code: 'US', population: 327167434, size: 9833520 },
    { name: 'Canada', code: 'CA', population: 37602103, size: 9984670 },
    { name: 'Australia', code: 'AU', population: 25475400, size: 7692024 },
    { name: 'Germany', code: 'DE', population: 83019200, size: 357578 },
    { name: 'Ireland', code: 'IE', population: 4857000, size: 70273 },
    { name: 'Mexico', code: 'MX', population: 126577691, size: 1972550 },
    { name: 'Japan', code: 'JP', population: 126317000, size: 377973 },
    { name: 'France', code: 'FR', population: 67022000, size: 640679 },
    { name: 'United Kingdom', code: 'GB', population: 67545757, size: 242495 },
    { name: 'Russia', code: 'RU', population: 146793744, size: 17098246 },
    { name: 'Nigeria', code: 'NG', population: 200962417, size: 923768 },
    { name: 'Brazil', code: 'BR', population: 210147125, size: 8515767 },
  ];

  return (
    <div className="p-4">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">ISO Code</th>
            <th className="px-4 py-2">Population</th>
            <th className="px-4 py-2">Size (km²)</th>
            <th className="px-4 py-2">Density</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            const density = (row.population / row.size).toFixed(2);
            return (
              <tr key={index} className="text-center border-t">
                <td className="px-4 py-2">{row.name}</td>
                <td className="px-4 py-2">{row.code}</td>
                <td className="px-4 py-2">{row.population.toLocaleString()}</td>
                <td className="px-4 py-2">{row.size.toLocaleString()}</td>
                <td className="px-4 py-2">{density}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
