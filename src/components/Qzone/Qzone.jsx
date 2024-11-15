import React from 'react';
import playground from "../../assets/playground.png"
import classes from "../../assets/class.png"
import swimming from "../../assets/swimming.png"


const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h2 className='text-xl font-semibold'>Q-Zone</h2>
            
            <div className='flex flex-col gap-3'>
                <img src={playground} alt="" />
                <img src={classes} alt="" />
                <img src={swimming} alt="" />
            </div>
        </div>
    );
};

export default Qzone;