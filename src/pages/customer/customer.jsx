import React from 'react';
import './customer.css';

export default function Customer() {
  return (
    <div className='customer-parent'>
        <div className='customer-child-1'>
            <h1 className='customer-h1'>Add Customer</h1>
            <div className='customer-add-div'>
            <div className='customer-form-div-main'>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Name</label>
                    <input className='customer-form-input' type="text" />
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Address</label>
                    <input  className='supplier-form-input'  type="text" />
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Contact</label>
                    <input  className='customer-form-input'  type="text" />
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Email</label>
                    <input  className='customer-form-input'  type="text" />
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer NIC</label>
                    <input  className='customer-form-input'  type="text" />
                </div>
            </div>
            <div className='customer-add-button-div'>
                <button className='customer-add-button'>Add</button>
                {/* <button>Update</button> */}
            </div>
            </div>
            
            
        </div>
        <div className='customer-child-2'></div>
    </div>
  )
}
