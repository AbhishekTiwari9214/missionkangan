

import React, { useState,useEffect,input } from 'react';
import Modal from 'react-modal';
import './ProductModal.css';

const BuyNowModal = ({ isOpen, onRequestClose, selectedProduct }) => {
  const [size,setSize] = useState("select size");

const handleSubmit=()=>{
console.log(size) 
}
  return (
    
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
      contentLabel="confirm buy"
      className="product-modal"
      overlayClassName="product-modal-overlay"
    
    >
    <input onChange={(e)=>setSize(e.target.value)} ></input>
    <button onClick={()=>handleSubmit}></button>

    </Modal>
  );
};

export default BuyNowModal;
