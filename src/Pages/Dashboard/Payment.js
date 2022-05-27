import React,{useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';

const Payment = () => {
    const {id} = useParams()
    const [order , setOrder] = useState([])
    useEffect( () =>{
        const url =`http://localhost:5000/order/${id}`
        fetch(url, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => setOrder(data))
    } ,[])
    console.log(order)
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-primary font-bold">Hi, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.part}</h2>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
        </div>
    );
};

export default Payment;