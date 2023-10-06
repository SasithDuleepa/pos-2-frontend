import React, { useEffect, useState } from 'react';
import './supplier.css';
import axios from 'axios';
import Edite from './../../components/icons/edit.png';
import Delete from './../../components/icons/delete.png';

export default function Supplier() {
    const[addbtn,setAddbtn] = useState('supplier-add-button')
    const[updatebtn,setUpdatebtn] = useState('deactive')


    const [data,setData] = useState({
        supplier_id:"",
        supplier_name:'',
        supplier_address:'',
        supplier_contact:'',
        supplier_email:'',
        supplier_nic:''
    })
    const handleInputChange = (e) => {
        setData({...data,[e.target.id]:e.target.value})
    }

    //add
    const addSupplier = async() => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/suppliers/add`,data)
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Supplier Added Successfully')
            getAllSuppliers();
            setData({
                supplier_id:"",
                supplier_name:'',
                supplier_address:'',
                supplier_contact:'',
                supplier_email:'',
                supplier_nic:''
            })
        }else if(res.data.status === 500){
            alert('Server Error')
        
        }else if(res.data.status === 400){
            alert('Supplier Not Added')
        }else{
            alert('Something went wrong')
        
        }
    
    }

    //get all suppliers
    const[suppliers,setsuppliers] = useState([])
    const getAllSuppliers = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/suppliers/all`)
        console.log(res.data)
        setsuppliers(res.data.data)
    }
    useEffect(() => {
        getAllSuppliers();
    
    },[])


    //edite icon
    const editeicon = (id,name,address,contact,email,nic) => (e) => {
        setData({supplier_id:id, supplier_name:name,supplier_address:address,supplier_contact:contact,supplier_email:email,supplier_nic:nic})
        setAddbtn('deactive')
        setUpdatebtn('supplier-update-button')
    
    }
    //update 
    const updateSupplier = async() => {
        const res = await axios.put(`${process.env.REACT_APP_BACKEND_API}/suppliers/update/?id=${data.supplier_id}`,data);
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Supplier Updated Successfully')
            getAllSuppliers();
        }else if(res.data.status === 500){
            alert('Server Error')
        }else{
            alert('Supplier Not Updated')
        }
        
    }

    //delete
    const deleteSupplier = (id) => async(e) =>  {
        const res = await axios.delete(`${process.env.REACT_APP_BACKEND_API}/suppliers/delete/?id=${id}`);
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Supplier Deleted Successfully')
            getAllSuppliers();
        }else if(res.data.status === 500){
            alert('Server Error')
        }else{
            alert('Supplier Not Deleted')
        }
        
    
    }
  return (
    <div className='supplier-parent'>
        <div className='supplier-child-1'>
            <h1 className='supplier-h1'>Add Supplier</h1>
            <div className='supplier-add-div'>
            <div className='supplier-form-div-main'>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Name</label>
                    <input className='supplier-form-input' id='supplier_name' value={data.supplier_name} onChange={(e)=>handleInputChange(e)} type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Address</label>
                    <input  className='supplier-form-input' id='supplier_address' value={data.supplier_address}  onChange={(e)=>handleInputChange(e)}  type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Contact</label>
                    <input  className='supplier-form-input' id='supplier_contact' value={data.supplier_contact} onChange={(e)=>handleInputChange(e)}  type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier Email</label>
                    <input  className='supplier-form-input' id='supplier_email' value={data.supplier_email}   onChange={(e)=>handleInputChange(e)}   type="text" />
                </div>
                <div className='supplier-form-div'>
                    <label className='supplier-form-label'>Supplier NIC</label>
                    <input  className='supplier-form-input' id='supplier_nic' value={data.supplier_nic}   onChange={(e)=>handleInputChange(e)}  type="text" />
                </div>
            </div>
            <div className='supplier-add-button-div'>
                <button className={addbtn} onClick={addSupplier}>Add</button>
                <button className={updatebtn}  onClick={updateSupplier}>Update</button>
            </div>
            </div>
            
            
        </div>
        <div className='supplier-child-2'>
            <div className='supplier-view-div'>
                <div className='supplier-view-div-header'>
                    <p className='supplier-name'>Name</p>
                    <p className='supplier-address'>Address</p>
                    <p className='supplier-contact'>Contact</p>
                    <p className='supplier-email'>Email</p>
                    <p className='supplier-nic'>NIC</p>
                    <p className='supplier-action'>Action</p>
                </div>
                <div className='supplier-view-div-value-main'>
                {suppliers.map((supplier,index) => {
                    return(
                        <div className='supplier-view-div-value' key={index}>
                            <p className='supplier-name-value'>{supplier.supplier_name}</p>
                            <p className='supplier-address-value'>{supplier.supplier_address}</p>
                            <p className='supplier-contact-value'>{supplier.supplier_contact}</p>
                            <p className='supplier-email-value'>{supplier.supplier_email}</p>
                            <p className='supplier-nic-value'>{supplier.supplier_nic}</p>
                            <div className='supplier-action-value'>
                                <img className='edite-img' src={Edite} onClick={editeicon(
                                    supplier.supplier_id,
                                    supplier.supplier_name,
                                    supplier.supplier_address,
                                    supplier.supplier_contact,
                                    supplier.supplier_email,
                                    supplier.supplier_nic
                                    )} alt="" />
                                <img className='delete-img' onClick={deleteSupplier(supplier.supplier_id)} src={Delete} alt="" />
                            </div>
                        </div>
                    )
                }
                )}
                </div>
                

                </div>
            </div>
        </div>


  )
}
