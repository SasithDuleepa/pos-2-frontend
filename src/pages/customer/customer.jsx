import React, { useEffect, useState } from 'react';
import './customer.css';
import axios from 'axios';
import Edite from './../../components/icons/edit.png';
import Delete from './../../components/icons/delete.png';


export default function Customer() {
    const[addbtn,setAddbtn] = useState('customer-add-button')
    const[updatebtn,setUpdatebtn] = useState('deactive')
    const [data,setdata] = useState({
        customer_id:"",
        customer_name:'',
        customer_address:'',
        customer_contact:'',
        customer_email:'',
        customer_nic:''
    })
    const handlechange = (e) => {
        setdata({...data,[e.target.id]:e.target.value})
    }

    //add
    const addcustomer = async() => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/customers/add`,data)
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Customer Added Successfully')
            getallcustomers();
        }else if(res.data.status === 400){
            alert('Customer Not Added')
        }else if(res.data.status === 500){
            alert('Server Error')
        }else{
            alert('Something went wrong')
        }
    }
    
    //get all customers
    const[customers,setcustomers] = useState([])
    const getallcustomers = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/all`)
        console.log(res.data)
        if(res.data.status === 200 ){
            setcustomers(res.data.data)
        }        
    }
    useEffect(() => {
        getallcustomers();
    },[])
    
    // edite icon function
    const editeicon = (id,name,address,contact,email,nic)=>(e) => {
        console.log(id,name,address,contact,email,nic)
        setdata({
            customer_id:id,
            customer_name:name,
            customer_address:address,
            customer_contact:contact,
            customer_email:email,
            customer_nic:nic})
        setAddbtn('deactive')
        setUpdatebtn('customer-update-button')
    
        
    }
    // delete icon function
    const deleteicon = (id) => async(e) => {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_API}/customers/delete/?id=${id}`)
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Customer Deleted Successfully')
            getallcustomers();
    }else if(res.data.status === 500){
        alert('Server Error')
    }
}
    //update handle
    const updatecustomer = async() => {
        const res = await axios.put(`${process.env.REACT_APP_BACKEND_API}/customers/update/?id=${data.customer_id}`,data);
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Customer Updated Successfully')
            getallcustomers();
        }else if(res.data.status === 500){
            alert('Server Error')
        
        }
    }
  return (
    <div className='customer-parent'>
        <div className='customer-child-1'>
            <h1 className='customer-h1'>Add Customer</h1>
            <div className='customer-add-div'>
            <div className='customer-form-div-main'>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Name</label>
                    <input className='customer-form-input' type="text" id='customer_name' onChange={(e)=>handlechange(e)} value={data.customer_name}/>
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Address</label>
                    <input  className='supplier-form-input'  type="text" id='customer_address' onChange={(e)=>handlechange(e)} value={data.customer_address}/>
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Contact</label>
                    <input  className='customer-form-input'  type="text" id='customer_contact' onChange={(e)=>handlechange(e)} value={data.customer_contact}/>
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer Email</label>
                    <input  className='customer-form-input'  type="text" id='customer_email' onChange={(e)=>handlechange(e)} value={data.customer_email}/>
                </div>
                <div className='customer-form-div'>
                    <label className='customer-form-label'>Customer NIC</label>
                    <input  className='customer-form-input'  type="text" id='customer_nic' onChange={(e)=>handlechange(e)} value={data.customer_nic}/>
                </div>
            </div>
            <div className='customer-add-button-div'>
                <button className={addbtn} onClick={addcustomer}>Add</button>
                <button className={updatebtn} onClick={updatecustomer}>Update</button>
            </div>
            </div>
            
            
        </div>
        <div className='customer-child-2'>
            <div >
                <div className='customer-view-div-header'>
                    <p className='customer-name'>name</p>
                    <p className='customer-address'>address</p>
                    <p className='customer-contact'>contact</p>
                    <p className='customer-email'>email</p>
                    <p className='customer-nic'>nic</p>
                    <p className='customer-action'>action</p>
                </div>
                {/* <div className='customer-view-div-value'>
                    <p className='customer-name-value'>name</p>
                    <p className='customer-address-value'>address</p>
                    <p className='customer-contact-value'>contact</p>
                    <p className='customer-email-value'>email</p>
                    <p className='customer-nic-value'>nic</p>
                    <div className='customer-action-value'>
                        <img className='edite-img' src={Edite} alt="" />
                        <img className='delete-img' src={Delete} alt="" />
                    </div>
                </div> */}
                {customers.map((customer,index) => {
                    return(
                        <div className='customer-view-div-value' key={index}>
                            <p className='customer-name-value'>{customer.customer_name}</p>
                            <p className='customer-address-value'>{customer.customer_address}</p>
                            <p className='customer-contact-value'>{customer.customer_contact}</p>
                            <p className='customer-email-value'>{customer.customer_email}</p>
                            <p className='customer-nic-value'>{customer.customer_nic}</p>
                            <div className='customer-action-value'>
                                <img className='edite-img' onClick={editeicon(
                                    customer.customer_id,
                                    customer.customer_name,
                                    customer.customer_address,
                                    customer.customer_contact,
                                    customer.customer_email,
                                    customer.customer_nic

                                    )} src={Edite} alt="" />
                                <img className='delete-img' onClick={deleteicon(customer.customer_id)} src={Delete} alt="" />
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    </div>
  )
}
