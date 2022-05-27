import React, { useEffect , useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init'
import Order from './Order';
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders , setOrders] = useState([])
    const email = user.email
    useEffect( () =>{
        fetch(`http://localhost:5000/orders/${email}`)
        .then(res => res.json())
        .then(data => setOrders(data))

    } ,[])
    return (
        <div>
            <h1 className='text-2xl text-primary'>You have {orders.length} orders</h1>
            <div className='grid grid-cols-3'>
            {
                orders.map(order => <Order order={order} key={order._id}></Order>)
            }
            </div>
        </div>
    );
};

export default MyOrders;