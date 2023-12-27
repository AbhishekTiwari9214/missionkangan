import React, { useState } from 'react'
import { useRef } from "react";
import Video from './component/Video'
import './Reels.css'
import { Link } from 'react-router-dom';

import useScrollSnap from "react-use-scroll-snap";
export default function Reels({ videos }) {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 0 });
  const [openModal, setModalIsOpen] = useState(false)
  return (

    <div className='reels' ref={scrollRef}>
      {videos.map((items,index) => (
        <Video className='containervideo' key={items.id} video={items} opened={openModal} />

      ))
      }


    </div>
  )
}
