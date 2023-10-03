import React from 'react';
import './dashboad.css';

import Details_bar from '../../components/dashboad components/details_bar/details_bar';

export default function Dashboad() {
  return (
    <div className='dashboad'>
      <h1 className='dashboad-title'>Dashboad</h1>
      <Details_bar/>
    </div>
  )
}
