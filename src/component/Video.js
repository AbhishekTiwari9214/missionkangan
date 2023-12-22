import React, { useRef } from 'react';
import './video.css'

export default function Video({video}) {
   const  handleClick=()=>{
console.log('hello');
    }

  return (
<div className='video'>
       
        <iframe className='videoplay' src={video.link} frameBorder="0"  onClick={handleClick}/>
           
    </div>
  )
}
