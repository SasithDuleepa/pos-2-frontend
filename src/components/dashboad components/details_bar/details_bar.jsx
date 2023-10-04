import React, { useEffect, useState } from 'react';

import './details_bar.css';
import axios from 'axios';


import Details_card from '../details_card/details_card';

export default function Details_bar() {

  //custmers
  const[Customers, setCustomers] = useState('')
  const GetCustomers =async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/all`)
    console.log(res.data)
    if(res.data.status === 200 ){
      setCustomers(res.data.data.length)
    }
  }

  //suppliers
  const[Suppliers, setSuppliers] = useState('')
  const GetSuppliers =async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/suppliers/all`)
    console.log(res.data)
    if(res.data.status === 200 ){
      setSuppliers(res.data.data.length)
    }
  }

  //items
  const[Items, setItems] = useState('')
  const GetItems =async () => {
    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/all`);
    if(res.data.status === 200 ){
      setItems(res.data.data.length)
    }
  }

  useEffect(()=>{
    GetCustomers()
    GetSuppliers()
    GetItems()
  },[])
  return (
    <div className='details_bar'>
        <Details_card title="Total Customers" content={Customers}/>
        <Details_card title="Total Suppliers" content={Suppliers}/>
        <Details_card title="Total Sale Items" content={Items}/>
    </div>
  )
}
