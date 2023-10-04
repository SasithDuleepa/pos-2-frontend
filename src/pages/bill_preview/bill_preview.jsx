import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './bill_preview.css';
import axios from 'axios';

export default function Bill_preview() {
    let { id } = useParams();

    //const get bill data

    const[billdata,setbilldata]= useState({
      id:"",
      bill_customer:"",
      bill_date:"",
      payment_method:"",
      bill_discount:"",
      bill_total:"",
      payment_status:""
    
    })

    //get bill details
    const getbilldetails=async()=>{
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/bills/billaccid/?id=${id}`);
      
      if(res.data.data.length>0){
        setbilldata({
          id:res.data.data[0].id,
          bill_customer:res.data.data[0].bill_customer,
          bill_date:     formatDate(res.data.data[0].bil_date) ,
          payment_method:res.data.data[0].bill_method,
          bill_discount:res.data.data[0].bill_discount,
          bill_total:res.data.data[0].bill_total,
          payment_status:res.data.data[0].payment_status
        
        })
      }
    }
    
    const[billitems,setbillitems]= useState([])
    //get bill items
    const GetbillItems = async () =>{
      const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/bills/billitemsid/?id=${id}`);
      console.log(res.data.data); 
      setbillitems(res.data.data)
    }
    useEffect(()=>{getbilldetails()
      GetbillItems()
    },[])


    function formatDate(inputDate) {
      const originalDate = new Date(inputDate);
      const modifiedDate = new Date(originalDate);
      modifiedDate.setDate(originalDate.getDate() + 1);
      const year = modifiedDate.getFullYear();
      const month = (modifiedDate.getMonth() + 1).toString().padStart(2, '0');
      const day = modifiedDate.getDate().toString().padStart(2, '0');
      return `${year}-${month}-${day}`;
    }


    //paid unpaid
    const[status,setstatus]= useState()
    const statushandler = (e) =>{
      console.log(e.target.value);
      setstatus(e.target.value)

     

    }
    //update
    const Update = async () =>{
      const res =await axios.put(`${process.env.REACT_APP_BACKEND_API}/bills//billstatusupdate/?id=${id}`,{payment_status:status})
      console.log(res.data);
      if(res.data.status===200){
        alert('payment status updated')
      }
    }
    


  return (
    <div class="parent-bill-preview">
<div class="div1-bill-preview">
<h1 className='bill-preview-header'>Bill id : {id}</h1>
  <div className='bill-priview-out-div'>

  
  <div className='bill-payment-preview-main-div'>
    <div className='bill-preview-details-div'>
      <label className='bill-preview-details-label'>Customer :</label>
      <p className='bill-preview-details-p'>{billdata.bill_customer}</p>
    </div>
    <div className='bill-preview-details-div'>
      <label className='bill-preview-details-label'>Date :</label>
      <p className='bill-preview-details-p'>{billdata.bill_date}</p>
    </div>
    <div className='bill-preview-details-div'>
      <label className='bill-preview-details-label'>Discount :</label>
      <p className='bill-preview-details-p'>{billdata.bill_discount}</p>
    </div>
    <div className='bill-preview-details-div'>
      <label className='bill-preview-details-label'>Payment Method :</label>
      <p className='bill-preview-details-p'>{billdata.payment_method}</p>
    </div>
    <div className='bill-preview-details-div'>
      <label className='bill-preview-details-label'>Total bill :</label>
      <p className='bill-preview-details-p'>{billdata.bill_total}</p>
    </div>
    <div className='bill-preview-details-div'>
      <label className='bill-preview-details-label'>Payment Status :</label>
      {/* <p className='bill-preview-details-p'>{billdata.payment_status}</p> */}
      <select onChange={(e)=>statushandler(e)}>
        <option value={billdata.payment_status}>{billdata.payment_status}</option>
        <option value={'paid'}>paid</option>
        <option value={'unpaid'}>unpaid</option>
      </select>
    </div>
  </div>


  </div>
  
</div>
<div class="div2-bill-preview">
  <div>
        <div className='bill-preview-items-head-div'>
          <p className='bill-preview-items-item'>item</p>
          <p className='bill-preview-items-itemprice'>item price</p>
          <p className='bill-preview-items-qty'>qty</p>
          <p className='bill-preview-items-price'>price</p>
          <p className='bill-preview-items-total'>total</p>
        </div>

        {billitems.map((item,index)=>(
          <div key={index} className='bill-preview-items-head-div-details'>
            <p className='bill-preview-items-item-details'>{item.bill_item}</p>
            <p className='bill-preview-items-itemprice-details'>{item.bill_item_price}</p>
            <p className='bill-preview-items-qty-details'>{item.bill_item_qty}</p>
            <p className='bill-preview-items-price-details'>{item.bill_item_price}</p>
            <p className='bill-preview-items-total-details'>{item.bill_item_total}</p>
          </div>
        ))}

  </div>
       
   </div>

   <button onClick={Update} className='bill-preview-update-btn'>update</button>
</div>

  )
}
