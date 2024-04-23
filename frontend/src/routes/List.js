import React from 'react';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import Select from '../components/Select';

const List = ({products}) => {
  return (
    <div>
      <Navbar />
      <ProductGrid/>
      <Select products={products} />
    </div>
  );
};

export default List;