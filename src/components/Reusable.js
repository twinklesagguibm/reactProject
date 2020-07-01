import React, { useState } from 'react'


export default function Reusable(){
    const [isToggle, setToggle] = useState(false);
    const toggleit = ()=>{
        setToggle(!isToggle);
    }
    return (
        <div className={isToggle ? `reuseableYellow` : `reuseableRed`} onClick={toggleit} 
        ></div>
    )
}