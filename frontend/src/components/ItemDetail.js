 import React,{useState} from 'react';
/* import { useParams } from 'react-router-dom'; */
import "./ItemDetailStyles.css"

function ItemDetail({products}) {
    
    

    const slicedInteger = 0
    const product = products[slicedInteger]

    const [showSub1, setshowSub1] = useState(false);
    const [showSub2, setshowSub2] = useState(false);

    const handleClick = (idx) => {
        if (idx.name === "Subassembly 1"){
            setshowSub1(!showSub1); 
        }
        if (idx.name === "Subassembly 2"){
            setshowSub2(!showSub2)
        }
        
    };

    function listGiver(idx) {
        const curArray = [];
        for (const x in product.subassemblies){
            if (product.subassemblies[x].parent === idx){
                curArray.push(product.subassemblies[x].name)
            }
        }
        const compprod = curArray.map((name,index) => (
            <button className = "itbutton"onClick={()=> handleClick({name})} key = {index}>{name}</button>
        ))
        return(compprod)
        }

    function compGiver(el_id) {
    const curArray = [];
    for (const key in product.components) {
            if (product.components.hasOwnProperty(key)) {
                const item = product.components[key];
                if (item.parent === el_id) {
                    curArray.push(item.name);
                }
            }  
        }

    const compprod = curArray.map((name,index) => (
        <h3 key = {index}>{name}</h3>
    ))
    return(compprod)
    
    }

   
 
  return (
    <div >
        <div className='itemcomponents'>

            {listGiver("prodId")}
            {showSub1 && (
                <div>
                    <ul className='listul'>
                        <li>
                            {listGiver("subId1")}
                            {showSub2 && (
                                <ul>
                                    <li>{compGiver("subId2")}</li>
                                </ul>          
                            )}
                        </li>
                        <li>{compGiver("subId1")}</li>
                    </ul>            
                    
                </div>
            )}

            {compGiver("prodId")}
        </div>

        
    </div>
  );
}

export default ItemDetail; 



