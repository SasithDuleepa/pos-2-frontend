import React from 'react';
import './bill.css';

export default function Sale() {
  return (
    <div className='bill-parent'>
        <div className='bill-child-1'>
          <h1 className='sale-h1'>Bill</h1>
          <div className='sale-input-div-container-1'>
            <div  className='sale-input-div'>
              <label className='sale-input-label'>bill id</label>
              <input className='sale-input' type='text' />
            </div>
            <div className='sale-input-div'>
              <label className='sale-input-label'>customer</label>
              <input className='sale-input' type='text' />
            </div>
            <div className='sale-input-div'>
              <label className='sale-input-label'>date</label>
              <input className='sale-input' type='text' />
            </div>
          </div>
          <div className='sale-input-div-container-2'>
            <div  className='sale-input-div'>
              <label className='sale-input-label'>item</label>
              <input className='sale-input' type='text' />
            </div>
            <div  className='sale-input-div'>
              <label className='sale-input-label'>qty</label>
              <input className='sale-input' type='text' />
            </div>
            <div  className='sale-input-div'>
              <button className='sale-bill-add-btn'>add</button>
            </div>

          </div>
        </div>
        <div className='bill-child-2'>
          <div>
            <div className='sale-bill-div'>
              <div className='sale-bill-total-sub-div'>
                <label className='sale-bill-label'>payment method</label>
                <p className='sale-bill-values'>cashon</p>
              </div>
              <div className='sale-bill-total-sub-div'>
                <label className='sale-bill-label'>discount</label>
                <p className='sale-bill-values'>10%</p>
              </div>
              <div className='sale-line'></div>
              <div className='sale-bill-total-sub-div'>
                <label className='sale-bill-label'>Total</label>
                <p className='sale-bill-values'>$ 100</p>
              </div>
            </div>
            <button className='sale-bill-enter-btn'>Enter</button>

          </div>

        </div>
        <div className='bill-child-3'>
          <div className='bill-head-div'>
            <p className='bill-item'>item</p>
            <p className='bill-qty'>qty</p>
            <p className='bill-price'>price</p>
            <p className='bill-total'>total</p>
            <p className='bill-option'>option</p>
          </div>

          <div className='bill-head-div-values'>
            <p className='bill-item-values'>item</p>
            <p className='bill-qty-values'>qty</p>
            <p className='bill-price-values'>price</p>
            <p className='bill-total-values'>total</p>
            <p className='bill-option-values'>option</p>
          </div>
        </div>
    </div>
  )
}
