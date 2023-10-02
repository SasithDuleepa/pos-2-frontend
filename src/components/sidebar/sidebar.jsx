import React from 'react';
import './Sidebar.css';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-ccompany-div'>
        <h1 className='sidebar-ccompany'>Company</h1>
      </div>

      <div className='sidebar-link-div'>
        <a className='sidebar-link-dashboad' href='/dashboad'>Dashboad</a>
        <a className='sidebar-link-dashboad' href='/sale'>Sale</a>
        <a className='sidebar-link-dashboad' href='/stock'>Stock</a>
        <a className='sidebar-link-dashboad' href='/supplier'>Supplier</a>
        <a className='sidebar-link-dashboad' href='/customer'>Customer</a>
        <a className='sidebar-link-dashboad' href='/bills'>Bills</a>
        <a className='sidebar-link-dashboad' href='/email'>E-Mail</a>


      </div>

    </div>
  );
}
