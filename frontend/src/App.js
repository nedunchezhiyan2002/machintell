import React,{useEffect,useState} from 'react';
import './index.css';
import Home from './routes/Home';
import Product from './routes/Product';
import List from './routes/List';
import ProductDetail from './routes/ProductDetail';

import { Route, Routes } from 'react-router-dom';
import Flcps from './routes/Flcps';

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch(`${window.location.origin}/api`).then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  },[])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path='/product/list' element={<List products={backendData} />}></Route>
        <Route path="/product/:productId" element={<ProductDetail products={backendData} />} />
        <Route path = "/product/:productId/flcps" element={<Flcps products={backendData}/>}  /> 
      </Routes>
    </>
  );
}

export default App;



/* 

import React ,{useEffect,useState}from 'react'
import ReactDOM from 'react-dom';
import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Project from './routes/Project';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);

function App() {

  const [backendData, setBackendData] = useState([{}])

  useEffect(()=>{
    fetch("/api").then(
      response => response.json()
    ).then(
      data =>{
        setBackendData(data)
      }
    )
  },[])

  return (
    <>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
     </Routes>
    </>
    
  )
}

export default App */

/* {/* 
        <div>
      {(typeof backendData.users === "undefined" ) ? (
          <p>loading...</p>
      ):(
        backendData.users.map((user,i) => (
          <p key={i}>
            {user}
          </p>
        ))
      )}
    </div> */