import React, { useRef, useState } from 'react';
import './video.css';
import ProductModal from '../ProductModal';
import data from '../products.json';

export default function Video({ video }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const videoRef = useRef();
  const videoIdRef = useRef(video.id);

  const openModal = () => {
    // Use the videoIdRef.current to filter the product data
    let product = data.filter((item) => videoIdRef.current === item.id);
    setSelectedProduct(product[0]);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <div className='video'>
      <video
        className='videoplay'
        ref={videoRef}
        controls
        onClick={openModal} // Open modal on video click
      >
        <source src={video.link} type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <button className='redirectReelFromHome' onClick={openModal}>
        <p>Home</p>
      </button>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedProduct={selectedProduct}
      />
    </div>
  );
}
