import './App.css'
import { Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar';
import data from './Components/data.json'
import Home from './Components/Home';
import Footer from './Components/Footer';
import Headphones from './Components/Headphones';
import useLocalStorage from 'use-local-storage';
import Bring from './Components/Bring';
import Shop from './Components/Shop';
import Speakers from './Components/Speakers';
import Earphones from './Components/Earphones';
import Details from './Components/Details';
import { useState } from 'react';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';


function App() {
  const [page, setPage] = useLocalStorage('home')
  const [details, setDetails] = useLocalStorage([])
  const [display, setDisplay] = useState("d-none")
  const [cart, setCart] = useState([])
  const [conDisplay, setConDisplay] = useState("d-none")





  return (
    <div style={page==="checkout"?{backgroundColor:"#F2F2F2"}:{backgroundColor:"white"}} className="container-fluid overflow-hidden position-relative p-0">

      <NavBar cart={cart} data={data} setDetails={setDetails} display={display} setDisplay={setDisplay} page={page} setPage={setPage} details={details} />
      <Cart display={display} setDisplay={setDisplay}  cart={cart} setCart={setCart} setPage={setPage}  />
      <Routes >
        <Route path='/Audiophile-e-commerce/' element={<Home data={ data} details={details} setDetails={setDetails} setPage={setPage} /> } />
        <Route path='/Audiophile-e-commerce/headphones' element={<Headphones cart={cart}  data={ data} setPage={setPage} setDetails={setDetails} details={details}/> } />
        <Route path='/Audiophile-e-commerce/speakers' element={<Speakers data={ data} cart={cart} setPage={setPage} details={details} setDetails={setDetails}/> } />
        <Route path='/Audiophile-e-commerce/earphones' element={<Earphones data={data} cart={cart} setPage={setPage} details={details}   setDetails={setDetails} />} />
        <Route path='/Audiophile-e-commerce/details' element={<Details details={details} setDetails={setDetails} data={data}   setCart={setCart} cart={cart} />} />
        <Route path='/Audiophile-e-commerce/checkout' element={<Checkout setCart={setCart}  setPage={setPage} details={details} cart={cart } setConDisplay={setConDisplay } />} />
      </Routes>
      <Shop page={ page} setPage={setPage} />
      <Bring page={page}/>
      <Footer page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
