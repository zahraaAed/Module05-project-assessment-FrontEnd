import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    
    getAllProducts();
  }, []);

  const getAllProducts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/product');
      setProducts(response.data.products);
    } catch (error) {
      console.error('Error fetching products:', error.message);
    }
  };

  const getProductById = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/api/product/${id}`);
      setSelectedProduct(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error('Error fetching product by id:', error.message);
    }
  };

  return (
    <div>
      <h2>Product Page</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.title} -{' '}
         
            {product.image} -{' '}
            <button onClick={() => getProductById(product._id)}>View Details</button>
          </li>
        ))}
      </ul>

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        {selectedProduct && (
          <>
            <h2>{selectedProduct.name}</h2>
            <p>Description: {selectedProduct.description}</p>
            <p>Price: {selectedProduct.price}</p>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
          </>
        )}
      </Modal>
    </div>
  );
};

export default Product;
