import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import React from 'react';

const SuccessPopup = ({successOpen}) => {
    return (
        <div className={`success ${successOpen && 'success-open'}`}>
               <FontAwesomeIcon icon={faCircleCheck} />
               <span>Ride successfully booked!</span>
        </div>
    );
}

export default SuccessPopup;
