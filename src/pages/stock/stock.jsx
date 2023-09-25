import React from 'react';
import './stock.css';

export default function Stock() {
  return (
    <div className='stock-parent'>
    <div className='stock-child-1'>
        <h1 className='stock-h1'>Add Stock</h1>
        <div className='stock-add-div'>
        <div className='stock-form-div-main'>
        <div className='stock-form-div'>
                <label className='stock-form-label'>Batch No.</label>
                <input  className='stock-form-input'  type="text" />
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Stock Item</label>
                <input className='stock-form-input' type="text" />
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Supplier</label>
                <input  className='stock-form-input'  type="text" />
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Quantity</label>
                <input  className='stock-form-input'  type="text" />
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Taking Price</label>
                <input  className='stock-form-input'  type="text" />
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Selling Price</label>
                <input  className='stock-form-input'  type="text" />
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Date</label>
                <input  className='stock-form-input'  type="text" />
            </div>
        </div>
        <div className='stock-add-button-div'>
            <button className='stock-add-button'>Add</button>
            {/* <button>Update</button> */}
        </div>
        </div>
        
        
    </div>
    <div className='stock-child-2'></div>
</div>
  )
}
