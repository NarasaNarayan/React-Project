import React, { createContext, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Toures from './Components/Toures';
import Registar from './Components/Registar';
import Login from './Components/Login';
import Footer from './Components/Footer';
import Cart from './Components/Cart';


export const store = createContext()
export const store1 = createContext()


function App() {

  const [name, setname] = useState('')
  const [islogin, setislogin] = useState(false)
  const [cart, setcart] = useState([''])


  const addtocart = (product) => {
    const quantity=1
    const totalprice=0

    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {

      setcart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1, } : item
      ));
    } else {
      setcart([...cart, { ...product,quantity: 1,totalprice:0 }]);
    }
    
  };

  const removehandler=(itemId=>{
    const updatedcart=cart.filter(product=>product.id !==itemId.id);
    setcart(updatedcart)
  })
  
  return (
    <div>
      <BrowserRouter >
        <store.Provider value={[name, setname]}>
          <store1.Provider value={[islogin, setislogin]}>



              <Header />
              <Routes>
                <Route path='/Home' element={<Home addtocart={addtocart} />} />

                <Route path='/About' element={<About  />} />
                <Route path='/Toures' element={<Toures addtocart={addtocart} />} />
                <Route path='/' element={<Registar />} />
                <Route path='/Login' element={<Login />} />
              <Route path='/Cart' element={<Cart cart={cart} removehandler={removehandler} />} />




              </Routes>
              <Footer />

          </store1.Provider>

        </store.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
