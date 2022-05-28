import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
const AddProduct = () => {
    const { register, handleSubmit ,formState: { errors }} = useForm();
    const onSubmit = data => {
        const url = 'https://dry-shelf-78411.herokuapp.com/parts'
        fetch(url ,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
            toast.success("Parts added")
        })
        console.log(data)
    }
    return (
         <div class="hero min-h-screen bg-base-200">
           <div class="hero-content flex-col lg:flex-col-reverse">
             <div class="text-center lg:text-left">
               <h1 class="text-5xl font-bold">Add a product</h1>
               <p class="py-6">Fill all the input filed in the above/below from to add product . use a valid img url & check yhe url before giving. must set the quantity filed & price filed .</p>
             </div>
             <form onSubmit={handleSubmit(onSubmit)} class="shadow-2xl w-full">
             <h1 className='text-3xl mx-auto text-primary'>Add a product</h1>
               <div class="card-body">
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text ">Name</span>
                   </label>
                   <input type="text" placeholder="name" class="input input-bordered login-from" {...register("name")}  />
                 </div>
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text ">Image url</span>
                   </label>
                   <input type="text" placeholder="image url" class="input input-bordered login-from" {...register("img")}  />
                 </div>
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text ">Price</span>
                   </label>
                   <input type="text"   placeholder="Price per pis" class="input input-bordered login-from " {...register("price")}  />
                 </div>
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text ">Description</span>
                   </label>
                   <textarea type="text" placeholder="Description" class="input input-bordered login-from" {...register("description")}  />
                 </div>
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text ">Minimum quantity</span>
                   </label>
                   <textarea type="text" placeholder="Minimum quantity" class="input input-bordered login-from" {...register("minimumQuantity")}  />
                 </div>
                 <div class="form-control">
                   <label class="label">
                     <span class="label-text ">Quantity</span>
                   </label>
                   <textarea type="text" placeholder="Quantity" class="input input-bordered login-from" {...register("Quantity")}  />
                 </div>
                 <input type="submit" value="Add Product" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
               </div>
               </form>
           </div>
         </div>
    );
};

export default AddProduct;