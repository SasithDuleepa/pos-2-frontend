import React from 'react';

import './details_bar.css';


import Details_card from '../details_card/details_card';

export default function Details_bar() {
  return (
    <div className='details_bar'>
        <Details_card/>
        <Details_card/>
        <Details_card/>
    </div>
  )
}
