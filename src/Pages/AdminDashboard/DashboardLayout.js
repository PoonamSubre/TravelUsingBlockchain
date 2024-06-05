import React from 'react';
import Sidebar from './Sidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <header className="bg-gray-800 text-white p-4">Admin Dashboard</header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
