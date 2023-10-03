import React from 'react';
import './details_card.css';

export default function Details_card(props) {
  return (
    <div className='details_card'>
        <div className='details_card_title-div'>
            <p className='details_card_title'>{props.title}</p>
        </div>
        <div className='details_card_content-div'>
            <p className='details_card_content'>123</p>
        
        </div>
    </div>
  )
}
