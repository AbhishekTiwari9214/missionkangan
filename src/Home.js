// ProductList.jsx

import React, { useEffect, useState } from 'react';
import './home.css';
<<<<<<< HEAD
import ProductModal from './ProductModal';

const Home = ({ productList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
=======
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';

const Home = ({ productList }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % productList.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
>>>>>>> main

  const openModal = (product) => {
    setSelectedProduct(product);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setModalIsOpen(false);
  };

  return (
    <div>
<<<<<<< HEAD
=======
      <div className="slideshow-container">
        {productList.map((product, index) => (
          <div
            key={product.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={product.url1} alt={`Product ${product.styleid}`} />
          </div>
        ))}
      </div>

      {/* Small Info Div */}
      <div className="info-div">
        {/* Add your website information here */}
        <p>Comming Soon</p>
      </div>
>>>>>>> main
      <div className="product-list">
        {productList.map((product, index) => (
          <div
            key={product.id}
            className={`product-item ${calculateColumn(index)}`}
            onClick={() => openModal(product)}
          >
            <img src={product.url1} alt={`Product ${product.id}`} />
          </div>
        ))}
<<<<<<< HEAD
      </div>
=======

      </div>
      <Link to="/reels"   className='redirectReelFromHome'><p>Reels</p></Link>
>>>>>>> main

      {/* Use the ProductModal component */}
      <div className='openmodal'>
      <ProductModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        selectedProduct={selectedProduct}
      />
      </div>
    </div>
  );
};

const calculateColumn = (index) => {
  const columnIndex = index % 4; // Repeat pattern every 3 products
  switch (columnIndex) {
    case 0:
    case 3:
      return 'one-column';
    case 1:
    case 2:
      return 'two-column';
    default:
      return 'one-column';
  }
};

export default Home;
