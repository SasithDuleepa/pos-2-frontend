import React from 'react';
import { useParams } from 'react-router';

export default function Bill_preview() {
    let { id } = useParams();


  return (
    <div>
      <p>{id}</p>
      <div>
        <div>
          <label>bill customer</label>
          <input type="text" />
        </div>
        <div>
          <label>bill date</label>
          <input type="text" />
        </div>
        <div>
          <label>payment method</label>
          <input type="text" />
        </div>
        <div>
          <label>bill discount</label>
          <input type="text" />
        </div>
        <div>
          <label>bill total</label>
          <input type="text" />
        </div>
        <div>
          <label>payment status</label>
          <input type="text" />
        </div>

      </div>
    </div>
  )
}
