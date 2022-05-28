import React ,{ useEffect, useState } from 'react';
import {toast} from 'react-toastify'
const ManageProduct = () => {
    const[parts , setParts] = useState([])
    useEffect( () =>{
        fetch(`https://dry-shelf-78411.herokuapp.com/parts`)
        .then(res => res.json())
        .then(data => setParts(data))
    },[])
    const Delete = id =>{
        const proceed = window.confirm("are you sure you want to delete??")
        if(proceed){
          const url = `https://dry-shelf-78411.herokuapp.com/parts/${id}`
          fetch(url,{
            method:'DELETE'
          })
          .then(res => res.json())
          .then(data => {
            toast.error("product Deleted")
          })
  
        }
  
      }
    return (
        <div>
            <h1 className='text-4xl mt-5 mb-5'>All Parts</h1>
            <div className=' '>
            {
                parts.map(part => 
                  <div class=" card lg:card-side bg-base-100 shadow-xl justify-center align-center">
                    <div className="flex flex-row">
                    <figure><img src={part.img} alt="Album"/></figure>
                     <div class="card-body">
                       <h2 class="card-title">{part.name}</h2>
                       <h2 class="card-title">minimumQuantity:-{part.minimumQuantity}</h2>
                       <h2 class="card-title">Quantity:-{part.Quantity}</h2>
                       <h2 class="card-title">price:-${part.price}</h2>
                       <p>{part.description}</p>
                       <div class="card-actions justify-end">
                         <button onClick={() =>Delete(part._id)} class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary">Delete</button>
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

export default ManageProduct;