import React from 'react';
import TopNav from './Components/TopNav';
import TabNav from './Components/TabNav';
import PrimaryData from './Components/PrimaryData';
import DataTable from './Components/DataTable';

function App() {
  return (
    <div className="App bg-green-50 min-h-screen">
      <TopNav />
      <TabNav />
      <PrimaryData />
      <DataTable />
    </div>
  );
}

export default App;
