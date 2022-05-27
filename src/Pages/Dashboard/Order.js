import React from 'react';
import {Link } from 'react-router-dom'
const Order = ({order}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl border border-black rounded m-2">
        <div class="card-body">
          <h2 class="card-title">{order.part}</h2>
          <p className='text-left'>Price:-{order.price}</p>
          <p className='text-left'>Address:-{order.address}</p>
          <p className='text-left'>Phone:-{order.phone}</p>
          <p className='text-left'>Quantity:-{order.quantity}</p>
          <div class="card-actions justify-end">
              <Link to={`/dashboard/payment/${order._id}`}><button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">Pay Now</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Order;