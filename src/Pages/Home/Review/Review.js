import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews,setReviews] = useState([])
    useEffect( () =>{
        fetch('Review.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    } , [])
    return (
        <div>
            <h1 className='text-4xl m-5 text-primary'>Our Customer's Review</h1>
            <div className='lg:grid lg:grid-cols-3 m-5'>
                {
                    reviews.map(review => 
<div class="card lg:card-side bg-base-100 shadow-xl justify-center align-center">
  <figure class="">
    <img src={review.img} alt="Shoes" class="rounded-xl w-48 " />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{review.name}</h2>
    <h3 className='text-xl'>Ratings:-{review.ratings}</h3>
    <p>{review.review}</p>
  </div>
</div>
                        )
                }
            </div>
        </div>
    );
};

export default Review;