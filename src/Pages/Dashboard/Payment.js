import React,{useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutFrom'
const stripePromise = loadStripe('pk_test_51L48o3LH09G82JEzdGxt01wiRZOlDF9us8aAEyJgLi05rGsBy497JkLqaZUFETff8Pp1RXS4UCK9b7XMLobrQrA100VrLLyNz3');
const Payment = () => {
    const {id} = useParams()
    const [order , setOrder] = useState([])
    useEffect( () =>{
        const url =`https://dry-shelf-78411.herokuapp.com/order/${id}`
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
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12 border border-accent">
                <div class="card-body">
                    <p className="text-primary font-bold">Hi, {order.name}</p>
                    <h2 class="card-title">Please Pay for {order.part}</h2>
                    <p>Please pay: ${order.price}</p>
                    <div class="card-actions justify-end">
                          </div>
                          <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl border border-accent rounded-3xl hover:text-primary">
                <div class="card-body">
                <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;