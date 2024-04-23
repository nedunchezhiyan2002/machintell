import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import ItemDetail from '../components/ItemDetail';

const ProductDetail = ({ products }) => {

  return (
    <div>
      <Navbar />
      <ProductGrid/>
      <ItemDetail products={products} />
    </div>
  );
};

export default ProductDetail;
