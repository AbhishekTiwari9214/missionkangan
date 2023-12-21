import React from 'react'
import { useRef } from "react";
import Video from './component/Video'
import './Reels.css'
import useScrollSnap from "react-use-scroll-snap";
export default function Reels({videos}) {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 20 });
  
  return (

    <div className='reels' ref={scrollRef}>
<p>hello</p>

{videos.map((items)=>(
  <Video className='containervideo' key={items.id} video={items}/>
))
      }
    </div>
  )
}
