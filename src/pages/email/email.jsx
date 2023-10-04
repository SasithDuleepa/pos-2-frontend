import React, { useState } from 'react';
import './email.css';
import axios from 'axios';

export default function Email() {
  const [date_start, setDate_start] = useState('');
  const [date_end, setDate_end] = useState('');
  const [bills, setBills] = useState([]);
  const [selectedBills, setSelectedBills] = useState([]);

  // Function to handle checkbox change for individual bills
  const toggleBillSelection = (billId) => {
    if (selectedBills.includes(billId)) {
      setSelectedBills(selectedBills.filter((id) => id !== billId));
    } else {
      setSelectedBills([...selectedBills, billId]);
    }
  };

  //send mail
  const handleBulkAction = async() => {
    
    console.log('Selected bills:', selectedBills);

    const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/email/send`,selectedBills);
    console.log(res.data);

};

  const searchHandler = async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/bills/billaccdaterangeunpaid/?start_date=${date_start}&end_date=${date_end}`
    );
    console.log(res.data);
    if (res.data.status === 200) {
      setBills(res.data.data);
    }
  };

  //bill id search
  const searchHandler2 = async (e) => {
    const res = await axios.get( `${process.env.REACT_APP_BACKEND_API}/bills/billaccidunpaid/?id=${e.target.value}`);
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
    <div className="Email-parent">
      <div className="Email-div1">
        <h1 className="Email-h1">Unpaid Bills</h1>
        <div className="Email-div-main-div">
          <div className="Email-input-div-main">
            <div className="Email-input-div">
              <label className="Email-input-label">from</label>
              <input
                type="date"
                className="Email-input"
                value={date_start}
                onChange={(e) => setDate_start(e.target.value)}
              />
            </div>
            <div className="Email-input-div">
              <label className="Email-input-label">to</label>
              <input
                type="date"
                className="Email-input"
                value={date_end}
                onChange={(e) => setDate_end(e.target.value)}
              />
            </div>
            <div>
              <button className='bill-search-btn' onClick={searchHandler}>Search</button>
            </div>
          </div>
        </div>

        <div className="Email-id-div">
          <label className="Email-input-label">bill id</label>
          <input type="text" className="Email-input" onChange={(e) => searchHandler2(e)}/>
        </div>
      </div>
      <div className="Email-div2">
        <div>
          <div className="Email-view-header-div">
            <input
              type="checkbox"
              onChange={() => {
                // Toggle selection for all bills
                if (selectedBills.length === bills.length) {
                  setSelectedBills([]);
                } else {
                  setSelectedBills(bills.map((bill) => bill.bill_id));
                }
              }}
            />
            <p className="Email-view-header">bill id</p>
            <p className="Email-view-header">date</p>
            <p className="Email-view-header">amount</p>
            <p className="Email-view-header">customer</p>
            <p className="Email-view-header">method</p>
            <p className="Email-view-header">status</p>
          </div>
          {bills.length > 0 ? (
            bills.map((bill, index) => (
              <div key={index} className="Email-view-header-div-value">
                <input
                  type="checkbox"
                  checked={selectedBills.includes(bill.bill_id)}
                  onChange={() => toggleBillSelection(bill.bill_id)}
                />
                <p className="Email-view-header-value">{bill.bill_id}</p>
                <p className="Email-view-header-value">{formatDate(bill.bil_date)}</p>
                <p className="Email-view-header-value">{bill.bill_total}</p>
                <p className="Email-view-header-value">{bill.bill_customer}</p>
                <p className="Email-view-header-value">{bill.bill_method}</p>
                <p className="Email-view-header-value">{bill.payment_status}</p>
              </div>
            ))
          ) : (
            <div className="Email-view-header-div-value">
              <p className='no-bills-p'>No bills found</p>
            </div>
          )}

          <div>
            <button className='send-mail-btn' onClick={handleBulkAction}>Send mail</button>
          </div>
        </div>
      </div>
    </div>
  );
}
