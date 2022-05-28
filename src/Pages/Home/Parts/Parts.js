import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Parts = () => {
    const[parts , setParts] = useState([])
    const Navigate = useNavigate()
    useEffect( () =>{
        fetch(`https://dry-shelf-78411.herokuapp.com/parts`)
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    
    const Details = id =>{
        Navigate(`/part/${id}`)
    }
    return (
        <div>
            <h1 className='text-4xl mt-5 mb-5'>Our Parts</h1>
            <div className=' lg:grid lg:grid-cols-3 m-5'>
            {
                parts.map(part => 
                  <div class="card lg:card-side bg-base-100 shadow-xl justify-center align-center">
                    <div className="">
                    <figure><img src={part.img} alt="Album"/></figure>
                     <div class="card-body">
                       <h2 class="card-title">{part.name}</h2>
                       <h2 class="card-title">minimumQuantity:-{part.minimumQuantity}</h2>
                       <h2 class="card-title">Quantity:-{part.Quantity}</h2>
                       <h2 class="card-title">price:-${part.price}</h2>
                       <p>{part.description}</p>
                       <div class="card-actions justify-end">
                         <button onClick={() =>Details(part._id)} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">Purchase</button>
                       </div>
                     </div>
                    </div>
                   </div>
                    )
            }
            </div>
        </div>
    );
};

export default Parts;