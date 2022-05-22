import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Parts = () => {
    const[parts , setParts] = useState([])
    const Navigate = useNavigate()
    useEffect( () =>{
        fetch(`Parts.json`)
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    
    const Details = id =>{
        Navigate(`/part/${id}`)
    }
    return (
        <div>
            <h1 className='text-4xl mt-5 mb-5'>Our Parts</h1>
            <div className='lg:grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
            {
                parts.map(part => 
                    <div class="card w-96 bg-base-100 shadow-xl lg:mr-10 lg:ml-10 mt-10">
                    <figure class="px-10 pt-10">
                      <img src={part.img} alt="Shoes" class="rounded-xl " />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">{part.name}</h2>
                      <h2 class="card-title">Minimum Order Quantity:-{part.minimumQuantity}</h2>
                      <h2 class="card-title">Price:-{part.price}</h2>
                      <h2 class="card-title">Quantity:-{part.Quantity}</h2>
                      <p>{part.description}</p>
                      <button onClick={() => Details(part._id)} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">Purchase</button>
                    </div>
                  </div>
                    )
            }
            </div>
        </div>
    );
};

export default Parts;