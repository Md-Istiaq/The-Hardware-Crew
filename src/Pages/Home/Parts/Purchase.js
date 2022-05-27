import React , {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import {useAuthState} from 'react-firebase-hooks/auth'
import auth from '../../../_firebase.init'
import { toast } from 'react-toastify';
const Purchase = () => {
    const {id} = useParams()
    const [part,setPart] = useState([])
    const [partName , setpartName] = useState(' ')
    const [price , setPrice] = useState(0)
    const [user] = useAuthState(auth)

    useEffect( () =>{
        fetch(`http://localhost:5000/parts/${id}`)
        .then(res => res.json())
        .then(data => {
          setPart(data)
          setpartName(data.name)
          setPrice(data.price)
        })
    },[])
    const { register, handleSubmit ,formState: { errors }} = useForm({

    });
    const onSubmit = data => {
      const givenQuantity = parseInt(data.quantity)
      let minimum = parseInt(part.minimumQuantity)
      let maximum = parseInt(part.Quantity)
      if( givenQuantity < minimum ){
        toast.error(`You have to order at least ${minimum} pics`)
      }
      else if(givenQuantity > maximum){
        toast.error(`You can't order more then ${maximum} pics`)
      }
      else{
        console.log(data)
        const newData = {
            name:data.name,
            email:data.email,
            part:partName,
          address:data.address,
          phone:data.phone,
          price:price,
          quantity:data.quantity
        }
        console.log(newData)
        const url = `http://localhost:5000/orders`
        fetch(url ,{
          method:'POST',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(newData)
      })
      .then(res => res.json())
      .then(result =>{
          console.log(result)
          toast.success("Order booked")
      })
      }
    }
    return (
      <div>
        <div class="hero min-h-screen bg-white">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img src={part.img} class="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 class="text-5xl font-bold">{part.name}</h1>
            <h1 class="text-3xl font-bold">Minimum order quantity{part.minimumQuantity}</h1>
            <h1 class="text-3xl font-bold">Available quantity:-{part.Quantity}</h1>
            <p class="py-6">{part.description}</p>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} class="shadow-2xl w-1/2 lg:ml-[400px]">
    <h1 className='text-3xl mx-auto text-primary'>Place your order</h1>
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Name</span>
          </label>
          <input type="text" value={user.displayName}  placeholder="name" class="input input-bordered login-from" {...register("name")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text text-white">Email</span>
          </label>
          <input type="text" value={user.email}  placeholder="Email" class="input input-bordered " {...register("email")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Part</span>
          </label>
          <input type="text" value={part.name}  placeholder="part" class="input input-bordered" {...register("part")} readOnly  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Price per pice</span>
          </label>
          <input type="text" value={part.price}  placeholder="price" class="input input-bordered" {...register("price")} readOnly />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Address</span>
          </label>
          <input type="text" placeholder="address" class="input input-bordered" {...register("address")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Phone</span>
          </label>
          <input type="text" placeholder="phone" class="input input-bordered " {...register("phone")}  />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text ">Quantity</span>
          </label>
          <input type="text" placeholder="quantity" class="input input-bordered " {...register("quantity")}  />
        </div>
        <input type="submit" value="Purchase" class="btn btn-primary uppercase font-bold bg-gradient-to-r from-accent to-primary hover:from-pink-500 hover:to-yellow-500 rounded-3xl hover:text-primary mt-5" />
      
      </div>
      </form>
      </div>
    );
};

export default Purchase;