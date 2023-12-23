import React, { useRef,useState } from 'react';
import './video.css'
import ProductModal from '../ProductModal'
import data from '../products.json'
export default function Video({video}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
   const  handleClick=()=>{

  
}



const openModal = () => {
  let product = data.filter((item)=>{
    console.log(video.id);
  return video.id===item.id
  })
console.log(product);
  setSelectedProduct(product[0])  
  setModalIsOpen(true);
  
};
    const closeModal = () => {
      setSelectedProduct(null);
      setModalIsOpen(false);
    };
  return (
<div className='video'>
       
        <iframe className='videoplay' src={video.link} frameBorder="0"  onClick={openModal}/>
        <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedProduct={selectedProduct}
      />
           
    </div>
  )
}
