import React from 'react';
import './bills.css';


export default function Bills() {
  return (
    <div className='bills-parent'>
        <div className='bills-div1'>
            <h1 className='bills-h1'>Bills</h1>
            <div className='bills-div-main-div'>
            <div className='input-div-main'>
                <div className='input-div'>
                    <label className='bill-input-label'>from</label>
                    <input type="date" className='bills-input'  />
                </div>
                <div className='input-div'>
                    <label className='bill-input-label'>to</label>
                    <input type="date" className='bills-input' />
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
            <div>
            <div className='bills-select-div'>
                <label className='bill-input-label'>paid</label>
                <input type='checkbox' />
            </div>
            <div className='bills-select-div'>
                <label className='bill-input-label'>unpaid</label>
                <input type='checkbox' />
            </div>
            <div className='bills-select-div'>
                <label className='bill-input-label'>all</label>
                <input type='checkbox' />
            </div>
            </div>
            </div>
            

            


            <div className='bill-id-div'>
                <lable className='bill-input-label'>bill id</lable>
                <input type='text' className='bills-input' />
            </div>
        </div>
        <div className='bills-div2'>
            <div>
                <div className='bills-view-header-div'>
                    <input type='checkbox' />
                    <p className='bills-view-header'>bill id</p>
                    <p className='bills-view-header'>date</p>
                    <p className='bills-view-header'>amount</p>
                    <p className='bills-view-header'>customer</p>
                    <p className='bills-view-header'>method</p>
                    <p className='bills-view-header'>status</p>
                </div>
                <div className='bills-view-header-div-value'>
                    <input type='checkbox' />
                    <p className='bills-view-header-value'>bill id</p>
                    <p className='bills-view-header-value'>date</p>
                    <p className='bills-view-header-value'>amount</p>
                    <p className='bills-view-header-value'>customer</p>
                    <p className='bills-view-header-value'>metod</p>
                    <p className='bills-view-header-value'>status</p>
                </div>
            </div>
        </div>
    </div>
  )
}
