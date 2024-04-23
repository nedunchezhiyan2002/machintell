import React from 'react';
import Navbar from '../components/Navbar';
import  Combined  from '../components/Combined';
import ProductGrid from '../components/ProductGrid';
import ItemDetail from '../components/ItemDetail';

const Flcps = ({products}) => {

  console.log(window.location.href.slice(-7,-6))

  return (
    <div>
      <Navbar />
      <ProductGrid/>
      <ItemDetail products={products} />
      <Combined/>
    </div>
  );
};

export default Flcps;