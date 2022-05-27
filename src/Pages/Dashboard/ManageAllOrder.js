import React, { useEffect , useState }  from 'react';

const ManageAllOrder = () => {
    const [orders , setOrders] = useState([])
    useEffect( () =>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => setOrders(data))

    } ,[])
    return (
        <div>
            <h1 className='text-3xl text-primary'> All Orders added by users</h1>
            <div className=' lg:grid lg:grid-cols-3'>
                {
                    orders.map( order =>
                        <div class="card w-96 bg-base-100 shadow-xl border border-black rounded m-2">
                        <div class="card-body">
                          <h2 class="card-title">{order.part}</h2>
                          <p className='text-left'>Price:-{order.price}</p>
                          <p className='text-left'>Address:-{order.address}</p>
                          <p className='text-left'>Phone:-{order.phone}</p>
                          <p className='text-left'>Quantity:-{order.quantity}</p>
                          <div class="card-actions justify-end">
                              <button class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">Delete</button>
                          </div>
                        </div>
                      </div>
                        )
                }
            </div>
            
        </div>
    );
};

export default ManageAllOrder;