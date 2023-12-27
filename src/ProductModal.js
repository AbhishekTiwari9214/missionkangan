

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import './ProductModal.css';
import BuyNowModal from './BuyNowModal';

const ProductModal = ({ isOpen, onRequestClose, selectedProduct }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const closeModal = () => {
<<<<<<< HEAD
    
=======
>>>>>>> main
    setModalIsOpen(false);
  };
  const handleImageClick = (imageUrl) => {
    setCurrentImage(imageUrl);
  };
  const handleOpenModal = () => {
    setModalIsOpen(true);
  }

  useEffect(() => {
    setCurrentImage(selectedProduct?.url1);
  }, [isOpen])
  return (

    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Product Details Modal"
      className="product-modal"
      overlayClassName="product-modal-overlay"
    >

      {selectedProduct && (
        <div className="modal-content">
          <img src={currentImage} alt={`Product ${selectedProduct.id}`} className="modal-image" />
          <div className="gallery">
            {selectedProduct.url1 && (
              <img
                src={selectedProduct.url1}
                alt={`Product ${selectedProduct.id}`}
                className="thumbnail-image"
                onClick={() => handleImageClick(selectedProduct.url1)}
              />
            )}
            {selectedProduct.url2 && (
              <img
                src={selectedProduct.url2}
                alt={`Product ${selectedProduct.id}`}
                className="thumbnail-image"
                onClick={() => handleImageClick(selectedProduct.url2)}
              />
            )}
            {selectedProduct.url3 && (
              <img
                src={selectedProduct.url3}
                alt={`Product ${selectedProduct.id}`}
                className="thumbnail-image"
                onClick={() => handleImageClick(selectedProduct.url3)}
              />
            )}
          </div>
          <div className="product-details">
            <h2>{selectedProduct.description}</h2>
            <p>Price: ${selectedProduct.price}</p>
            <p>Sizes: {selectedProduct.size.join(', ')}</p>
            <p>{selectedProduct.available ? 'Available' : 'Not Available'}</p>
          </div>
          <button className='closemodal' onClick={onRequestClose}></button>
          <button className='openmodal' onClick={handleOpenModal}>buy now</button>
          <BuyNowModal 
             isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedProduct={selectedProduct}
          />
        </div>
      )}
    </Modal>
  );
};


export default ProductModal;
