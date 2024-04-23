import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./SelectStyles.css"


function Select ({products}){
    const navigate = useNavigate();

    const productList = [];

    products.forEach(product => {
        productList.push(product.name);
        
    });

    const [selectedProduct, setSelectedProduct] = useState("");

    const selectionClick = async (product) => {
        await setSelectedProduct(product);
    };

    const handleProductClick = (productId) => {
        productId = productId.replace(/\s+/g, '');
        navigate(`/product/${productId}`);
    };

    return (
        <div className='list'>
            <h1>Select a Product</h1>
            <ul className="listitems">
                {productList.map((product, index) => (
                    <li className='listitem' key={index}>
                        <button onClick={() => selectionClick(product)}>{product}</button>
                    </li>
                ))}
            </ul>
            <div className="flcps-button">
                <button className='btn' onClick={() => handleProductClick(selectedProduct)}>configure FLCPS</button>
            </div>
        </div>
    );
};

export default Select; // Export Select component as default
