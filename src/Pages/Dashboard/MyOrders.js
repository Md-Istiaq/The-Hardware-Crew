import React, { useEffect , useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../_firebase.init'
import axios from 'axios';
const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders , setOrders] = useState([])
    useEffect( () =>{
        const getItems = async() =>{
            const email = user.email
            const url = `http://localhost:5000/myorders?email=${email}`
            const {data} = await axios.get(url , {
                headers:{
                    authorization:`bearer`
                }
            })
            setOrders(data)
        }
        getItems();

    } ,[user])

    return (
        <div>
            <h1>You have {orders.length}</h1>
        </div>
    );
};

export default MyOrders;