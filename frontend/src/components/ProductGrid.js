import React,{useState} from 'react'
import "./ProductGridStyles.css";
import { useNavigate } from "react-router-dom";



function ProductGrid() {

    const [factoryLayer, setfactoryLayer] = useState(false);

    const navigate = useNavigate();

    function handleClick() {
        navigate("/product/list");
      }
    
      function flcpsClick() {
         
        setfactoryLayer(!factoryLayer)
      }  

    function designTable() {
        const index = (window.location.href);
        const slicedInteger = parseInt(index.slice(-1)); 
        navigate("/product/Product"+String(slicedInteger)+"/flcps")
        
    }


  return (
    <div>
        <div className="grid-container">

            <div className="grid-item">
                <button onClick={handleClick} >Select a product</button>
                <button>Update a product</button>
                <div className="text-container">Product</div>
            </div>
            
            <div className="grid-item">
                <button onClick={flcpsClick} >Configure Factory Layer</button>
                <button>Add a custom unit</button>
                <div className="text-container">Factory Layer</div>
            </div>

            {factoryLayer && (
            <div className="factory">
                <ul>
                    <li>Factory Layer</li>
                        <ul>
                            <li>Design Unit</li>
                                <ul>
                                    <li><button className='designbtn' onClick={designTable}>Design Documents</button></li>
                                    <li>Design Team</li>
                                </ul>
                            <li>Assembly Unit</li>
                            <li>Quality Testing Unit</li>
                        </ul>
                </ul>
            </div>

        )}
            <div className="grid-item">
                <div className="text-container">Sensing Layer</div>
            </div>
            <div className="grid-item">
                <div className="text-container">Networking Layer</div>
            </div>
            <div className="grid-item">
                <div className="text-container">Cognitive Layer</div>
            </div>
            <div className="grid-item">
                <div className="text-container">Control Layer</div>
            </div>
        </div>
    </div>
  )
}


export default ProductGrid 