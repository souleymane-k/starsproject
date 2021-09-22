import React from 'react';
import {FaStar} from "react-icons/fa";

const Star = ({selected = false, onSelect}) => {
    return (
        <div>
           <FaStar color={selected ? "red": "grey"} onClick={onSelect} />
        </div>
    )
}

export default Star
