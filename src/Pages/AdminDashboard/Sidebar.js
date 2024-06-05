import React from 'react';
import { Link } from 'react-router-dom'; 

const Sidebar = () => {
  return (
    <aside className="bg-gray-700 text-white w-64">
      <ul className="p-4">
        <li className="py-2 px-4">
          <Link to="/admin">
            <button className="w-full text-left focus:outline-none">My Dashboard</button>
          </Link>
        </li>
        <li className="py-2 px-4">
          <Link to="/admin">
            <button className="w-full text-left focus:outline-none">Add Tour Packages</button>
          </Link>
        </li>
        <li className="py-2 px-4">
          <Link to="/Bookings">
            <button className="w-full text-left focus:outline-none">View Bookings</button>
          </Link>
        </li>
        
      </ul>
    </aside>
  );
};

export default Sidebar;
