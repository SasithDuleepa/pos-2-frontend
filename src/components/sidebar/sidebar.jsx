import React from 'react';
import './Sidebar.css';
export default function Sidebar() {
  const currentPath = window.location.pathname;
  console.log(currentPath);
  return (
    <div className='sidebar'>
      <div className='sidebar-ccompany-div'>
        <h1 className='sidebar-ccompany'>Company</h1>
      </div>

      <div className='sidebar-link-div'>
        <a className={currentPath=='/' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'}  href='/'>Dashboad</a>
        <a className={currentPath=='/sale' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'}  href='/sale'>Sale</a>
        <a className={currentPath=='/stock' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'} href='/stock'>Stock</a>
        <a className={currentPath=='/supplier' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'}  href='/supplier'>Supplier</a>
        <a className={currentPath=='/customer' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'}  href='/customer'>Customer</a>
        <a className={currentPath=='/bills' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'}  href='/bills'>Bills</a>
        <a className={currentPath=='/email' ? 'sidebar-link-dashboad-active' : 'sidebar-link-dashboad'}  href='/email'>E-Mail</a>


      </div>

    </div>
  );
}
