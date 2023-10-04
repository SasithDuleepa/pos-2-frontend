import React from 'react';
import './dashboad.css';

import Details_bar from '../../components/dashboad components/details_bar/details_bar';
import ItemChart from '../../components/dashboad components/item_chart/itemChart';

export default function Dashboad() {
  return (
    <div className='dashboad'>
      <h1 className='dashboad-title'>Dashboad</h1>
      <div><Details_bar/></div>
      <h2  className='dashboad-title'> Available Items</h2>
      <div className='dashboad-chart'>

        <ItemChart/></div>
      <div></div>
      <div></div>
      
    </div>
  )
}
