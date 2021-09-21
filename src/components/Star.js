import React from 'react';
import {FaStar} from "react-icons/fa";

const Star = ({selected = false}) => {
    return (
        <div>
           <FaStar color={selected ? "red": "grey"} />
        </div>
    )
}

export default Star
