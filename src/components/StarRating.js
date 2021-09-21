import React, {useState} from 'react'
import Star from './Star'
// import {FaStar} from "react-icons/fa";

const createArray = length =>[...Array(length)]

function StarRating({totalStars = 5}) {
    const [selectedStar] = useState(3); 

    return (
        <>
        {createArray(totalStars).map((n, i) => (
        <Star key={i} selected={selectedStar}/>
        ))}
          <p>
              {selectedStar} of {totalStars}
          </p>
        </>
    );      
    
}

export default StarRating
