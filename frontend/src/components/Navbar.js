// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <nav>
      
      <ul>
        <li><Link className='link' to="/dashboard">Dashboard</Link></li>
        <li><Link className='link' to="/dashboard/admins">Admins</Link></li>
        <li><Link className='link' to="/dashboard/users">Customers</Link></li>
        <li><Link className='link' to="/dashboard/events">Events</Link></li>
        <li><Link className='link' to="/dashboard/tags">Tags</Link></li>
        <li><Link className='link' to="/dashboard/event-flow">Event Flow</Link></li>
        <li><Link className='link' to="/dashboard/searching">Searching</Link></li>
        <li><Link className='link' to="/dashboard/analysis">Analysis</Link></li>
        <li><Link className='link' to="/dashboard/upload">Uploads Flow</Link></li>
        <li><Link className='link' to="/dashboard/uploaduser">Uploads Users</Link></li>
        <li><Link className='link' to="/dashboard/uploadusersevent">Uploads Users Events</Link></li>

     
      </ul>
    </nav>
  );
};



export default Navbar;
