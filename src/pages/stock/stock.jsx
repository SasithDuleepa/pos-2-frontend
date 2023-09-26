import React, { useEffect, useState } from 'react';
import './stock.css';
import axios from 'axios';
import Edite from './../../components/icons/edit.png';
import Delete from './../../components/icons/delete.png';

export default function Stock() {
    const[addbtn,setAddbtn] = useState('stock-add-button')
    const[updatebtn,setUpdatebtn] = useState('deactive')
    
    const[currentQty,setcurrentQty] = useState(false)
    const [ data, setData] = useState({
        stock_id:'', 
        stock_item:'', 
        batch_no:'', 
        supplier:'',
        stock_qty:'', 
        taking_price:'', 
        selling_price:'', 
        stock_date:'',
        current_qty:''
    })
    const changeHandler = (e) => {
        setData({...data, [e.target.id]: e.target.value})
    }

    //add stock
    const addStock = async() => {
        const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/stock/add`,data);
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Stock Added Successfully')
            // getallstock();
        }else if(res.data.status === 500){
            alert('Server Error')
        }
    }

    //get stock
    const[stock,setstock] = useState([])
    const getStock = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/all`);
        console.log(res.data)
        if(res.data.status === 200 ){
            setstock(res.data.data)
        }        
    }
    useEffect(()=>{
        getStock();
    },[])

    //edite icon
    const editeicon = (id,batch_no,stock_item,supplier,stock_qty,taking_price,selling_price,stock_date,current_qty) => async (e) => {
        // stock.stock_id,stock.batch_no,stock.stock_item,stock.supplier,stock.stock_qty,stock.taking_price,stock.selling_price,stock.stock_date,stock.current_qty
        console.log(id,batch_no,stock_item,supplier,stock_qty,taking_price,selling_price,stock_date)
        setData({
            stock_id:id,
            stock_item:stock_item,
            batch_no:batch_no,
            supplier:supplier,
            stock_qty:stock_qty,
            taking_price:taking_price,
            selling_price:selling_price,
            stock_date:stock_date,
            current_qty:current_qty
        })
        setcurrentQty(true);
        setAddbtn('deactive')
        setUpdatebtn('stock-update-button')
    
    }

    const Update = async() => {
        const res = await axios.put(`${process.env.REACT_APP_BACKEND_API}/stock/update/?id=${data.stock_id}`,data);
        console.log(res.data)
        if(res.data.status === 200 ){
            alert('Stock Updated Successfully')
            getStock();
        }else if(res.data.status === 500){
            alert('Server Error')
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

  return (
    <div className='stock-parent'>
    <div className='stock-child-1'>
        <h1 className='stock-h1'>Add Stock</h1>
        <div className='stock-add-div'>
        <div className='stock-form-div-main'>
        <div className='stock-form-div'>
                <label className='stock-form-label'>Batch No.</label>
                <input  className='stock-form-input' id='batch_no'  type="text" value={data.batch_no} onChange={(e)=>changeHandler(e)}/>
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Stock Item</label>
                <input className='stock-form-input' id='stock_item' type="text" value={data.stock_item} onChange={(e)=>changeHandler(e)}/>
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Supplier</label>
                {/* <input  className='stock-form-input' id='supplier' type="text" value={data.supplier} onChange={(e)=>changeHandler(e)}/> */}
                <select className='stock-form-input' id='supplier' type="text" value={data.supplier} onChange={(e)=>changeHandler(e)}>
                    <option>{data.supplier}</option>                    
                    {suppliers.map(supplier => <option>{supplier.supplier_name}</option>)}
                    
                </select>
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Quantity</label>
                <input  className='stock-form-input' id='stock_qty' type="text" value={data.stock_qty} onChange={(e)=>changeHandler(e)}/>
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Taking Price</label>
                <input  className='stock-form-input' id='taking_price' type="text" value={data.taking_price} onChange={(e)=>changeHandler(e)}/>
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Selling Price</label>
                <input  className='stock-form-input' id='selling_price' type="text" value={data.selling_price} onChange={(e)=>changeHandler(e)}/>
            </div>
            <div className='stock-form-div'>
                <label className='stock-form-label'>Date</label>
                <input  className='stock-form-input' id='stock_date' type="date" value={data.stock_date} onChange={(e)=>changeHandler(e)}/>
            </div>
            {currentQty && 
            <div className='stock-form-div'>
            <label className='stock-form-label'>current stock</label>
            <input  className='stock-form-input' id='current_qty' type="text" value={data.current_qty} onChange={(e)=>changeHandler(e)}/>
            </div>
            }
            
        </div>
        <div className='stock-add-button-div'>
            <button className={addbtn} onClick={addStock}>Add</button>
            <button className={updatebtn} onClick={Update}>Update</button>
        </div>
        </div>
        
        
    </div>
    <div className='stock-child-2'>
        <div className='stock-view-div'>
            <div className='stock-view-div-header'>
                <p className='stock-batchno'>batch no.</p>
                <p className='stock-item'>item</p>
                <p className='stock-supplier'>supplier</p>
                <p className='stock-qty'>qty</p>
                <p className='stock-date'>available</p>
                <p className='stock-takingprice'>taking price</p>
                <p className='stock-sellingprice'>selling price</p>
                <p className='stock-date'>date</p>
                <p className='stock-action'>action</p>
            </div>

            {stock.map((stock,index) => {
                return(
                    <div className='stock-view-div-value' key={index}>
                        <p className='stock-batchno-value'>{stock.batch_no}</p>
                        <p className='stock-item-value'>{stock.stock_item}</p>
                        <p className='stock-supplier-value'>{stock.supplier}</p>
                        <p className='stock-qty-value'>{stock.stock_qty}</p>
                        <p className='stock-qty-value'>{stock.current_qty}</p>
                        <p className='stock-takingprice-value'>{stock.taking_price}</p>
                        <p className='stock-sellingprice-value'>{stock.selling_price}</p>
                        <p className='stock-date-value'>{stock.stock_date}</p>
                        <div className='stock-action-value'>
                            <img src={Edite} onClick={editeicon(stock.stock_id,
                                stock.batch_no
                                ,stock.stock_item,
                                stock.supplier,
                                stock.stock_qty,
                                stock.taking_price,
                                stock.selling_price,
                                stock.stock_date,
                                stock.current_qty)} className='edite-img'/>
                            <img src={Delete} className='delete-img'/>
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
