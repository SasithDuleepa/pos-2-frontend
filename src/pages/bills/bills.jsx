import React, { useState } from 'react';
import './bills.css';
import axios from 'axios';


export default function Bills() {
    const[start_date, setStart_date] = useState('');
    const[end_date, setEnd_date] = useState('');


    const [bills, setBills] = useState([])

    const searchHandler = async () => {
        const res =await axios.get( `${process.env.REACT_APP_BACKEND_API}/bills/billaccdaterange/?start_date=${start_date}&end_date=${end_date}`)
        console.log(res.data)
        setBills(res.data.data)
    }

    const idSearchHandler =async (e) =>{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/bills/billaccid/?id=${e.target.value}`)
        console.log(res.data);
        setBills(res.data.data) 
        
    }


    function formatDate(inputDate) {
        const originalDate = new Date(inputDate);
        const modifiedDate = new Date(originalDate);
        modifiedDate.setDate(originalDate.getDate() + 1);
        const year = modifiedDate.getFullYear();
        const month = (modifiedDate.getMonth() + 1).toString().padStart(2, '0');
        const day = modifiedDate.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
      }
  return (
    <div className='bills-parent'>
        <div className='bills-div1'>
            <h1 className='bills-h1'>Bills</h1>
            <div className='bills-div-main-div'>
            <div className='input-div-main'>
                <div className='input-div'>
                    <label className='bill-input-label'>From</label>
                    <input type="date" className='bills-input' onChange={(e)=>setStart_date(e.target.value)} value={start_date}/>
                </div>
                <div className='input-div'>
                    <label className='bill-input-label'>To</label>
                    <input type="date" className='bills-input' onChange={(e)=>setEnd_date(e.target.value)} value={end_date}/>
                </div>
                <div>
                    <button onClick={searchHandler} className='bills-search-btn'>Search</button>
                </div>
            </div>

            </div>
            

            


            <div className='bill-id-div'>
                <lable className='bill-input-label'>Bill Id</lable>
                <input type='text' className='bills-input' onChange={(e)=>idSearchHandler(e)}/>
            </div>
        </div>
        <div className='bills-div2'>
            <div>
                <div className='bills-view-header-div'>
                    
                    <p className='bills-view-header'>bill id</p>
                    <p className='bills-view-header'>date</p>
                    <p className='bills-view-header'>amount</p>
                    <p className='bills-view-header'>customer</p>
                    <p className='bills-view-header'>method</p>
                    <p className='bills-view-header'>status</p>
                </div>
                <div className='bills-view-container'>
                {bills.length > 0 ? (
             bills.map((bill, index) => (
                <a href={`/bill_preview/${bill.bill_id}`} onClick={()=>{setStart_date('');setEnd_date("")}} className='bills-view-header-div-value'>
                <p className='bills-view-header-value'>{bill.bill_id}</p>
                <p className='bills-view-header-value'>{formatDate(bill.bil_date)}</p>
                <p className='bills-view-header-value'>{bill.bill_total}</p>
                <p className='bills-view-header-value'>{bill.bill_customer}</p>
                <p className='bills-view-header-value'>{bill.bill_method}</p>
                <p className='bills-view-header-value'>{bill.payment_status}</p>
            </a>
            ))
          ) : (
            <div className="bills-view-header-div-value">
              <p className='no-bills-p'>No bills found</p>
            </div>
          )}
                </div>




            </div>
            
        </div>
    </div>
  )
}
