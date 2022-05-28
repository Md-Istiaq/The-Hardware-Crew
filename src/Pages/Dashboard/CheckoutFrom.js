import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';


const CheckoutFrom =  ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('');
     


    const {price ,name,Part,email} = order
    useEffect(() => {
        console.log(price)
        if(price){
            fetch('https://localhost:5000/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify({ price})
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }

    }, [price])
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        setCardError(error?.message || '')
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false);
        }
        else {
            setCardError('');
            console.log(paymentIntent);
            setSuccess('Congrats! Your payment is completed.')

        }
    }
    return (
        <>
                <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '20px',
                        color: 'black',
                        '::placeholder': {
                            color: 'black',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button className='btn bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary btn-sm mt-4' type="submit" disabled={!stripe }>
            Pay Now
        </button>
    </form>
    {
                cardError && <p className='text-red-700'>{cardError}</p>
            }
                        {
                success && <div className='text-green-600'>
                    <p>{success}  </p>
                </div>
            }
        </>
    );
};

export default CheckoutFrom;