import React, { useState, useEffect } from 'react';
import './bill.css';
import axios from 'axios';
import Delete from './../../components/icons/delete.png';

import OnCash from './../../components/icons/on_cash.png';
import OnCredit from './../../components/icons/cashback.png';

export default function Sale() {
  const [billData, setBillData] = useState({
    bill_id: '',
    customer: '',
    date: '',
    payment_method: 'on credite',
    discount: 0,
    bill_total: 0,
    net_total: 0,
    payment_status:'unpaid',
    items: [],
  });

  const [itemName, setItemName] = useState('');
  const [qty, setQty] = useState();
  let SelectedItem = null;


  //get items acc to input
  const[item_name, setItem_name] = useState('')
    const[itemlist,setItemlst] = useState([])

    const itemSearchHandler = async(e) =>{
    let item= null;
    item = e.target.value;
    console.log(e.target.value)
    setItem_name(e.target.value)

    const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/itemacctoname/?item=${item}`);
    console.log(res.data.data)
    setItemlst(res.data.data)
  }
  const SelectItems = (e) =>{
    console.log(e)
    setItemName(e)
    setItem_name(e)
    setItemlst([])
  
  
  }


  const [items, setItems] = useState([]);
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/stock/all`);
        setItems(res.data.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };
    getItems();
  }, []);

  const qtyHandler = (e) => {
    setQty(e.target.value);
  };

  const BillItemHandler = () => {
    const selectedItem = items.find((item) => item.stock_item === itemName);

    if (selectedItem) {
      const totalPrice = selectedItem.selling_price * qty;
      const newItem = {
        item: itemName,
        qty: qty,
        price: selectedItem.selling_price,
        total: totalPrice,
      };
     


      setBillData((prevData) => ({
        ...prevData,
        items: [...prevData.items, newItem],
        bill_total: prevData.bill_total + totalPrice,
      }));

      
      setItem_name('')
      setItemName('');
      setQty(0);
      
    } else {
      console.error('Selected item not found in the items list.');
    }
  };


  //delete bill item
  const Deletehandler =(e)=> (index)=>{
    const updatedItems = [...billData.items];
    const deletedItem = updatedItems.splice(index, 1)[0]; // Remove item 
    const updatedTotal = billData.bill_total - deletedItem.total;

    setBillData((prevData) => ({
      ...prevData,
      items: updatedItems,
      bill_total: updatedTotal,
      net_total: prevData.bill_total - (prevData.bill_total * (prevData.discount / 100)),
    }));
  }


      //Bill id
      
      const bill_idHandler = (e) => {
          const timestamp = new Date().getTime().toString(36);
          const randomPortion = Math.random().toString(36).substr(2, 5); 

          

          setBillData((prevData) => ({
              ...prevData,
              bill_id: timestamp + randomPortion,
              date: new Date().toLocaleDateString(),
          }))


      }
      useEffect(() => {
          bill_idHandler();
      }
      , [])


      //get all customers
    const[customers,setcustomers] = useState([])
    const getallcustomers = async() => {
        const res = await axios.get(`${process.env.REACT_APP_BACKEND_API}/customers/all`)
        console.log(res.data)
        if(res.data.status === 200 ){
            setcustomers(res.data.data);
        }        
    }
    useEffect(() => {
        getallcustomers();
    },[])
    const customerSelectHandler = (e) => {
        setBillData((prevData) => ({
            ...prevData,
            customer: e.target.value,
        }))
    }


    //oncash on credit
    const[oncashClass, setOncashClass] = useState('sale-bill-img-oncash')
    const[oncreditClass, setOncreditClass] = useState('sale-bill-img-oncredite')
    
    const oncashHandler = (e) => {
      if(billData.payment_method==='on cash'){
        setOncashClass('sale-bill-img-oncash-active')
        setOncreditClass('sale-bill-img-oncredite')
      }else if(billData.payment_method==='on credite'){
        setOncashClass('sale-bill-img-oncash')
        setOncreditClass('sale-bill-img-oncredite-active')
      }
    }
    const Payment_method = (value)=> ()=>{
      
      if(value==='on cash'){
        console.log('method set on cash')
        
        setBillData((prevData) => ({
          ...prevData,
          payment_method: 'on cash',
          payment_status:'paid',
        }))
        setOncashClass('sale-bill-img-oncash-active')
        setOncreditClass('sale-bill-img-oncredite')
      }else if(value==='on credite'){
        console.log('method set on credite')
        
        setBillData((prevData) => ({
          ...prevData,
          payment_method: 'on credite',
          payment_status:'unpaid',
        }))
        setOncashClass('sale-bill-img-oncash')
        setOncreditClass('sale-bill-img-oncredite-active')
      }

    }
    
    useEffect(() => {
      oncashHandler()
      setBillData((prevData) => ({
        ...prevData,
        net_total: prevData.bill_total - (prevData.bill_total * (prevData.discount / 100)),
    }
    ))
    },[billData])

    //discount
    const discountHandler = (e) => {
      setBillData((prevData) => ({
        ...prevData,
        discount: e.target.value,
        net_total: prevData.bill_total - (prevData.bill_total * (prevData.discount / 100)),
    }
    ))
    }
    //send data
    const Senddata =async () => {
      console.log('send clicked!!')
      const res = await axios.post(`${process.env.REACT_APP_BACKEND_API}/bills/add`,billData)
      console.log(res.data)
      
      if(res.data.status === 200 ){
          alert('Bill Added Successfully')
          window.location.reload();
    }else if(res.data.status === 500){
        alert('Internal  Server Error')
    }else{
      alert('Bill Not Added')
  }
  }
  return (
    <div className='bill-parent'>
      <div className='bill-child-1'>
        <h1 className='sale-h1'>Bill</h1>
        <div className='sale-input-div-container-1'>
          <div className='sale-input-div'>
            <label className='sale-input-label'>Bill Id</label>
            <input className='sale-input' value={billData.bill_id} type='text' />
          </div>
          <div className='sale-input-div'>
            <label className='sale-input-label'>Customer</label>
            <select className='sale-input' onChange={(e) => customerSelectHandler(e)}>
              <option value=''>Select a Customer</option>
              {customers.map((customer, index) => (
                <option key={index} value={customer.customer_name}>
                  {customer.customer_name}
                </option>
              ))}
            </select>
            {/* <input className='sale-input' type='text' /> */}
          </div>
          <div className='sale-input-div'>
            <label className='sale-input-label'>Date</label>
            <input className='sale-input' type='text' value={billData.date}/>
          </div>
        </div>
        <div className='sale-input-div-container-2'>
         
          <div className='sale-input-div-item'>
            <div className='sale-input-item-name-label-div'>
              <label className='sale-input-label'>Item</label>
              <input className='sale-input' type='text'  onChange={(e) => itemSearchHandler(e)} value={item_name}/>
            </div>
            
            <div className='sale-input-item-result-div'>
            {itemlist.map((item, index) => (
                <div key={index} className='sale-item-list'>
                <li><a onClick={(e)=>SelectItems(item.stock_item)} value={item.stock_item}>{item.stock_item}</a></li>
                </div>
            ))}
            </div>
            
            {/* <select className='sale-input' onChange={(e) => itemSelectHandler(e)}>
              <option value=''>Select an item</option>
              {items.map((item, index) => (
                <option key={index} value={item.stock_item}>
                  {item.stock_item}-{item.current_qty}
                </option>
              ))}
            </select> */}
       

          </div>
          
          <div className='sale-input-div'>
            <label className='sale-input-label'>QTY</label>
            <input className='sale-input' value={qty} onChange={(e) => qtyHandler(e)} type='number' />
          </div>
          <div className='sale-input-div'>
            <button className='sale-bill-add-btn' onClick={BillItemHandler}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className='bill-child-2'>
        <div>
          <div className='sale-bill-div'>
            <div className='sale-bill-total-sub-div'>
              <label className='sale-bill-label'>Payment Method</label>
              {/* <p className='sale-bill-values'>{billData.payment_method}</p> */}
              <div className='sale-bill-payment-method-div'>
              <a><img className={oncashClass} src={OnCash}  onClick={Payment_method('on cash')}/></a>
              <a><img className={oncreditClass} src={OnCredit} onClick={Payment_method('on credite')}/></a>
              </div>
              
            </div>
            <div className='sale-bill-total-sub-div'>
              <label className='sale-bill-label'>Discount</label>
              <div className='discount-div'>
                <input type='number' value={billData.discount} onChange={(e)=>discountHandler(e)} className='sale-bill-discount-input'/><p className='discount-p'>%</p>
              </div>
            </div>
            <div className='sale-bill-total-sub-div'>
              <label className='sale-bill-label'>Total</label>
              <p className='sale-bill-values'>{billData.bill_total}</p>
            </div>
            <div className='sale-line'></div>
            <div className='sale-bill-total-sub-div'>
              <label className='sale-bill-label'>Net Total</label>
              <p className='sale-bill-values'>{billData.net_total}</p>
            </div>
          </div>
          <button className='sale-bill-enter-btn' onClick={Senddata}>Enter</button>
        </div>
      </div>
      <div className='bill-child-3'>
        <div className='bill-head-div'>
          <p className='bill-item'>Item</p>
          <p className='bill-qty'>Qty</p>
          <p className='bill-price'>Price</p>
          <p className='bill-total'>Total</p>
          <p className='bill-option'>Option</p>
        </div>

        <div className='bill-items-view'>
        {billData.items.length > 0 ? (
            billData.items.map((item, index) => (
          

              <div key={index} className='bill-head-div-values'>
                <p className='bill-item-values'>{item.item}</p>
                <p className='bill-qty-values'>{item.qty}</p>
                <p className='bill-price-values'>{item.price}</p>
                <p className='bill-total-values'>{item.total}</p>
                <p className='bill-option-values'><img className='bill-delete-img' src={Delete} onClick={Deletehandler(index)}/></p>
              </div>
             

            ))
          ) : (
            <div className='bill-head-div-values'>
              <p>No items added to the bill yet.</p>

            </div>
            
          )}
        </div>

        

        </div>
      
    </div>
  );
}
