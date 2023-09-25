import React from 'react';
import './supplier.css';

export default function Supplier() {
  return (
    <div className='supplier-parent'>
        <div className='supplier-child-1'>
            <h1 className='supplier-h1'>Add Supplier</h1>
            <div className='supplier-add-div'>
            <div className='supplier-form-div-main'>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Name</label>
                    <input className='supplier-form-input' type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Address</label>
                    <input  className='supplier-form-input'  type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Contact</label>
                    <input  className='supplier-form-input'  type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Email</label>
                    <input  className='supplier-form-input'  type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier NIC</label>
                    <input  className='supplier-form-input'  type="text" />
                </div>
            </div>
            <div className='supplier-add-button-div'>
                <button className='supplier-add-button'>Add</button>
                {/* <button>Update</button> */}
            </div>
            </div>
            
            
        </div>
        <div className='supplier-child-2'></div>
    </div>
  )
}
