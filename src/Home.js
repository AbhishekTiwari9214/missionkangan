// ProductList.jsx

import React, { useEffect, useState } from 'react';
import './home.css';
import ProductModal from './ProductModal';

const Home = ({ productList }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      </div>

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
